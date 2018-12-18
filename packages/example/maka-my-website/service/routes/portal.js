const router = require('koa-router')()

router.prefix('/api/portal')


router.all('/init', async (ctx, next) => {
    var userId = ctx.state.user.userId
    const users = await ctx.db('user')
        .select('name', 'nick')
        .where('id', userId)

    ctx.body = { user: users[0] }
})

module.exports = router
