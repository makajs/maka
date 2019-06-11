(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["maka-app-portal"] = factory(require("maka"));
	else
		root["maka-app-portal"] = factory(root["maka"]);
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
/******/ 	__webpack_require__.p = window['__pub_portal__'];
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://maka-app-portal//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://maka-app-portal//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js":
/*!***************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack://maka-app-portal//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"portal\",\"description\":\"portal\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/portal.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/portal/issues\"},\"homepage\":\"https://github.com/makajs/portal#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":[\"./apps\",\"../../base\",\"../../home\"],\"devDependencies\":{}};\n\n//# sourceURL=webpack://maka-app-portal/./package.json?");

/***/ }),

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return action; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _dec, _class, _temp;\n\n\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_3__[\"actionMixin\"])('base', 'toast'), _dec(_class = (_temp = function action(option) {\n  var _this = this;\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, action);\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"onInit\", function () {\n    maka__WEBPACK_IMPORTED_MODULE_3__[\"navigate\"].listen(_this.listen);\n\n    _this.base.context.set('openPage', _this.setContent);\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"setContent\", function (title, appName) {\n    var appProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    return new Promise(function (resolve, reject) {\n      appProps = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, appProps, {\n        onOk: function onOk(result) {\n          resolve(result);\n        }\n      });\n\n      var data = _this.base.gs('data');\n\n      if (data.content && appName == data.content.appName) return;\n      var content = {\n        title: title,\n        appName: appName,\n        appProps: appProps\n      },\n          openPages = data.openPages || [],\n          json = {\n        'data.content': content\n      };\n      var hitIndex = data.openPages.findIndex(function (o) {\n        return o.title == title || o.appName == appName;\n      });\n      var hit = hitIndex != -1;\n\n      if (hit) {\n        _this.base.ss(json);\n\n        return;\n      } else {\n        data.openPages.push(content);\n        json['data.openPages'] = openPages;\n      }\n\n      _this.base.ss(json);\n\n      setTimeout(function () {\n        var location = maka__WEBPACK_IMPORTED_MODULE_3__[\"navigate\"].getLocation();\n        var full = \"\".concat(location.pathname).concat(location.search);\n        var segs = full.split('/');\n        segs = segs.slice(0, segs.indexOf('portal') + 1);\n        segs.push(content.appName);\n        maka__WEBPACK_IMPORTED_MODULE_3__[\"navigate\"].redirect(segs.join('/'));\n      }, 0);\n    });\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"closeContent\", function (appName) {\n    var openPages = _this.base.gs('data.openPages') || [];\n    var hitIndex = openPages.findIndex(function (o) {\n      return o.appName == appName;\n    });\n    openPages = openPages.splice(hitIndex, 0);\n\n    _this.base.ss({\n      'data.openPages': openPages,\n      'data.content': openPages[openPages.length - 1]\n    });\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"listen\", function (location, action) {\n    var full = \"\".concat(location.pathname).concat(location.search);\n    if (!full || full.indexOf('portal') == -1) return;\n\n    var currentAppName = _this.base.gs('data.content.appName');\n\n    if (action == 'POP') {\n      _this.closeContent(currentAppName);\n\n      return;\n    }\n\n    var segs = full.split('/'),\n        targetApp = segs[segs.length - 1];\n\n    if (targetApp == 'portal' || !targetApp) {\n      _this.base.ss({\n        'data.openTabs': [],\n        'data.content': {}\n      });\n    } else {\n      _this.setContent('', targetApp);\n    }\n  });\n\n  Object.assign(this, option.mixins);\n}, _temp)) || _class);\n\n\n//# sourceURL=webpack://maka-app-portal/./src/action.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: name, view, state, action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return _action__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock */ \"./src/mock.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_0__.name;\n\n\n//# sourceURL=webpack://maka-app-portal/./src/index.js?");

/***/ }),

