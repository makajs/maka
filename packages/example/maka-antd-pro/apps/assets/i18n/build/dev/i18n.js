(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["maka", "react"], factory);
	else if(typeof exports === 'object')
		exports["maka-app-i18n"] = factory(require("maka"), require("react"));
	else
		root["maka-app-i18n"] = factory(root["maka"], root["react"]);
})((function(){
    return (typeof window !== 'undefined' && window ) ||
    (typeof global !== 'undefined' && global ) 
}()), function(__WEBPACK_EXTERNAL_MODULE_maka__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	__webpack_require__.p = window['__pub_i18n__'];
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!********************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*******************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/construct.js":
/*!************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/construct.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction _construct(Parent, args, Class) {\n  if (isNativeReflectConstruct()) {\n    module.exports = _construct = Reflect.construct;\n  } else {\n    module.exports = _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n      var Constructor = Function.bind.apply(Parent, a);\n      var instance = new Constructor();\n      if (Class) setPrototypeOf(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\nmodule.exports = _construct;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/construct.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass.js":
/*!**************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/extends.js":
/*!**********************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/extends.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits.js":
/*!***********************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!******************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!********************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js":
/*!***************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!**************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!****************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!********************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/typeof.js":
/*!*********************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js":
/*!*******************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://maka-app-i18n//usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ \"./node_modules/antd/lib/date-picker/locale/en_US.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _en_US[\"default\"];\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/calendar/locale/en_US.js?");

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/zh_CN.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/zh_CN */ \"./node_modules/antd/lib/date-picker/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _zh_CN[\"default\"];\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/calendar/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _en_US = _interopRequireDefault(__webpack_require__(/*! rc-calendar/lib/locale/en_US */ \"./node_modules/rc-calendar/lib/locale/en_US.js\"));\n\nvar _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ \"./node_modules/antd/lib/time-picker/locale/en_US.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// Merge into a locale object\nvar locale = {\n  lang: _extends({\n    placeholder: 'Select date',\n    rangePlaceholder: ['Start date', 'End date']\n  }, _en_US[\"default\"]),\n  timePickerLocale: _extends({}, _en_US2[\"default\"])\n}; // All settings at:\n// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json\n\nvar _default = locale;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/date-picker/locale/en_US.js?");

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/zh_CN.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/zh_CN.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! rc-calendar/lib/locale/zh_CN */ \"./node_modules/rc-calendar/lib/locale/zh_CN.js\"));\n\nvar _zh_CN2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/zh_CN */ \"./node_modules/antd/lib/time-picker/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar locale = {\n  lang: _extends({\n    placeholder: '请选择日期',\n    rangePlaceholder: ['开始日期', '结束日期']\n  }, _zh_CN[\"default\"]),\n  timePickerLocale: _extends({}, _zh_CN2[\"default\"])\n}; // should add whitespace between char in Button\n\nlocale.lang.ok = '确 定'; // All settings at:\n// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json\n\nvar _default = locale;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/date-picker/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ \"./node_modules/rc-pagination/lib/locale/en_US.js\"));\n\nvar _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ \"./node_modules/antd/lib/date-picker/locale/en_US.js\"));\n\nvar _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ \"./node_modules/antd/lib/time-picker/locale/en_US.js\"));\n\nvar _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ \"./node_modules/antd/lib/calendar/locale/en_US.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  locale: 'en',\n  Pagination: _en_US[\"default\"],\n  DatePicker: _en_US2[\"default\"],\n  TimePicker: _en_US3[\"default\"],\n  Calendar: _en_US4[\"default\"],\n  // locales for all comoponents\n  global: {\n    placeholder: 'Please select'\n  },\n  Table: {\n    filterTitle: 'Filter menu',\n    filterConfirm: 'OK',\n    filterReset: 'Reset',\n    emptyText: 'No data',\n    selectAll: 'Select current page',\n    selectInvert: 'Invert current page',\n    sortTitle: 'Sort'\n  },\n  Modal: {\n    okText: 'OK',\n    cancelText: 'Cancel',\n    justOkText: 'OK'\n  },\n  Popconfirm: {\n    okText: 'OK',\n    cancelText: 'Cancel'\n  },\n  Transfer: {\n    titles: ['', ''],\n    notFoundContent: 'Not Found',\n    searchPlaceholder: 'Search here',\n    itemUnit: 'item',\n    itemsUnit: 'items'\n  },\n  Select: {\n    notFoundContent: 'Not Found'\n  },\n  Upload: {\n    uploading: 'Uploading...',\n    removeFile: 'Remove file',\n    uploadError: 'Upload error',\n    previewFile: 'Preview file'\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/locale-provider/default.js?");

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _default2 = _interopRequireDefault(__webpack_require__(/*! ./default */ \"./node_modules/antd/lib/locale-provider/default.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _default2[\"default\"];\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/locale-provider/en_US.js?");

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/zh_CN.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/zh_CN */ \"./node_modules/rc-pagination/lib/locale/zh_CN.js\"));\n\nvar _zh_CN2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/zh_CN */ \"./node_modules/antd/lib/date-picker/locale/zh_CN.js\"));\n\nvar _zh_CN3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/zh_CN */ \"./node_modules/antd/lib/time-picker/locale/zh_CN.js\"));\n\nvar _zh_CN4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/zh_CN */ \"./node_modules/antd/lib/calendar/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  locale: 'zh-cn',\n  Pagination: _zh_CN[\"default\"],\n  DatePicker: _zh_CN2[\"default\"],\n  TimePicker: _zh_CN3[\"default\"],\n  Calendar: _zh_CN4[\"default\"],\n  // locales for all comoponents\n  global: {\n    placeholder: '请选择'\n  },\n  Table: {\n    filterTitle: '筛选',\n    filterConfirm: '确定',\n    filterReset: '重置',\n    emptyText: '暂无数据',\n    selectAll: '全选当页',\n    selectInvert: '反选当页',\n    sortTitle: '排序'\n  },\n  Modal: {\n    okText: '确定',\n    cancelText: '取消',\n    justOkText: '知道了'\n  },\n  Popconfirm: {\n    cancelText: '取消',\n    okText: '确定'\n  },\n  Transfer: {\n    notFoundContent: '无匹配结果',\n    searchPlaceholder: '请输入搜索内容',\n    itemUnit: '项',\n    itemsUnit: '项'\n  },\n  Select: {\n    notFoundContent: '无匹配结果'\n  },\n  Upload: {\n    uploading: '文件上传中',\n    removeFile: '删除文件',\n    uploadError: '上传错误',\n    previewFile: '预览文件'\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/locale-provider/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar locale = {\n  placeholder: 'Select time'\n};\nvar _default = locale;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/time-picker/locale/en_US.js?");

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/zh_CN.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/zh_CN.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar locale = {\n  placeholder: '请选择时间'\n};\nvar _default = locale;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/antd/lib/time-picker/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/deepmerge/dist/umd.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/umd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\nvar isMergeableObject = function isMergeableObject(value) {\n\treturn isNonNullObject(value)\n\t\t&& !isSpecial(value)\n};\n\nfunction isNonNullObject(value) {\n\treturn !!value && typeof value === 'object'\n}\n\nfunction isSpecial(value) {\n\tvar stringValue = Object.prototype.toString.call(value);\n\n\treturn stringValue === '[object RegExp]'\n\t\t|| stringValue === '[object Date]'\n\t\t|| isReactElement(value)\n}\n\n// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\nvar canUseSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;\n\nfunction isReactElement(value) {\n\treturn value.$$typeof === REACT_ELEMENT_TYPE\n}\n\nfunction emptyTarget(val) {\n\treturn Array.isArray(val) ? [] : {}\n}\n\nfunction cloneUnlessOtherwiseSpecified(value, options) {\n\treturn (options.clone !== false && options.isMergeableObject(value))\n\t\t? deepmerge(emptyTarget(value), value, options)\n\t\t: value\n}\n\nfunction defaultArrayMerge(target, source, options) {\n\treturn target.concat(source).map(function(element) {\n\t\treturn cloneUnlessOtherwiseSpecified(element, options)\n\t})\n}\n\nfunction mergeObject(target, source, options) {\n\tvar destination = {};\n\tif (options.isMergeableObject(target)) {\n\t\tObject.keys(target).forEach(function(key) {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(target[key], options);\n\t\t});\n\t}\n\tObject.keys(source).forEach(function(key) {\n\t\tif (!options.isMergeableObject(source[key]) || !target[key]) {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(source[key], options);\n\t\t} else {\n\t\t\tdestination[key] = deepmerge(target[key], source[key], options);\n\t\t}\n\t});\n\treturn destination\n}\n\nfunction deepmerge(target, source, options) {\n\toptions = options || {};\n\toptions.arrayMerge = options.arrayMerge || defaultArrayMerge;\n\toptions.isMergeableObject = options.isMergeableObject || isMergeableObject;\n\n\tvar sourceIsArray = Array.isArray(source);\n\tvar targetIsArray = Array.isArray(target);\n\tvar sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n\n\tif (!sourceAndTargetTypesMatch) {\n\t\treturn cloneUnlessOtherwiseSpecified(source, options)\n\t} else if (sourceIsArray) {\n\t\treturn options.arrayMerge(target, source, options)\n\t} else {\n\t\treturn mergeObject(target, source, options)\n\t}\n}\n\ndeepmerge.all = function deepmergeAll(array, options) {\n\tif (!Array.isArray(array)) {\n\t\tthrow new Error('first argument should be an array')\n\t}\n\n\treturn array.reduce(function(prev, next) {\n\t\treturn deepmerge(prev, next, options)\n\t}, {})\n};\n\nvar deepmerge_1 = deepmerge;\n\nreturn deepmerge_1;\n\n})));\n\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/deepmerge/dist/umd.js?");

