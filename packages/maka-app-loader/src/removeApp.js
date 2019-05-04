import appFactory from './appFactory'
import { getGlobal } from '@makajs/utils'
var globalObj = getGlobal()

const isProduction = process.env.isProduction

function getCssRequireModule() {
    var scripts = document.querySelectorAll("script");
    var ret = ''
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i]['src'] && (
            scripts[i]['src'].indexOf('css.min.js') != -1
            || scripts[i]['src'].indexOf('css.js') != -1
        )
        ) {
            ret = scripts[i]['src']
        }
    }

    return ret 
}

function removeCss(href) {
    var links = document.querySelectorAll("link");
    for (var i = 0; i < links.length; i++) {
        var _href = links[i].href;
        if (links[i] && links[i].href && (
            links[i].href.indexOf("/" + href + '.css') != -1 ||
            links[i].href.indexOf("/" + href + '.min.css') != -1
        )) {
            links[i].parentNode.removeChild(links[i]);

            if (isProduction) {
                globalObj.require.undef( getCssRequireModule() + '!' + links[i].href.replace('.css',''))
            }
            else {
                globalObj.require.undef(getCssRequireModule() + '!' + links[i].href.replace('.css', ''))
            }
        }
    }
}

function removeJs(src) {
    var scripts = document.querySelectorAll("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i]['src'] && (
            scripts[i]['src'].indexOf("/" + src + '.js') != -1 ||
            scripts[i]['src'].indexOf("/" + src + '.min.js') != -1
        )) {
            scripts[i].parentNode.removeChild(scripts[i]);

            if (isProduction) {
                globalObj.require.undef(scripts[i].src)
            }
            else {
                globalObj.require.undef(scripts[i].src)
            }
        }
    }
}



function removeInternal(app) {
    removeCss(app)
    appFactory.removeApp(app)
    removeJs(app)
    /*
    if (isProduction) {
        globalObj.require.undef(app + '.min')
        globalObj.require.undef('css.min.js!' + app + '.min')
    }
    else {
        globalObj.require.undef(app)
        globalObj.require.undef('css.js!' + app)
    }*/
}

export default function removeApp(app) {
    var obj = appFactory.getApp(app)
    if (obj && obj.beforeRemove) {
        obj.beforeRemove().then(() => {
            removeInternal(app)
        })
    }
    else {
        removeInternal(app)
    }
}