var isProduction = process.argv.splice(2).length > 0

var request = require('request');
const fs = require('fs');
const url = require('url');
const path = require('path');
var jss

if (isProduction)
    jss = [
        'https://unpkg.com/react/umd/react.production.min.js',
        'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
        'https://unpkg.com/prop-types/prop-types.min.js',
        'https://unpkg.com/redux/dist/redux.min.js',
        'https://unpkg.com/react-redux/dist/react-redux.min.js',
        'https://unpkg.com/immutable/dist/immutable.min.js',
        'https://unpkg.com/require-css/css.min.js',
    ]
else
    jss = [
        'https://unpkg.com/react/umd/react.development.js',
        'https://unpkg.com/react-dom/umd/react-dom.development.js',
        'https://unpkg.com/prop-types/prop-types.js',
        'https://unpkg.com/redux/dist/redux.js',
        'https://unpkg.com/react-redux/dist/react-redux.js',
        'https://unpkg.com/immutable/dist/immutable.js',
        'https://unpkg.com/require-css/css.js',
    ]

jss.forEach(js => {
    request(js, function (err, res, body) {
        var o = path.parse(js)
        fs.createWriteStream(`dist/${isProduction ? 'release/' : 'debug/'}` + o.base).write(body)
    })
})