/***/ }),

/***/ "./node_modules/rc-calendar/lib/locale/en_US.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-calendar/lib/locale/en_US.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports['default'] = {\n  today: 'Today',\n  now: 'Now',\n  backToToday: 'Back to today',\n  ok: 'Ok',\n  clear: 'Clear',\n  month: 'Month',\n  year: 'Year',\n  timeSelect: 'select time',\n  dateSelect: 'select date',\n  weekSelect: 'Choose a week',\n  monthSelect: 'Choose a month',\n  yearSelect: 'Choose a year',\n  decadeSelect: 'Choose a decade',\n  yearFormat: 'YYYY',\n  dateFormat: 'M/D/YYYY',\n  dayFormat: 'D',\n  dateTimeFormat: 'M/D/YYYY HH:mm:ss',\n  monthBeforeYear: true,\n  previousMonth: 'Previous month (PageUp)',\n  nextMonth: 'Next month (PageDown)',\n  previousYear: 'Last year (Control + left)',\n  nextYear: 'Next year (Control + right)',\n  previousDecade: 'Last decade',\n  nextDecade: 'Next decade',\n  previousCentury: 'Last century',\n  nextCentury: 'Next century'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/rc-calendar/lib/locale/en_US.js?");

/***/ }),

/***/ "./node_modules/rc-calendar/lib/locale/zh_CN.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-calendar/lib/locale/zh_CN.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports['default'] = {\n  today: '今天',\n  now: '此刻',\n  backToToday: '返回今天',\n  ok: '确定',\n  timeSelect: '选择时间',\n  dateSelect: '选择日期',\n  weekSelect: '选择周',\n  clear: '清除',\n  month: '月',\n  year: '年',\n  previousMonth: '上个月 (翻页上键)',\n  nextMonth: '下个月 (翻页下键)',\n  monthSelect: '选择月份',\n  yearSelect: '选择年份',\n  decadeSelect: '选择年代',\n  yearFormat: 'YYYY年',\n  dayFormat: 'D日',\n  dateFormat: 'YYYY年M月D日',\n  dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',\n  previousYear: '上一年 (Control键加左方向键)',\n  nextYear: '下一年 (Control键加右方向键)',\n  previousDecade: '上一年代',\n  nextDecade: '下一年代',\n  previousCentury: '上一世纪',\n  nextCentury: '下一世纪'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/rc-calendar/lib/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports['default'] = {\n  // Options.jsx\n  items_per_page: '/ page',\n  jump_to: 'Goto',\n  jump_to_confirm: 'confirm',\n  page: '',\n\n  // Pagination.jsx\n  prev_page: 'Previous Page',\n  next_page: 'Next Page',\n  prev_5: 'Previous 5 Pages',\n  next_5: 'Next 5 Pages',\n  prev_3: 'Previous 3 Pages',\n  next_3: 'Next 3 Pages'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/rc-pagination/lib/locale/en_US.js?");

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/zh_CN.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports['default'] = {\n  // Options.jsx\n  items_per_page: '条/页',\n  jump_to: '跳至',\n  jump_to_confirm: '确定',\n  page: '页',\n\n  // Pagination.jsx\n  prev_page: '上一页',\n  next_page: '下一页',\n  prev_5: '向前 5 页',\n  next_5: '向后 5 页',\n  prev_3: '向前 3 页',\n  next_3: '向后 3 页'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://maka-app-i18n/./node_modules/rc-pagination/lib/locale/zh_CN.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"i18n\",\"description\":\"i18n\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/i18n.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/i18n/issues\"},\"homepage\":\"https://github.com/makajs/i18n#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":[\"./apps\",\"../../base/component/antd\"],\"devDependencies\":{\"antd\":\"^3.11.6\",\"deepmerge\":\"^3.0.0\"}};\n\n//# sourceURL=webpack://maka-app-i18n/./package.json?");

/***/ }),

