(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-webapi"] = factory(require("maka"));
	else
		root["MakaApp-webapi"] = factory(root["maka"]);
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

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: name, state, action, view */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ \"./style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock */ \"./mock.js\");\n\n\nvar _dec, _class;\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_1__.name;\nObject(maka__WEBPACK_IMPORTED_MODULE_2__[\"registerAction\"])('webapi', {\n  logout: function logout(option) {\n    return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/logout', option);\n  },\n  appstore: {\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/appstore/query', option);\n    },\n    install: function install(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/appstore/install', option);\n    },\n    uninstall: function uninstall(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/appstore/uninstall', option);\n    }\n  },\n  plugin: {\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/plugin/query', option);\n    },\n    install: function install(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/plugin/install', option);\n    },\n    uninstall: function uninstall(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/plugin/uninstall', option);\n    }\n  },\n  portal: {\n    getMenu: function getMenu(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].post('/api/portal/getMenu', option);\n    }\n  }\n}, true);\nvar state = {\n  data: {}\n};\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_2__[\"actionMixin\"])('base'), _dec(_class = function action(option) {\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, action);\n\n  Object.assign(this, option.mixins);\n}) || _class);\nvar view = {\n  component: 'div'\n};\n\n\n//# sourceURL=webpack://MakaApp-webapi/./index.js?");

/***/ }),

/***/ "./mock.js":
/*!*****************!*\
  !*** ./mock.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\n\nfunction initMockData() {\n  if (!mockData.apps) {\n    mockData.apps = [{\n      id: 1,\n      title: '首页',\n      icon: 'home',\n      appName: 'home',\n      isInstalled: false\n    }, {\n      id: 2,\n      title: '仪表盘',\n      icon: 'dashboard',\n      appName: 'dashboard',\n      isInstalled: false\n    }, {\n      id: 3,\n      title: '人员',\n      icon: 'user',\n      appName: 'set-person-list',\n      isInstalled: false\n    }, {\n      id: 4,\n      title: '客户',\n      icon: 'team',\n      appName: 'set-customer-list',\n      isInstalled: false\n    }, {\n      id: 5,\n      title: 'BOM',\n      icon: 'profile',\n      appName: 'set-bom-list',\n      isInstalled: false\n    }];\n  }\n\n  if (!mockData.plugins) {\n    mockData.plugins = [{\n      id: 1,\n      title: '人员列表插件',\n      forApp: 'set-person-list',\n      appName: 'set-person-list-plugin',\n      isInstalled: false\n    }];\n  }\n}\n\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/logout', function () {\n  initMockData();\n  maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].clearAccessToken();\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/appstore/query', function (option) {\n  initMockData();\n  return {\n    result: true,\n    value: mockData.apps\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/appstore/install', function (option) {\n  initMockData();\n  var id = option.id;\n  mockData.apps.find(function (o) {\n    return o.id === id;\n  }).isInstalled = true;\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/appstore/uninstall', function (option) {\n  initMockData();\n  var id = option.id;\n  mockData.apps.find(function (o) {\n    return o.id === id;\n  }).isInstalled = false;\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/plugin/query', function (option) {\n  initMockData();\n  return {\n    result: true,\n    value: mockData.plugins\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/plugin/install', function (option) {\n  initMockData();\n  var id = option.id;\n  mockData.plugins.find(function (o) {\n    return o.id === id;\n  }).isInstalled = true;\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/plugin/uninstall', function (option) {\n  initMockData();\n  var id = option.id;\n  mockData.plugins.find(function (o) {\n    return o.id === id;\n  }).isInstalled = false;\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/portal/getMenu', function (option) {\n  initMockData();\n  var menus = mockData.apps.filter(function (o) {\n    return o.isInstalled === true;\n  });\n  return {\n    result: true,\n    value: menus\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./mock.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"webapi\",\"description\":\"webapi\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/webapi.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/webapi/issues\"},\"homepage\":\"https://github.com/makajs/webapi#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":{\"/api/*\":\"http://127.0.0.1:3000\"},\"port\":8000},\"subAppDir\":[\"./apps\",\"../base\"]};\n\n//# sourceURL=webpack://MakaApp-webapi/./package.json?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-webapi/./style.less?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/makajs/maka/packages/example/maka-app-store/apps/base/webapi/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack://MakaApp-webapi/multi_./index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://MakaApp-webapi/external_%22maka%22?");

/***/ })

/******/ });
});