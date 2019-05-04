"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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