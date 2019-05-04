(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-redux"), require("immutable"), require("redux"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-redux", "immutable", "redux", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Maka"] = factory(require("react"), require("react-dom"), require("react-redux"), require("immutable"), require("redux"), require("prop-types"));
	else
		root["Maka"] = factory(root["React"], root["ReactDOM"], root["ReactRedux"], root["Immutable"], root["Redux"], root["PropTypes"]);
})((function(){
    return (typeof window !== 'undefined' && window ) ||
    (typeof global !== 'undefined' && global ) 
}()), function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_prop_types__) {
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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

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

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/action.js":
/*!*******************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/action.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApp = loadApp;
exports.clearAppState = clearAppState;
exports.loadPlugin = loadPlugin;

function loadApp(fullName, prevFullName) {
  return {
    type: '@@loadApp',
    payload: {
      fullName: fullName,
      prevFullName: prevFullName
    }
  };
}

function clearAppState(fullName) {
  return {
    type: '@@clearAppState',
    payload: {
      fullName: fullName
    }
  };
}

function loadPlugin(fullName, prevFullName) {
  return {
    type: '@@loadPlugin',
    payload: {
      fullName: fullName,
      prevFullName: prevFullName
    }
  };
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/appFactory.js":
/*!***********************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/appFactory.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/app-loader/lib/config.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();

var appFactory = function appFactory() {
  var _this = this;

  (0, _classCallCheck2.default)(this, appFactory);
  (0, _defineProperty2.default)(this, "registerApp", function (name, app) {
    if (_this.apps[name]) {
      console.log("Already registered this app\uFF0Cname: ".concat(name, ",please ignore"));
      return;
    }

    _this.apps[name] = app;
  });
  (0, _defineProperty2.default)(this, "registerApps", function (apps) {
    Object.assign(_this.apps, apps);
  });
  (0, _defineProperty2.default)(this, "existsApp", function (name) {
    name = name.replace(/(\.js)|(\.min\.js)/, '');
    return !!_this.apps[name];
  });
  (0, _defineProperty2.default)(this, "getApp", function (name) {
    name = name.replace(/(\.js)|(\.min\.js)/, '');
    return _this.apps[name];
  });
  (0, _defineProperty2.default)(this, "getApps", function () {
    return _this.apps;
  });
  (0, _defineProperty2.default)(this, "removeApp", function (name) {
    delete _this.apps[name];
  });
  this.apps = {};
  globalObj.__maka_apps__ = this.apps;
};

var appFactoryInstance = new appFactory();
var _default = appFactoryInstance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/appLoader.js":
/*!**********************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/appLoader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var actions = _interopRequireWildcard(__webpack_require__(/*! ./action */ "./node_modules/@makajs/app-loader/lib/action.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _pluginFactory = _interopRequireDefault(__webpack_require__(/*! ./pluginFactory */ "./node_modules/@makajs/app-loader/lib/pluginFactory.js"));

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@makajs/app-loader/lib/parseName.js"));

var AppLoader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(AppLoader, _React$Component);

  function AppLoader(props, context) {
    (0, _classCallCheck2.default)(this, AppLoader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AppLoader).call(this, props, context));
  }

  (0, _createClass2.default)(AppLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fullName = _this$props.name,
          payload = _this$props.payload;

      if (!payload.get('@@require')) {
        this.props.loadApp(fullName);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var fullName = nextProps.name,
          payload = nextProps.payload;
      var req = payload.get('@@require');

      if (!req) {
        this.props.loadApp(fullName, this.props.name);
      } else if (this.props.name != nextProps.name) {
        this.props.clearAppState(this.props.name);
      } else {
        var cachePlugins = req.get('plugins').toJS();
        var parsedName = (0, _parseName.default)(fullName);
        var plugins = _pluginFactory.default.getPluginNames(parsedName.name) || [];

        if (JSON.stringify(cachePlugins.sort()) !== JSON.stringify(plugins.sort())) {
          this.props.loadPlugin(fullName, this.props.name);
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          fullName = _this$props2.name,
          payload = _this$props2.payload;
      this.props.clearAppState(fullName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          fullName = _this$props3.name,
          payload = _this$props3.payload,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["name", "payload"]),
          ReduxConnector = payload.getIn(['@@require', 'container']);

      if (ReduxConnector) {
        return _react.default.createElement(ReduxConnector, (0, _extends2.default)({
          store: this.context.store
        }, other, {
          payload: payload,
          key: fullName
        }));
      } else {
        return null;
      }
    }
  }]);
  return AppLoader;
}(_react.default.Component);

AppLoader.contextTypes = {
  store: _propTypes.default.object
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  var payload = state.get(props.name);
  return {
    payload: payload || (0, _immutable.Map)()
  };
}, function (dispatch) {
  return (0, _objectSpread2.default)({}, (0, _redux.bindActionCreators)(actions, dispatch));
}, null, {
  //withRef: true,
  pure: true
})(AppLoader);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/appMiddleware.js":
/*!**************************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/appMiddleware.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@makajs/app-loader/lib/parseName.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@makajs/app-loader/lib/appFactory.js"));

var _loadApp = _interopRequireDefault(__webpack_require__(/*! ./loadApp */ "./node_modules/@makajs/app-loader/lib/loadApp.js"));

var _pluginFactory = _interopRequireDefault(__webpack_require__(/*! ./pluginFactory */ "./node_modules/@makajs/app-loader/lib/pluginFactory.js"));

var _default = function _default(actionInjections, reducerInjections) {
  return function (store) {
    return function (next) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = (0, _asyncToGenerator2.default)(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee(action) {
            var getState, dispatch, _action, fullName, name, query, params, actionCreator, args, reducer, reduce, getStateByApp, injections, realAction, _fullName, prevFullName, parsedName, appInfo, plugins, pluginApps, i, plugin, _fullName2, _prevFullName, _parsedName, _appInfo, _plugins, _pluginApps;

            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    getState = store.getState, dispatch = store.dispatch;

                    if (!(typeof action === 'function')) {
                      _context.next = 10;
                      break;
                    }

                    _action = action(), fullName = _action.fullName, name = _action.name, query = _action.query, params = _action.params, actionCreator = _action.actionCreator, args = _action.args, reducer = _action.reducer;

                    reduce = function reduce(type) {
                      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                      }

                      dispatch({
                        type: '@@reduce',
                        payload: {
                          fullName: fullName,
                          name: name,
                          query: query,
                          type: type,
                          reducer: reducer,
                          payload: args,
                          reducerInjections: reducerInjections
                        }
                      });
                    };

                    getStateByApp = function getStateByApp() {
                      return getState().get(fullName);
                    };

                    injections = (0, _objectSpread2.default)({
                      currentApp: {
                        fullName: fullName,
                        name: name,
                        query: query,
                        params: params
                      },
                      store: store,
                      reduce: reduce,
                      getState: getStateByApp
                    }, actionInjections);
                    realAction = actionCreator.apply(void 0, (0, _toConsumableArray2.default)(args).concat([injections]));

                    if (typeof realAction === 'function') {
                      realAction(injections);
                    }

                    _context.next = 70;
                    break;

                  case 10:
                    if (!(action.type && action.type == '@@loadApp')) {
                      _context.next = 43;
                      break;
                    }

                    _context.prev = 11;
                    _fullName = action.payload.fullName, prevFullName = action.payload.prevFullName, parsedName = (0, _parseName.default)(_fullName);
                    appInfo = _appFactory.default.getApp(parsedName.name);

                    if (appInfo) {
                      _context.next = 17;
                      break;
                    }

                    _context.next = 17;
                    return (0, _loadApp.default)(parsedName.name);

                  case 17:
                    appInfo = _appFactory.default.getApp(parsedName.name);

                    if (appInfo) {
                      _context.next = 21;
                      break;
                    }

                    console.error("Loading app ".concat(parsedName.name, " failed"));
                    return _context.abrupt("return", next(action));

                  case 21:
                    /*plugin*/
                    plugins = _pluginFactory.default.getPluginNames(parsedName.name);
                    pluginApps = [];

                    if (!(plugins && plugins.length > 0)) {
                      _context.next = 34;
                      break;
                    }

                    i = 0;

                  case 25:
                    if (!(i < plugins.length)) {
                      _context.next = 34;
                      break;
                    }

                    plugin = plugins[i];

                    if (_appFactory.default.getApp(plugin)) {
                      _context.next = 30;
                      break;
                    }

                    _context.next = 30;
                    return (0, _loadApp.default)(plugin);

                  case 30:
                    pluginApps.push(_appFactory.default.getApp(plugin));

                  case 31:
                    i++;
                    _context.next = 25;
                    break;

                  case 34:
                    return _context.abrupt("return", next({
                      type: '@@loadAppReal',
                      payload: {
                        fullName: _fullName,
                        appInfo: appInfo,
                        prevFullName: prevFullName,
                        action: appInfo.action,
                        pluginApps: pluginApps,
                        plugins: plugins
                      }
                    }));

                  case 37:
                    _context.prev = 37;
                    _context.t0 = _context["catch"](11);
                    console.error(_context.t0);
                    return _context.abrupt("return", next(action));

                  case 41:
                    _context.next = 70;
                    break;

                  case 43:
                    if (!(action.type && action.type == '@@loadPlugin')) {
                      _context.next = 69;
                      break;
                    }

                    _context.prev = 44;
                    _fullName2 = action.payload.fullName, _prevFullName = action.payload.prevFullName, _parsedName = (0, _parseName.default)(_fullName2);
                    _appInfo = _appFactory.default.getApp(_parsedName.name);
                    /*plugin*/

                    _plugins = _pluginFactory.default.getPluginNames(_parsedName.name);
                    _pluginApps = [];

                    if (!(_plugins && _plugins.length > 0)) {
                      _context.next = 60;
                      break;
                    }

                    i = 0;

                  case 51:
                    if (!(i < _plugins.length)) {
                      _context.next = 60;
                      break;
                    }

                    plugin = _plugins[i];

                    if (_appFactory.default.getApp(plugin)) {
                      _context.next = 56;
                      break;
                    }

                    _context.next = 56;
                    return (0, _loadApp.default)(plugin);

                  case 56:
                    _pluginApps.push(_appFactory.default.getApp(plugin));

                  case 57:
                    i++;
                    _context.next = 51;
                    break;

                  case 60:
                    return _context.abrupt("return", next({
                      type: '@@loadAppReal',
                      payload: {
                        fullName: _fullName2,
                        appInfo: _appInfo,
                        prevFullName: _prevFullName,
                        action: _appInfo.action,
                        pluginApps: _pluginApps,
                        plugins: _plugins,
                        forceLoad: true
                      }
                    }));

                  case 63:
                    _context.prev = 63;
                    _context.t1 = _context["catch"](44);
                    console.error(_context.t1);
                    return _context.abrupt("return", next(action));

                  case 67:
                    _context.next = 70;
                    break;

                  case 69:
                    return _context.abrupt("return", next(action));

                  case 70:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[11, 37], [44, 63]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/config.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _options = {};

function config(options) {
  if (options.appUrls && _options.appUrls) {
    options.appUrls = (0, _objectSpread2.default)({}, _options.appUrls, options.appUrls);
  }

  Object.assign(_options, options);
}

config.current = _options;
var _default = config;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/createReduxConnector.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/createReduxConnector.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReduxConnector;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function createReduxConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options)(WrappedComponent);
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppLoader", {
  enumerable: true,
  get: function get() {
    return _appLoader.default;
  }
});
Object.defineProperty(exports, "appMiddleware", {
  enumerable: true,
  get: function get() {
    return _appMiddleware.default;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
Object.defineProperty(exports, "start", {
  enumerable: true,
  get: function get() {
    return _start.default;
  }
});
Object.defineProperty(exports, "appFactory", {
  enumerable: true,
  get: function get() {
    return _appFactory.default;
  }
});
Object.defineProperty(exports, "pluginFactory", {
  enumerable: true,
  get: function get() {
    return _pluginFactory.default;
  }
});
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function get() {
    return _init.default;
  }
});
Object.defineProperty(exports, "loadApp", {
  enumerable: true,
  get: function get() {
    return _loadApp.default;
  }
});
Object.defineProperty(exports, "removeApp", {
  enumerable: true,
  get: function get() {
    return _removeApp.default;
  }
});
exports.removePlugin = exports.existsPlugin = exports.getPluginsByAppName = exports.registerPlugin = exports.existsApp = exports.getApps = exports.getApp = exports.registerApps = exports.registerApp = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _appLoader = _interopRequireDefault(__webpack_require__(/*! ./appLoader */ "./node_modules/@makajs/app-loader/lib/appLoader.js"));

var _appMiddleware = _interopRequireDefault(__webpack_require__(/*! ./appMiddleware */ "./node_modules/@makajs/app-loader/lib/appMiddleware.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@makajs/app-loader/lib/reducer.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/app-loader/lib/config.js"));

var _start = _interopRequireDefault(__webpack_require__(/*! ./start */ "./node_modules/@makajs/app-loader/lib/start.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@makajs/app-loader/lib/appFactory.js"));

var _pluginFactory = _interopRequireDefault(__webpack_require__(/*! ./pluginFactory */ "./node_modules/@makajs/app-loader/lib/pluginFactory.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./node_modules/@makajs/app-loader/lib/init.js"));

var _loadApp = _interopRequireDefault(__webpack_require__(/*! ./loadApp */ "./node_modules/@makajs/app-loader/lib/loadApp.js"));

var _removeApp = _interopRequireDefault(__webpack_require__(/*! ./removeApp */ "./node_modules/@makajs/app-loader/lib/removeApp.js"));

var registerApp = _appFactory.default.registerApp,
    registerApps = _appFactory.default.registerApps,
    getApp = _appFactory.default.getApp,
    getApps = _appFactory.default.getApps,
    existsApp = _appFactory.default.existsApp;
exports.existsApp = existsApp;
exports.getApps = getApps;
exports.getApp = getApp;
exports.registerApps = registerApps;
exports.registerApp = registerApp;
var registerPlugin = _pluginFactory.default.registerPlugin,
    getPluginsByAppName = _pluginFactory.default.getPluginsByAppName,
    existsPlugin = _pluginFactory.default.existsPlugin,
    removePlugin = _pluginFactory.default.removePlugin;
exports.removePlugin = removePlugin;
exports.existsPlugin = existsPlugin;
exports.getPluginsByAppName = getPluginsByAppName;
exports.registerPlugin = registerPlugin;
var _default = {
  AppLoader: _appLoader.default,
  appMiddleware: _appMiddleware.default,
  reducer: _reducer.default,
  config: _config.default,
  init: _init.default,
  start: _start.default,
  registerApp: registerApp,
  registerApps: registerApps,
  getApp: getApp,
  getApps: getApps,
  existsApp: existsApp,
  loadApp: _loadApp.default,
  removeApp: _removeApp.default,
  appFactory: _appFactory.default,
  registerPlugin: registerPlugin,
  getPluginsByAppName: getPluginsByAppName,
  existsPlugin: existsPlugin,
  removePlugin: removePlugin,
  pluginFactory: _pluginFactory.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/init.js":
/*!*****************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/init.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _appLoader = _interopRequireDefault(__webpack_require__(/*! ./appLoader */ "./node_modules/@makajs/app-loader/lib/appLoader.js"));

