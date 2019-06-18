(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["maka-app-home-shortcut"] = factory(require("maka"));
	else
		root["maka-app-home-shortcut"] = factory(root["maka"]);
})((function(){
    return (typeof window !== 'undefined' && window ) ||
    (typeof global !== 'undefined' && global ) 
}()), function(__WEBPACK_EXTERNAL_MODULE_maka__) {
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
/******/ 	__webpack_require__.p = window['__pub_home-shortcut__'];
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://maka-app-home-shortcut//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://maka-app-home-shortcut//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"home-shortcut\",\"description\":\"home-shortcut\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/home-shortcut.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/home-shortcut/issues\"},\"homepage\":\"https://github.com/makajs/home-shortcut#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":\"./apps\"};\n\n//# sourceURL=webpack://maka-app-home-shortcut/./package.json?");

/***/ }),

/***/ "./src/img/photo.png":
/*!***************************!*\
  !*** ./src/img/photo.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"photo.png\";\n\n//# sourceURL=webpack://maka-app-home-shortcut/./src/img/photo.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: name, state, action, view */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_photo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/photo.png */ \"./src/img/photo.png\");\n/* harmony import */ var _img_photo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_photo_png__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _dec, _class, _temp;\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_2__.name;\nvar state = {\n  data: {}\n};\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_3__[\"actionMixin\"])('base'), _dec(_class = (_temp = function action(option) {\n  var _this = this;\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, action);\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getFunImg\", function () {\n    return _img_photo_png__WEBPACK_IMPORTED_MODULE_5___default.a;\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"openPerson\", function () {\n    _this.component.props.setPortalContent && _this.component.props.setPortalContent('人员', 'set-person-list');\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"openCustomer\", function () {\n    _this.component.props.setPortalContent && _this.component.props.setPortalContent('客户', 'set-customer-list');\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"openBOM\", function () {\n    _this.component.props.setPortalContent && _this.component.props.setPortalContent('BOM', 'set-bom-list');\n  });\n\n  Object.assign(this, option.mixins);\n}, _temp)) || _class);\nvar view = {\n  component: 'div',\n  className: 'home-shortcut',\n  children: [{\n    component: 'div',\n    onClick: '{{$openPerson}}',\n    children: [{\n      component: 'img',\n      src: '{{$getFunImg()}}'\n    }, {\n      component: 'a',\n      children: '人员',\n      href: '#'\n    }]\n  }, {\n    component: 'div',\n    onClick: '{{$openCustomer}}',\n    children: [{\n      component: 'img',\n      src: '{{$getFunImg()}}'\n    }, {\n      component: 'a',\n      children: '客户',\n      href: '#'\n    }]\n  }, {\n    component: 'div',\n    onClick: '{{$openBOM}}',\n    children: [{\n      component: 'img',\n      src: '{{$getFunImg()}}'\n    }, {\n      component: 'a',\n      children: 'BOM',\n      href: '#'\n    }]\n  }]\n};\n\n\n//# sourceURL=webpack://maka-app-home-shortcut/./src/index.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://maka-app-home-shortcut/./src/style.less?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/lisga/Desktop/code/others/maka/packages/example/maka-antd-pro/apps/sys/home/home-shortcut/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://maka-app-home-shortcut/multi_./src/index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://maka-app-home-shortcut/external_%22maka%22?");

/***/ })

/******/ });
});