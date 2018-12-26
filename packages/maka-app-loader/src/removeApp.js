import appFactory from './appFactory'

const isProduction = process.env.isProduction

function removeCss(href) {
    var links = document.querySelectorAll("link");
    for (var i = 0; i < links.length; i++) {
        var _href = links[i].href;
        if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
            links[i].parentNode.removeChild(links[i]);
        }
    }
}

export default function removeApp(app) {
    removeCss(app)
    appFactory.removeApp(app)
    if (isProduction) {
        window.require.undef(app + '.min')
        window.require.undef('css.min.js!' + app + '.min')
    }
    else{
        window.require.undef(app)
        window.require.undef('css.js!' + app )
    }
}