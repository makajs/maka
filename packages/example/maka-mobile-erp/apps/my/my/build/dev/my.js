(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-my"] = factory(require("maka"));
	else
		root["MakaApp-my"] = factory(root["maka"]);
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

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://MakaApp-my//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://MakaApp-my//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./action.js":
/*!*******************!*\
  !*** ./action.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return action; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _dec, _class;\n\n\nconsole.log(Object(maka__WEBPACK_IMPORTED_MODULE_2__[\"getAction\"])('numberHelper'));\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_2__[\"actionMixin\"])('base', 'toast', 'numberHelper'), _dec(_class = function action(option) {\n  var _this = this;\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, action);\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"signOut\", function () {\n    maka__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"].clearAccessToken();\n    maka__WEBPACK_IMPORTED_MODULE_2__[\"navigate\"].redirect('/sign-in');\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"setting\", function () {\n    _this.toast.info('你就告诉我啥不能做吧 !!!', 1);\n  });\n\n  Object.assign(this, option.mixins);\n}) || _class);\n\n\n//# sourceURL=webpack://MakaApp-my/./action.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: name, view, state, action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./view.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./action.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return _action__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./state.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock */ \"./mock.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.less */ \"./style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_0__.name;\n\n\n//# sourceURL=webpack://MakaApp-my/./index.js?");

/***/ }),

/***/ "./mock.js":
/*!*****************!*\
  !*** ./mock.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar moment = Object(maka__WEBPACK_IMPORTED_MODULE_0__[\"getAction\"])('moment');\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\n\nfunction getRandomNum(min, max) {\n  var Range = max - min;\n  var Rand = Math.random();\n  return min + Math.round(Rand * Range);\n}\n\nfunction initMockData() {\n  if (!mockData.goodss) {\n    mockData.goodss = [];\n\n    for (var i = 0; i < 8; i++) {\n      mockData.goodss.push({\n        id: i,\n        name: '商品' + i\n      });\n    }\n  }\n\n  if (!mockData.ips) {\n    mockData.ips = [];\n\n    for (var i = 0; i < 200; i++) {\n      mockData.ips.push({\n        id: i,\n        type: {\n          code: 'income',\n          name: '收入'\n        },\n        goods: mockData.goodss[getRandomNum(0, 6)],\n        amount: getRandomNum(3, 10000),\n        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')\n      });\n    }\n\n    for (var i = 0; i < 100; i++) {\n      mockData.ips.push({\n        id: i,\n        type: {\n          code: 'pay',\n          name: '支出'\n        },\n        goods: mockData.goodss[getRandomNum(0, 6)],\n        amount: getRandomNum(3, 10000) * -1,\n        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')\n      });\n    }\n  }\n\n  if (!mockData.todos) {\n    mockData.todos = [];\n\n    for (var i = 0; i < 10; i++) {\n      mockData.todos.push({\n        id: i,\n        title: '待办事物' + i,\n        description: '代办描述' + i,\n        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')\n      });\n    }\n  }\n\n  if (!mockData.toAudits) {\n    mockData.toAudits = [];\n\n    for (var i = 0; i < 5; i++) {\n      mockData.toAudits.push({\n        id: i,\n        title: '待审事物' + i,\n        description: '待审事物' + i,\n        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')\n      });\n    }\n  }\n}\n\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/v1/my', function (option) {\n  initMockData();\n  return {\n    result: true,\n    value: {\n      incomeAndPays: [{\n        title: '今日',\n        type: 'today',\n        date: moment().format('YYYY-MM-DD'),\n        income: mockData.ips.filter(function (o) {\n          return o.date == moment().format('YYYY-MM-DD') && o.type.code == 'income';\n        }).reduce(function (a, b) {\n          return a + b.amount;\n        }, 0),\n        pay: mockData.ips.filter(function (o) {\n          return o.date == moment().format('YYYY-MM-DD') && o.type.code == 'pay';\n        }).reduce(function (a, b) {\n          return a + b.amount;\n        }, 0) * -1\n      }, {\n        title: '昨日',\n        type: 'yesterday',\n        date: moment().subtract(1, 'days').format('YYYY-MM-DD'),\n        income: mockData.ips.filter(function (o) {\n          return o.date == moment().subtract(1, 'days').format('YYYY-MM-DD') && o.type.code == 'income';\n        }).reduce(function (a, b) {\n          return a + b.amount;\n        }, 0),\n        pay: mockData.ips.filter(function (o) {\n          return o.date == moment().subtract(1, 'days').format('YYYY-MM-DD') && o.type.code == 'pay';\n        }).reduce(function (a, b) {\n          return a + b.amount;\n        }, 0) * -1\n      }, {\n        title: '本月',\n        type: 'month',\n        date: moment().format('YYYY-MM'),\n        income: mockData.ips.filter(function (o) {\n          return moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM') && o.type.code == 'income';\n        }).reduce(function (a, b) {\n          return a + b.amount;\n        }, 0),\n        pay: mockData.ips.filter(function (o) {\n          return moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM') && o.type.code == 'pay';\n        }).reduce(function (a, b) {\n          return a + b.amount;\n        }, 0) * -1\n      }],\n      todoCount: mockData.todos.length,\n      toAuditCount: mockData.toAudits.length\n    }\n  };\n});\n\n//# sourceURL=webpack://MakaApp-my/./mock.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, mypage, scripts, dependencies, server, subAppDir, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"my\",\"description\":\"my\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/my.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/my/issues\"},\"mypage\":\"https://github.com/makajs/my#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":[\"./apps\",\"../../base\",\"../\"],\"devDependencies\":{}};\n\n//# sourceURL=webpack://MakaApp-my/./package.json?");

/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: {\n    incomeAndPays: [],\n    selectedTab: 'my',\n    content: {},\n    openPages: [],\n    other: {}\n  }\n});\n\n//# sourceURL=webpack://MakaApp-my/./state.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-my/./style.less?");

/***/ }),

