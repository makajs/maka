(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-my"] = factory(require("maka"));
	else
		root["MakaApp-my"] = factory(root["maka"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = {"isMakaApp":true,"name":"my","description":"my","version":"1.0.0","license":"MIT","author":"","repository":{"type":"git","url":"https://github.com/makajs/my.git"},"bugs":{"url":"https://github.com/makajs/my/issues"},"mypage":"https://github.com/makajs/my#readme","scripts":{"start":"maka start","dev":"maka start --dev","build":"maka build","pkg":"maka pkg"},"dependencies":{},"server":{"proxy":null,"port":8000},"subAppDir":["./apps","../../base","../"],"devDependencies":{}};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(1);

// CONCATENATED MODULE: ./view.js
/* harmony default export */ var view = ({
  component: 'div',
  className: 'my',
  children: [{
    component: 'antd.WhiteSpace'
  }, {
    component: 'antd.List',
    children: [{
      component: 'antd.List.Item',
      onClick: "{{$signOut}}",
      thumb: {
        component: 'FA',
        name: 'reply',
        style: {
          color: 'green',
          fontSize: 18
        }
      },
      children: '注销'
    }]
  }]
});
// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "maka"
var external_maka_ = __webpack_require__(0);

// CONCATENATED MODULE: ./action.js



var _dec, _class2;


console.log(Object(external_maka_["getAction"])('numberHelper'));
var action_action = (_dec = Object(external_maka_["actionMixin"])('base', 'toast', 'numberHelper'), _dec(_class2 = function action(option) {
  classCallCheck_default()(this, action);

  defineProperty_default()(this, "signOut", function () {
    external_maka_["fetch"].clearAccessToken();
    external_maka_["navigate"].redirect('/sign-in');
  });

  Object.assign(this, option.mixins);
}) || _class2);

// CONCATENATED MODULE: ./state.js
/* harmony default export */ var state = ({
  data: {
    incomeAndPays: [],
    selectedTab: 'my',
    content: {},
    openPages: [],
    other: {}
  }
});
// CONCATENATED MODULE: ./mock.js

var moment = Object(external_maka_["getAction"])('moment');
var mockData = external_maka_["fetch"].mockData;

function getRandomNum(min, max) {
  var Range = max - min;
  var Rand = Math.random();
  return min + Math.round(Rand * Range);
}

function initMockData() {
  if (!mockData.goodss) {
    mockData.goodss = [];

    for (var i = 0; i < 8; i++) {
      mockData.goodss.push({
        id: i,
        name: '商品' + i
      });
    }
  }

  if (!mockData.ips) {
    mockData.ips = [];

    for (var i = 0; i < 200; i++) {
      mockData.ips.push({
        id: i,
        type: {
          code: 'income',
          name: '收入'
        },
        goods: mockData.goodss[getRandomNum(0, 6)],
        amount: getRandomNum(3, 10000),
        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
      });
    }

    for (var i = 0; i < 100; i++) {
      mockData.ips.push({
        id: i,
        type: {
          code: 'pay',
          name: '支出'
        },
        goods: mockData.goodss[getRandomNum(0, 6)],
        amount: getRandomNum(3, 10000) * -1,
        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
      });
    }
  }

  if (!mockData.todos) {
    mockData.todos = [];

    for (var i = 0; i < 10; i++) {
      mockData.todos.push({
        id: i,
        title: '待办事物' + i,
        description: '代办描述' + i,
        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
      });
    }
  }

  if (!mockData.toAudits) {
    mockData.toAudits = [];

    for (var i = 0; i < 5; i++) {
      mockData.toAudits.push({
        id: i,
        title: '待审事物' + i,
        description: '待审事物' + i,
        date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
      });
    }
  }
}

external_maka_["fetch"].mock('/v1/my', function (option) {
  initMockData();
  return {
    result: true,
    value: {
      incomeAndPays: [{
        title: '今日',
        type: 'today',
        date: moment().format('YYYY-MM-DD'),
        income: mockData.ips.filter(function (o) {
          return o.date == moment().format('YYYY-MM-DD') && o.type.code == 'income';
        }).reduce(function (a, b) {
          return a + b.amount;
        }, 0),
        pay: mockData.ips.filter(function (o) {
          return o.date == moment().format('YYYY-MM-DD') && o.type.code == 'pay';
        }).reduce(function (a, b) {
          return a + b.amount;
        }, 0) * -1
      }, {
        title: '昨日',
        type: 'yesterday',
        date: moment().subtract(1, 'days').format('YYYY-MM-DD'),
        income: mockData.ips.filter(function (o) {
          return o.date == moment().subtract(1, 'days').format('YYYY-MM-DD') && o.type.code == 'income';
        }).reduce(function (a, b) {
          return a + b.amount;
        }, 0),
        pay: mockData.ips.filter(function (o) {
          return o.date == moment().subtract(1, 'days').format('YYYY-MM-DD') && o.type.code == 'pay';
        }).reduce(function (a, b) {
          return a + b.amount;
        }, 0) * -1
      }, {
        title: '本月',
        type: 'month',
        date: moment().format('YYYY-MM'),
        income: mockData.ips.filter(function (o) {
          return moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM') && o.type.code == 'income';
        }).reduce(function (a, b) {
          return a + b.amount;
        }, 0),
        pay: mockData.ips.filter(function (o) {
          return moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM') && o.type.code == 'pay';
        }).reduce(function (a, b) {
          return a + b.amount;
        }, 0) * -1
      }],
      todoCount: mockData.todos.length,
      toAuditCount: mockData.toAudits.length
    }
  };
});
// EXTERNAL MODULE: ./style.less
var style = __webpack_require__(5);

// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return index_name; });
/* concated harmony reexport view */__webpack_require__.d(__webpack_exports__, "view", function() { return view; });
/* concated harmony reexport state */__webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* concated harmony reexport action */__webpack_require__.d(__webpack_exports__, "action", function() { return action_action; });






var index_name = package_0.name;


/***/ })
/******/ ]);
});