var _appMiddleware = _interopRequireDefault(__webpack_require__(/*! ./appMiddleware */ "./node_modules/@makajs/app-loader/lib/appMiddleware.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@makajs/app-loader/lib/reducer.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/app-loader/lib/config.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@makajs/app-loader/lib/appFactory.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();

function init(option) {
  (0, _config.default)(option);
  var currentConfig = _config.default.current;
  if (currentConfig.apps) _appFactory.default.registerApps(currentConfig.apps);
  var mw = [(0, _appMiddleware.default)(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {})];
  if (currentConfig.middlewares) mw = mw.concat(currentConfig.middlewares);
  var store = (0, _redux.createStore)(_reducer.default, (0, _immutable.Map)(), _redux.applyMiddleware.apply(void 0, (0, _toConsumableArray2.default)(mw)));
  globalObj.reduxStore = store;
  globalObj.__maka_store__ = store;
  return store;
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/loadApp.js":
/*!********************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/loadApp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadApp;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@makajs/app-loader/lib/appFactory.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/app-loader/lib/config.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();
var isProduction = false;

function fixName(name) {
  return name;
}

function fixUrl(url) {
  var baseUrl = _config.default.current.baseUrl;

  if (!baseUrl) {
    var scripts = document.querySelectorAll("script");

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && (scripts[i].src.indexOf('maka-main.js') != -1 || scripts[i].src.indexOf('maka-main.min.js') != -1)) {
        if (scripts[i].src.indexOf('http') != -1) {
          baseUrl = scripts[i].src.substr(0, scripts[i].src.lastIndexOf('/') + 1);

          if (baseUrl.indexOf('/core/v') != -1) {
            baseUrl = baseUrl.substr(0, baseUrl.indexOf('/core/v') + 1);
          }
        }
      }
    }
  }

  if (baseUrl && url.indexOf('http') == -1) {
    url = baseUrl + url;
  }

  if (url.indexOf('http') != -1 && url.indexOf('.js') == -1) {
    url = url + (isProduction ? '.min.js' : '.js');
  }

  return url;
}

function getUrl(app) {
  if (typeof app == 'string') {
    app = fixName(app);

    if (_config.default.current.appUrls) {
      var ret = _config.default.current.appUrls[app];

      if (ret) {
        return fixUrl(ret);
      } else {
        return fixUrl(app);
      }
    } else return fixUrl(app);
  } else if ((0, _typeof2.default)(app) == 'object') {
    if (app.url) return fixUrl(app.url);else return getUrl(app.name);
  }
}

function findNameByUrl(url) {
  var ret = '';

  if (_config.default.current.appUrls) {
    var hit = Object.keys(_config.default.current.appUrls).find(function (k) {
      return _config.default.current.appUrls[k].url == url;
    });
    ret = hit;
  }

  if (ret) return ret;
  return url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, '');
}

function loadApp(app) {
  var urls = [];

  if (app instanceof Array) {
    app.forEach(function (o) {
      return urls.push(getUrl(o));
    });
  } else {
    urls.push(getUrl(app));
  }

  if (!globalObj.require || urls.length == 0) return Promise.resolve(null);
  return new Promise(function (resolve, reject) {
    urls = urls.filter(function (url) {
      var appName = findNameByUrl(url);
      var pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : '';
      globalObj["__pub_".concat(appName, "__")] = pub;
      return !_appFactory.default.existsApp(appName);
    });
    urls = urls.map(function (u) {
      if (u.indexOf('http') != -1) return u;
      if (u.indexOf('.js') != -1) return u.replace('.js', '');
      return isProduction ? u + '.min' : u;
    });

    if (!urls || urls.length == 0) {
      resolve(null);
      return;
    }

    globalObj.require(urls,
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _len,
          args,
          _key,
          apps,
          appNames,
          i,
          cssUrls,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              apps = args.reduce(function (prev, curr) {
                return curr ? (0, _objectSpread3.default)({}, prev, (0, _defineProperty2.default)({}, curr.name, curr)) : curr;
              }, {});

              if (apps) {
                _context.next = 6;
                break;
              }

              console.error('Not application found at ' + urls.join(';'));
              _context.next = 19;
              break;

            case 6:
              appNames = Object.keys(apps);
              i = 0;

            case 8:
              if (!(i < appNames.length)) {
                _context.next = 16;
                break;
              }

              _context.t0 = apps[appNames[i]].beforeRegister;

              if (!_context.t0) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return apps[appNames[i]].beforeRegister();

            case 13:
              i++;
              _context.next = 8;
              break;

            case 16:
              _appFactory.default.registerApps(apps);
              /*
              appConfig(appFactory.getApps(), {
                  "*": { apps: { ...appFactory.getApps() } },
                  ...options
              })
              */


              cssUrls = urls.map(function (u) {
                if (u.indexOf('http') != -1) return "css!".concat(u.replace('.js', '.css'));
                return "css!".concat(u);
              });
              /*
              globalObj.require(cssUrls, async (...args) => {
                  for (var i = 0; i < appNames.length; i++) {
                      apps[appNames[i]].afterRegister && (await apps[appNames[i]].afterRegister())
                  }
                  resolve(null)
              })*/

              globalObj.require(cssUrls, function () {
                resolve(null);

                for (var i = 0; i < appNames.length; i++) {
                  apps[appNames[i]].afterRegister && apps[appNames[i]].afterRegister();
                }
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
}
/*
const appConfig = (apps, options) => {
    Object.keys(options).forEach(key => {
        const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
        Object.keys(apps).forEach(appName => {
            if (appName != 'config') {
                if (reg.test(appName)) {
                    apps[appName].config && apps[appName].config(options[key])
                }
            }
        })
    })
}
*/

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/parseName.js":
/*!**********************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/parseName.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseName;

function parseName(fullName) {
  var segments = fullName.split('?'),
      name = segments[0],
      query = segments[1] || '',
      params = parseQuery(query);
  return {
    fullName: fullName,
    name: name,
    query: query,
    params: params
  };
}

function parseQuery(query) {
  var ret = {},
      seg = query.replace(/^\?/, '').split('&'),
      len = seg.length,
      i = 0,
      s;

  for (; i < len; i++) {
    if (!seg[i]) {
      continue;
    }

    s = seg[i].split('=');
    ret[s[0]] = decodeURIComponent(s[1]);
  }

  return ret;
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/pluginFactory.js":
/*!**************************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/pluginFactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();

var pluginFactory = function pluginFactory() {
  var _this = this;

  (0, _classCallCheck2.default)(this, pluginFactory);
  (0, _defineProperty2.default)(this, "registerPlugin", function (name, forApp) {
    if (!name || !forApp) return;

    if (_this.plugins.findIndex(function (o) {
      return o.name == name;
    }) != -1) {
      console.log("Already registered this plugin\uFF0Cname: ".concat(name, ",please ignore"));
      return;
    }

    var regExp;

    if (/^\/[^\/]+\//.test(forApp)) {
      regExp = new RegExp(forApp);
    }

    _this.plugins.push({
      name: name,
      forApp: forApp,
      regExp: regExp
    });
  });
  (0, _defineProperty2.default)(this, "removePlugin", function (name) {
    if (!name) return;

    var index = _this.plugins.findIndex(function (o) {
      return o.name == name;
    });

    if (index != -1) _this.plugins.splice(index, 1);
  });
  (0, _defineProperty2.default)(this, "existsPlugin", function (forApp) {
    if (!forApp) return;
    return _this.plugins.findIndex(function (o) {
      return o.forApp === forApp || o.regExp && o.regExp.test(forApp);
    }) != -1;
  });
  (0, _defineProperty2.default)(this, "filter", function (appName) {
    if (!appName) return [];
    return _this.plugins.filter(function (o) {
      return o.forApp === appName || o.regExp && o.regExp.test(forApp);
    });
  });
  (0, _defineProperty2.default)(this, "getPluginNames", function (appName) {
    return _this.filter(appName).map(function (o) {
      return o.name;
    });
  });
  this.plugins = [];
  globalObj.__maka_plugins__ = this.plugins;
};

var pluginFactoryInstance = new pluginFactory();
var _default = pluginFactoryInstance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/reducer.js":
/*!********************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/reducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _wrapMapStateToProps = _interopRequireDefault(__webpack_require__(/*! ./wrapMapStateToProps */ "./node_modules/@makajs/app-loader/lib/wrapMapStateToProps.js"));

var _wrapMapDispatchToProps = _interopRequireDefault(__webpack_require__(/*! ./wrapMapDispatchToProps */ "./node_modules/@makajs/app-loader/lib/wrapMapDispatchToProps.js"));

var _createReduxConnector = _interopRequireDefault(__webpack_require__(/*! ./createReduxConnector */ "./node_modules/@makajs/app-loader/lib/createReduxConnector.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/app-loader/lib/config.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "@@loadAppReal":
      return loadApp(state, payload);

    case "@@reduce":
      return reduce(state, payload);

    case "@@clearAppState":
      return clearAppState(state, payload);

    default:
      return state;
  }
}

function loadApp(state, _ref2) {
  var fullName = _ref2.fullName,
      prevFullName = _ref2.prevFullName,
      appInfo = _ref2.appInfo,
      component = _ref2.component,
      action = _ref2.action,
      reducer = _ref2.reducer,
      pluginApps = _ref2.pluginApps,
      _ref2$plugins = _ref2.plugins,
      plugins = _ref2$plugins === void 0 ? [] : _ref2$plugins,
      _ref2$forceLoad = _ref2.forceLoad,
      forceLoad = _ref2$forceLoad === void 0 ? false : _ref2$forceLoad;

  if (!state.has(fullName) || forceLoad) {
    if (forceLoad && JSON.stringify(state.getIn([fullName, '@@require', 'plugins']).toJS().sort()) === JSON.stringify(plugins.sort())) {
      return state;
    }

    if (!forceLoad) state = state.set(fullName, (0, _immutable.Map)());else state = state.set(fullName, (0, _immutable.Map)({
      prevData: state.getIn([fullName, 'data'])
    }));
    appInfo = (0, _objectSpread2.default)({}, appInfo);

    if (appInfo && appInfo.view && typeof appInfo.view == 'function') {
      component = _config.default.current.componentWrapper()(appInfo.view);
    }

    if (pluginApps && pluginApps.length > 0) {
      for (var i = 0; i < pluginApps.length; i++) {
        var plugin = pluginApps[i];
        if (plugin.pluginApi && plugin.pluginApi.afterState) appInfo.state = plugin.pluginApi.afterState((0, _immutable.fromJS)(appInfo.state).toJS());
        if (plugin.pluginApi && plugin.pluginApi.afterView) appInfo.view = plugin.pluginApi.afterView((0, _immutable.fromJS)(appInfo.view).toJS());
      }
    }

    var actionInstance = typeof action == 'function' ? action({
      appInfo: appInfo,
      fullName: fullName,
      plugins: plugins
    }) : _config.default.current.defaultAction({
      appInfo: appInfo,
      fullName: fullName,
      plugins: plugins
    });
    var actionInternal = actionInstance.getDirectFuns();

    if (pluginApps && pluginApps.length > 0) {
      pluginApps.forEach(function (plugin) {
        if (plugin.pluginApi && plugin.pluginApi.afterAction) actionInternal = plugin.pluginApi.afterAction(actionInternal);
      });
      actionInstance = (0, _objectSpread2.default)({}, actionInstance, {
        getDirectFuns: function getDirectFuns() {
          return actionInternal;
        }
      });
    }

    var reducerInstance = typeof reducer == 'function' ? reducer({
      appInfo: appInfo,
      fullName: fullName
    }) : _config.default.current.defaultReducer({
      appInfo: appInfo,
      fullName: fullName
    });
    var mapStateToProps = (0, _wrapMapStateToProps.default)(fullName);
    var mapDispatchToProps = (0, _wrapMapDispatchToProps.default)(fullName, actionInstance, reducerInstance);
    var container = (0, _createReduxConnector.default)(component || appInfo.viewDecorator && appInfo.viewDecorator()(_config.default.current.defaultComponent) || _config.default.current.defaultComponent, mapStateToProps, mapDispatchToProps, null, {
      //withRef: true, 
      pure: true
    });
    state = state.setIn([fullName, '@@require'], (0, _immutable.Map)({
      fullName: fullName,
      appInfo: appInfo,
      component: component,
      action: actionInstance,
      reducer: reducerInstance,
      container: container,
      mapStateToProps: mapStateToProps,
      mapDispatchToProps: mapDispatchToProps,
      plugins: (0, _immutable.fromJS)(plugins || [])
    }));
  }

  if (prevFullName && prevFullName != fullName) {
    state = clearAppState(state, {
      fullName: prevFullName
    });
  }

  return state;
}

function clearAppState(state, _ref3) {
  var fullName = _ref3.fullName;
  if (!state.has(fullName)) return state;
  var ks = [];
  state.get(fullName).mapKeys(function (k) {
    if (k != '@@require') ks.push(k);
    return k;
  });
  ks.forEach(function (k) {
    if (k) state = state.update(fullName, function (x) {
      return x.remove(k);
    });
  });
  return state;
}

function reduce(state, _ref4) {
  var reducer = _ref4.reducer,
      type = _ref4.type,
      payload = _ref4.payload,
      fullName = _ref4.fullName,
      injectFunsForReducer = _ref4.injectFunsForReducer;
  var startDate = new Date();
  var oldState = state.get(fullName);
  var newState = reducer[type].apply(this, [oldState].concat(payload));

  if (typeof newState === "function") {
    newState = newState(injectFunsForReducer);
  }

  if (globalObj.__maka_record_action__ === true) {
    globalObj.__maka_actions__ = globalObj.__maka_actions__ || [];
    var endDate = new Date();

    globalObj.__maka_actions__.unshift({
      appFullName: fullName,
      reduceMethod: type,
      payload: payload,
      oldState: oldState,
      newState: newState,
      startTime: startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds() + '.' + startDate.getMilliseconds(),
      endTime: endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds() + '.' + endDate.getMilliseconds(),
      elapsedTime: Math.abs(startDate.getTime() - endDate.getTime()) //(1000*60*60*24)

    });
  } else {
    if (globalObj.__maka_actions__) globalObj.__maka_actions__ = undefined;
  }

  return state.set(fullName, newState);
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/removeApp.js":
/*!**********************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/removeApp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeApp;

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@makajs/app-loader/lib/appFactory.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();
var isProduction = false;

function getCssRequireModule() {
  var scripts = document.querySelectorAll("script");
  var ret = '';

  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i] && scripts[i]['src'] && (scripts[i]['src'].indexOf('css.min.js') != -1 || scripts[i]['src'].indexOf('css.js') != -1)) {
      ret = scripts[i]['src'];
    }
  }

  return ret;
}

function removeCss(href) {
  var links = document.querySelectorAll("link");

  for (var i = 0; i < links.length; i++) {
    var _href = links[i].href;

    if (links[i] && links[i].href && (links[i].href.indexOf("/" + href + '.css') != -1 || links[i].href.indexOf("/" + href + '.min.css') != -1)) {
      links[i].parentNode.removeChild(links[i]);

      if (isProduction) {
        globalObj.require.undef(getCssRequireModule() + '!' + links[i].href.replace('.css', ''));
      } else {
        globalObj.require.undef(getCssRequireModule() + '!' + links[i].href.replace('.css', ''));
      }
    }
  }
}

function removeJs(src) {
  var scripts = document.querySelectorAll("script");

  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i] && scripts[i]['src'] && (scripts[i]['src'].indexOf("/" + src + '.js') != -1 || scripts[i]['src'].indexOf("/" + src + '.min.js') != -1)) {
      scripts[i].parentNode.removeChild(scripts[i]);

      if (isProduction) {
        globalObj.require.undef(scripts[i].src);
      } else {
        globalObj.require.undef(scripts[i].src);
      }
    }
  }
}

function removeInternal(app) {
  removeCss(app);

  _appFactory.default.removeApp(app);

  removeJs(app);
  /*
  if (isProduction) {
      globalObj.require.undef(app + '.min')
      globalObj.require.undef('css.min.js!' + app + '.min')
  }
  else {
      globalObj.require.undef(app)
      globalObj.require.undef('css.js!' + app)
  }*/
}

function removeApp(app) {
  var obj = _appFactory.default.getApp(app);

  if (obj && obj.beforeRemove) {
    obj.beforeRemove().then(function () {
      removeInternal(app);
    });
  } else {
    removeInternal(app);
  }
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/start.js":
/*!******************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/start.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = start;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _appLoader = _interopRequireDefault(__webpack_require__(/*! ./appLoader */ "./node_modules/@makajs/app-loader/lib/appLoader.js"));

var _appMiddleware = _interopRequireDefault(__webpack_require__(/*! ./appMiddleware */ "./node_modules/@makajs/app-loader/lib/appMiddleware.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@makajs/app-loader/lib/reducer.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/app-loader/lib/config.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@makajs/app-loader/lib/appFactory.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var globalObj = (0, _utils.getGlobal)();

function start() {
  var currentConfig = _config.default.current;

  _appFactory.default.registerApps(currentConfig.apps);

  var mw = [(0, _appMiddleware.default)(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {})];
  if (currentConfig.middlewares) mw = mw.concat(currentConfig.middlewares);
  var store = (0, _redux.createStore)(_reducer.default, (0, _immutable.Map)(), _redux.applyMiddleware.apply(void 0, (0, _toConsumableArray2.default)(mw)));
  globalObj.reduxStore = store;
  globalObj.__maka_store__ = store;

  if (!currentConfig.rootWrapper) {
    currentConfig.rootWrapper = function (child) {
      return child;
    };
  }

  (0, _reactDom.render)(currentConfig.rootWrapper(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_appLoader.default, {
    name: currentConfig.startAppName
  }))), document.getElementById(currentConfig.targetDomId));
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/wrapMapDispatchToProps.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/wrapMapDispatchToProps.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapDispatchToProps;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _redux = __webpack_require__(/*! redux */ "redux");

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@makajs/app-loader/lib/parseName.js"));

function wrapMapDispatchToProps(fullName, actionCreators, reducer) {
  var parsedName = (0, _parseName.default)(fullName),
      wrapActionCreators = {},
      keys = Object.keys(actionCreators);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key === 'directFuns') continue;
    var wrapActionCreator = wrapAction(actionCreators[key], reducer, parsedName.fullName, parsedName.name, parsedName.query, parsedName.params);
    wrapActionCreators[key] = wrapActionCreator;
  }

  return function (dispatch) {
    return (0, _objectSpread2.default)({}, (0, _redux.bindActionCreators)(wrapActionCreators, dispatch), actionCreators.getDirectFuns && actionCreators.getDirectFuns(parsedName) || {});
  };
}

