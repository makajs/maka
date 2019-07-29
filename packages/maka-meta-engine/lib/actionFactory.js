"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = require("path");

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
        return;
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