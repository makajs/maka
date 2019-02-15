(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-webapi"] = factory(require("maka"));
	else
		root["MakaApp-webapi"] = factory(root["maka"]);
})((function(){
    return (typeof window !== 'undefined' && window ) ||
    (typeof global !== 'undefined' && global ) 
}()), function(__WEBPACK_EXTERNAL_MODULE_maka__) {
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
/******/ 	__webpack_require__.p = window['__pub_webapi__'];
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!********************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*******************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!******************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!********************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js":
/*!***************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!********************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js":
/*!**************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() {\n  return this || (typeof self === \"object\" && self);\n})() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js":
/*!*******************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() {\n    return this || (typeof self === \"object\" && self);\n  })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack://MakaApp-webapi//usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"webapi\",\"description\":\"webapi\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/webapi.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/webapi/issues\"},\"homepage\":\"https://github.com/makajs/webapi#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":{\"/api/*\":\"http://127.0.0.1:3000\"},\"port\":8000},\"subAppDir\":[\"./apps\",\"../assets\",\"../base\"]};\n\n//# sourceURL=webpack://MakaApp-webapi/./package.json?");

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar zh_CN = {\n  'webapi.sign-in.invalid-credentials': '无效的用户名或者密码（缺省 用户:13334445556,密码:1）'\n};\nvar en_US = {\n  'webapi.sign-in.invalid-credentials': 'Incorrect username or password（default user:13334445556,password:1）'\n};\nObject(maka__WEBPACK_IMPORTED_MODULE_0__[\"asyncGetAction\"])('i18n').then(function (i18n) {\n  i18n.register({\n    'zh-CN': zh_CN,\n    'en-US': en_US\n  });\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/i18n.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: name, state, action, view, beforeRegister, afterRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"beforeRegister\", function() { return beforeRegister; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"afterRegister\", function() { return afterRegister; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n */ \"./src/i18n.js\");\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock */ \"./src/mock/index.js\");\n/* harmony import */ var _webapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webapi */ \"./src/webapi/index.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _dec, _class, _temp;\n\n\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_4__.name;\nObject(maka__WEBPACK_IMPORTED_MODULE_5__[\"registerAction\"])('webapi', _webapi__WEBPACK_IMPORTED_MODULE_8__[\"default\"], true);\nvar state = {\n  data: {}\n};\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_5__[\"actionMixin\"])('base', 'webapi'), _dec(_class = (_temp = function action(_option) {\n  var _this = this;\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, action);\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"test\",\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var option;\n    return _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _this.webapi.option.query({});\n\n          case 2:\n            option = _context.sent;\n            alert(JSON.stringify(option));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  })));\n\n  Object.assign(this, _option.mixins);\n}, _temp)) || _class);\nvar view = {\n  component: 'div',\n  children: [{\n    component: 'button',\n    children: 'test',\n    onClick: '{{$test}}'\n  }]\n};\n\nfunction beforeRegister() {\n  return _beforeRegister.apply(this, arguments);\n}\n\nfunction _beforeRegister() {\n  _beforeRegister = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    return _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return Object(maka__WEBPACK_IMPORTED_MODULE_5__[\"load\"])(['template']);\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n  return _beforeRegister.apply(this, arguments);\n}\n\nfunction afterRegister() {\n  return _afterRegister.apply(this, arguments);\n}\n\nfunction _afterRegister() {\n  _afterRegister = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    return _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            Object(_mock__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n  return _afterRegister.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack://MakaApp-webapi/./src/index.js?");

/***/ }),

/***/ "./src/mock/appstore.js":
/*!******************************!*\
  !*** ./src/mock/appstore.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/appstore/query', function (option) {\n  return {\n    result: true,\n    value: mockData.apps\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/appstore/install', function (option) {\n  var id = option.id;\n  mockData.apps.find(function (o) {\n    return o.id === id;\n  }).isInstalled = true;\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/appstore/uninstall', function (option) {\n  var id = option.id;\n  mockData.apps.find(function (o) {\n    return o.id === id;\n  }).isInstalled = false;\n  return {\n    result: true,\n    value: true\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/appstore.js?");

/***/ }),

