module.exports = async (ctx, next) => {
    await next()
    if(!ctx.body)
        return
    console.log(111,ctx.body)
    if( ctx.body.error ){
        ctx.body.result = false
        ctx.body.error = {
            message: ctx.body.error
        }
    }
    else{
        ctx.body = {
            result: true,
            value: ctx.body
        }
    }
}
