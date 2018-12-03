(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-portal"] = factory(require("maka"));
	else
		root["MakaApp-portal"] = factory(root["maka"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module) {

module.exports = {"isMakaApp":true,"name":"portal","description":"portal","version":"1.0.0","license":"MIT","author":"","repository":{"type":"git","url":"https://github.com/makajs/portal.git"},"bugs":{"url":"https://github.com/makajs/portal/issues"},"homepage":"https://github.com/makajs/portal#readme","scripts":{"start":"maka start","dev":"maka start --dev","build":"maka build","pkg":"maka pkg"},"dependencies":{},"server":{"proxy":null,"port":8000},"subAppDir":["./apps","../../base","../../home"],"devDependencies":{}};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(1);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(2);

// CONCATENATED MODULE: ./view.js
/* harmony default export */ var view = ({
  component: 'div',
  className: 'portal',
  children: [{
    component: 'div',
    className: "{{(data.content && data.content.appName) ? 'portal-hidden': 'portal-show portal-header'}}",
    children: 'ERP DEMO'
  }, {
    component: 'div',
    className: "{{(data.content && data.content.appName) ? 'portal-hidden': 'portal-content portal-show'}}",
    children: {
      component: 'antd.TabBar',
      unselectedTintColor: "#949494",
      tintColor: "#33A3F4",
      barTintColor: "#F8FCFF",
      prerenderingSiblingsNumber: 0,
      children: [{
        title: '首页',
        key: 'home',
        component: 'antd.TabBar.Item',
        selected: "{{data.selectedTab == 'home'}}",
        onPress: "{{()=>$base.ss({'data.selectedTab': 'home'})}}",
        icon: {
          component: 'FA',
          name: 'home'
        },
        selectedIcon: {
          component: 'FA',
          name: 'home'
        },
        children: [{
          component: 'AppLoader',
          appName: 'home'
        }]
      }, {
        title: '报表',
        key: 'rpt',
        component: 'TabBar.Item',
        selected: "{{data.selectedTab == 'rpt'}}",
        onPress: "{{()=>$base.ss({'data.selectedTab': 'rpt'})}}",
        icon: {
          component: 'FA',
          name: 'bar-chart'
        },
        selectedIcon: {
          component: 'FA',
          name: 'bar-chart'
        },
        children: [{
          component: 'AppLoader',
          appName: 'rpt'
        }]
      }, {
        title: '我的',
        key: 'my',
        component: 'TabBar.Item',
        selected: "{{data.selectedTab == 'my'}}",
        onPress: "{{()=>$base.ss({'data.selectedTab': 'my'})}}",
        icon: {
          component: 'FA',
          name: 'user'
        },
        selectedIcon: {
          component: 'FA',
          name: 'user'
        },
        children: [{
          component: 'AppLoader',
          appName: 'my'
        }]
      }]
    }
  }, {
    component: 'div',
    className: "{{(data.content && data.content.appName) ? 'portal-open-page portal-open-page-show': 'portal-open-page portal-open-page-show-hidden'}}",
    children: [{
      _for: 'item in data.openPages',
      component: 'AppLoader',
      appName: '{{item.appName}}',
      '...': '{{item.appProps}}'
    }]
  }]
});
// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(3);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "maka"
var external_maka_ = __webpack_require__(0);

// CONCATENATED MODULE: ./action.js




var _dec, _class2;


var action_action = (_dec = Object(external_maka_["actionMixin"])('base', 'toast'), _dec(_class2 = function action(option) {
  var _this = this;

  classCallCheck_default()(this, action);

  defineProperty_default()(this, "onInit", function () {
    external_maka_["navigate"].listen(_this.listen);

    _this.base.context.set('openPage', _this.setContent);
  });

  defineProperty_default()(this, "setContent", function (title, appName) {
    var appProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return new Promise(function (resolve, reject) {
      appProps = objectSpread_default()({}, appProps, {
        onOk: function onOk(result) {
          resolve(result);
        }
      });

      var data = _this.base.gs('data');

      if (data.content && appName == data.content.appName) return;
      var content = {
        title: title,
        appName: appName,
        appProps: appProps
      },
          openPages = data.openPages || [],
          json = {
        'data.content': content
      };
      var hitIndex = data.openPages.findIndex(function (o) {
        return o.title == title || o.appName == appName;
      });
      var hit = hitIndex != -1;

      if (hit) {
        _this.base.ss(json);

        return;
      } else {
        data.openPages.push(content);
        json['data.openPages'] = openPages;
      }

      _this.base.ss(json);

      setTimeout(function () {
        var location = external_maka_["navigate"].getLocation();
        var full = "".concat(location.pathname).concat(location.search);
        var segs = full.split('/');
        segs = segs.slice(0, segs.indexOf('portal') + 1);
        segs.push(content.appName);
        external_maka_["navigate"].redirect(segs.join('/'));
      }, 0);
    });
  });

  defineProperty_default()(this, "closeContent", function (appName) {
    var openPages = _this.base.gs('data.openPages') || [];
    var hitIndex = openPages.findIndex(function (o) {
      return o.appName == appName;
    });
    openPages = openPages.splice(hitIndex, 0);

    _this.base.ss({
      'data.openPages': openPages,
      'data.content': openPages[openPages.length - 1]
    });
  });

  defineProperty_default()(this, "listen", function (location, action) {
    var full = "".concat(location.pathname).concat(location.search);
    if (!full || full.indexOf('portal') == -1) return;

    var currentAppName = _this.base.gs('data.content.appName');

    if (action == 'POP') {
      _this.closeContent(currentAppName);

      return;
    }

    var segs = full.split('/'),
        targetApp = segs[segs.length - 1];

    if (targetApp == 'portal' || !targetApp) {
      _this.base.ss({
        'data.openTabs': [],
        'data.content': {}
      });
    } else {
      _this.setContent('', targetApp);
    }
  });

  Object.assign(this, option.mixins);
}) || _class2);

// CONCATENATED MODULE: ./state.js
/* harmony default export */ var state = ({
  data: {
    selectedTab: 'home',
    content: {},
    openPages: [],
    other: {}
  }
});
// CONCATENATED MODULE: ./mock.js

var mockData = external_maka_["fetch"].mockData;

function initMockData() {
  if (!mockData.users) {
    mockData.users = [{
      id: 1,
      mobile: 13334445556,
      password: 'c4ca4238a0b923820dcc509a6f75849b',
      name: 'zlj'
    }];
  }
}

external_maka_["fetch"].mock('/v1/user/login', function (option) {
  initMockData();
  var user = mockData.users.find(function (o) {
    return o.mobile == option.mobile && o.password == option.password;
  });

  if (user) {
    return {
      result: true,
      //token模拟简单处理，正式不应该有密码等数据
      token: "".concat(user.id, ",").concat(user.mobile, ",").concat(user.password, ",").concat(user.name ? user.name : ''),
      value: option
    };
  } else {
    return {
      result: false,
      error: {
        message: '用户名或者密码不正确（默认 手机:13334445556,密码:1）'
      }
    };
  }
});
// EXTERNAL MODULE: ./style.less
var style = __webpack_require__(6);

// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return index_name; });
/* concated harmony reexport view */__webpack_require__.d(__webpack_exports__, "view", function() { return view; });
/* concated harmony reexport state */__webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* concated harmony reexport action */__webpack_require__.d(__webpack_exports__, "action", function() { return action_action; });






var index_name = package_0.name;


/***/ })
/******/ ]);
});