/***/ "./src/mock/bom.js":
/*!*************************!*\
  !*** ./src/mock/bom.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/findById', function (option) {\n  var bom = mockData.boms.find(function (o) {\n    return o.id == option.id;\n  });\n  return {\n    result: true,\n    value: bom\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/query', function (option) {\n  var pagination = option.pagination,\n      filter = option.filter;\n  var data = mockData.boms;\n\n  if (filter) {\n    if (filter.search) data = data.filter(function (o) {\n      return o.code.indexOf(filter.search) != -1;\n    });\n  }\n\n  var current = pagination.current;\n  var pageSize = pagination.pageSize;\n  var start = (current - 1) * pageSize;\n  var end = current * pageSize;\n  start = start > data.length - 1 ? 0 : start;\n  end = start > data.length - 1 ? pageSize : end;\n  current = start > data.length - 1 ? 1 : current;\n  var ret = {\n    result: true,\n    value: {\n      pagination: {\n        current: current,\n        pageSize: pageSize,\n        total: data.length\n      },\n      list: []\n    }\n  };\n\n  for (var j = start; j < end; j++) {\n    if (data[j]) ret.value.list.push(data[j]);\n  }\n\n  return ret;\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/del', function (option) {\n  option.boms.forEach(function (bom) {\n    var index = mockData.boms.findIndex(function (o) {\n      return o.id == bom.id;\n    });\n    if (index || index === 0) mockData.boms.splice(index, 1);\n  });\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/prev', function (option) {\n  if (mockData.boms.length == 0) {\n    return {\n      result: false,\n      error: {\n        message: '已经是首页'\n      }\n    };\n  }\n\n  var index = 0;\n  if (option.id || option.id == 0) index = mockData.boms.findIndex(function (o) {\n    return o.id == option.id;\n  });else index = mockData.boms.length;\n\n  if (index == 0) {\n    return {\n      result: false,\n      error: {\n        message: '已经是首页'\n      }\n    };\n  }\n\n  return {\n    result: true,\n    value: mockData.boms[index - 1]\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/next', function (option) {\n  if (mockData.boms.length == 0) {\n    return {\n      result: false,\n      error: {\n        message: '已经是末页'\n      }\n    };\n  }\n\n  var index = 0;\n  if (option.id || option.id == 0) index = mockData.boms.findIndex(function (o) {\n    return o.id == option.id;\n  });else index = -1;\n\n  if (index == mockData.boms.length - 1) {\n    return {\n      result: false,\n      error: {\n        message: '已经是末页'\n      }\n    };\n  }\n\n  return {\n    result: true,\n    value: mockData.boms[index + 1]\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/create', function (option) {\n  var id = mockData.boms.length;\n\n  var v = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, option, {\n    id: id\n  });\n\n  mockData.boms.push(v);\n  return {\n    result: true,\n    value: v\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/bom/update', function (option) {\n  var index = mockData.boms.findIndex(function (o) {\n    return o.id == option.id;\n  });\n  mockData.boms[index] = option;\n  return {\n    result: true,\n    value: option\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/bom.js?");

/***/ }),

/***/ "./src/mock/customer.js":
/*!******************************!*\
  !*** ./src/mock/customer.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/query', function (option) {\n  var pagination = option.pagination,\n      filter = option.filter;\n  var data = mockData.customers;\n\n  if (filter) {\n    if (filter.search) data = data.filter(function (o) {\n      return o.name.indexOf(filter.search) != -1;\n    });\n  }\n\n  var current = pagination.current;\n  var pageSize = pagination.pageSize;\n  var start = (current - 1) * pageSize;\n  var end = current * pageSize;\n  start = start > data.length - 1 ? 0 : start;\n  end = start > data.length - 1 ? pageSize : end;\n  current = start > data.length - 1 ? 1 : current;\n  var ret = {\n    result: true,\n    value: {\n      pagination: {\n        current: current,\n        pageSize: pageSize,\n        total: data.length\n      },\n      list: []\n    }\n  };\n\n  for (var j = start; j < end; j++) {\n    if (data[j]) ret.value.list.push(data[j]);\n  }\n\n  return ret;\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/findById', function (option) {\n  var person = mockData.customers.find(function (o) {\n    return o.id == option.id;\n  });\n  return {\n    result: true,\n    value: person\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/create', function (option) {\n  var id = mockData.customers.length;\n\n  var v = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, option, {\n    id: id\n  });\n\n  mockData.customers.push(v);\n  return {\n    result: true,\n    value: v\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/update', function (option) {\n  var index = mockData.customers.findIndex(function (o) {\n    return o.id == option.id;\n  });\n  mockData.customers[index] = option;\n  return {\n    result: true,\n    value: option\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/del', function (option) {\n  option.customers.forEach(function (customer) {\n    var index = mockData.customers.findIndex(function (o) {\n      return o.id == customer.id;\n    });\n    if (index || index === 0) mockData.customers.splice(index, 1);\n  });\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/group/queryAll', function (option) {\n  return {\n    result: true,\n    value: mockData.customerGroups\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/group/findById', function (option) {\n  var o = mockData.customerGroups.find(function (o) {\n    return o.id == option.id;\n  });\n\n  if (o.parentId || o.parentId == 0) {\n    var parent = mockData.customerGroups.find(function (p) {\n      return p.id == o.parentId;\n    });\n    o.parent = {\n      id: parent.id,\n      code: parent.code,\n      name: parent.name\n    };\n  }\n\n  return {\n    result: true,\n    value: o\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/group/create', function (option) {\n  var id = mockData.customerGroups.length;\n\n  var v = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, option, {\n    id: id\n  });\n\n  if (option.parent) {\n    v.parentId = option.parent.id;\n    delete v.parent;\n  }\n\n  console.log(v);\n  mockData.customerGroups.push(v);\n  return {\n    result: true,\n    value: v\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/group/update', function (option) {\n  var index = mockData.customerGroups.findIndex(function (o) {\n    return o.id == option.id;\n  });\n  mockData.customerGroups[index] = option;\n  return {\n    result: true,\n    value: option\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/customer/group/del', function (option) {\n  var index = mockData.customerGroups.findIndex(function (o) {\n    return o.id == option.id;\n  });\n  if (index || index === 0) mockData.customerGroups.splice(index, 1);\n  return {\n    result: true,\n    value: true\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/customer.js?");

/***/ }),