function wrapAction(actionCreator, reducer, fullName, name, query, params) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function () {
      return {
        fullName: fullName,
        name: name,
        query: query,
        params: params,
        actionCreator: actionCreator,
        reducer: reducer,
        args: args
      };
    };
  };
}

/***/ }),

/***/ "./node_modules/@makajs/app-loader/lib/wrapMapStateToProps.js":
/*!********************************************************************!*\
  !*** ./node_modules/@makajs/app-loader/lib/wrapMapStateToProps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapStateToProps;

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@makajs/app-loader/lib/parseName.js"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

function wrapMapStateToProps(fullName) {
  var parsedName = (0, _parseName.default)(fullName);
  return function (state) {
    return {
      appName: parsedName.name,
      appFullName: parsedName.fullName,
      appQuery: parsedName.query,
      appParams: parsedName.params,
      payload: state.get(parsedName.fullName)
    };
  };
}

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/action.js":
/*!********************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.appInstances = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var common = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/@makajs/meta-engine/lib/common.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/@makajs/meta-engine/lib/context.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/meta-engine/lib/config.js"));

var appInstances = {};
exports.appInstances = appInstances;

var action = function action(option) {
  var _this = this;

  (0, _classCallCheck2.default)(this, action);
  (0, _defineProperty2.default)(this, "config", function (_ref) {
    var metaHandlers = _ref.metaHandlers;
    _this.metaHandlers = metaHandlers;
    _this.cache.handlerKeys = Object.keys(metaHandlers);
    _this.allActionKeys = _this.cache.handlerKeys;
    _this.allAction = _this.metaHandlers;
  });
  (0, _defineProperty2.default)(this, "getAllAction", function () {
    return _this.allAction;
  });
  (0, _defineProperty2.default)(this, "setMetaForce", function (appName, meta) {
    common.setMetaForce(appName, meta, _this.component && _this.component.props.appQuery);
  });
  (0, _defineProperty2.default)(this, "setActionForce", function (actions) {
    if (actions) {
      _this.cache.expression = {};
      _this.cache.expressionParams = undefined;
      var actionKeys = Object.keys(actions);
      /*
      this.dynamicHandleKeys = actionKeys.map(k => "$" + k)
      this.dynamicHandlers = {}
      actionKeys.forEach((key) => {
      	this.dynamicHandlers["$" + key] = actions[key]
      })*/

      _this.allActionKeys = actionKeys;
      _this.allAction = actions;

      _this.cache.handlerKeys.forEach(function (key) {
        if (_this.allActionKeys.indexOf(key) == -1) {
          _this.allActionKeys.push(key);

          _this.allAction[key] = _this.metaHandlers[key];
        }
      });
    }
  });
  (0, _defineProperty2.default)(this, "initView", function (component, injections) {
    _this.component = component || {
      props: {}
    };
    _this.injections = injections;
    _this.metaHandlers.component = _this.component;
    _this.metaHandlers.injections = _this.injections;

    if (component.props.appFullName) {
      appInstances[component.props.appFullName] = {
        appName: component.props.appName,
        appQuery: component.props.appQuery,
        //app: config.getApps()[component.props.appName],
        instance: component
      };
    }

    var initState = _this.appInfo.state && _this.appInfo.state.data || {};

    _this.ss({
      'data': initState
    });

    if (_this.metaHandlers && _this.metaHandlers.onInit) {
      _this.metaHandlers.onInit({
        component: component,
        injections: injections
      });
    }
  });
  (0, _defineProperty2.default)(this, "unmount", function () {
    delete appInstances[_this.component.appFullName];
  });
  (0, _defineProperty2.default)(this, "componentWillMount", function () {
    _this.metaHandlers && _this.metaHandlers['componentWillMount'] && _this.metaHandlers['componentWillMount'] != _this.componentWillMount && _this.metaHandlers['componentWillMount']();
  });
  (0, _defineProperty2.default)(this, "componentDidMount", function () {
    _this.metaHandlers && _this.metaHandlers['componentDidMount'] && _this.metaHandlers['componentDidMount'] != _this.componentDidMount && _this.metaHandlers['componentDidMount']();
  });
  (0, _defineProperty2.default)(this, "shouldComponentUpdate", function (nextProps, nextState) {
    _this.metaHandlers && _this.metaHandlers['shouldComponentUpdate'] && _this.metaHandlers['shouldComponentUpdate'] != _this.shouldComponentUpdate && _this.metaHandlers['shouldComponentUpdate'](nextProps, nextState);
  });
  (0, _defineProperty2.default)(this, "componentWillReceiveProps", function (nextProps) {
    _this.metaHandlers && _this.metaHandlers['componentWillReceiveProps'] && _this.metaHandlers['componentWillReceiveProps'] != _this.componentWillReceiveProps && _this.metaHandlers['componentWillReceiveProps'](nextProps);
  });
  (0, _defineProperty2.default)(this, "componentWillUpdate", function (nextProps, nextState) {
    _this.metaHandlers && _this.metaHandlers['componentWillUpdate'] && _this.metaHandlers['componentWillUpdate'] != _this.componentWillUpdate && _this.metaHandlers['componentWillUpdate'](nextProps, nextState);
  });
  (0, _defineProperty2.default)(this, "componentDidCatch", function (error, info) {
    _this.metaHandlers && _this.metaHandlers['componentDidCatch'] && _this.metaHandlers['componentDidCatch'] != _this.componentDidCatch && _this.metaHandlers['componentDidCatch'](error, info);
  });
  (0, _defineProperty2.default)(this, "componentWillUnmount", function () {
    _this.metaHandlers && _this.metaHandlers['componentWillUnmount'] && _this.metaHandlers['componentWillUnmount'] != _this.componentWillUnmount && _this.metaHandlers['componentWillUnmount']();
  });
  (0, _defineProperty2.default)(this, "componentDidUpdate", function () {
    _this.metaHandlers && _this.metaHandlers['componentDidUpdate'] && _this.metaHandlers['componentDidUpdate'] != _this.componentDidUpdate && _this.metaHandlers['componentDidUpdate']();
  });
  (0, _defineProperty2.default)(this, "getAppInstances", function () {
    return appInstances;
  });
  (0, _defineProperty2.default)(this, "getState", function (fieldPath) {
    return common.getField(_this.injections.getState(), fieldPath);
  });
  (0, _defineProperty2.default)(this, "setState", function (fieldPath, value) {
    if (value) {
      return _this.injections.reduce('setField', fieldPath, value);
    } else {
      return _this.injections.reduce('setFields', fieldPath);
    }
  });
  (0, _defineProperty2.default)(this, "parseExpreesion", function (v, extParas) {
    if (!_this.cache.expression) _this.cache.expression = {};
    var key = v;

    if (extParas && extParas.length > 0) {
      key = key + extParas.toString();
    }

    if (_this.cache.expression[key]) {
      return _this.cache.expression[key];
    }

    if (!_this.cache.expressionParams) {
      _this.cache.expressionParams = ['data'] //.concat(Object.keys(this.metaHandlers)
      //.concat(this.cache.handlerKeys.map(k => "$" + k))
      .concat(_this.allActionKeys.map(function (k) {
        return "$" + k;
      })).concat(['_path', '_vars']);
      /*
      if (this.dynamicHandleKeys) {
      	this.cache.expressionParams = this.cache.expressionParams.concat(this.dynamicHandleKeys)
      }*/
    }

    var params = _this.cache.expressionParams;

    if (extParas && extParas.length > 0) {
      params = params.concat(extParas);
    }

    var body = _utils.default.expression.getExpressionBody(v);

    if (_config.default.current.transformer) {
      if (body.substr(0, 6) === 'return') {
        body = body.substr(6);
        body = _config.default.current.transformer(body);
        body = 'return ' + body;
      } else {
        body = _config.default.transformer(body);
      }
    }

    _this.cache.expression[v] = (0, _construct2.default)(Function, (0, _toConsumableArray2.default)(params).concat([body]));
    return _this.cache.expression[v];
  });
  (0, _defineProperty2.default)(this, "execExpression", function (expressContent, data, path, vars, extParas) {
    var values = [data]; //var metaHandlerKeys = Object.keys(this.metaHandlers),

    /*
    var metaHandlerKeys = this.cache.handlerKeys,
    	i, key
    		var fun = (n) => {
    	let handler = this.metaHandlers[n]
    	if (handler && typeof handler == 'function')
    		handler.__method_name__ = n
    			return handler
    }
    		for (i = 0; key = metaHandlerKeys[i++];) {
    	values.push(fun(key))
    }*/

    var actionKeys = _this.allActionKeys,
        i,
        key;

    var fun = function fun(n) {
      var handler = _this.allAction[n];
      if (handler && typeof handler == 'function') handler.__method_name__ = n;
      return handler;
    };

    for (i = 0; key = actionKeys[i++];) {
      values.push(fun(key));
    }

    values.push(path);
    values.push((vars || '').split(','));
    /*
    var fun1 = (n) => {
    	let handler = this.dynamicHandlers[n]
    	if (handler && typeof handler == 'function')
    		handler.__method_name__ = n
    			return handler
    }
    		if (this.dynamicHandleKeys) {
    	for (i = 0; key = this.dynamicHandleKeys[i++];) {
    		values.push(fun1(key))
    	}
    }*/

    var extParaKeys;

    if (extParas) {
      extParaKeys = Object.keys(extParas);

      if (extParaKeys && extParaKeys.length > 0) {
        extParaKeys.forEach(function (k) {
          values.push(extParas[k]);
        });
      }
    }

    try {
      return _this.parseExpreesion(expressContent, extParaKeys).apply(_this, values);
    } catch (e) {
      _this.metaHandlers && _this.metaHandlers.componentDidCatch && _this.metaHandlers.componentDidCatch != _this.componentDidCatch && _this.metaHandlers.componentDidCatch(e);
      setTimeout(function () {
        console.error("expression parsing error\uFF1A".concat(expressContent));

        _utils.default.exception.error(e);
      }, 500);
    }
  });
  (0, _defineProperty2.default)(this, "needUpdate", function (meta) {
    if (!meta) return false;
    var t = (0, _typeof2.default)(meta);
    if (t == 'string' && _utils.default.expression.isExpression(meta)) return true;
    if (t != 'object') return false;

    if (meta._notParse === true) {
      return false;
    }

    return !(t != 'object' || !!meta['$$typeof'] || !!meta._isAMomentObject || !!meta._power || meta._visible === false);
  });
  (0, _defineProperty2.default)(this, "updateMeta", function (meta, data, path, vars, extParas) {
    //path && (meta.path = path)
    if (meta instanceof Array) {
      for (var _i = 0; _i < meta.length; _i++) {
        var sub = meta[_i];
        var currentPath = path;
        if (!sub) continue;

        if (sub._for) {
          sub._vars = vars;
          sub._extParas = extParas;
          sub.path = "".concat(path, ".").concat(sub._name);
          continue;
        }

        if (sub._function) {
          sub._vars = vars;
          sub._extParas = extParas;
          sub.path = "".concat(path, ".").concat(sub._name);
          continue;
        }

        var subType = (0, _typeof2.default)(sub),
            isExpression = false,
            isMeta = false;

        if (subType == 'string' && _utils.default.expression.isExpression(sub)) {
          sub = _this.execExpression(sub, data, path, vars, extParas);
          isExpression = true;
          if (sub && sub._isMeta === true) isMeta = true;

          if (sub && sub._isMeta === true) {
            isMeta = true;
            meta[_i] = sub.value;
          } else {
            meta[_i] = sub;
          }
        }

        if (!_this.needUpdate(sub)) continue;

        if (isExpression && !isMeta) {
          continue;
        }

        subType = (0, _typeof2.default)(sub);

        if (sub instanceof Array) {
          currentPath = "".concat(path, ".").concat(_i);

          _this.updateMeta(sub, data, currentPath, vars, extParas);

          continue;
        }

        if (sub._name && sub.component) {
          currentPath = "".concat(path, ".").concat(sub._name);
          sub.path = currentPath;

          _this.updateMeta(sub, data, currentPath, vars, extParas);

          continue;
        }

        currentPath = "".concat(path, ".").concat(_i);

        _this.updateMeta(sub, data, currentPath, vars, extParas);
      }

      return;
    }

    var excludeProps = meta._excludeProps;

    if (excludeProps && _utils.default.expression.isExpression(excludeProps)) {
      excludeProps = _this.execExpression(excludeProps, data, path, vars, extParas);
    }

    if (excludeProps && excludeProps instanceof Array) {
      for (var i = 0; i < excludeProps.length; i++) {
        if (meta[excludeProps[i]]) delete meta[excludeProps[i]];
      }

      delete meta['_excludeProps'];
    }

    var keys = Object.keys(meta),
        j,
        key;

    var _loop = function _loop() {
      var v = meta[key],
          t = (0, _typeof2.default)(v),
          currentPath = "".concat(path, ".").concat(key);
      if (!v) return "continue";
      if (key == '_vars' || key == '_extParas') return "continue";
      var isExpression = false,
          isMeta = false;

      if (t == 'string' && _utils.default.expression.isExpression(v)) {
        isExpression = true;
        v = _this.execExpression(v, data, currentPath, vars, extParas);

        if (key == '...' && v && (0, _typeof2.default)(v) == 'object') {
          Object.keys(v).forEach(function (kk) {
            meta[kk] = v[kk];
          });
          delete meta['...'];
        } else {
          if (v && v._isMeta === true) {
            isMeta = true;
            meta[key] = v.value;
          } else {
            meta[key] = v;
          }
        }
      }

      if (!_this.needUpdate(v)) return "continue";

      if (v._for) {
        v._vars = vars;
        v._extParas = extParas;
        v.path = "".concat(path, ".").concat(key, ".").concat(v._name);
        return "continue";
      }

      if (v._function) {
        v._vars = vars;
        v._extParas = extParas;
        v.path = "".concat(path, ".").concat(key, ".").concat(v._name);
        return "continue";
      }

      if (isExpression && !isMeta) {
        return "continue";
      }

      if (v._name && v.component) {
        v.path = "".concat(path, ".").concat(key, ".").concat(v._name);

        _this.updateMeta(v, data, "".concat(path, ".").concat(key, ".").concat(v._name), vars, extParas);

        return "continue";
      }

      if (v instanceof Array) {
        _this.updateMeta(v, data, currentPath, vars, extParas);

        return "continue";
      }

      _this.updateMeta(v, data, currentPath, vars, extParas);
    };

    for (j = 0; key = keys[j++];) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  });
  (0, _defineProperty2.default)(this, "getMeta", function (path, propertys, data, vars, extParas) {
    var meta = common.getMeta(_this.appInfo, path, propertys, _this.component.props.appQuery);

    if (!path) {
      var metaMap = common.getMetaMap(_this.appInfo, _this.component.props.appQuery);
      path = metaMap.keySeq().toList().find(function (o) {
        return o.indexOf('.') == -1;
      });
    }

    if (!data) data = common.getField(_this.injections.getState());
    meta._power = undefined;
    meta._for = undefined;
    meta._function = undefined;
    meta.path = path;
    if (vars) meta._vars = vars;

    _this.updateMeta(meta, data, path, vars, extParas);

    return meta;
  });
  (0, _defineProperty2.default)(this, "gm", this.getMeta);
  (0, _defineProperty2.default)(this, "gs", this.getState);
  (0, _defineProperty2.default)(this, "ss", this.setState);
  (0, _defineProperty2.default)(this, "context", _context.default);
  this.appInfo = option.appInfo;
  this.meta = (0, _immutable.fromJS)(option.appInfo.view);
  var plugins = option.plugins;
  this.cache = {};
  common.setMeta(option.appInfo, plugins);
};

