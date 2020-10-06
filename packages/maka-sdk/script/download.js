const isProduction = process.argv.splice(2).length > 0;

const request = require('request');
const fs = require('fs');
// const url = require('url');
const path = require('path');
let jss;

if (isProduction) {
  jss = [
    'https://unpkg.zhimg.com/react/umd/react.production.min.js',
    'https://unpkg.zhimg.com/react-dom/umd/react-dom.production.min.js',
    'https://unpkg.zhimg.com/prop-types/prop-types.min.js',
    'https://unpkg.zhimg.com/redux/dist/redux.min.js',
    'https://unpkg.zhimg.com/react-redux/dist/react-redux.min.js',
    'https://unpkg.zhimg.com/immutable/dist/immutable.min.js',
    'https://unpkg.zhimg.com/require-css/css.min.js',
  ];
} else {
  jss = [
    'https://unpkg.zhimg.com/react/umd/react.development.js',
    'https://unpkg.zhimg.com/react-dom/umd/react-dom.development.js',
    // 'https://unpkg.zhimg.com/react/umd/react.production.min.js',
    // 'https://unpkg.zhimg.com/react-dom/umd/react-dom.production.min.js',
    'https://unpkg.zhimg.com/prop-types/prop-types.js',
    'https://unpkg.zhimg.com/redux/dist/redux.js',
    'https://unpkg.zhimg.com/react-redux/dist/react-redux.js',
    'https://unpkg.zhimg.com/immutable/dist/immutable.js',
    'https://unpkg.zhimg.com/require-css/css.js',
  ];
}

jss.forEach(js => {
  request(js, function(err, res, body) {
    if (err) {
      console.log(`下载${js}失败，失败详情：`, err);
    } else {
      const o = path.parse(js);
      let base = o.base;
      if (!isProduction) { base = base.replace('production.min', 'development'); }
      fs.createWriteStream(`dist/${isProduction ? 'release/' : 'debug/'}` + base).write(body);
      console.log(`下载${js}成功`);
    }
  });
});