/***/ "./src/mock/dashboard.js":
/*!*******************************!*\
  !*** ./src/mock/dashboard.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/hotSearch', function (option) {\n  return {\n    result: true,\n    value: mockData.dashboard.hotSearch\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/market', function (option) {\n  return {\n    result: true,\n    value: mockData.dashboard.market\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/sale', function (option) {\n  return {\n    result: true,\n    value: mockData.dashboard.sale\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/saleProportion', function (option) {\n  return {\n    result: true,\n    value: mockData.dashboard.saleProportion\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/saleTrend', function (option) {\n  return {\n    result: true,\n    value: {\n      saleTrend: mockData.dashboard.saleTrend,\n      topForStore: mockData.dashboard.topForStore\n    }\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/trade', function (option) {\n  return {\n    result: true,\n    value: mockData.dashboard.trade\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/dashboard/visit', function (option) {\n  return {\n    result: true,\n    value: mockData.dashboard.visit\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/dashboard.js?");

/***/ }),

/***/ "./src/mock/data.js":
/*!**************************!*\
  !*** ./src/mock/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\n\nfunction initMockData() {\n  var moment = Object(maka__WEBPACK_IMPORTED_MODULE_0__[\"getAction\"])('moment');\n  /* menu */\n\n  if (!mockData.menus) {\n    mockData.menus = [{\n      icon: 'dashboard',\n      locale: 'menu.dashboard',\n      children: [{\n        locale: 'menu.dashboard.analysis',\n        appName: 'dashboard-analysis'\n      }, {\n        locale: 'menu.dashboard.monitor',\n        appName: 'dashboard-monitor'\n      }, {\n        locale: 'menu.dashboard.workplace',\n        appName: 'dashboard-workplace'\n      }]\n    }, {\n      icon: 'form',\n      locale: 'menu.form',\n      children: [{\n        locale: 'menu.form.basicform',\n        appName: 'form-basic'\n      }, {\n        locale: 'menu.form.stepform',\n        appName: 'form-step'\n      }, {\n        locale: 'menu.form.advancedform',\n        appName: 'form-advanced'\n      }]\n    }, {\n      icon: 'table',\n      locale: 'menu.list',\n      children: [{\n        locale: 'menu.list.searchtable',\n        appName: 'list-query'\n      }, {\n        locale: 'menu.list.basiclist',\n        appName: 'list-basic'\n      }, {\n        locale: 'menu.list.cardlist',\n        appName: 'list-card'\n      }, {\n        locale: 'menu.list.searchlist',\n        children: [{\n          locale: 'menu.list.searchlist.articles',\n          appName: 'list-search-article'\n        }, {\n          locale: 'menu.list.searchlist.projects',\n          appName: 'list-search-project'\n        }, {\n          locale: 'menu.list.searchlist.applications',\n          appName: 'list-search-application'\n        }]\n      }]\n    }, {\n      icon: 'profile',\n      locale: 'menu.profile',\n      children: [{\n        locale: 'menu.profile.basic',\n        appName: 'profile-basic'\n      }, {\n        locale: 'menu.profile.advanced',\n        appName: 'profile-advanced'\n      }]\n    }, {\n      icon: 'check-circle-o',\n      locale: 'menu.result',\n      children: [{\n        locale: 'menu.result.success',\n        appName: 'result-success'\n      }, {\n        locale: 'menu.result.fail',\n        appName: 'result-fail'\n      }]\n    }, {\n      icon: 'warning',\n      locale: 'menu.exception',\n      children: [{\n        locale: 'menu.exception.not-permission',\n        appName: 'common-exception?403',\n        appProps: {\n          type: '403',\n          desc: 'app.exception.description.403'\n        }\n      }, {\n        locale: 'menu.exception.not-find',\n        appName: 'common-exception?404',\n        appProps: {\n          type: '404',\n          desc: 'app.exception.description.404'\n        }\n      }, {\n        locale: 'menu.exception.server-error',\n        appName: 'common-exception?500',\n        appProps: {\n          type: '500',\n          desc: 'app.exception.description.500'\n        }\n      }]\n    }, {\n      icon: 'user',\n      locale: 'menu.account',\n      children: [{\n        locale: 'menu.account.center',\n        appName: 'account-center'\n      }, {\n        locale: 'menu.account.settings',\n        appName: 'account-setting'\n      }]\n    }];\n  }\n  /*app */\n\n\n  if (!mockData.apps) {\n    mockData.apps = [{\n      id: 1,\n      title: '首页',\n      icon: 'home',\n      appName: 'home',\n      isInstalled: false\n    }, {\n      id: 2,\n      title: '仪表盘',\n      icon: 'dashboard',\n      appName: 'dashboard',\n      isInstalled: false\n    }, {\n      id: 3,\n      title: '人员',\n      icon: 'user',\n      appName: 'set-person-list',\n      isInstalled: false\n    }, {\n      id: 4,\n      title: '客户',\n      icon: 'team',\n      appName: 'set-customer-list',\n      isInstalled: false\n    }, {\n      id: 5,\n      title: 'BOM',\n      icon: 'profile',\n      appName: 'set-bom-list',\n      isInstalled: false\n    }, {\n      id: 6,\n      title: '百度',\n      icon: 'smile',\n      appName: 'common-iframe',\n      appProps: {\n        iframeSrc: 'https://www.baidu.com'\n      },\n      alwaysRender: true,\n      isInstalled: false\n      /*, {\n         id: 7,\n         title: '开发工具',\n         icon: 'tool',\n         appName: 'devtools',\n         //isModal: true,\n         bodyStyle: {\n             height: 400\n         },\n         width: 1100,\n         isInstalled: false\n      }*/\n\n    }];\n  }\n  /*插件*/\n\n\n  if (!mockData.plugins) {\n    mockData.plugins = [{\n      id: 1,\n      title: '人员列表插件',\n      forApp: 'set-person-list',\n      appName: 'set-person-list-plugin',\n      isInstalled: false\n    }];\n  }\n  /*配置信息 */\n\n\n  if (!mockData.option) {\n    mockData.option = {\n      activePrimaryColor: 'geekblue',\n      mode: 'inline',\n      //vertical || horizontal || inline\n      theme: 'dark',\n      //dark || light\n      collapsed: false,\n      layout: 'sidermenu',\n      //sidermenu || topmenu\n      contentWidth: 'Fluid',\n      fixedHeader: false,\n      fixedSiderbar: false,\n      autoHideHeader: false,\n      colorWeak: false,\n      collapse: true,\n      tabStyle: true,\n      horizontalMenu: false\n    };\n  }\n  /*用户*/\n\n\n  if (!mockData.users) {\n    mockData.users = [{\n      id: 1,\n      account: 13334445556,\n      password: 'c4ca4238a0b923820dcc509a6f75849b',\n      name: 'zlj'\n    }];\n  }\n  /*home*/\n\n\n  if (!mockData.home) {\n    mockData.home = {};\n  }\n\n  if (!mockData.home.todos) {\n    mockData.home.todos = [];\n\n    for (var i = 0; i < 50; i++) {\n      mockData.home.todos.push({\n        id: i,\n        description: '待办' + i,\n        date: \"2017-\".concat(i % 11 + 1, \"-\").concat(i % 28 + 1)\n      });\n    }\n  }\n  /* 仪表盘 */\n\n\n  if (!mockData.dashboard) {\n    mockData.dashboard = {};\n  }\n\n  if (!mockData.dashboard.hotSearch) {\n    var userCountX = [],\n        userCountY = [],\n        searchCountX = [],\n        searchCountY = [],\n        list = [];\n\n    for (var _i = 0; _i < 7; _i++) {\n      userCountX.push(moment().add(_i, 'days').format('YYYY-MM-DD'));\n      var v = Math.floor(Math.random() * 100) + 10;\n      userCountY.push(v);\n    }\n\n    for (var _i2 = 0; _i2 < 7; _i2++) {\n      searchCountX.push(moment().add(_i2, 'days').format('YYYY-MM-DD'));\n\n      var _v = Math.floor(Math.random() * 100) + 10;\n\n      searchCountY.push(_v);\n    }\n\n    for (var _i3 = 1; _i3 < 31; _i3++) {\n      list.push({\n        ranking: _i3,\n        key: '搜索关键字' + _i3,\n        searchCount: (100 - _i3) * 100,\n        weeklyGains: '10%'\n      });\n    }\n\n    mockData.dashboard.hotSearch = {\n      userCount: {\n        x: userCountX,\n        y: userCountY,\n        total: userCountY.reduce(function (a, b) {\n          return a + b;\n        }, 0)\n      },\n      searchCount: {\n        x: searchCountX,\n        y: searchCountY,\n        total: searchCountY.reduce(function (a, b) {\n          return a + b;\n        }, 0)\n      },\n      list: list\n    };\n  }\n\n  if (!mockData.dashboard.market) {\n    mockData.dashboard.market = {\n      rate: 0.88,\n      WoW: 0.12,\n      DoD: -0.11\n    };\n  }\n\n  if (!mockData.dashboard.sale) {\n    mockData.dashboard.sale = {\n      total: 8181818,\n      //总额\n      WoW: 0.12,\n      //周同比\n      DoD: -0.11,\n      //日环比\n      average: 12345 //日均销售额\n\n    };\n  }\n\n  if (!mockData.dashboard.saleProportion) {\n    mockData.dashboard.saleProportion = {\n      total: 10000,\n      details: [{\n        id: 1,\n        name: '家用电器',\n        value: 3000\n      }, {\n        id: 2,\n        name: '个护健康',\n        value: 4000\n      }, {\n        id: 3,\n        name: '服饰箱包',\n        value: 1000\n      }, {\n        id: 4,\n        name: '母婴产品',\n        value: 1500\n      }, {\n        id: 5,\n        name: '其他',\n        value: 500\n      }]\n    };\n  }\n\n  if (!mockData.dashboard.saleTrend) {\n    var x = [];\n    var y = [];\n\n    for (var _i4 = 12; _i4 >= 0; _i4--) {\n      x.push(moment().subtract(_i4, 'months').format('YYYY-MM'));\n\n      var _v2 = Math.floor(Math.random() * 10000) + 100;\n\n      y.push(_v2);\n    }\n\n    mockData.dashboard.saleTrend = {\n      x: x,\n      y: y\n    };\n  }\n\n  if (!mockData.dashboard.topForStore) {\n    mockData.dashboard.topForStore = [];\n\n    for (var _i5 = 1; _i5 < 8; _i5++) {\n      mockData.dashboard.topForStore.push({\n        index: _i5,\n        storeName: '北京市海淀区上地门店' + _i5,\n        total: (100 - _i5) * 100\n      });\n    }\n  }\n\n  if (!mockData.dashboard.trade) {\n    var _x = [];\n    var _y = [];\n    var total = 0;\n\n    for (var _i6 = 0; _i6 < 30; _i6++) {\n      _x.push(moment().add(_i6, 'days').format('YYYY-MM-DD'));\n\n      var _v3 = Math.floor(Math.random() * 100) + 10;\n\n      _y.push(_v3);\n\n      total += _v3;\n    }\n\n    mockData.dashboard.trade = {\n      total: total,\n      x: _x,\n      y: _y,\n      conversionRate: 0.65\n    };\n  }\n\n  if (!mockData.dashboard.visit) {\n    var _x2 = [];\n    var _y2 = [];\n    var total = 0;\n\n    for (var _i7 = 0; _i7 < 30; _i7++) {\n      _x2.push(moment().add(_i7, 'days').format('YYYY-MM-DD'));\n\n      var _v4 = Math.floor(Math.random() * 100) + 10;\n\n      _y2.push(_v4);\n\n      total += _v4;\n    }\n\n    mockData.dashboard.visit = {\n      total: total,\n      x: _x2,\n      y: _y2,\n      average: Math.round(total / 30)\n    };\n  }\n  /* 物料*/\n\n\n  if (!mockData.materiels) {\n    mockData.materiels = [{\n      id: 1,\n      code: 'M001',\n      name: '物料1',\n      spec: '规格1',\n      prop: '属性1',\n      uom: {\n        name: '个'\n      }\n    }, {\n      id: 2,\n      code: 'M002',\n      name: '物料2',\n      spec: '规格2',\n      prop: '属性2',\n      uom: {\n        name: '件'\n      }\n    }];\n  }\n  /*工艺*/\n\n\n  if (!mockData.technics) {\n    mockData.technics = [{\n      id: 1,\n      code: 'T001',\n      name: '工艺1'\n    }, {\n      id: 2,\n      code: 'T002',\n      name: '工艺2'\n    }];\n  }\n  /*工艺工序*/\n\n\n  if (!mockData.technicDetails) {\n    mockData.technicDetails = [{\n      id: 1,\n      technicId: 1,\n      code: 'TD001',\n      name: '工艺1工序1'\n    }, {\n      id: 2,\n      technicId: 1,\n      code: 'T002',\n      name: '工艺1工序2'\n    }, {\n      id: 1,\n      technicId: 2,\n      code: 'TD003',\n      name: '工艺2工序1'\n    }, {\n      id: 2,\n      technicId: 2,\n      code: 'T004',\n      name: '工艺2工序2'\n    }];\n  }\n  /*bom*/\n\n\n  if (!mockData.boms) {\n    mockData.boms = [{\n      id: 0,\n      code: '001',\n      materiel: mockData.materiels[0],\n      technic: mockData.technics[0],\n      amount: 1,\n      yield: 100,\n      status: {\n        id: 2,\n        name: '未使用'\n      },\n      details: [{\n        id: 1,\n        materiel: mockData.materiels[0],\n        amount: 1,\n        lossRate: 0,\n        technicDetail: mockData.technicDetails[0]\n      }]\n    }];\n  }\n  /*客户分类*/\n\n\n  if (!mockData.customerGroups) {\n    mockData.customerGroups = [{\n      id: 0,\n      code: 'CG001',\n      name: '北京客户'\n    }];\n  }\n  /*客户*/\n\n\n  if (!mockData.customers) {\n    mockData.customers = [];\n\n    for (var _i8 = 0; _i8 < 200; _i8++) {\n      mockData.customers.push({\n        id: _i8,\n        code: 'CUSTOMER' + (_i8 + 1),\n        name: '客户' + (_i8 + 1),\n        customerGroup: mockData.customerGroups[0]\n      });\n    }\n  }\n  /*部门*/\n\n\n  if (!mockData.departments) {\n    mockData.departments = [];\n\n    for (var _i9 = 0; _i9 < 5; _i9++) {\n      mockData.departments.push({\n        id: _i9,\n        code: '00' + (_i9 + 1),\n        name: '部门' + (_i9 + 1)\n      });\n    }\n  }\n  /*人员*/\n\n\n  if (!mockData.persons) {\n    mockData.persons = [];\n\n    for (var _i10 = 0; _i10 < 200; _i10++) {\n      mockData.persons.push({\n        id: _i10,\n        name: '诸葛' + (_i10 + 1),\n        sex: _i10 % 2 == 0 ? {\n          id: 0,\n          name: '女'\n        } : {\n          id: 1,\n          name: '男'\n        },\n        birthday: \"1980-\".concat(_i10 % 11 + 1, \"-\").concat(_i10 % 28 + 1),\n        mobile: '13818181' + (100 + _i10),\n        department: mockData.departments[0],\n        address: '北京海淀'\n      });\n    }\n  }\n\n  if (!mockData.notices) {\n    mockData.notices = [{\n      \"id\": \"000000001\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png\",\n      \"title\": \"你收到了 14 份新周报\",\n      \"datetime\": \"2017-08-09\",\n      \"type\": \"notification\"\n    }, {\n      \"id\": \"000000002\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png\",\n      \"title\": \"你推荐的 曲妮妮 已通过第三轮面试\",\n      \"datetime\": \"2017-08-08\",\n      \"type\": \"notification\"\n    }, {\n      \"id\": \"000000003\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png\",\n      \"title\": \"这种模板可以区分多种通知类型\",\n      \"datetime\": \"2017-08-07\",\n      \"read\": true,\n      \"type\": \"notification\"\n    }, {\n      \"id\": \"000000004\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png\",\n      \"title\": \"左侧图标用于区分不同的类型\",\n      \"datetime\": \"2017-08-07\",\n      \"type\": \"notification\"\n    }, {\n      \"id\": \"000000005\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png\",\n      \"title\": \"内容不要超过两行字，超出时自动截断\",\n      \"datetime\": \"2017-08-07\",\n      \"type\": \"notification\"\n    }, {\n      \"id\": \"000000006\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg\",\n      \"title\": \"曲丽丽 评论了你\",\n      \"description\": \"描述信息描述信息描述信息\",\n      \"datetime\": \"2017-08-07\",\n      \"type\": \"message\",\n      \"clickClose\": true\n    }, {\n      \"id\": \"000000007\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg\",\n      \"title\": \"朱偏右 回复了你\",\n      \"description\": \"这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像\",\n      \"datetime\": \"2017-08-07\",\n      \"type\": \"message\",\n      \"clickClose\": true\n    }, {\n      \"id\": \"000000008\",\n      \"avatar\": \"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg\",\n      \"title\": \"标题\",\n      \"description\": \"这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像\",\n      \"datetime\": \"2017-08-07\",\n      \"type\": \"message\",\n      \"clickClose\": true\n    }, {\n      \"id\": \"000000009\",\n      \"title\": \"任务名称\",\n      \"description\": \"任务需要在 2017-01-12 20:00 前启动\",\n      \"extra\": \"未开始\",\n      \"status\": \"todo\",\n      \"type\": \"event\"\n    }, {\n      \"id\": \"000000010\",\n      \"title\": \"第三方紧急代码变更\",\n      \"description\": \"冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务\",\n      \"extra\": \"马上到期\",\n      \"status\": \"urgent\",\n      \"type\": \"event\"\n    }, {\n      \"id\": \"000000011\",\n      \"title\": \"信息安全考试\",\n      \"description\": \"指派竹尔于 2017-01-09 前完成更新并发布\",\n      \"extra\": \"已耗时 8 天\",\n      \"status\": \"doing\",\n      \"type\": \"event\"\n    }, {\n      \"id\": \"000000012\",\n      \"title\": \"ABCD 版本发布\",\n      \"description\": \"冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务\",\n      \"extra\": \"进行中\",\n      \"status\": \"processing\",\n      \"type\": \"event\"\n    }];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMockData);\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/data.js?");

/***/ }),

