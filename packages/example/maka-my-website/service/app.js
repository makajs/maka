const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwt = require('koa-jwt')

const article = require('./routes/article')
const user = require('./routes/user')
const portal = require('./routes/portal')

const knexMiddleware = require('./middlewares/knex')
const reqMiddleware = require('./middlewares/req')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

app.use(jwt({ secret: 'maka' }).unless({
    path: [
        /^\/api\/user/
    ]
}))

app.use(knexMiddleware)
app.use(reqMiddleware)

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(user.routes(), user.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(portal.routes(), portal.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
