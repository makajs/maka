function fix(target) { return window.getBaseUrl ? window.getBaseUrl() + target : target }

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