/***/ "./src/mock/department.js":
/*!********************************!*\
  !*** ./src/mock/department.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/department/queryAll', function (option) {\n  return {\n    result: true,\n    value: mockData.departments\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/department.js?");

/***/ }),

/***/ "./src/mock/home.js":
/*!**************************!*\
  !*** ./src/mock/home.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/home/todo', function (option) {\n  return {\n    result: true,\n    value: mockData.home.todos\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/v1/home/chart', function (option) {\n  return {\n    result: true,\n    value: {\n      xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],\n      seriesData: [[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3], [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]]\n    }\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/home.js?");

/***/ }),

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ \"./src/mock/root.js\");\n/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option */ \"./src/mock/option.js\");\n/* harmony import */ var _appstore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appstore */ \"./src/mock/appstore.js\");\n/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ \"./src/mock/plugin.js\");\n/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal */ \"./src/mock/portal.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ \"./src/mock/home.js\");\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard */ \"./src/mock/dashboard.js\");\n/* harmony import */ var _bom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bom */ \"./src/mock/bom.js\");\n/* harmony import */ var _technic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./technic */ \"./src/mock/technic.js\");\n/* harmony import */ var _materiel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materiel */ \"./src/mock/materiel.js\");\n/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer */ \"./src/mock/customer.js\");\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./person */ \"./src/mock/person.js\");\n/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department */ \"./src/mock/department.js\");\n/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notice */ \"./src/mock/notice.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data */ \"./src/mock/data.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_data__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/index.js?");

