"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeApp;

var _appFactory = _interopRequireDefault(require("./appFactory"));

var isProduction = process.env.isProduction;

function removeCss(href) {
  var links = document.querySelectorAll("link");

  for (var i = 0; i < links.length; i++) {
    var _href = links[i].href;

    if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
      links[i].parentNode.removeChild(links[i]);
    }
  }
}

function removeApp(app) {
  removeCss(app);

  _appFactory.default.removeApp(app);

  if (isProduction) {
    window.require.undef(app + '.min');

    window.require.undef('css.min.js!' + app + '.min');
  } else {
    window.require.undef(app);

    window.require.undef('css.js!' + app);
  }
}