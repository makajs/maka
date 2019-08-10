
const path = require('path');
const babel = require("@babel/core")
const uglifyJS = require("uglify-js");

const reg = /([`'"]\s*(\{{3})(((?!{{{)[\s\S])+)\}{3}\s*[`'"])|([`'"]\s*(\{{2})(((?!{{)[\s\S])+)\}{2}\s*[`'"])/mg

const addFunctionWrap = (src) => `function ____(){ ${src} }`

const removeFunctionWrap = (src) => {
    src = src.substr(0, src.length - 1)
    return src.replace('function ____(){', '')
}

const transformSync = (src) => {
    src = src.replace(/\\n/mg, '\n')
    var ret = babel.transformSync(src, {
        sourceType: 'script',
        comments: false,
        presets: [path.resolve(__dirname, '../../', 'node_modules', "@babel/preset-env")]
    }).code

    ret = uglifyJS.minify(ret, {
        compress: {
            drop_debugger: false,
            drop_console: false,
        },
        output: {
            quote_style:3,
        }
        
    }).code
    return ret
}

const transform = (script) => {
    if (!script) return
    var oldScript = script

    try {
        script = script.replace(reg, (...args) => {
            var ret 
            if (args[3]) {
                let first = args[0].substr(0,1)
                let src = args[3]
                src = addFunctionWrap(src)
                src = transformSync(src)
                src = removeFunctionWrap(src)
                ret = `${first}{{{${src}}}}${first}`
            }
            else if (args[7]) {
                let first = args[0].substr(0,1)
                let src = args[7]
                src = `function ____(){return ${src} }`
                src = transformSync(src)
                src = removeFunctionWrap(src)
                ret = `${first}{{{ ${src}}}}${first}`
            }
            else {
                ret = args[0]
            }
            return ret
        })
    }
    catch (ex) {
        script = oldScript
    }

    return script
}


module.exports = {
    transform
} 