/***/ }),

/***/ "./src/mock/materiel.js":
/*!******************************!*\
  !*** ./src/mock/materiel.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/materiel/queryAll', function (option) {\n  return {\n    result: true,\n    value: mockData.materiels\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/materiel.js?");

/***/ }),

/***/ "./src/mock/notice.js":
/*!****************************!*\
  !*** ./src/mock/notice.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/notice/query', function (option) {\n  return {\n    result: true,\n    value: mockData.notices\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/notice.js?");

/***/ }),

/***/ "./src/mock/option.js":
/*!****************************!*\
  !*** ./src/mock/option.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/option/query', function (option) {\n  return {\n    result: true,\n    value: mockData.option\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/option/update', function (option) {\n  mockData.option = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, mockData.option, option);\n  return {\n    result: true,\n    value: mockData.option\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/option.js?");

/***/ }),

/***/ "./src/mock/person.js":
/*!****************************!*\
  !*** ./src/mock/person.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/person/query', function (option) {\n  var pagination = option.pagination,\n      filter = option.filter;\n  var data = mockData.persons;\n\n  if (filter) {\n    if (filter.search) data = data.filter(function (o) {\n      return o.name.indexOf(filter.search) != -1;\n    });\n  }\n\n  var current = pagination.current;\n  var pageSize = pagination.pageSize;\n  var start = (current - 1) * pageSize;\n  var end = current * pageSize;\n  start = start > data.length - 1 ? 0 : start;\n  end = start > data.length - 1 ? pageSize : end;\n  current = start > data.length - 1 ? 1 : current;\n  var ret = {\n    result: true,\n    value: {\n      pagination: {\n        current: current,\n        pageSize: pageSize,\n        total: data.length\n      },\n      list: []\n    }\n  };\n\n  for (var j = start; j < end; j++) {\n    if (data[j]) ret.value.list.push(data[j]);\n  }\n\n  return ret;\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/person/del', function (option) {\n  option.persons.forEach(function (person) {\n    var index = mockData.persons.findIndex(function (o) {\n      return o.id == person.id;\n    });\n    if (index || index === 0) mockData.persons.splice(index, 1);\n  });\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/person/findById', function (option) {\n  var person = mockData.persons.find(function (o) {\n    return o.id == option.id;\n  });\n  return {\n    result: true,\n    value: person\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/person/create', function (option) {\n  var id = mockData.persons.length;\n\n  var v = _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, option, {\n    id: id\n  });\n\n  mockData.persons.push(v);\n  return {\n    result: true,\n    value: v\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/person/update', function (option) {\n  var index = mockData.persons.findIndex(function (o) {\n    return o.id == option.id;\n  });\n  mockData.persons[index] = option;\n  return {\n    result: true,\n    value: option\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/person.js?");

/***/ }),