/***/ "./src/mock.js":
/*!*********************!*\
  !*** ./src/mock.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\n\nfunction initMockData() {\n  if (!mockData.users) {\n    mockData.users = [{\n      id: 1,\n      mobile: 13334445556,\n      password: 'c4ca4238a0b923820dcc509a6f75849b',\n      name: 'zlj'\n    }];\n  }\n}\n\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/v1/user/login', function (option) {\n  initMockData();\n  var user = mockData.users.find(function (o) {\n    return o.mobile == option.mobile && o.password == option.password;\n  });\n\n  if (user) {\n    return {\n      result: true,\n      //token模拟简单处理，正式不应该有密码等数据\n      token: \"\".concat(user.id, \",\").concat(user.mobile, \",\").concat(user.password, \",\").concat(user.name ? user.name : ''),\n      value: option\n    };\n  } else {\n    return {\n      result: false,\n      error: {\n        message: '用户名或者密码不正确（默认 手机:13334445556,密码:1）'\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack://maka-app-portal/./src/mock.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: {\n    selectedTab: 'home',\n    content: {},\n    openPages: [],\n    other: {}\n  }\n});\n\n//# sourceURL=webpack://maka-app-portal/./src/state.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://maka-app-portal/./src/style.less?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: 'div',\n  className: 'portal',\n  children: [{\n    component: 'div',\n    className: \"{{(data.content && data.content.appName) ? 'portal-hidden': 'portal-show portal-header'}}\",\n    children: 'ERP DEMO'\n  }, {\n    component: 'div',\n    className: \"{{(data.content && data.content.appName) ? 'portal-hidden': 'portal-content portal-show'}}\",\n    children: {\n      component: 'antd.TabBar',\n      unselectedTintColor: \"#949494\",\n      tintColor: \"#33A3F4\",\n      barTintColor: \"#F8FCFF\",\n      prerenderingSiblingsNumber: 0,\n      children: [{\n        title: '首页',\n        key: 'home',\n        component: 'antd.TabBar.Item',\n        selected: \"{{data.selectedTab == 'home'}}\",\n        onPress: \"{{()=>$base.ss({'data.selectedTab': 'home'})}}\",\n        icon: {\n          component: 'FA',\n          name: 'home'\n        },\n        selectedIcon: {\n          component: 'FA',\n          name: 'home'\n        },\n        children: [{\n          component: 'AppLoader',\n          appName: 'home'\n        }]\n      }, {\n        title: '报表',\n        key: 'rpt',\n        component: 'TabBar.Item',\n        selected: \"{{data.selectedTab == 'rpt'}}\",\n        onPress: \"{{()=>$base.ss({'data.selectedTab': 'rpt'})}}\",\n        icon: {\n          component: 'FA',\n          name: 'bar-chart'\n        },\n        selectedIcon: {\n          component: 'FA',\n          name: 'bar-chart'\n        },\n        children: [{\n          component: 'AppLoader',\n          appName: 'rpt'\n        }]\n      }, {\n        title: '我的',\n        key: 'my',\n        component: 'TabBar.Item',\n        selected: \"{{data.selectedTab == 'my'}}\",\n        onPress: \"{{()=>$base.ss({'data.selectedTab': 'my'})}}\",\n        icon: {\n          component: 'FA',\n          name: 'user'\n        },\n        selectedIcon: {\n          component: 'FA',\n          name: 'user'\n        },\n        children: [{\n          component: 'AppLoader',\n          appName: 'my'\n        }]\n      }]\n    }\n  }, {\n    component: 'div',\n    className: \"{{(data.content && data.content.appName) ? 'portal-open-page portal-open-page-show': 'portal-open-page portal-open-page-show-hidden'}}\",\n    children: [{\n      _for: 'item in data.openPages',\n      component: 'AppLoader',\n      appName: '{{item.appName}}',\n      '...': '{{item.appProps}}'\n    }]\n  }]\n});\n\n//# sourceURL=webpack://maka-app-portal/./src/view.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/lisga/Desktop/code/others/maka/packages/example/maka-mobile-erp/apps/sys/portal/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://maka-app-portal/multi_./src/index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://maka-app-portal/external_%22maka%22?");

/***/ })

/******/ });
});