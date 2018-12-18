module.exports = async (ctx, next) => {
    global.__knex || (global.__knex = require('knex')({
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'maka'
        },
        debug: true, //指明是否开启debug模式，默认为true表示开启
        pool: { //指明数据库连接池的大小，默认为{min: 2, max: 10}
            min: 0,
            max: 7,
        }
    }))

    ctx.db = global.__knex
    await next()
}