/***/ "./src/mock/plugin.js":
/*!****************************!*\
  !*** ./src/mock/plugin.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/plugin/query', function (option) {\n  return {\n    result: true,\n    value: mockData.plugins\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/plugin/install', function (option) {\n  var id = option.id;\n  mockData.plugins.find(function (o) {\n    return o.id === id;\n  }).isInstalled = true;\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/plugin/uninstall', function (option) {\n  var id = option.id;\n  mockData.plugins.find(function (o) {\n    return o.id === id;\n  }).isInstalled = false;\n  return {\n    result: true,\n    value: true\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/plugin.js?");

/***/ }),

/***/ "./src/mock/portal.js":
/*!****************************!*\
  !*** ./src/mock/portal.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_1__[\"fetch\"].mock('/api/portal/getMenu', function (option) {\n  var installedApp = mockData.apps.filter(function (o) {\n    return o.isInstalled === true;\n  });\n  var menus;\n\n  if (installedApp && installedApp.length > 0) {\n    menus = [].concat(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mockData.menus), [{\n      icon: 'ellipsis',\n      locale: 'menu.appstore',\n      children: _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(installedApp)\n    }]);\n  } else {\n    menus = mockData.menus;\n  }\n\n  return {\n    result: true,\n    value: menus\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/portal.js?");

/***/ }),

