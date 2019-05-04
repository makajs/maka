"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _react = _interopRequireDefault(require("react"));

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