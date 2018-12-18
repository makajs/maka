const router = require('koa-router')()
const md5 = require('md5')
const jsonwebtoken = require('jsonwebtoken')

router.prefix('/api/user')

const existEmail = async (ctx, email) => {
    const users = await ctx.db('user').where({ email }).select('id')
    return user.length > 0
}

const cryptPassword = (password) => {
    return md5('maka-' + password)
}

router.all('/existsEmail', async (ctx, next) => {
    const { email } = ctx.request.body
    ctx.body = email
        ? await existEmail(ctx, email)
        : { error: `邮箱不能为空` }
})

router.all('/signup', async (ctx, next) => {
    var { email, password } = ctx.request.body

    if (!email || !password) {
        ctx.body = {
            error:`邮箱和密码都不能为空`
        }
        return
    }

    var result = await ctx.db('user')
        .returning('id')
        .insert({ email, password: cryptPassword(password), name: email })

    const token = jsonwebtoken.sign(userToken, 'maka', { expiresIn: '1h' })  //token签名 有效期为1小时

    ctx.body = result[0]
})

router.all('/login', async (ctx, next) => {
    var { account, password } = ctx.request.body

    if (!account || !password) {
        ctx.body = {
            error:`用户和密码不能为空`
        }
        return
    }

    var users = await ctx.db('user').where({ account }).select('id')
    if (users.length == 0) {
        ctx.body = {
            error:'请录入正确的用户名'
        }
        return
    }

    users = await ctx.db('user').where({ account, password }).select('id', 'account', 'name')
    if (users.length == 0) {
        ctx.body = {
            error:'请录入正确的密码'
        }
        return
    }

    const userToken = {
        userId: users[0].id,
        account: users[0].user,
        name: users[0].name
    }
    const token = jsonwebtoken.sign(userToken, 'maka', { expiresIn: '7d' })  //token签名 有效期为1小时
    ctx.body = {
        token
    }
})

module.exports = router