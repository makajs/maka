"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _react = _interopRequireDefault(require("react"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var componentFactory = /*#__PURE__*/function () {
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
      var _iterator = _createForOfIteratorHelper(nameSegs.slice(1)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;

          if (!component[s]) {
            component = undefined;
            return;
          }

          component = component[s];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return component;
    }
  }]);
  return componentFactory;
}();

var instance = new componentFactory();
var _default = instance;
exports.default = _default;