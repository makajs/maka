"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadApp;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _appFactory = _interopRequireDefault(require("./appFactory"));

var _config = _interopRequireDefault(require("./config"));

var _utils = require("@makajs/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var globalObj = (0, _utils.getGlobal)();
var isProduction = process.env.isProduction;

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

          if (baseUrl.indexOf('/maka-sdk/') != -1) {
            baseUrl = baseUrl.substr(0, baseUrl.indexOf('/maka-sdk/') + 1);
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
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
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
                  return curr ? _objectSpread({}, prev, (0, _defineProperty2.default)({}, curr.name, curr)) : curr;
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
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }());
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