function fix(target) { 
    var baseUrl = ''
    var scripts = document.querySelectorAll("script");
    for (var i = 0; i < scripts.length; i++) {
        if(scripts[i].src && (
            scripts[i].src.indexOf('main.js') != -1 ||
            scripts[i].src.indexOf('main.min.js') != -1
        )){
            baseUrl = scripts[i].src.substr(0, scripts[i].src.lastIndexOf('/')  + 1) 
        }
    }
    return baseUrl + target  
}

require.config({
    paths: {
        'react': fix('react.development'),
        'react-dom': fix('react-dom.development'),
        'prop-types': fix('prop-types'),
        'redux': fix('redux'),
        'react-redux': fix('react-redux'),
        'immutable': fix('immutable'),
        'maka': fix('maka-sdk'),
        
    },
    shim: {
    },
    map: {
        '*': {
            css: fix('css.js')
        }
    },
    waitSeconds: 0
})

require(['maka'], function (maka) {
    window.MAKA = maka
    window['main'] && window['main'](maka)
})