exports.default = action;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/actionFactory.js":
/*!***************************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/actionFactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var actionFactory =
/*#__PURE__*/
function () {
  function actionFactory() {
    (0, _classCallCheck2.default)(this, actionFactory);
    this.actions = {};
  }

  (0, _createClass2.default)(actionFactory, [{
    key: "getActions",
    value: function getActions() {
      return this.actions;
    }
  }, {
    key: "registerAction",
    value: function registerAction(name, action, isFunction) {
      if (this.actions[name]) {
        console.log("Action already exists. name: ".concat(name, ", please ignore!"));
      }

      if (isFunction) {
        action._isFunction = true;
      }

      this.actions[name] = action;
    }
  }, {
    key: "registerActions",
    value: function registerActions(actions) {
      var _this = this;

      if (!actions || actions.length == 0) return;
      actions.forEach(function (c) {
        return _this.registerAction(c.name, c.action, c.isFunction);
      });
    }
  }, {
    key: "getAction",
    value: function getAction(name) {
      if (!name) throw "Action name cannot be empty";
      var action = this.actions[name];

      if (!action) {
        throw "Can't find action,name:".concat(name);
      }

      return action;
    }
  }, {
    key: "asyncGetAction",
    value: function asyncGetAction(name) {
      var _this2 = this;

      if (!name) throw "Action name cannot be empty";
      return new Promise(function (resolve, reject) {
        var getAction = function getAction() {
          setTimeout(function () {
            if (_this2.actions[name]) {
              resolve(_this2.actions[name]);
            } else {
              getAction();
            }
          }, 0);
        };

        getAction();
      });
    }
  }]);
  return actionFactory;
}();

var instance = new actionFactory();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/actionMixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/actionMixin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionMixin;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./action */ "./node_modules/@makajs/meta-engine/lib/action.js"));