/***/ "./src/mock/root.js":
/*!**************************!*\
  !*** ./src/mock/root.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/signOut', function () {\n  maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].clearAccessToken();\n  return {\n    result: true,\n    value: true\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/signIn', function (option) {\n  var i18n = Object(maka__WEBPACK_IMPORTED_MODULE_0__[\"getAction\"])('i18n');\n  var user = mockData.users.find(function (o) {\n    return o.account == option.account && o.password == option.password;\n  });\n\n  if (user) {\n    return {\n      result: true,\n      //token模拟简单处理，正式不应该有密码等数据\n      token: \"\".concat(user.id, \",\").concat(user.account, \",\").concat(user.password, \",\").concat(user.name ? user.name : ''),\n      value: option\n    };\n  } else {\n    return {\n      result: false,\n      error: {\n        message: i18n('webapi.sign-in.invalid-credentials')\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/root.js?");

/***/ }),

/***/ "./src/mock/technic.js":
/*!*****************************!*\
  !*** ./src/mock/technic.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/technic/queryAll', function (option) {\n  return {\n    result: true,\n    value: mockData.technics\n  };\n});\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/api/technic/detail/queryAll', function (option) {\n  var details = mockData.technicDetails.filter(function (o) {\n    return o.technicId == option.technicId;\n  });\n  return {\n    result: true,\n    value: details\n  };\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/mock/technic.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-webapi/./src/style.less?");

/***/ }),

/***/ "./src/webapi/appstore.js":
/*!********************************!*\
  !*** ./src/webapi/appstore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  appstore: {\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/appstore/query', option);\n    },\n    install: function install(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/appstore/install', option);\n    },\n    uninstall: function uninstall(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/appstore/uninstall', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/appstore.js?");

/***/ }),

/***/ "./src/webapi/bom.js":
/*!***************************!*\
  !*** ./src/webapi/bom.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bom: {\n    findById: function findById(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/findById', option);\n    },\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/query', option);\n    },\n    del: function del(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/del', option);\n    },\n    prev: function prev(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/prev', option);\n    },\n    next: function next(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/next', option);\n    },\n    create: function create(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/create', option);\n    },\n    update: function update(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/bom/update', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/bom.js?");

/***/ }),