/***/ "./src/hoc.js":
/*!********************!*\
  !*** ./src/hoc.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hoc; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/extends */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/locale-provider/zh_CN */ \"./node_modules/antd/lib/locale-provider/zh_CN.js\");\n/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ \"./node_modules/antd/lib/locale-provider/en_US.js\");\n/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar hoc =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(hoc, _React$PureComponent);\n\n  function hoc(props) {\n    var _this;\n\n    _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, hoc);\n\n    _this = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(hoc).call(this, props));\n\n    _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), \"changeLocale\", function (locale) {\n      var i18n = Object(maka__WEBPACK_IMPORTED_MODULE_11__[\"getAction\"])('i18n');\n      i18n.locale = locale;\n\n      _this.setState({\n        locale: locale\n      });\n\n      setTimeout(function () {\n        var apps = maka__WEBPACK_IMPORTED_MODULE_11__[\"appInstances\"];\n        var keys = Object.keys(apps);\n        keys.forEach(function (k) {\n          var inst = apps[k].instance;\n          inst.forceUpdate();\n        });\n      });\n    });\n\n    var _i18n = Object(maka__WEBPACK_IMPORTED_MODULE_11__[\"getAction\"])('i18n');\n\n    _i18n.change = _this.changeLocale;\n    _this.state = {\n      locale: _i18n.locale\n    };\n    return _this;\n  }\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(hoc, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          children = _this$props.children,\n          other = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_this$props, [\"children\"]),\n          antd = Object(maka__WEBPACK_IMPORTED_MODULE_11__[\"getComponent\"])('antd'),\n          locale;\n\n      if (this.state.locale == 'zh-CN') {\n        locale = antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_12___default.a;\n      } else if (this.state.locale == 'en-US') {\n        locale = antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_13___default.a;\n      }\n\n      children = react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(children, _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, other, {\n        locale: this.state.locale\n      }));\n      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd.LocaleProvider, _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        locale: locale\n      }, this.props), children);\n    }\n  }]);\n\n  return hoc;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);\n\n\n\n//# sourceURL=webpack://maka-app-i18n/./src/hoc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: name, state, action, view, beforeRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"beforeRegister\", function() { return beforeRegister; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/construct */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/construct.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/umd.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resx */ \"./src/resx.js\");\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ \"./src/selector.js\");\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hoc */ \"./src/hoc.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\nvar _dec, _class, _temp;\n\n\n\n\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_7__.name;\n\nvar i18n = function i18n(code, option) {\n  if (!code) return '';\n  var i18n = Object(maka__WEBPACK_IMPORTED_MODULE_8__[\"getAction\"])('i18n');\n  var paramNames, paramValues, fn;\n\n  if (option) {\n    paramNames = Object.keys(option);\n\n    if (paramNames && paramNames.length > 0) {\n      paramValues = paramNames.map(function (n) {\n        return option[n];\n      });\n    }\n  }\n\n  if (paramNames && paramValues) {\n    fn = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4___default()(Function, _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(paramNames).concat([\"return `\".concat(i18n.resx[i18n.locale][code], \"`\")]));\n    var ret = fn(paramValues);\n    return ret === 'undefined' || !ret ? '' : ret;\n  } else {\n    fn = new Function(\"return `\".concat(i18n.resx[i18n.locale][code], \"`\"));\n    var ret = fn(paramValues);\n    return ret === 'undefined' || !ret ? '' : ret;\n  }\n};\n\ni18n.locale = 'zh-CN';\ni18n.resx = {};\n\ni18n.register = function (resx) {\n  i18n.resx = deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(i18n.resx, resx);\n};\n\ni18n.register(_resx__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nObject(maka__WEBPACK_IMPORTED_MODULE_8__[\"registerAction\"])('i18n', i18n, true);\nObject(maka__WEBPACK_IMPORTED_MODULE_8__[\"setHoc\"])(_hoc__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\nObject(maka__WEBPACK_IMPORTED_MODULE_8__[\"registerComponent\"])('LocaleSelector', _selector__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\nvar state = {\n  data: {}\n};\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_8__[\"actionMixin\"])('base', 'i18n'), _dec(_class = (_temp = function action(option) {\n  var _this = this;\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, action);\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"zhCN\", function () {\n    _this.i18n.change('zh-CN', _this);\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"enUS\", function () {\n    _this.i18n.change('en-US', _this);\n  });\n\n  Object.assign(this, option.mixins);\n}, _temp)) || _class);\nvar view = {\n  component: 'div',\n  className: 'i18n',\n  children: [{\n    component: 'antd.DatePicker'\n  }, {\n    component: 'div',\n    children: \"{{$i18n('test')}}\"\n  }, {\n    component: 'div',\n    children: \"{{$i18n('test1',{param: 'ok'})}}\"\n  }, {\n    component: 'button',\n    children: 'zh-CN',\n    onClick: '{{$zhCN}}'\n  }, {\n    component: 'button',\n    children: 'en-US',\n    onClick: '{{$enUS}}'\n  }, {\n    component: 'LocaleSelector'\n  }]\n};\n\nfunction beforeRegister() {\n  return _beforeRegister.apply(this, arguments);\n}\n\nfunction _beforeRegister() {\n  _beforeRegister = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(maka__WEBPACK_IMPORTED_MODULE_8__[\"load\"])(['antd']);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _beforeRegister.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack://maka-app-i18n/./src/index.js?");