var _actionFactory = _interopRequireDefault(__webpack_require__(/*! ./actionFactory */ "./node_modules/@makajs/meta-engine/lib/actionFactory.js"));

var isPromise = function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

var functionWrapper = function functionWrapper(fn, base) {
  var wrapper = function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var that = base.getAllAction() || this;

    var beforeRet = fn._before && fn._before.apply(that, args);

    if (beforeRet === false || isPromise(beforeRet)) {} else if (typeof beforeRet == 'function') {
      return beforeRet;
    } else {
      var ret = fn.apply(that, args);

      if (isPromise(ret)) {
        return new Promise(function (resolve, reject) {
          ret.then(function (realRet) {
            if (fn._after) {
              realRet = fn._after.apply(that, (args || []).concat(ret));
            }

            resolve(realRet);
          }).catch(function (e) {
            return reject(e);
          });
        });
      } else {
        if (fn._after) {
          return fn._after.apply(that, (args || []).concat(ret));
        } else return ret;
      }
    }
  };

  wrapper.before = function (beforeFn) {
    fn._before = beforeFn;
  };

  wrapper.after = function (afterFn) {
    fn._after = afterFn;
  };

  wrapper.real = fn;
  return wrapper;
};

function actionMixin() {
  for (var _len2 = arguments.length, mixins = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    mixins[_key2] = arguments[_key2];
  }

  return function (target) {
    return function (option) {
      var ret = {};
      var mixinInstances = {};
      var base = new _action.default(option);
      Object.keys(base).forEach(function (key) {
        if (typeof base[key] == 'function' && key != 'getAllAction') {
          base[key] = functionWrapper(base[key], base);
        }
      });
      mixinInstances.base = base;

      if (mixins && mixins.length > 0) {
        mixins.forEach(function (m) {
          if (m != 'base') {
            var actCls, act;

            if (typeof m == 'string') {
              actCls = _actionFactory.default.getAction(m);

              if ((0, _typeof2.default)(actCls) == 'object') {
                mixinInstances[m] = actCls;
              } else if (typeof actCls == 'function') {
                if (actCls._isFunction) {
                  mixinInstances[m] = actCls;
                } else {
                  act = new actCls((0, _objectSpread2.default)({}, option, {
                    mixins: mixinInstances
                  }));

                  if (act) {
                    mixinInstances[m] = act;
                  }
                }
              }
            } else if ((0, _typeof2.default)(m) == 'object' && m.name) {
              actCls = _actionFactory.default.getAction(m.name);

              if ((0, _typeof2.default)(actCls) == 'object') {
                mixinInstances[m] = actCls;
              } else if (typeof actCls == 'function') {
                if (actCls._isFunction) {
                  mixinInstances[m] = actCls;
                } else {
                  act = new actCls((0, _objectSpread2.default)({}, option, m.option, {
                    mixins: mixinInstances
                  }));

                  if (act) {
                    mixinInstances[m.name] = act;
                  }
                }
              }
            }
          }
        });
      }

      var curr = new target((0, _objectSpread2.default)({}, option, {
        mixins: mixinInstances
      }));
      Object.keys(curr).forEach(function (key) {
        if (typeof curr[key] == 'function') {
          curr[key] = functionWrapper(curr[key], base);
        }
      });
      var ret = curr;
      Object.keys(mixinInstances).forEach(function (k) {
        return ret[k] = mixinInstances[k];
      });
      var retWrapper = {
        getDirectFuns: function getDirectFuns() {
          return ret;
        }
      };
      retWrapper.initView = ret.base.initView;
      base.config({
        metaHandlers: ret
      });
      return retWrapper;
    };
  };
}

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/common.js":
/*!********************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/common.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uid = uid;
exports.setMeta = setMeta;
exports.setMetaForce = setMetaForce;
exports.getMeta = getMeta;
exports.getMetaMap = getMetaMap;
exports.getField = getField;
exports.getFields = getFields;
exports.setField = setField;
exports.setFields = setFields;
exports.updateField = updateField;

var _immutable = _interopRequireWildcard(__webpack_require__(/*! immutable */ "immutable"));

var _utils = _interopRequireWildcard(__webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js"));

var _templateFactory = _interopRequireDefault(__webpack_require__(/*! ./templateFactory */ "./node_modules/@makajs/meta-engine/lib/templateFactory.js"));

var globalObj = (0, _utils.getGlobal)();
var parsePath = _utils.path.parsePath;
var cache = {
  meta: (0, _immutable.Map)(),
  plugin: (0, _immutable.Map)()
};

globalObj['__getCache'] = function () {
  return cache;
};

var uids = {};

function uid(appName) {
  if (!uids[appName]) {
    uids[appName] = 0;
    return appName + uids[appName]++;
  } else {
    return uids[appName]++;
  }
}

function setMeta(appInfo) {
  var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var appQuery = arguments.length > 2 ? arguments[2] : undefined;
  if (!appInfo || !appInfo.view) return;
  var appName = appInfo.name;
  if (cache.meta.has(appName) && JSON.stringify(plugins.sort()) === JSON.stringify(cache.plugin.get(appName).toJS().sort())) return;
  cache.plugin = cache.plugin.set(appName, (0, _immutable.fromJS)(plugins));
  setMetaForce(appName, appInfo.view, appQuery);
}

function setMetaForce(appName, meta, appQuery) {
  if (!appName || !meta) return;
  meta = (0, _immutable.fromJS)(meta);
  meta = parseMetaTemplate(meta);
  var parsed = parseMeta(meta, appName);
  meta = parsed.meta;
  var map = parsed.map;

  if (appQuery) {
    cache.meta = cache.meta.setIn([appName, appQuery, 'meta'], meta).setIn([appName, appQuery, 'metaMap'], map);
  } else {
    cache.meta = cache.meta.setIn([appName, 'meta'], meta).setIn([appName, 'metaMap'], map);
  }
}

function getMeta(appInfo, fullpath, propertys, appQuery) {
  var meta = appQuery ? cache.meta.getIn([appInfo.name, appQuery, 'meta']) || cache.meta.getIn([appInfo.name, 'meta']) : cache.meta.getIn([appInfo.name, 'meta']);
  var metaMap = appQuery ? cache.meta.getIn([appInfo.name, appQuery, 'metaMap']) || cache.meta.getIn([appInfo.name, 'metaMap']) : cache.meta.getIn([appInfo.name, 'metaMap']);

  if (!fullpath) {
    return meta.toJS();
  }

  var parsedPath = parsePath(fullpath),
      vars = parsedPath.vars;
  var path = metaMap.get(parsedPath.path);
  var currentMeta = path ? meta.getIn(path.split('.')) : meta; //Empty attribute, get all attributes under the path

  if (!propertys) return currentMeta.toJS();
  var ret = {}; //Attribute is an array

  if (propertys instanceof Array) {
    var i, p;

    for (i = 0; p = propertys[i++];) {
      var val = currentMeta.getIn(p.split('.'));
      ret[p] = val && val.toJS ? val.toJS() : val;
    }
    /*
    propertys.forEach(p => {
        let val = currentMeta.getIn(p.split('.'))
        ret[p] = (val && val.toJS) ? val.toJS() : val
    })*/


    return ret;
  } //Attribute is a string


  if (typeof propertys == 'string') {
    var _val = currentMeta.getIn(propertys.split('.'));

    return _val && _val.toJS ? _val.toJS() : _val;
  }
}

function getMetaMap(appInfo, appQuery) {
  return cache.meta.getIn([appInfo.name, appQuery, 'metaMap']) || cache.meta.getIn([appInfo.name, 'metaMap']);
}

function getField(state, fieldPath) {
  var r;

  if (!fieldPath) {
    r = state.get('data');
    return r && r.toJS ? r.toJS() : r;
  }

  r = fieldPath instanceof Array ? state.getIn(fieldPath) : state.getIn(fieldPath.split('.'));
  return r && r.toJS ? r.toJS() : r;
}

function getFields(state, fieldPaths) {
  var ret = {};
  fieldPaths.forEach(function (o) {
    return ret[o] = getField(state, o);
  });
  return ret;
}

function setField(state, fieldPath, value) {
  if (fieldPath instanceof Array) {
    return state.setIn(fieldPath, value && (0, _immutable.fromJS)(value));
  } else {
    return state.setIn(fieldPath.split('.'), value && (0, _immutable.fromJS)(value));
  }
}

function setFields(state, values) {
  var keys = Object.keys(values),
      i,
      key;

  for (i = 0; key = keys[i++];) {
    state = setField(state, key, values[key]);
  }

  return state;
}

function updateField(state, fieldPath, fn) {
  if (fieldPath instanceof Array) {
    return state.updateIn(fieldPath, fn);
  } else {
    return state.updateIn(fieldPath.split('.'), fn);
  }
}

function parseMetaTemplate(meta) {
  var templates = [];

  var parseProp = function parseProp(propValue, path) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }

    if (propValue.get('component')) {
      var component = _utils.default.string.trim(propValue.get('component'));

      var template = _templateFactory.default.getTemplate(component);

      if (template) {
        templates.unshift([path, template]);
      }
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p);

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentPath = path ? "".concat(path, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);
          parseProp(c, currentPath);
        });
      } else {
        var currentPath = path ? "".concat(path, ".").concat(p) : p;
        parseProp(v, currentPath);
      }
    });
  };

  parseProp(meta, '');
  templates.forEach(function (t) {
    var seg = t[0].split('.');
    var curr = seg == '' ? (0, _immutable.fromJS)(t[1](meta.toJS())) : (0, _immutable.fromJS)(t[1](meta.getIn(seg).toJS()));

    if (curr instanceof _immutable.default.List && meta.getIn(seg.slice(0, seg.length - 1)) instanceof _immutable.default.List) {
      var index = seg.pop();
      meta = meta.updateIn(seg, function (ll) {
        ll = ll.remove(index);
        curr.forEach(function (o) {
          ll = ll.insert(index, o);
          index++;
        });
        return ll;
      });
    } else if (seg == '') {
      meta = curr;
    } else {
      meta = meta.setIn(seg, curr);
    }
  });
  return meta;
}

function parseMetaTemplate1(meta) {
  var templates = [];

  var parseProp = function parseProp(propValue, path) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }

    if (propValue.get('component')) {
      var component = _utils.default.string.trim(propValue.get('component'));

      var template = _templateFactory.default.getTemplate(component);

      if (template) {
        templates.unshift([path, (0, _immutable.fromJS)(template(propValue.toJS()))]);
        return;
      }
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p);

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentPath = path ? "".concat(path, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);
          parseProp(c, currentPath);
        });
      } else {
        var currentPath = path ? "".concat(path, ".").concat(p) : p;
        parseProp(v, currentPath);
      }
    });
  };

  parseProp(meta, '');
  templates.forEach(function (t) {
    var seg = t[0].split('.');

    if (t[1] instanceof _immutable.default.List && meta.getIn(seg.slice(0, seg.length - 1)) instanceof _immutable.default.List) {
      var index = seg.pop();
      meta = meta.updateIn(seg, function (ll) {
        ll = ll.remove(index);
        t[1].forEach(function (o) {
          ll = ll.insert(index, o);
          index++;
        });
        return ll;
      });
    } else if (seg == '') {
      meta = t[1];
    } else {
      meta = meta.setIn(seg, t[1]);
    }
  });
  return meta;
}

