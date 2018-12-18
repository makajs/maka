const router = require('koa-router')()
const moment = require('moment')
const markdownpdf = require("markdown-pdf")
const send = require('koa-send')
const uuidv1 = require('uuid/v1')

router.prefix('/api/article')



router.all('/query', async (ctx, next) => {
    var { pagination, filter } = ctx.request.body

    filter = filter || {}

    filter.userId = ctx.state.user.userId
    const db = ctx.db('article')
        .select('id',
            'title',
            'content',
            'createTime',
            'updateTime',
            'ts')

    var where = ''
    if (filter.search) {
        where = `title like '%${filter.search}%'`
    }

    const list = await db.whereRaw(where)
        .offset((pagination.current - 1) * pagination.pageSize)
        .limit(pagination.pageSize)
        .orderBy('updateTime', 'desc')

    const total = await ctx.db('article')
        .whereRaw(where)
        .count('id as count')
    //.where(filter)

    pagination.total = total[0].count

    ctx.body = {
        list: list,
        pagination: pagination
    }
})

router.all('/findById', async (ctx, next) => {
    var { id } = ctx.request.body
    ctx.body = await findById(ctx, id)
})

async function findById(ctx, id) {
    const list = await ctx.db('article')
        .select('id',
            'title',
            'content',
            'createTime',
            'updateTime',
            'ts')
        .where('id', id)
    return list.length > 0 ? list[0] : null
}



router.all('/create', async (ctx, next) => {
    const { title, content } = ctx.request.body
    var result = await ctx.db('article')
        .returning('id')
        .insert({
            userId: ctx.state.user.userId,
            title,
            content
        })

    ctx.body = await findById(ctx, result[0])
})


router.all('/update', async (ctx, next) => {
    const { id, title, content } = ctx.request.body
    var result = await ctx.db('article')
        .where('id', id)
        .update({
            title,
            content,
        })

    ctx.body = await findById(ctx, id)
})

router.all('/del', async (ctx, next) => {
    const { id } = ctx.request.body
    await ctx.db('article').where('id', id).del()

    ctx.body = {}
})

router.all('/exportPDF', async (ctx, next) => {
    const { title, content } = ctx.request.body
    const f = await exportPDF(content)

    ctx.body = { url: f }
})

function exportPDF(content) {
    return new Promise((resolve, reject) => {
        var fileName = uuidv1()
        markdownpdf({ cssPath: './public/stylesheets/pdf.css' }).from.string(content).to('public/temp/' + fileName + '.pdf', function () {
            resolve('/temp/' + fileName + '.pdf')
        })
    })
}




module.exports = router
