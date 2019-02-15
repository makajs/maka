import appFactory from './appFactory'
import { getGlobal } from '@makajs/utils'
var globalObj = getGlobal()

const isProduction = process.env.isProduction

function removeCss(href) {
    var links = document.querySelectorAll("link");
    for (var i = 0; i < links.length; i++) {
        var _href = links[i].href;
        if (links[i] && links[i].href && (
            links[i].href.indexOf("/" + href + '.css') != -1 ||
            links[i].href.indexOf("/" + href + '.min.css') != -1
        )) {
            links[i].parentNode.removeChild(links[i]);
        }
    }
}

function removeInternal(app) {
    removeCss(app)
    appFactory.removeApp(app)
    if (isProduction) {
        globalObj.require.undef(app + '.min')
        globalObj.require.undef('css.min.js!' + app + '.min')
    }
    else {
        globalObj.require.undef(app)
        globalObj.require.undef('css.js!' + app)
    }
}

export default function removeApp(app) {
    var obj = appFactory.getApp(app)
    if (obj.beforeRemove) {
        obj.beforeRemove().then(() => {
            removeInternal(app)
        })
    }
    else {
        removeInternal(app)
    }
}