function parseMeta(meta, appName) {
  var map = (0, _immutable.Map)();

  var parseProp = function parseProp(propValue, parentPath, parentRealPath) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }
    /*if (propValue.get('name') && propValue.get('component')) {
        const name = utils.string.trim(propValue.get('name'))
        parentPath = parentPath ? `${parentPath}.${name}` : name
        ret = ret.set(parentPath, parentRealPath)
    }
    else*/


    if (propValue.get('component') || propValue.get('_for') || propValue.get('_function')) {
      var name = uid(appName) + '';
      meta = meta.setIn(parentRealPath ? parentRealPath.split('.').concat('_name') : ['_name'], name);
      parentPath = parentPath ? "".concat(parentPath, ".").concat(name) : name;
      map = map.set(parentPath, parentRealPath);
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p),
          currentPath = parentPath ? "".concat(parentPath, ".").concat(p) : p;

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentRealPath = parentRealPath ? "".concat(parentRealPath, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);

          if (c && c.get && (c.get('component') || c.get('_for') || c.get('_function'))) {
            parseProp(c, "".concat(currentPath), currentRealPath);
          } else {
            parseProp(c, "".concat(currentPath, ".").concat(index), currentRealPath);
          }
        });
      } else {
        var currentRealPath = parentRealPath ? "".concat(parentRealPath, ".").concat(p) : p;
        parseProp(v, "".concat(currentPath), currentRealPath);
      }
    });
  };

  parseProp(meta, '', '');
  return {
    meta: meta,
    map: map
  };
}

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/componentFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/componentFactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var componentFactory =
/*#__PURE__*/
function () {
  function componentFactory() {
    (0, _classCallCheck2.default)(this, componentFactory);
    this.components = {};
    this.appComponents = {};
  }

  (0, _createClass2.default)(componentFactory, [{
    key: "getComponents",
    value: function getComponents() {
      return this.components;
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(name, component) {
      if (this.components[name]) {
        console.log("Component already exists. name: ".concat(name, ",please ignore!"));
        return;
      }

      this.components[name] = component;
    }
    /*
    registerAppComponent(appName, componentName, component) {
        this.appComponents[appName] = this.appComponents[appName] || {}
        this.appComponents[appName].components = this.appComponents[appName].components || {}
        if (this.appComponents[appName].components[componentName])
            throw `existed. app:${appName}, name: ${componentName}`
        this.appComponents[appName].components[componentName] = component
    }*/

  }, {
    key: "registerComponents",
    value: function registerComponents(components) {
      var _this = this;

      if (!components || components.length == 0) return;
      components.forEach(function (c) {
        return _this.registerComponent(c.name, c.component);
      });
    }
  }, {
    key: "getComponent",
    value: function getComponent(name) {
      if (!name) throw 'component name can not null';

      if (name === 'Fragment') {
        return _react.default.Fragment;
      }

      if (name === "Suspense") return _react.default.Suspense;
      /*
      if (name.substring(0, 2) == '::') {
          if(name.substr(2))
              return  name.substr(2) 
          else
              throw `No components. name: ::`
      }*/

      var nameSegs = name.split('.'),
          firstSeg = nameSegs[0];
      /*
      if (this.appComponents && this.appComponents[appName] && this.appComponents[appName].components && this.appComponents[appName].components[firstSeg]) {
          var com = this.appComponents[appName].components[name]
            if (com && nameSegs.length > 1) {
              com = this.findChild(com, nameSegs)
          }
            if (com) return com
        }*/

      var component = this.components[firstSeg];

      if (component && nameSegs.length > 1) {
        component = this.findChild(component, nameSegs);
      }

      if (!component) {
        return name; //throw `No components. name: ${name}`
      }

      return component;
    }
  }, {
    key: "findChild",
    value: function findChild(component, nameSegs) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nameSegs.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var s = _step.value;

          if (!component[s]) {
            component = undefined;
            return;
          }

          component = component[s];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return component;
    }
  }]);
  return componentFactory;
}();

var instance = new componentFactory();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/config.js":
/*!********************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/config.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _options = {};

function config(options) {
  Object.assign(_options, options);
}

config.current = _options;
var _default = config;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var context =
/*#__PURE__*/
function () {
  function context() {
    (0, _classCallCheck2.default)(this, context);
    this._context = {};
  }

  (0, _createClass2.default)(context, [{
    key: "set",
    value: function set(key, value) {
      if (value) window.localStorage[key] = JSON.stringify(value);else window.localStorage.removeItem(key);
      this._context[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._context[key] || window.localStorage[key] && JSON.parse(window.localStorage[key]);
    }
  }]);
  return context;
}();

var instance = new context();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/defaultComponent.js":
/*!******************************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/defaultComponent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _wrapper = _interopRequireDefault(__webpack_require__(/*! ./wrapper */ "./node_modules/@makajs/meta-engine/lib/wrapper.js"));

var _dec, _class;

var C = (_dec = (0, _wrapper.default)(), _dec(_class =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(C, _Component);

  function C() {
    (0, _classCallCheck2.default)(this, C);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(C).apply(this, arguments));
  }

  (0, _createClass2.default)(C, [{
    key: "render",
    value: function render() {
      return this.props.maka((0, _objectSpread2.default)({}, this.props, {
        path: 'root'
      }));
    }
  }]);
  return C;
}(_react.Component)) || _class);
exports.default = C;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
Object.defineProperty(exports, "action", {
  enumerable: true,
  get: function get() {
    return _action.default;
  }
});
Object.defineProperty(exports, "appInstances", {
  enumerable: true,
  get: function get() {
    return _action.appInstances;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
Object.defineProperty(exports, "wrapper", {
  enumerable: true,
  get: function get() {
    return _wrapper.default;
  }
});
Object.defineProperty(exports, "actionMixin", {
  enumerable: true,
  get: function get() {
    return _actionMixin.default;
  }
});
Object.defineProperty(exports, "componentFactory", {
  enumerable: true,
  get: function get() {
    return _componentFactory.default;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function get() {
    return _templateFactory.default;
  }
});
Object.defineProperty(exports, "actionFactory", {
  enumerable: true,
  get: function get() {
    return _actionFactory.default;
  }
});
Object.defineProperty(exports, "defaultComponent", {
  enumerable: true,
  get: function get() {
    return _defaultComponent.default;
  }
});
Object.defineProperty(exports, "rootElement", {
  enumerable: true,
  get: function get() {
    return _rootElement.default;
  }
});
Object.defineProperty(exports, "contextManager", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});
exports.defaultReducer = exports.defaultAction = exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/meta-engine/lib/config.js"));

var _action = _interopRequireWildcard(__webpack_require__(/*! ./action */ "./node_modules/@makajs/meta-engine/lib/action.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@makajs/meta-engine/lib/reducer.js"));

var _wrapper = _interopRequireDefault(__webpack_require__(/*! ./wrapper */ "./node_modules/@makajs/meta-engine/lib/wrapper.js"));

var _actionMixin = _interopRequireDefault(__webpack_require__(/*! ./actionMixin */ "./node_modules/@makajs/meta-engine/lib/actionMixin.js"));

var _componentFactory = _interopRequireDefault(__webpack_require__(/*! ./componentFactory */ "./node_modules/@makajs/meta-engine/lib/componentFactory.js"));

var _templateFactory = _interopRequireDefault(__webpack_require__(/*! ./templateFactory */ "./node_modules/@makajs/meta-engine/lib/templateFactory.js"));

var _actionFactory = _interopRequireDefault(__webpack_require__(/*! ./actionFactory */ "./node_modules/@makajs/meta-engine/lib/actionFactory.js"));

var _defaultComponent = _interopRequireDefault(__webpack_require__(/*! ./defaultComponent */ "./node_modules/@makajs/meta-engine/lib/defaultComponent.js"));

var _rootElement = _interopRequireDefault(__webpack_require__(/*! ./rootElement */ "./node_modules/@makajs/meta-engine/lib/rootElement.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/@makajs/meta-engine/lib/context.js"));

var defaultAction = _action.default;
exports.defaultAction = defaultAction;
var defaultReducer = _reducer.default;
exports.defaultReducer = defaultReducer;
var _default = {
  config: _config.default,
  action: _action.default,
  reducer: _reducer.default,
  wrapper: _wrapper.default,
  actionMixin: _actionMixin.default,
  componentFactory: _componentFactory.default,
  templateFactory: _templateFactory.default,
  actionFactory: _actionFactory.default,
  defaultComponent: _defaultComponent.default,
  defaultAction: defaultAction,
  defaultReducer: defaultReducer,
  rootElement: _rootElement.default,
  contextManager: _context.default,
  appInstances: _action.appInstances
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/maka.js":
/*!******************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/maka.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _componentFactory = _interopRequireDefault(__webpack_require__(/*! ./componentFactory */ "./node_modules/@makajs/meta-engine/lib/componentFactory.js"));

var _memoize = _interopRequireDefault(__webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/meta-engine/lib/config.js"));

function parseMetaProps(meta, props, data) {
  var ret = {};
  Object.keys(meta).forEach(function (key) {
    var v = meta[key],
        t = (0, _typeof2.default)(v);

    if (v instanceof Array) {
      ret[key] = [];
      var i, c;

      for (i = 0; c = v[i++];) {
        if (c instanceof Array) {
          ret[key] = c;
        } else {
          var mc = metaToComponent(c, props, data);
          if (mc instanceof Array) ret[key] = ret[key].concat(mc);else ret[key].push(mc);
        }
      }
    } else if (t == 'object') {
      if (v && v._notParse) {
        delete v._notParse;
        ret[key] = v;
      } else {
        ret[key] = metaToComponent(v, props, data);
      }
    } else {
      ret[key] = v;
    }
  });
  return ret;
}

var toFunction = (0, _memoize.default)(function (v) {
  return new Function(v);
});

function metaToComponent(meta, props, data) {
  if (!meta) return meta;
  var metaType = (0, _typeof2.default)(meta);

  if (metaType == 'object' && meta['$$typeof']) {
    return meta;
  } else if (metaType == 'object' && meta['_isAMomentObject']) {
    return meta;
  } else if (metaType == 'object' && meta instanceof Date) {
    return meta;
  } else if (metaType == 'object' && meta instanceof Promise) {
    return meta;
  } else if (metaType == 'object') {
    if (meta.component || meta._for || meta._function) {
      if (meta._visible === false) return null;
      if (typeof meta._visible === 'function' && meta._visible() === false) return null;

      if (typeof meta.component == 'function') {
        meta.component = meta.component();
      } //_for: 'data.list' or 'data.list[_index].sub'


      if (meta._for) {
        var _for = meta._for,
            paraNames = ['data', '$props$'],
            paraValues = [data, props];

        if (meta['_vars']) {
          paraNames.push('_vars');
          paraValues.push(meta['_vars']);
        }

        if (meta._extParas) {
          var extParaKeys = Object.keys(meta._extParas);

          if (extParaKeys && extParaKeys.length > 0) {
            extParaKeys.forEach(function (k) {
              paraNames.push(k);
              paraValues.push(meta._extParas[k]);
            });
          }
        }

        var tmp = _for.replace('in', '#').split('#'),
            dsPath = _utils.default.string.trim(tmp[1]),
            extParaNames = tmp[0].replace('(', '').replace(')', '').split(','),
            express = "".concat(dsPath.replace(/\$/g, '$props$.'));

        if (_config.default.current.transformer) {
          express = _config.default.current.transformer(express);
        }

        var items = (0, _construct2.default)(Function, paraNames.concat(["return ".concat(dsPath.replace(/\$/g, '$props$.'))])).apply(null, paraValues);
        if (!items || items.length == 0) return;
        return items.map(function (o, index) {
          var _vars = meta['_vars'];
          _vars = !_vars ? index + '' : ',' + index; //let _vars = meta['_vars'] || []
          //_vars.push({ _index: index, _item: o })

          var _extParas = meta._extParas || {};

          _extParas[_utils.default.string.trim(extParaNames[0])] = o;
          extParaNames.length > 1 && (_extParas[_utils.default.string.trim(extParaNames[1])] = index);
          var childMeta = props.base.gm(meta.path, undefined, data, _vars, _extParas);
          delete childMeta._for;
          return metaToComponent(childMeta, props, data);
        });
      } //_function: '(arg1,arg2)


      if (meta._function !== undefined) {
        var _function = meta._function.replace('(', '').replace(')', '');

        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var _extParas = meta._extParas || {};

          _function.split(',').forEach(function (paraName, index) {
            _extParas[_utils.default.string.trim(paraName)] = args[index];
          });

          var childMeta = props.base.gm(meta.path, undefined, data, meta['_vars'], _extParas);
          childMeta._function = undefined;

          if (childMeta._firstReturn) {
            return childMeta._firstReturn;
          } else {
            return metaToComponent(childMeta, props, data);
          }
        };
      }

      var _decorator = meta._decorator;

      var componentName = meta.component,
          component = _componentFactory.default.getComponent(componentName);

      var allProps = parseMetaProps(meta, props, data);

      if (!allProps.key) {
        //let strVars = (meta._vars && meta._vars.map(o => o._index).join(',')) || ''
        var strVars = meta._vars || '';
        allProps.key = strVars ? meta.path + ',' + strVars : meta.path;
      }

      delete allProps.component;
      delete allProps._name;
      delete allProps.path;
      delete allProps._decorator; //allProps = omit(allProps, ['clearAppState', 'component', 'name', 'getDirectFuns', 'initView', 'payload'])

      if (componentName == 'AppLoader') {
        var propKeys = Object.keys(props),
            i,
            key;

        for (i = 0; key = propKeys[i++];) {
          if (allProps[key] == undefined) {
            allProps[key] = props[key];
          }
        } //Remove attributes that are not required by some components


        delete allProps.clearAppState;
        delete allProps.getDirectFuns;
        delete allProps.initView;
        delete allProps.payload;
        delete allProps.componentWillMount;
        delete allProps.componentDidMount;
        delete allProps.shouldComponentUpdate;
        delete allProps.componentWillReceiveProps;
        delete allProps.componentWillUpdate;
        delete allProps.componentDidCatch;
        delete allProps.componentWillUnmount;
        delete allProps.componentDidUpdate;
        delete allProps.unmount;
        if (!allProps.appName) return null;
        /*if (allProps._notRender === true && !existsApp(allProps.appName)) {
            return null
        }*/

        allProps.key = allProps.appName;
        allProps.name = allProps.appName;
        return _react.default.createElement(component, allProps);
      }

      if (_decorator) return _decorator(_react.default.createElement(component, allProps));else return _react.default.createElement(component, allProps);
    } else {
      return parseMetaProps(meta, props, data);
    }
  } else {
    return meta;
  }
}

var MonkeyKing = function MonkeyKing(props) {
  var base = props.base;
  var data = base.gs();
  if (!data) return null;
  return metaToComponent(base.gm(undefined, undefined, data), props, data);
};

var _default = MonkeyKing;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/reducer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/reducer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = creator;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _immutable = _interopRequireWildcard(__webpack_require__(/*! immutable */ "immutable"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/@makajs/meta-engine/lib/context.js"));

var common = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/@makajs/meta-engine/lib/common.js"));

var reducer = function reducer(_option) {
  var _this = this;

  (0, _classCallCheck2.default)(this, reducer);
  (0, _defineProperty2.default)(this, "init", function (state, option) {
    var _option$data = option.data,
        data = _option$data === void 0 ? {} : _option$data;
    return _this.initByImmutable(state, {
      data: _immutable.default.fromJS(data)
    });
  });
  (0, _defineProperty2.default)(this, "initByImmutable", function (state, option) {
    var data = option.data; //Clear the attribute in the state that is not @@, which is added by maka-app-loader

    var keys = [];
    state.mapKeys(function (key) {
      if (key.indexOf('@@') === -1) keys.push(key);
    });
    keys.forEach(function (key) {
      state = state.remove(key);
    }); //Setting status

    return state.set('data', data);
  });
  (0, _defineProperty2.default)(this, "getMeta", common.getMeta);
  (0, _defineProperty2.default)(this, "getField", common.getField);
  (0, _defineProperty2.default)(this, "getFields", common.getFields);
  (0, _defineProperty2.default)(this, "setField", common.setField);
  (0, _defineProperty2.default)(this, "setFields", common.setFields);
  (0, _defineProperty2.default)(this, "gm", common.getMeta);
  (0, _defineProperty2.default)(this, "gf", common.getField);
  (0, _defineProperty2.default)(this, "gfs", common.getFields);
  (0, _defineProperty2.default)(this, "sf", common.setField);
  (0, _defineProperty2.default)(this, "sfs", common.setFields);
  (0, _defineProperty2.default)(this, "context", _context.default);
  this.appInfo = _option.appInfo;
};

function creator(option) {
  return new reducer(option);
}

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/rootElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/rootElement.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appLoader = _interopRequireDefault(__webpack_require__(/*! @makajs/app-loader */ "./node_modules/@makajs/app-loader/lib/index.js"));

var _utils = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");

var Root =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Root, _React$PureComponent);

  function Root(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Root);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Root).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listen", function (location, action) {
      var full = location.pathname + location.search;

      if ((!full || full == '/') && _this.props.appName == _this.state.currentApp) {
        _utils.navigate.redirect(_this.state.currentApp);

        return;
      }

      full = full.substr(0, 1) == '/' ? full.substr(1) : full;
      var target = full.split('/')[0];
      if (target == _this.state.currentApp) return;

      _this.setState({
        currentApp: target
      });
    });

    _utils.navigate.listen(_this.listen);

    var currentApp,
        _location = _utils.navigate.getLocation(),
        _full = _location.pathname + _location.search;

    if (!_full || _full == '/') {
      currentApp = props.appName;
    } else {
      _full = _full.substr(0, 1) == '/' ? _full.substr(1) : _full;
      currentApp = _full.split('/')[0];
    }

    _this.state = {
      currentApp: currentApp
    };
    if (!_full || _full == '/') _utils.navigate.redirect('/' + currentApp);else _utils.navigate.redirect('/' + _full);
    return _this;
  }

  (0, _createClass2.default)(Root, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _utils.navigate.unlisten(this.listen);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_appLoader.default.AppLoader, {
        name: this.state.currentApp
      });
    }
  }]);
  return Root;
}(_react.default.PureComponent);

