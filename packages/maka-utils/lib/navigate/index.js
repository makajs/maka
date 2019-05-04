"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = listen;
exports.unlisten = unlisten;
exports.goBack = goBack;
exports.redirect = redirect;
exports.getLocation = getLocation;
exports.default = void 0;

var createHashHistory = require('history').createHashHistory;

var hashHistory;
var listerners = [];

function setHistoryInstance() {
  if (!hashHistory) hashHistory = createHashHistory();
}

function listen(handler) {
  setHistoryInstance();
  var h = listerners.find(function (o) {
    return o.listen == handler;
  });

  if (!h) {
    h = handler;
    var unlisten = hashHistory.listen(handler);
    listerners.push({
      listen: h,
      unlisten: unlisten
    });
  }
}

function unlisten(handler) {
  var index = listerners.findIndex(function (o) {
    return o.listen == handler;
  });
  if (index == -1) return;
  listerners[index].unlisten();
  listerners.splice(index, 1);
}

function goBack() {
  hashHistory && hashHistory.goBack();
}

function redirect(app) {
  if (!hashHistory) return;
  if (location.hash === "#".concat(app)) return;
  hashHistory && hashHistory.push(app);
}

function getLocation() {
  return hashHistory && hashHistory.location;
}

var _default = {
  listen: listen,
  unlisten: unlisten,
  goBack: goBack,
  redirect: redirect,
  getLocation: getLocation
};
exports.default = _default;