/***/ "./src/webapi/customer.js":
/*!********************************!*\
  !*** ./src/webapi/customer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  customer: {\n    findById: function findById(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/findById', option);\n    },\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/query', option);\n    },\n    del: function del(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/del', option);\n    },\n    prev: function prev(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/prev', option);\n    },\n    next: function next(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/next', option);\n    },\n    create: function create(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/create', option);\n    },\n    update: function update(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/update', option);\n    },\n    group: {\n      findById: function findById(option) {\n        return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/group/findById', option);\n      },\n      queryAll: function queryAll(option) {\n        return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/group/queryAll', option);\n      },\n      del: function del(option) {\n        return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/group/del', option);\n      },\n      create: function create(option) {\n        return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/group/create', option);\n      },\n      update: function update(option) {\n        return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/customer/group/update', option);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/customer.js?");

/***/ }),

/***/ "./src/webapi/dashboard.js":
/*!*********************************!*\
  !*** ./src/webapi/dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  dashboard: {\n    hotSearch: function hotSearch(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/hotSearch', option);\n    },\n    market: function market(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/market', option);\n    },\n    sale: function sale(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/sale', option);\n    },\n    saleProportion: function saleProportion(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/saleProportion', option);\n    },\n    saleTrend: function saleTrend(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/saleTrend', option);\n    },\n    trade: function trade(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/trade', option);\n    },\n    visit: function visit(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/dashboard/visit', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/dashboard.js?");

/***/ }),

/***/ "./src/webapi/department.js":
/*!**********************************!*\
  !*** ./src/webapi/department.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  department: {\n    queryAll: function queryAll(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/department/queryAll', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/department.js?");

/***/ }),

/***/ "./src/webapi/home.js":
/*!****************************!*\
  !*** ./src/webapi/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  home: {\n    todo: function todo(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/home/todo', option);\n    },\n    chart: function chart(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/home/chart', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/home.js?");

/***/ }),

/***/ "./src/webapi/index.js":
/*!*****************************!*\
  !*** ./src/webapi/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread */ \"../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ \"./src/webapi/root.js\");\n/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option */ \"./src/webapi/option.js\");\n/* harmony import */ var _appstore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appstore */ \"./src/webapi/appstore.js\");\n/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin */ \"./src/webapi/plugin.js\");\n/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal */ \"./src/webapi/portal.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ \"./src/webapi/home.js\");\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard */ \"./src/webapi/dashboard.js\");\n/* harmony import */ var _bom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bom */ \"./src/webapi/bom.js\");\n/* harmony import */ var _technic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./technic */ \"./src/webapi/technic.js\");\n/* harmony import */ var _materiel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./materiel */ \"./src/webapi/materiel.js\");\n/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer */ \"./src/webapi/customer.js\");\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./person */ \"./src/webapi/person.js\");\n/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./department */ \"./src/webapi/department.js\");\n/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notice */ \"./src/webapi/notice.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _root__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _option__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _appstore__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _plugin__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _home__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _dashboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _bom__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _technic__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _materiel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _customer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _person__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _department__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _notice__WEBPACK_IMPORTED_MODULE_14__[\"default\"]));\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/index.js?");

/***/ }),

/***/ "./src/webapi/materiel.js":
/*!********************************!*\
  !*** ./src/webapi/materiel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  materiel: {\n    queryAll: function queryAll(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/materiel/queryAll', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/materiel.js?");

/***/ }),

/***/ "./src/webapi/notice.js":
/*!******************************!*\
  !*** ./src/webapi/notice.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  notice: {\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/notice/query', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/notice.js?");

/***/ }),

/***/ "./src/webapi/option.js":
/*!******************************!*\
  !*** ./src/webapi/option.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  option: {\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/option/query', option);\n    },\n    update: function update(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/option/update', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/option.js?");

/***/ }),

/***/ "./src/webapi/person.js":
/*!******************************!*\
  !*** ./src/webapi/person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  person: {\n    findById: function findById(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/person/findById', option);\n    },\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/person/query', option);\n    },\n    del: function del(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/person/del', option);\n    },\n    create: function create(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/person/create', option);\n    },\n    update: function update(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/person/update', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/person.js?");

/***/ }),

/***/ "./src/webapi/plugin.js":
/*!******************************!*\
  !*** ./src/webapi/plugin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  plugin: {\n    query: function query(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/plugin/query', option);\n    },\n    install: function install(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/plugin/install', option);\n    },\n    uninstall: function uninstall(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/plugin/uninstall', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/plugin.js?");

/***/ }),

/***/ "./src/webapi/portal.js":
/*!******************************!*\
  !*** ./src/webapi/portal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  portal: {\n    getMenu: function getMenu(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/portal/getMenu', option);\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/portal.js?");

/***/ }),

/***/ "./src/webapi/root.js":
/*!****************************!*\
  !*** ./src/webapi/root.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signIn: function signIn(option) {\n    return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/signIn', option);\n  },\n  signOut: function signOut(option) {\n    return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/signOut', option);\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/root.js?");

/***/ }),

/***/ "./src/webapi/technic.js":
/*!*******************************!*\
  !*** ./src/webapi/technic.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  technic: {\n    queryAll: function queryAll(option) {\n      return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/technic/queryAll', option);\n    },\n    detail: {\n      queryAll: function queryAll(option) {\n        return maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].post('/api/technic/detail/queryAll', option);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://MakaApp-webapi/./src/webapi/technic.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/makajs/maka/packages/example/maka-antd-pro/apps/webapi/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://MakaApp-webapi/multi_./src/index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://MakaApp-webapi/external_%22maka%22?");

/***/ })

/******/ });
});