exports.default = Root;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/templateFactory.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/templateFactory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var templateFactory =
/*#__PURE__*/
function () {
  function templateFactory() {
    (0, _classCallCheck2.default)(this, templateFactory);
    this.templates = {};
  }

  (0, _createClass2.default)(templateFactory, [{
    key: "getTemplates",
    value: function getTemplates() {
      return this.templates;
    }
  }, {
    key: "registerTemplate",
    value: function registerTemplate(name, templateHandler) {
      if (this.templates[name]) {
        console.log("Template already exists. name: ".concat(name, ",please ignore!"));
        return;
      }

      this.templates[name] = templateHandler;
    }
  }, {
    key: "registerTemplates",
    value: function registerTemplates(templates) {
      var _this = this;

      if (!templates || templates.length == 0) return;
      templates.forEach(function (t) {
        return _this.registerTemplate(t.name, t.templateHandler);
      });
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(name) {
      if (!name) throw 'template name can not null';
      var nameSegs = name.split('.'),
          firstSeg = nameSegs[0];
      var template = this.templates[firstSeg];

      if (template && nameSegs.length > 1) {
        template = this.findChild(template, nameSegs);
      }

      return template;
    }
  }, {
    key: "findChild",
    value: function findChild(template, nameSegs) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nameSegs.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var s = _step.value;

          if (!template[s]) {
            template = undefined;
            return;
          }

          template = template[s];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return template;
    }
  }]);
  return templateFactory;
}();

var instance = new templateFactory();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/meta-engine/lib/wrapper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@makajs/meta-engine/lib/wrapper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapper;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(/*! react-addons-shallow-compare */ "./node_modules/react-addons-shallow-compare/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _maka = _interopRequireDefault(__webpack_require__(/*! ./maka */ "./node_modules/@makajs/meta-engine/lib/maka.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@makajs/meta-engine/lib/config.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js"));

function wrapper(option) {
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        (0, _inherits2.default)(internal, _Component);

        function internal(props) {
          var _this;

          (0, _classCallCheck2.default)(this, internal);
          _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(internal).call(this, props));
          _this.state = {
            hasError: false
          };
          return _this;
        }

        (0, _createClass2.default)(internal, [{
          key: "componentWillMount",
          value: function componentWillMount() {
            this.props.componentWillMount && this.props.componentWillMount();
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.props.initView && this.props.initView(this);
            this.props.componentDidMount && this.props.componentDidMount();
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.shouldComponentUpdate && this.props.shouldComponentUpdate(nextProps, nextState) === true) return true;

            if (nextState.hasError != this.state.hasError) {
              return true;
            }

            return (0, _reactAddonsShallowCompare.default)(this, nextProps, nextState);
            /*
            for (var o in this.props) {
            	if (this.props[o] != nextProps[o]) {
            		return true
            	}
            }
            return false
            */
          }
        }, {
          key: "componentWillReceiveProps",
          value: function componentWillReceiveProps(nextProps) {
            if (this.state.hasError) {
              this.setState({
                hasError: false,
                error: undefined
              });
            }

            this.props.componentWillReceiveProps && this.props.componentWillReceiveProps(nextProps);
          }
        }, {
          key: "componentWillUpdate",
          value: function componentWillUpdate(nextProps, nextState) {
            this.props.componentWillUpdate && this.props.componentWillUpdate(nextProps, nextState);
          }
        }, {
          key: "componentDidCatch",
          value: function componentDidCatch(error, info) {
            _utils.default.exception.error(error);

            this.setState({
              hasError: true,
              error: error
            });
            this.props.componentDidCatch && this.props.componentDidCatch(error, info);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.props.unmount && this.props.unmount();
            this.props.componentWillUnmount && this.props.componentWillUnmount();
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            this.props.componentDidUpdate && this.props.componentDidUpdate();
          }
        }, {
          key: "render",
          value: function render() {
            if (this.state.hasError) {
              return _react.default.createElement("div", {
                style: {
                  color: 'red'
                }
              }, this.state.error && this.state.error.message);
            }

            if (this.props.notRender === true || this.props._notRender === true) return null;
            if (!WrappedComponent) return null;
            if (!this.props.payload || !this.props.payload.get('data')) return null;
            if (this.props.payload.getIn(['data', '_notRender']) === true) return null;
            return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.props, {
              maka: _maka.default
            }));
          }
        }]);
        return internal;
      }(_react.Component)
    );
  };
}

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/env/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/env/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getGlobal = void 0;

var getGlobal = function getGlobal() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

