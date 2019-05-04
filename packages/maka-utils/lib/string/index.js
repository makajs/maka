"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.trim = trim;
exports.toJson = toJson;
exports.default = void 0;

function trimLeft(str) {
  return str.replace(/(^\s*)/g, "");
}

function trimRight(str) {
  return str.replace(/(\s*$)/g, "");
}

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function toJson(str) {
  return new Function("return " + str)();
}

var _default = {
  trimLeft: trimLeft,
  trimRight: trimRight,
  trim: trim,
  toJson: toJson
};
exports.default = _default;