"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadApp;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _appFactory = _interopRequireDefault(require("./appFactory"));

var _config = _interopRequireDefault(require("./config"));

var isProduction = process.env.isProduction;

var appConfig = function appConfig(apps, options) {
  Object.keys(options).forEach(function (key) {
    var reg = new RegExp("^".concat(key == '*' ? '.*' : key, "$"));
    Object.keys(apps).forEach(function (appName) {
      if (appName != 'config') {
        if (reg.test(appName)) {
          apps[appName].config && apps[appName].config(options[key]);
        }
      }
    });
  });
};

function fixName(name) {
  if (name.indexOf('@') == -1) return name;
  return name.replace('@', '').replace('makajs', 'maka').replace('/', '-');
}

function getUrl(app) {
  if (typeof app == 'string') {
    app = fixName(app);
    if (_config.default.appUrls) return _config.default.appUrls[app] || app;else return app;
  } else if ((0, _typeof2.default)(app) == 'object') {
    if (app.url) return app.url;else return getUrl(app.name);
  }
}

function findNameByUrl(url) {
  if (_config.default.appUrls) {
    var hit = _config.default.appUrls.find(function (o) {
      return o.url == url;
    });

    return hit ? hit.name : hit;
  } else {
    return url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, '');
  }
}

function loadApp(app) {
  var urls = []; //options = {}

  /*
  if (typeof app == 'string') {
      urls.push(getUrl(app))
      urls.push(fixName(app))
  }
  else if (app instanceof Array) {
      app.forEach(o => {
          if (typeof o == 'string') {
              urls.push(fixName(o))
          }
          else if (typeof o == 'object' && o.url) {
              urls.push(o.url)
              if (o.name && o.option)
                  options[fixName(o.name)] = o.option
          }
      })
  }
  else if (typeof app == 'object' && app.url) {
      urls.push(o.url)
      if (app.name && app.option)
          options[fixName(app.name)] = app.option
  }
  */

  if (app instanceof Array) {
    app.forEach(function (o) {
      return urls.push(getUrl(o));
    });
  } else {
    urls.push(app);
  }

  if (!window.require || urls.length == 0) return Promise.resolve(null);
  return new Promise(function (resolve, reject) {
    /*
    urls.forEach(url => {
        var appName = url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, ''),
            pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
        window[`__pub_${appName}__`] = pub
    })
    */
    urls = urls.filter(function (url) {
      /*
      var appName = url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, ''),
          pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
      */
      var appName = findNameByUrl(url);
      var pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : '';
      window["__pub_".concat(appName, "__")] = pub;
      return !_appFactory.default.existsApp(appName);
    });
    urls = urls.map(function (u) {
      return isProduction ? u + '.min' : u;
    }); //const appCount = urls.length
    //urls = urls.concat(urls.map(u => `css!${u}`))

    if (!urls || urls.length == 0) {
      resolve(null);
      return;
    }

    window.require(urls,
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _len,
          args,
          _key,
          apps,
          appNames,
          i,
          cssUrls,
          _args2 = arguments;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args2[_key];
              }

              apps = args.reduce(function (prev, curr) {
                return curr ? (0, _objectSpread3.default)({}, prev, (0, _defineProperty2.default)({}, curr.name, curr)) : curr;
              }, {});
              appNames = Object.keys(apps);
              i = 0;

            case 4:
              if (!(i < appNames.length)) {
                _context2.next = 12;
                break;
              }

              _context2.t0 = apps[appNames[i]].beforeRegister;

              if (!_context2.t0) {
                _context2.next = 9;
                break;
              }

              _context2.next = 9;
              return apps[appNames[i]].beforeRegister();

            case 9:
              i++;
              _context2.next = 4;
              break;

            case 12:
              _appFactory.default.registerApps(apps);
              /*
              appConfig(appFactory.getApps(), {
                  "*": { apps: { ...appFactory.getApps() } },
                  ...options
              })
              */


              cssUrls = urls.map(function (u) {
                return "css!".concat(u);
              });

              window.require(cssUrls,
              /*#__PURE__*/
              (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee() {
                var i;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        i = 0;

                      case 1:
                        if (!(i < appNames.length)) {
                          _context.next = 9;
                          break;
                        }

                        _context.t0 = apps[appNames[i]].afterRegister;

                        if (!_context.t0) {
                          _context.next = 6;
                          break;
                        }

                        _context.next = 6;
                        return apps[appNames[i]].afterRegister();

                      case 6:
                        i++;
                        _context.next = 1;
                        break;

                      case 9:
                        resolve(null);

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              })));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));
  });
}