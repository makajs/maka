(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-home-shortcut"] = factory(require("maka"));
	else
		root["MakaApp-home-shortcut"] = factory(root["maka"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = {"isMakaApp":true,"name":"home-shortcut","description":"home-shortcut","version":"1.0.0","license":"MIT","author":"","repository":{"type":"git","url":"https://github.com/makajs/home-shortcut.git"},"bugs":{"url":"https://github.com/makajs/home-shortcut/issues"},"homepage":"https://github.com/makajs/home-shortcut#readme","scripts":{"start":"maka start","dev":"maka start --dev","build":"maka build","pkg":"maka pkg"},"dependencies":{},"server":{"proxy":null,"port":8000},"subAppDir":"./apps"};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "photo.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return view; });
/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(2, 1);
/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_photo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _img_photo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_photo_png__WEBPACK_IMPORTED_MODULE_5__);



var _dec, _class;





var name = _package_json__WEBPACK_IMPORTED_MODULE_2__.name;
var state = {
  data: {}
};
var action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_3__["actionMixin"])('base'), _dec(_class = function action(option) {
  var _this = this;

  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, action);

  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getFunImg", function () {
    return _img_photo_png__WEBPACK_IMPORTED_MODULE_5___default.a;
  });

  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "openPerson", function () {
    _this.component.props.setPortalContent && _this.component.props.setPortalContent('人员', 'set-person-list');
  });

  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "openCustomer", function () {
    _this.component.props.setPortalContent && _this.component.props.setPortalContent('客户', 'set-customer-list');
  });

  Object.assign(this, option.mixins);
}) || _class);
var view = {
  component: 'div',
  className: 'home-shortcut',
  children: [{
    component: 'div',
    onClick: '{{$openPerson}}',
    children: [{
      component: 'img',
      src: '{{$getFunImg()}}'
    }, {
      component: 'a',
      children: '人员',
      href: '#'
    }]
  }, {
    component: 'div',
    onClick: '{{$openCustomer}}',
    children: [{
      component: 'img',
      src: '{{$getFunImg()}}'
    }, {
      component: 'a',
      children: '客户',
      href: '#'
    }]
  }]
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});