exports.getGlobal = getGlobal;
var _default = {
  getGlobal: getGlobal
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/exception/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/exception/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
exports.clear = clear;
exports.getExceptions = getExceptions;
exports.default = void 0;
var exceptions = [];

function error(err) {
  console.error(err);
  exceptions.unshift(err);
}

function clear() {
  exceptions.splice(0, exceptions.length);
}

function getExceptions() {
  return exceptions;
}

var _default = {
  error: error,
  clear: clear,
  getExceptions: getExceptions
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/expression/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/expression/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getExpressionBody = exports.isExpression = void 0;

var _memoize = _interopRequireDefault(__webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js"));

// {{***}} 
var reg = /^\s*\{{2}([\s\S]+)\}{2}\s*$/m; // {{{***}}}

var reg1 = /^\s*\{{3}([\s\S]+)\}{3}\s*$/m;
var isExpression = (0, _memoize.default)(function (v) {
  return reg.test(v) || reg1.test(v);
});
exports.isExpression = isExpression;
var getExpressionBody = (0, _memoize.default)(function (v) {
  if (reg1.test(v)) {
    return v.replace(reg1, function (word, group) {
      return group;
    });
  }

  if (reg.test(v)) {
    return "return " + v.replace(reg, function (word, group) {
      return group;
    });
  }

  return v;
});
exports.getExpressionBody = getExpressionBody;
var _default = {
  isExpression: isExpression,
  getExpressionBody: getExpressionBody
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/fetch/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/fetch/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.get = get;
exports.post = post;
exports.formPost = formPost;
exports.test = test;
exports.mock = mock;
exports.isMockUrl = isMockUrl;
exports.getAccessToken = getAccessToken;
exports.setAccessToken = setAccessToken;
exports.clearAccessToken = clearAccessToken;
exports.mockApi = exports.mockData = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _env = __webpack_require__(/*! ../env */ "./node_modules/@makajs/utils/lib/env/index.js");

var mockApi = {};
exports.mockApi = mockApi;
var mockData = {};
exports.mockData = mockData;
var _options = {};
(0, _env.getGlobal)().self = (0, _env.getGlobal)();

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

function config(options) {
  Object.assign(_options, options);

  if (options.token) {
    setAccessToken(options.token);
  }
}

function mock(url, handler) {
  /*url = {
  	'test/url1':()=>{},
  	'test/url2':()=>{}
  }*/
  if (url && (0, _typeof2.default)(url) == "object") {
    Object.keys(url).forEach(function (u) {
      mock(u, url[u]);
    });
  } //url=v1/*/
  //handler={
  //	person:()=>{}
  //}
  //
  else if (url.indexOf("*") != -1) {
      var paths = url.split('*');
      var pre = paths.shift();
      Object.keys(handler).forEach(function (key) {
        var theUrl = pre + key + paths.join('*');
        mock(theUrl, handler[key]);
      });
    } else {
      mockApi[url] = handler;
    }
}

function isMockUrl(url) {
  if (!_options.excludeMockUrls) return _options.mock;

  if (_options.excludeMockUrls.find(function (o) {
    if (o === url) return true;
    if (o.test && o.test(url)) return true;
    return false;
  })) {
    return !_options.mock;
  } else {
    return _options.mock;
  }
}

function get(url, headers, option) {
  if (!option || option.ignoreAOP !== true) {
    before();
  }

  if (isMockUrl(url)) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (getAccessToken()) {
            headers = headers ? (0, _objectSpread2.default)({}, headers, {
              token: getAccessToken()
            }) : {
              token: getAccessToken()
            };
          }

          var resp = mockApi[url](headers);

          if (resp.then && resp.catch) {
            resp.then(function (r) {
              resp = after(resp, url, undefined, headers);
              return resolve(resp);
            }).catch(reject);
            return resp;
          } else if (!option || option.ignoreAOP !== true) {
            resp = after(resp, url, undefined, headers);
          }

          resolve(resp);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }

  headers = {
    method: 'GET',
    headers: (0, _objectSpread2.default)({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, headers, {
      token: getAccessToken(),
      "Authorization": getAccessToken() ? "Bearer " + getAccessToken() : ''
    })
  };
  return new Promise(function (resolve, reject) {
    fetch(url, headers).then(function (response) {
      var json = {};
      var contentType = response.headers.get('Content-Type').split(";")[0];

      if (contentType == 'application/json') {
        json = response.json();
      } else if (contentType == 'application/octet-stream') {
        response.blob().then(function (blob) {
          var a = document.createElement('a');
          var url = window.URL.createObjectURL(blob);
          var name = response.headers.get('Content-Disposition');
          name = name.split('name=')[1].split(';')[0];
          a.href = url;
          a.download = name;
          a.click();
          window.URL.revokeObjectURL(url);
        });
      }

      return json;
    }).then(function (responseJson) {
      responseJson = after(responseJson, url, undefined, headers);
      resolve(responseJson);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function post(url, data, headers, option) {
  if (!option || option.ignoreAOP !== true) {
    before(url, data, headers);
  }

  if (isMockUrl(url)) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (getAccessToken()) {
            headers = headers ? (0, _objectSpread2.default)({}, headers, {
              token: getAccessToken()
            }) : {
              token: getAccessToken()
            };
          }

          var mockFun = mockApi[url];

          if (!mockFun || typeof mockFun != 'function') {
            throw url + ':handler is invalid';
          }

          var resp = mockFun(data, headers);

          if (resp.then && resp.catch) {
            resp.then(function (r) {
              r = after(r, url, data, headers);
              return resolve(r);
            }).catch(reject);
            return resp;
          } else if (!option || option.ignoreAOP !== true) {
            resp = after(resp, url, data, headers);
          }

          resolve(resp);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }

  headers = {
    method: 'POST',
    headers: (0, _objectSpread2.default)({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, headers, {
      token: getAccessToken(),
      "Authorization": getAccessToken() ? "Bearer " + getAccessToken() : ''
    }),
    body: JSON.stringify(data)
  };

  if (option && option.type == 'file') {
    headers.body = option.body;
    delete headers.headers['Content-Type'];
  }

  return new Promise(function (resolve, reject) {
    fetch(url, headers).then(function (response) {
      var json = {};
      var contentType = response.headers.get('Content-Type').split(";")[0];
      var contentDisposition = response.headers.get('Content-Disposition');

      if (contentType == 'application/json') {
        json = response.json();
      } else if (contentDisposition != null) {
        response.blob().then(function (blob) {
          var a = document.createElement('a');
          var url = window.URL.createObjectURL(blob);
          var name = response.headers.get('Content-Disposition');
          name = name.split('name=')[1].split(';')[0];
          a.href = url;
          a.download = decodeURI(name);
          a.click();
          window.URL.revokeObjectURL(url);
        });
      }

      return json;
    }).then(function (responseJson) {
      responseJson = after(responseJson, url, data, headers);
      resolve(responseJson);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function formPost(url, data, isFree) {
  data = data || {};
  var accessToken = getAccessToken(); //toke in sessionStorage

  if (!!accessToken && !isFree) {
    data.token = accessToken;
  }

  var postForm = document.createElement("form"); //form object

  postForm.method = "post";
  postForm.action = url;
  postForm.target = "_blank";
  var keys = Object.keys(data);

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var k = _keys[_i];
    var emailInput = document.createElement("input"); //email input

    emailInput.setAttribute("name", k);
    emailInput.setAttribute("value", data[k]);
    postForm.appendChild(emailInput);
  }

  document.body.appendChild(postForm);
  postForm.submit();
  document.body.removeChild(postForm);
}

function test(url, data, result) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(result);
    }, 0);
  });
}

function before(url, data, headers) {
  if (_options.before) {
    _options.before(url, data, headers);
  }
}

function after(response, url, data, headers) {
  if (_options.after) {
    return _options.after(response, url, data, headers);
  }

  return response;
}

function getAccessToken() {
  return sessionStorage['_accessToken'] || '';
}

function setAccessToken(token) {
  sessionStorage['_accessToken'] = token;
}

function clearAccessToken() {
  sessionStorage['_accessToken'] = '';
}

var _default = {
  config: config,
  get: get,
  post: post,
  formPost: formPost,
  test: test,
  mockData: mockData,
  mock: mock,
  mockApi: mockApi,
  isMockUrl: isMockUrl,
  getAccessToken: getAccessToken,
  setAccessToken: setAccessToken,
  clearAccessToken: clearAccessToken
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
});
Object.defineProperty(exports, "path", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "expression", {
  enumerable: true,
  get: function get() {
    return _expression.default;
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function get() {
    return _string.default;
  }
});
Object.defineProperty(exports, "exception", {
  enumerable: true,
  get: function get() {
    return _exception.default;
  }
});
Object.defineProperty(exports, "navigate", {
  enumerable: true,
  get: function get() {
    return _navigate.default;
  }
});
Object.defineProperty(exports, "getGlobal", {
  enumerable: true,
  get: function get() {
    return _env.getGlobal;
  }
});
exports.default = void 0;

var _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ "./node_modules/@makajs/utils/lib/fetch/index.js"));

var _path = _interopRequireDefault(__webpack_require__(/*! ./path */ "./node_modules/@makajs/utils/lib/path/index.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@makajs/utils/lib/expression/index.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./node_modules/@makajs/utils/lib/string/index.js"));

var _exception = _interopRequireDefault(__webpack_require__(/*! ./exception */ "./node_modules/@makajs/utils/lib/exception/index.js"));

var _navigate = _interopRequireDefault(__webpack_require__(/*! ./navigate */ "./node_modules/@makajs/utils/lib/navigate/index.js"));

var _env = __webpack_require__(/*! ./env */ "./node_modules/@makajs/utils/lib/env/index.js");

var _default = {
  fetch: _fetch.default,
  string: _string.default,
  path: _path.default,
  expression: _expression.default,
  exception: _exception.default,
  navigate: _navigate.default,
  getGlobal: _env.getGlobal
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/navigate/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/navigate/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var createHashHistory = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js").createHashHistory;

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

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/path/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/path/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.parsePath = exports.existsParamsInPath = void 0;

var _memoize = _interopRequireDefault(__webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js"));

var existsParamsInPath = function existsParamsInPath(path) {
  return /,/.test(path);
};

exports.existsParamsInPath = existsParamsInPath;
var parsePath = (0, _memoize.default)(function (path) {
  if (!path) return;

  if (path.indexOf(',') == -1) {
    return {
      path: path.replace(/\s/g, '')
    };
  } else {
    var segments = path.split(","),
        vars = segments.slice(1);
    return {
      path: segments[0].replace(/\s/g, ''),
      vars: vars.map(function (o) {
        return o.replace(/\s/g, '');
      })
    };
  }
});
exports.parsePath = parsePath;
var _default = {
  existsParamsInPath: existsParamsInPath,
  parsePath: parsePath
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@makajs/utils/lib/string/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@makajs/utils/lib/string/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/shallowEqual.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-addons-shallow-compare/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-addons-shallow-compare/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowCompare
 */



var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/fbjs/lib/shallowEqual.js");

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return (
    !shallowEqual(instance.props, nextProps) ||
    !shallowEqual(instance.state, nextState)
  );
}

module.exports = shallowCompare;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, appLoader, utils, metaEngine, init, config, load, getComponent, getAction, asyncGetAction, registerComponent, registerAction, registerTemplate, removeApp, registerPlugin, removePlugin, actionMixin, appInstances, setHoc, fetch, navigate, createElement, createAppElement, render, appFactory, pluginFactory, actionFactory, componentFactory, templateFactory, store, context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAction", function() { return getAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncGetAction", function() { return asyncGetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerComponent", function() { return registerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return registerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerTemplate", function() { return registerTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeApp", function() { return removeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return registerPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePlugin", function() { return removePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionMixin", function() { return actionMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInstances", function() { return appInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHoc", function() { return setHoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAppElement", function() { return createAppElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appFactory", function() { return appFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginFactory", function() { return pluginFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionFactory", function() { return actionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFactory", function() { return componentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @makajs/app-loader */ "./node_modules/@makajs/app-loader/lib/index.js");
/* harmony import */ var _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "appLoader", function() { return _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _makajs_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @makajs/utils */ "./node_modules/@makajs/utils/lib/index.js");
/* harmony import */ var _makajs_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_makajs_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _makajs_utils__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @makajs/meta-engine */ "./node_modules/@makajs/meta-engine/lib/index.js");
/* harmony import */ var _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "metaEngine", function() { return _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a; });









var globalObj = _makajs_utils__WEBPACK_IMPORTED_MODULE_7___default.a.getGlobal();
globalObj.self = globalObj;
_makajs_utils__WEBPACK_IMPORTED_MODULE_7___default.a.fetch.config({
  mock: true
});
var store = _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.init({
  defaultComponent: _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.defaultComponent,
  defaultAction: _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.defaultAction,
  defaultReducer: _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.defaultReducer,
  componentWrapper: _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper
});
_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.componentFactory.registerComponent("AppLoader", _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.AppLoader);
var Hoc,
    isProduction = false,
    createElement = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement,
    getComponent = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.componentFactory.getComponent.bind(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.componentFactory),
    getAction = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory.getAction.bind(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory),
    asyncGetAction = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory.asyncGetAction.bind(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory),
    registerComponent = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.componentFactory.registerComponent.bind(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.componentFactory),
    registerAction = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory.registerAction.bind(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory),
    registerTemplate = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.templateFactory.registerTemplate.bind(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.templateFactory),
    removeApp = _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.removeApp,
    registerPlugin = _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.registerPlugin.bind(_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.pluginFactory),
    removePlugin = _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.removePlugin.bind(_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.pluginFactory),
    actionMixin = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionMixin,
    fetch = _makajs_utils__WEBPACK_IMPORTED_MODULE_7___default.a.fetch,
    navigate = _makajs_utils__WEBPACK_IMPORTED_MODULE_7___default.a.navigate,
    appInstances = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.appInstances,
    actionFactory = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.actionFactory,
    componentFactory = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.componentFactory,
    templateFactory = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.templateFactory,
    pluginFactory = _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.pluginFactory,
    appFactory = _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.appFactory,
    context = _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.contextManager; //Initialize maka environment

function init(option) {
  _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.init(option);
} //Configure the metadata engine


function config(option) {
  _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.config(option);
} //load app


function load(_x) {
  return _load.apply(this, arguments);
}

function _load() {
  _load = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(app) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.loadApp(app, isProduction);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _load.apply(this, arguments);
}

var createAppElementInternal = function createAppElementInternal(appName, appProps) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.AppLoader, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      name: appName
    }, appProps, props)));
  };
};

function createAppElement(appName, appProps) {
  var Internal = createAppElementInternal(appName, appProps);

  if (Hoc) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Hoc, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Internal, null));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Internal, null);
  }
} //Set high order component


function setHoc(hoc) {
  Hoc = hoc;
}

function render(_x2, _x3, _x4) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(appName, targetDomId, disableRoute) {
    var props,
        appNameNoQuery,
        _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            props = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            appNameNoQuery = appName.split('?')[0];

            if (_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.existsApp(appNameNoQuery)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 5;
            return _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.loadApp(appNameNoQuery, isProduction);

          case 5:
            if (!disableRoute) {
              _context2.next = 8;
              break;
            }

            if (Hoc) {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Hoc, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
                store: store
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.AppLoader, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
                name: appName
              }, props)))), document.getElementById(targetDomId));
            } else {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
                store: store
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a.AppLoader, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
                name: appName
              }, props))), document.getElementById(targetDomId));
            }

            return _context2.abrupt("return");

          case 8:
            if (Hoc) {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Hoc, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
                store: store
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.rootElement, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
                appName: appName
              }, props)))), document.getElementById(targetDomId));
            } else {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
                store: store
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a.rootElement, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
                appName: appName
              }, props))), document.getElementById(targetDomId));
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _render.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  appLoader: _makajs_app_loader__WEBPACK_IMPORTED_MODULE_6___default.a,
  utils: _makajs_utils__WEBPACK_IMPORTED_MODULE_7___default.a,
  metaEngine: _makajs_meta_engine__WEBPACK_IMPORTED_MODULE_8___default.a,
  init: init,
  config: config,
  load: load,
  getComponent: getComponent,
  getAction: getAction,
  asyncGetAction: asyncGetAction,
  registerComponent: registerComponent,
  registerAction: registerAction,
  registerTemplate: registerTemplate,
  removeApp: removeApp,
  registerPlugin: registerPlugin,
  removePlugin: removePlugin,
  actionMixin: actionMixin,
  appInstances: appInstances,
  setHoc: setHoc,
  fetch: fetch,
  navigate: navigate,
  createElement: createElement,
  createAppElement: createAppElement,
  render: render,
  appFactory: appFactory,
  pluginFactory: pluginFactory,
  actionFactory: actionFactory,
  componentFactory: componentFactory,
  templateFactory: templateFactory,
  store: store,
  context: context
});


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "immutable":
/*!******************************************************************************************************!*\
  !*** external {"root":"Immutable","commonjs2":"immutable","commonjs":"immutable","amd":"immutable"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-redux":
/*!*************************************************************************************************************!*\
  !*** external {"root":"ReactRedux","commonjs2":"react-redux","commonjs":"react-redux","amd":"react-redux"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ }),

/***/ "redux":
/*!**************************************************************************************!*\
  !*** external {"root":"Redux","commonjs2":"redux","commonjs":"redux","amd":"redux"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ })

/******/ });
});
//# sourceMappingURL=maka-sdk.js.map