/***/ }),

/***/ "./src/resx.js":
/*!*********************!*\
  !*** ./src/resx.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'zh-CN': {\n    test: '测试',\n    test1: '测试,${param}',\n    lang: '语言'\n  },\n  'en-US': {\n    test: 'test',\n    test1: 'test,${param}',\n    lang: 'language'\n  }\n});\n\n//# sourceURL=webpack://maka-app-i18n/./src/resx.js?");

/***/ }),

/***/ "./src/selector.js":
/*!*************************!*\
  !*** ./src/selector.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selector; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar locales = ['zh-CN', 'en-US'];\nvar languageLabels = {\n  'zh-CN': '简体中文',\n  'en-US': 'English'\n};\nvar languageIcons = {\n  'zh-CN': '🇨🇳',\n  'en-US': '🇬🇧'\n};\n\nvar selector =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(selector, _React$Component);\n\n  function selector(props) {\n    var _this;\n\n    _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, selector);\n\n    _this = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(selector).call(this, props));\n\n    _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"changeLang\", function (_ref) {\n      var key = _ref.key;\n      var i18n = Object(maka__WEBPACK_IMPORTED_MODULE_9__[\"getAction\"])('i18n');\n      i18n.change(key);\n\n      _this.forceUpdate();\n    });\n\n    return _this;\n  }\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(selector, [{\n    key: \"render\",\n    value: function render() {\n      var antd = Object(maka__WEBPACK_IMPORTED_MODULE_9__[\"getComponent\"])('antd');\n      var i18n = Object(maka__WEBPACK_IMPORTED_MODULE_9__[\"getAction\"])('i18n');\n\n      var _this$props = this.props,\n          overlayClassName = _this$props.overlayClassName,\n          other = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props, [\"overlayClassName\"]);\n\n      var menu = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd.Menu, {\n        selectedKeys: [i18n.locale],\n        onClick: this.changeLang\n      }, locales.map(function (o) {\n        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd.Menu.Item, {\n          key: o\n        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"span\", null, languageIcons[o]), ' ', languageLabels[o]);\n      }));\n      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd.Dropdown, {\n        overlayClassName: overlayClassName,\n        overlay: menu,\n        placement: \"bottomRight\"\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"span\", other, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd.Icon, {\n        type: \"global\",\n        title: i18n('lang')\n      })));\n    }\n  }]);\n\n  return selector;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n\n\n//# sourceURL=webpack://maka-app-i18n/./src/selector.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://maka-app-i18n/./src/style.less?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/makajs/maka/packages/example/maka-antd-pro/apps/assets/i18n/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://maka-app-i18n/multi_./src/index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://maka-app-i18n/external_%22maka%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://maka-app-i18n/external_%22react%22?");

/***/ })

/******/ });
});