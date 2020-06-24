"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var templateFactory = /*#__PURE__*/function () {
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
      var _iterator = _createForOfIteratorHelper(nameSegs.slice(1)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;

          if (!template[s]) {
            template = undefined;
            return;
          }

          template = template[s];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return template;
    }
  }]);
  return templateFactory;
}();

var instance = new templateFactory();
var _default = instance;
exports.default = _default;