/***/ "./view.js":
/*!*****************!*\
  !*** ./view.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: 'div',\n  className: 'my',\n  children: [{\n    component: 'antd.WhiteSpace'\n  }, {\n    component: 'antd.List',\n    children: [{\n      component: 'antd.Result',\n      img: {\n        component: 'img',\n        src: 'https://avatars3.githubusercontent.com/u/43697360?s=200&v=4',\n        className: 'spe am-icon am-icon-md my-info'\n      },\n      title: 'Maka.js',\n      message: {\n        component: 'div',\n        children: 'React and redux based, lightweight javascript framework'\n      }\n    }]\n  }, {\n    component: 'antd.List',\n    children: [{\n      component: 'antd.List.Item',\n      onClick: \"{{$setting}}\",\n      thumb: {\n        component: 'FA',\n        name: 'whatsapp',\n        style: {\n          color: 'green',\n          fontSize: 22\n        }\n      },\n      extra: {\n        component: 'FA',\n        name: 'github',\n        style: {\n          color: 'green',\n          fontSize: 18\n        }\n      },\n      children: '联系我们'\n    }]\n  }, {\n    component: 'antd.WhiteSpace'\n  }, {\n    component: 'antd.List',\n    children: [{\n      component: 'antd.List.Item',\n      onClick: \"{{$setting}}\",\n      thumb: {\n        component: 'FA',\n        name: 'credit-card',\n        style: {\n          color: 'green',\n          fontSize: 18\n        }\n      },\n      children: '钱包'\n    }]\n  }, {\n    component: 'antd.WhiteSpace'\n  }, {\n    component: 'antd.List',\n    children: [{\n      component: 'antd.List.Item',\n      onClick: \"{{$setting}}\",\n      thumb: {\n        component: 'FA',\n        name: 'cog',\n        style: {\n          color: 'green',\n          fontSize: 18\n        }\n      },\n      children: '设置'\n    }]\n  }, {\n    component: 'antd.Button',\n    type: 'warning',\n    children: '注销',\n    onClick: \"{{$signOut}}\",\n    style: {\n      position: 'absolute',\n      bottom: '2px',\n      width: '100%'\n    }\n  }]\n});\n\n//# sourceURL=webpack://MakaApp-my/./view.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/makajs/maka/packages/example/maka-mobile-erp/apps/my/my/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack://MakaApp-my/multi_./index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://MakaApp-my/external_%22maka%22?");

/***/ })

/******/ });
});