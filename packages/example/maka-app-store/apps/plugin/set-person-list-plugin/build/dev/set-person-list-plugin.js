(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-set-person-list-plugin"] = factory(require("maka"));
	else
		root["MakaApp-set-person-list-plugin"] = factory(root["maka"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maka__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"set-person-list-plugin\",\"description\":\"set-person-list-plugin\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/set-person-list-plugin.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/set-person-list-plugin/issues\"},\"homepage\":\"https://github.com/makajs/set-person-list-plugin#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":[\"./apps\",\"../../assets\",\"../../base\",\"../../set/person\"]};\n\n//# sourceURL=webpack://MakaApp-set-person-list-plugin/./package.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: name, getView, getAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getView\", function() { return getView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAction\", function() { return getAction; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_0__.name;\n\nfunction getView(view) {\n  view.children[0].children[2].children.push({\n    component: 'button',\n    onClick: '{{$btnClick}}',\n    children: 'plugin'\n  });\n  return view;\n}\n\nfunction getAction(action) {\n  action.btnClick = function (e) {\n    alert();\n  };\n\n  return action;\n}\n\n\n\n//# sourceURL=webpack://MakaApp-set-person-list-plugin/./src/index.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-set-person-list-plugin/./src/style.less?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/hualala/maka-app-store/apps/plugin/set-person-list-plugin/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://MakaApp-set-person-list-plugin/multi_./src/index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://MakaApp-set-person-list-plugin/external_%22maka%22?");

/***/ })

/******/ });
});