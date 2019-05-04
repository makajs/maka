const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')
const proxy = require('koa-proxies')
const cors = require('koa-cors')
const compress = require('koa-compress');
var env

if (process.env.NODE_ENV == 'development') {
    env = require('./env.development')
}
else {
    env = require('./env')
}
const cdn = env.cdn
const version = env.version

console.log(version)

// error handler
onerror(app)

// middlewares
/*
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())*/
app.use(logger())
app.use(cors())
app.use(compress({ threshold: 2048 }));

app.use(static(__dirname + '/public', {
    maxage: 365 * 24 * 60 * 60
}))

Object.keys(env.proxy).forEach(key => {
    app.use(proxy(key, env.proxy[key]))
})

function getPcContent() {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>APaaS</title>
    <link rel="shortcut icon" href="${cdn}/_assets/v${version}/favicon.ico">
    <style>
        html,
        body,
        #app {
            height: 100%;
            margin: 0px;
        }
    </style>
</head>

<body>
    <div id='app'></div>
    <script>
        window.__assets_base_url__ = "${cdn}/_assets/v${version}/"
        window.main = function (maka) {
            require.onError = function (err) {
                debugger
            };
            maka.utils.fetch.config({
                mock: true,
                token: '',
            })
            
            var target 
            if(location.hash){
                var segments = location.hash.split('/')
                if(segments.length> 1){
                    target = segments[1]
                }
            }
            maka.render(target || 'hello', 'app');
        }
    </script>
    <script src="${cdn}/core/v${version}/require.min.js" data-main='${cdn}/core/v${version}/maka-main.min.js'></script>
</body>

</html>
`
}

function getMobileContent(){
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, width=device-width, height=device-height, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>APaaS Mobile</title>
    <link rel="shortcut icon" href="${cdn}/_assets/v${version}/favicon.ico">
    <style>
        html,body,#app {
            width: 100%;
            height: 100%;
            min-height: 500px;
            margin: 0px;
        }
    </style>
</head>

<body>
    <div id='app'></div>
    <script>
        window.__assets_base_url__ = "${cdn}/_assets/v${version}/"
        window.main = function (maka) {
            require.onError = function (err) {
                debugger
            };
            var excludeMockUrls = [
                /bpm\\/.*/,
                /apaas\\/.*/,
                /api-1\\/.*/
            ]
            maka.utils.fetch.config({
                mock: true,
                excludeMockUrls: excludeMockUrls,
                token: '',
            })
            
            var target 
            if(location.hash){
                var segments = location.hash.split('/')
                if(segments.length> 1){
                    target = segments[1]
                }
            }
            maka.render(target || 'hello', 'app');
        }
    </script>
    <script src="${cdn}/core/v${version}/require.min.js" data-main='${cdn}/core/v${version}/maka-main.min.js'></script>
</body>

</html>
`
}


app.use(function (ctx) {
    if (ctx.url.indexOf('/mobile/') != -1) {
        ctx.body = getMobileContent()
    }
    else {
        ctx.body = getPcContent()
    }

})
/*
// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
*/
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
