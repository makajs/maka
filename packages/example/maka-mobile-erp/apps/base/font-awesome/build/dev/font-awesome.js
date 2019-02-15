(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("maka"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "maka", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-font-awesome"] = factory(require("react"), require("maka"), require("prop-types"));
	else
		root["MakaApp-font-awesome"] = factory(root["react"], root["maka"], root["prop-types"]);
})((function(){
    return (typeof window !== 'undefined' && window ) ||
    (typeof global !== 'undefined' && global ) 
}()), function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_maka__, __WEBPACK_EXTERNAL_MODULE_prop_types__) {
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
/******/ 	__webpack_require__.p = window['__pub_font-awesome__'];
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

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://MakaApp-font-awesome//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: name, state, action, view */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-fontawesome */ \"./node_modules/react-fontawesome/lib/index.js\");\n/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ \"./node_modules/font-awesome/css/font-awesome.css\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.less */ \"./style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _dec, _class;\n\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_1__.name;\nObject(maka__WEBPACK_IMPORTED_MODULE_2__[\"registerComponent\"])('FA', react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default.a);\nvar state = {\n  data: {}\n};\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_2__[\"actionMixin\"])('base'), _dec(_class = function action(option) {\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, action);\n\n  Object.assign(this, option.mixins);\n}) || _class);\nvar view = {\n  component: 'div',\n  className: 'zlj-fontawesome',\n  children: [{\n    component: 'FA',\n    style: {\n      fontSize: 30\n    },\n    name: 'rocket'\n  }, {\n    component: 'FA',\n    style: {\n      fontSize: 30\n    },\n    name: 'bath'\n  }, {\n    component: 'FA',\n    style: {\n      fontSize: 30\n    },\n    name: 'print'\n  }]\n};\n\n\n//# sourceURL=webpack://MakaApp-font-awesome/./index.js?");

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-font-awesome/./node_modules/font-awesome/css/font-awesome.css?");

/***/ }),

/***/ "./node_modules/react-fontawesome/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _screenReaderStyles = __webpack_require__(/*! ./screen-reader-styles */ \"./node_modules/react-fontawesome/lib/screen-reader-styles.js\");\n\nvar _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * A React component for the font-awesome icon library.\n *\n * @param {String} [ariaLabel] An extra accessibility label to put on the icon\n * @param {Boolean} [border=false] Whether or not to show a border radius\n * @param {String} [className] An extra set of CSS classes to add to the component\n * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module\n * @param {Boolean} [fixedWidth=false] Make buttons fixed width\n * @param {String} [flip=false] Flip the icon's orientation.\n * @param {Boolean} [inverse=false]Inverse the icon's color\n * @param {String} name Name of the icon to use\n * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly\n * @param {Number} [rotate] The degress to rotate the icon by\n * @param {String} [size] The icon scaling size\n * @param {Boolean} [spin=false] Spin the icon\n * @param {String} [stack] Stack an icon on top of another\n * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'\n * @module FontAwesome\n * @type {ReactClass}\n */\nvar FontAwesome = function (_React$Component) {\n  _inherits(FontAwesome, _React$Component);\n\n  function FontAwesome() {\n    _classCallCheck(this, FontAwesome);\n\n    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));\n\n    _this.displayName = 'FontAwesome';\n    return _this;\n  }\n\n  _createClass(FontAwesome, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          border = _props.border,\n          cssModule = _props.cssModule,\n          className = _props.className,\n          fixedWidth = _props.fixedWidth,\n          flip = _props.flip,\n          inverse = _props.inverse,\n          name = _props.name,\n          pulse = _props.pulse,\n          rotate = _props.rotate,\n          size = _props.size,\n          spin = _props.spin,\n          stack = _props.stack,\n          _props$tag = _props.tag,\n          tag = _props$tag === undefined ? 'span' : _props$tag,\n          ariaLabel = _props.ariaLabel,\n          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);\n\n      var classNames = [];\n\n      if (cssModule) {\n        classNames.push(cssModule['fa']);\n        classNames.push(cssModule['fa-' + name]);\n        size && classNames.push(cssModule['fa-' + size]);\n        spin && classNames.push(cssModule['fa-spin']);\n        pulse && classNames.push(cssModule['fa-pulse']);\n        border && classNames.push(cssModule['fa-border']);\n        fixedWidth && classNames.push(cssModule['fa-fw']);\n        inverse && classNames.push(cssModule['fa-inverse']);\n        flip && classNames.push(cssModule['fa-flip-' + flip]);\n        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);\n        stack && classNames.push(cssModule['fa-stack-' + stack]);\n      } else {\n        classNames.push('fa');\n        classNames.push('fa-' + name);\n        size && classNames.push('fa-' + size);\n        spin && classNames.push('fa-spin');\n        pulse && classNames.push('fa-pulse');\n        border && classNames.push('fa-border');\n        fixedWidth && classNames.push('fa-fw');\n        inverse && classNames.push('fa-inverse');\n        flip && classNames.push('fa-flip-' + flip);\n        rotate && classNames.push('fa-rotate-' + rotate);\n        stack && classNames.push('fa-stack-' + stack);\n      }\n\n      // Add any custom class names at the end.\n      className && classNames.push(className);\n      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);\n    }\n  }]);\n\n  return FontAwesome;\n}(_react2.default.Component);\n\nFontAwesome.propTypes = {\n  ariaLabel: _propTypes2.default.string,\n  border: _propTypes2.default.bool,\n  className: _propTypes2.default.string,\n  cssModule: _propTypes2.default.object,\n  fixedWidth: _propTypes2.default.bool,\n  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),\n  inverse: _propTypes2.default.bool,\n  name: _propTypes2.default.string.isRequired,\n  pulse: _propTypes2.default.bool,\n  rotate: _propTypes2.default.oneOf([90, 180, 270]),\n  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),\n  spin: _propTypes2.default.bool,\n  stack: _propTypes2.default.oneOf(['1x', '2x']),\n  tag: _propTypes2.default.string\n};\n\nexports.default = FontAwesome;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://MakaApp-font-awesome/./node_modules/react-fontawesome/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-fontawesome/lib/screen-reader-styles.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/screen-reader-styles.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  position: 'absolute',\n  width: '1px',\n  height: '1px',\n  padding: '0px',\n  margin: '-1px',\n  overflow: 'hidden',\n  clip: 'rect(0px, 0px, 0px, 0px)',\n  border: '0px'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://MakaApp-font-awesome/./node_modules/react-fontawesome/lib/screen-reader-styles.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"font-awesome\",\"description\":\"font-awesome\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/maka.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/maka/issues\"},\"homepage\":\"https://github.com/makajs/maka#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":\"./apps\",\"devDependencies\":{\"font-awesome\":\"*\",\"react-fontawesome\":\"*\"}};\n\n//# sourceURL=webpack://MakaApp-font-awesome/./package.json?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-font-awesome/./style.less?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/makajs/maka/packages/example/maka-mobile-erp/apps/base/font-awesome/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack://MakaApp-font-awesome/multi_./index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://MakaApp-font-awesome/external_%22maka%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://MakaApp-font-awesome/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://MakaApp-font-awesome/external_%22react%22?");

/***/ })

/******/ });
});