(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"));
	else if(typeof define === 'function' && define.amd)
		define(["maka"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-sign-in"] = factory(require("maka"));
	else
		root["MakaApp-sign-in"] = factory(root["maka"]);
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
/******/ 	__webpack_require__.p = window['__pub_sign-in__'];
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*******************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://MakaApp-sign-in//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://MakaApp-sign-in//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://MakaApp-sign-in//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack://MakaApp-sign-in//usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js":
/*!**************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() {\n  return this || (typeof self === \"object\" && self);\n})() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack://MakaApp-sign-in//usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js":
/*!*******************************************************************************************!*\
  !*** /usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() {\n    return this || (typeof self === \"object\" && self);\n  })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack://MakaApp-sign-in//usr/local/lib/node_modules/@makajs/cli/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./action.js":
/*!*******************!*\
  !*** ./action.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return action; });\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty */ \"../../../../../../../../../../../usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ \"./node_modules/md5/md5.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _dec, _class, _temp;\n\n\n\nvar action = (_dec = Object(maka__WEBPACK_IMPORTED_MODULE_4__[\"actionMixin\"])('base', 'toast'), _dec(_class = (_temp = function action(option) {\n  var _this = this;\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, action);\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onInit\", function () {\n    var form = {\n      password: localStorage['login.password'] && Array(parseInt(localStorage['login.passwordLength']) + 1).join('*'),\n      mobile: localStorage['login.mobile']\n    };\n\n    _this.base.ss({\n      'data.form': form\n    });\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"login\",\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var form, msg, pwd, response;\n    return _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            form = _this.base.gs('data.form');\n            msg = _this.check(form);\n\n            if (!(msg.length > 0)) {\n              _context.next = 5;\n              break;\n            }\n\n            _this.toast.fail(msg[0], 1);\n\n            return _context.abrupt(\"return\");\n\n          case 5:\n            pwd = form.password;\n            pwd = localStorage['login.password'] && pwd == Array(parseInt(localStorage['login.passwordLength']) + 1).join('*') ? localStorage['login.password'] : md5__WEBPACK_IMPORTED_MODULE_5___default()(pwd);\n            _context.next = 9;\n            return maka__WEBPACK_IMPORTED_MODULE_4__[\"fetch\"].post('/v1/user/login', {\n              mobile: form.mobile,\n              password: pwd\n            });\n\n          case 9:\n            response = _context.sent;\n\n            _this.base.context.set('currentUser', response);\n\n            localStorage['login.mobile'] = form.mobile;\n            localStorage['login.password'] = pwd;\n            localStorage['login.passwordLength'] = form.password.length;\n            maka__WEBPACK_IMPORTED_MODULE_4__[\"navigate\"].redirect('/portal');\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  })));\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"check\", function (form) {\n    var msg = [];\n    !form.mobile && msg.push('请录入手机号!');\n    !form.password && msg.push('请录入密码!');\n    return msg;\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"goRegister\", function () {\n    _this.toast.info('未实现');\n  });\n\n  _usr_local_lib_node_modules_makajs_cli_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"goForgetPassword\", function () {\n    _this.toast.info('未实现');\n  });\n\n  Object.assign(this, option.mixins);\n}, _temp)) || _class);\n\n\n//# sourceURL=webpack://MakaApp-sign-in/./action.js?");

/***/ }),

/***/ "./img/welcome.jpg":
/*!*************************!*\
  !*** ./img/welcome.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"welcome.jpg\";\n\n//# sourceURL=webpack://MakaApp-sign-in/./img/welcome.jpg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: name, view, state, action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./view.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./action.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return _action__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./state.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock */ \"./mock.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.less */ \"./style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_welcome_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/welcome.jpg */ \"./img/welcome.jpg\");\n/* harmony import */ var _img_welcome_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_welcome_jpg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar name = _package_json__WEBPACK_IMPORTED_MODULE_0__.name;\n\n\n//# sourceURL=webpack://MakaApp-sign-in/./index.js?");

/***/ }),

/***/ "./mock.js":
/*!*****************!*\
  !*** ./mock.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maka */ \"maka\");\n/* harmony import */ var maka__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maka__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mockData = maka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mockData;\n\nfunction initMockData() {\n  if (!mockData.users) {\n    mockData.users = [{\n      id: 1,\n      mobile: 13334445556,\n      password: 'c4ca4238a0b923820dcc509a6f75849b',\n      name: 'zlj'\n    }];\n  }\n}\n\nmaka__WEBPACK_IMPORTED_MODULE_0__[\"fetch\"].mock('/v1/user/login', function (option) {\n  initMockData();\n  var user = mockData.users.find(function (o) {\n    return o.mobile == option.mobile && o.password == option.password;\n  });\n\n  if (user) {\n    return {\n      result: true,\n      //token模拟简单处理，正式不应该有密码等数据\n      token: \"\".concat(user.id, \",\").concat(user.mobile, \",\").concat(user.password, \",\").concat(user.name ? user.name : ''),\n      value: option\n    };\n  } else {\n    return {\n      result: false,\n      error: {\n        message: '用户名或者密码不正确（默认 手机:13334445556,密码:1）'\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack://MakaApp-sign-in/./mock.js?");

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var charenc = {\n  // UTF-8 encoding\n  utf8: {\n    // Convert a string to a byte array\n    stringToBytes: function(str) {\n      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));\n    },\n\n    // Convert a byte array to a string\n    bytesToString: function(bytes) {\n      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));\n    }\n  },\n\n  // Binary encoding\n  bin: {\n    // Convert a string to a byte array\n    stringToBytes: function(str) {\n      for (var bytes = [], i = 0; i < str.length; i++)\n        bytes.push(str.charCodeAt(i) & 0xFF);\n      return bytes;\n    },\n\n    // Convert a byte array to a string\n    bytesToString: function(bytes) {\n      for (var str = [], i = 0; i < bytes.length; i++)\n        str.push(String.fromCharCode(bytes[i]));\n      return str.join('');\n    }\n  }\n};\n\nmodule.exports = charenc;\n\n\n//# sourceURL=webpack://MakaApp-sign-in/./node_modules/charenc/charenc.js?");

/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n  var base64map\n      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',\n\n  crypt = {\n    // Bit-wise rotation left\n    rotl: function(n, b) {\n      return (n << b) | (n >>> (32 - b));\n    },\n\n    // Bit-wise rotation right\n    rotr: function(n, b) {\n      return (n << (32 - b)) | (n >>> b);\n    },\n\n    // Swap big-endian to little-endian and vice versa\n    endian: function(n) {\n      // If number given, swap endian\n      if (n.constructor == Number) {\n        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;\n      }\n\n      // Else, assume array and swap all items\n      for (var i = 0; i < n.length; i++)\n        n[i] = crypt.endian(n[i]);\n      return n;\n    },\n\n    // Generate an array of any length of random bytes\n    randomBytes: function(n) {\n      for (var bytes = []; n > 0; n--)\n        bytes.push(Math.floor(Math.random() * 256));\n      return bytes;\n    },\n\n    // Convert a byte array to big-endian 32-bit words\n    bytesToWords: function(bytes) {\n      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)\n        words[b >>> 5] |= bytes[i] << (24 - b % 32);\n      return words;\n    },\n\n    // Convert big-endian 32-bit words to a byte array\n    wordsToBytes: function(words) {\n      for (var bytes = [], b = 0; b < words.length * 32; b += 8)\n        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);\n      return bytes;\n    },\n\n    // Convert a byte array to a hex string\n    bytesToHex: function(bytes) {\n      for (var hex = [], i = 0; i < bytes.length; i++) {\n        hex.push((bytes[i] >>> 4).toString(16));\n        hex.push((bytes[i] & 0xF).toString(16));\n      }\n      return hex.join('');\n    },\n\n    // Convert a hex string to a byte array\n    hexToBytes: function(hex) {\n      for (var bytes = [], c = 0; c < hex.length; c += 2)\n        bytes.push(parseInt(hex.substr(c, 2), 16));\n      return bytes;\n    },\n\n    // Convert a byte array to a base-64 string\n    bytesToBase64: function(bytes) {\n      for (var base64 = [], i = 0; i < bytes.length; i += 3) {\n        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];\n        for (var j = 0; j < 4; j++)\n          if (i * 8 + j * 6 <= bytes.length * 8)\n            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));\n          else\n            base64.push('=');\n      }\n      return base64.join('');\n    },\n\n    // Convert a base-64 string to a byte array\n    base64ToBytes: function(base64) {\n      // Remove non-base-64 characters\n      base64 = base64.replace(/[^A-Z0-9+\\/]/ig, '');\n\n      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;\n          imod4 = ++i % 4) {\n        if (imod4 == 0) continue;\n        bytes.push(((base64map.indexOf(base64.charAt(i - 1))\n            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))\n            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));\n      }\n      return bytes;\n    }\n  };\n\n  module.exports = crypt;\n})();\n\n\n//# sourceURL=webpack://MakaApp-sign-in/./node_modules/crypt/crypt.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack://MakaApp-sign-in/./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(){\r\n  var crypt = __webpack_require__(/*! crypt */ \"./node_modules/crypt/crypt.js\"),\r\n      utf8 = __webpack_require__(/*! charenc */ \"./node_modules/charenc/charenc.js\").utf8,\r\n      isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\"),\r\n      bin = __webpack_require__(/*! charenc */ \"./node_modules/charenc/charenc.js\").bin,\r\n\r\n  // The core\r\n  md5 = function (message, options) {\r\n    // Convert to byte array\r\n    if (message.constructor == String)\r\n      if (options && options.encoding === 'binary')\r\n        message = bin.stringToBytes(message);\r\n      else\r\n        message = utf8.stringToBytes(message);\r\n    else if (isBuffer(message))\r\n      message = Array.prototype.slice.call(message, 0);\r\n    else if (!Array.isArray(message))\r\n      message = message.toString();\r\n    // else, assume byte array already\r\n\r\n    var m = crypt.bytesToWords(message),\r\n        l = message.length * 8,\r\n        a =  1732584193,\r\n        b = -271733879,\r\n        c = -1732584194,\r\n        d =  271733878;\r\n\r\n    // Swap endian\r\n    for (var i = 0; i < m.length; i++) {\r\n      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |\r\n             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;\r\n    }\r\n\r\n    // Padding\r\n    m[l >>> 5] |= 0x80 << (l % 32);\r\n    m[(((l + 64) >>> 9) << 4) + 14] = l;\r\n\r\n    // Method shortcuts\r\n    var FF = md5._ff,\r\n        GG = md5._gg,\r\n        HH = md5._hh,\r\n        II = md5._ii;\r\n\r\n    for (var i = 0; i < m.length; i += 16) {\r\n\r\n      var aa = a,\r\n          bb = b,\r\n          cc = c,\r\n          dd = d;\r\n\r\n      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);\r\n      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);\r\n      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);\r\n      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);\r\n      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);\r\n      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);\r\n      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);\r\n      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);\r\n      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);\r\n      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);\r\n      c = FF(c, d, a, b, m[i+10], 17, -42063);\r\n      b = FF(b, c, d, a, m[i+11], 22, -1990404162);\r\n      a = FF(a, b, c, d, m[i+12],  7,  1804603682);\r\n      d = FF(d, a, b, c, m[i+13], 12, -40341101);\r\n      c = FF(c, d, a, b, m[i+14], 17, -1502002290);\r\n      b = FF(b, c, d, a, m[i+15], 22,  1236535329);\r\n\r\n      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);\r\n      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);\r\n      c = GG(c, d, a, b, m[i+11], 14,  643717713);\r\n      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);\r\n      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);\r\n      d = GG(d, a, b, c, m[i+10],  9,  38016083);\r\n      c = GG(c, d, a, b, m[i+15], 14, -660478335);\r\n      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);\r\n      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);\r\n      d = GG(d, a, b, c, m[i+14],  9, -1019803690);\r\n      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);\r\n      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);\r\n      a = GG(a, b, c, d, m[i+13],  5, -1444681467);\r\n      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);\r\n      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);\r\n      b = GG(b, c, d, a, m[i+12], 20, -1926607734);\r\n\r\n      a = HH(a, b, c, d, m[i+ 5],  4, -378558);\r\n      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);\r\n      c = HH(c, d, a, b, m[i+11], 16,  1839030562);\r\n      b = HH(b, c, d, a, m[i+14], 23, -35309556);\r\n      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);\r\n      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);\r\n      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);\r\n      b = HH(b, c, d, a, m[i+10], 23, -1094730640);\r\n      a = HH(a, b, c, d, m[i+13],  4,  681279174);\r\n      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);\r\n      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);\r\n      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);\r\n      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);\r\n      d = HH(d, a, b, c, m[i+12], 11, -421815835);\r\n      c = HH(c, d, a, b, m[i+15], 16,  530742520);\r\n      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);\r\n\r\n      a = II(a, b, c, d, m[i+ 0],  6, -198630844);\r\n      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);\r\n      c = II(c, d, a, b, m[i+14], 15, -1416354905);\r\n      b = II(b, c, d, a, m[i+ 5], 21, -57434055);\r\n      a = II(a, b, c, d, m[i+12],  6,  1700485571);\r\n      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);\r\n      c = II(c, d, a, b, m[i+10], 15, -1051523);\r\n      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);\r\n      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);\r\n      d = II(d, a, b, c, m[i+15], 10, -30611744);\r\n      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);\r\n      b = II(b, c, d, a, m[i+13], 21,  1309151649);\r\n      a = II(a, b, c, d, m[i+ 4],  6, -145523070);\r\n      d = II(d, a, b, c, m[i+11], 10, -1120210379);\r\n      c = II(c, d, a, b, m[i+ 2], 15,  718787259);\r\n      b = II(b, c, d, a, m[i+ 9], 21, -343485551);\r\n\r\n      a = (a + aa) >>> 0;\r\n      b = (b + bb) >>> 0;\r\n      c = (c + cc) >>> 0;\r\n      d = (d + dd) >>> 0;\r\n    }\r\n\r\n    return crypt.endian([a, b, c, d]);\r\n  };\r\n\r\n  // Auxiliary functions\r\n  md5._ff  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b & c | ~b & d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._gg  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b & d | c & ~d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._hh  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b ^ c ^ d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._ii  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n\r\n  // Package private blocksize\r\n  md5._blocksize = 16;\r\n  md5._digestsize = 16;\r\n\r\n  module.exports = function (message, options) {\r\n    if (message === undefined || message === null)\r\n      throw new Error('Illegal argument ' + message);\r\n\r\n    var digestbytes = crypt.wordsToBytes(md5(message, options));\r\n    return options && options.asBytes ? digestbytes :\r\n        options && options.asString ? bin.bytesToString(digestbytes) :\r\n        crypt.bytesToHex(digestbytes);\r\n  };\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://MakaApp-sign-in/./node_modules/md5/md5.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: isMakaApp, name, description, version, license, author, repository, bugs, homepage, scripts, dependencies, server, subAppDir, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"isMakaApp\":true,\"name\":\"sign-in\",\"description\":\"sign-in\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"author\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/makajs/sign-in.git\"},\"bugs\":{\"url\":\"https://github.com/makajs/sign-in/issues\"},\"homepage\":\"https://github.com/makajs/sign-in#readme\",\"scripts\":{\"start\":\"maka start\",\"dev\":\"maka start --dev\",\"build\":\"maka build\",\"pkg\":\"maka pkg\"},\"dependencies\":{},\"server\":{\"proxy\":null,\"port\":8000},\"subAppDir\":[\"./apps\",\"../../base\"],\"devDependencies\":{\"md5\":\"^2.2.1\"}};\n\n//# sourceURL=webpack://MakaApp-sign-in/./package.json?");

/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: {\n    form: {}\n  }\n});\n\n//# sourceURL=webpack://MakaApp-sign-in/./state.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MakaApp-sign-in/./style.less?");

/***/ }),

/***/ "./view.js":
/*!*****************!*\
  !*** ./view.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: 'div',\n  className: 'sign-in',\n  style: {\n    backgroundImage: \"url(welcome.jpg)\"\n  },\n  children: [{\n    component: 'div',\n    className: 'sign-in-header',\n    children: '登录'\n  }, {\n    component: 'div',\n    className: 'sign-in-content',\n    children: [{\n      component: 'antd.List',\n      children: [{\n        component: 'antd.InputItem',\n        children: [{\n          component: 'FA',\n          name: 'user'\n        }],\n        placeholder: '请输入手机号',\n        maxLength: 11,\n        labelNumber: 2,\n        clear: true,\n        value: '{{data.form.mobile}}',\n        onChange: \"{{(v)=>$base.setState({'data.form.mobile': v})}}\"\n      }]\n    }, {\n      component: 'antd.WhiteSpace',\n      size: 'xl'\n    }, {\n      component: 'antd.List',\n      children: [{\n        component: 'antd.InputItem',\n        labelNumber: 2,\n        type: \"{{data.isShowPassword ?'':'Password'}}\",\n        maxLength: 20,\n        onExtraClick: \"{{(v)=>$base.setState({'data.isShowPassword': !data.isShowPassword})}}\",\n        placeholder: '请输入密码',\n        onVirtualKeyboardConfirm: \"{{(v)=>$base.setState({'data.form.password': v})}}\",\n        onChange: \"{{(v)=>$base.setState({'data.form.password': v})}}\",\n        value: '{{data.form.password}}',\n        children: [{\n          component: 'FA',\n          name: 'key'\n        }],\n        extra: [{\n          component: 'FA',\n          name: \"{{data.isShowPassword ? 'eye': 'eye-slash'}}\"\n        }]\n      }]\n    }, {\n      component: 'antd.WhiteSpace',\n      size: 'xl'\n    }, {\n      component: 'antd.Button',\n      type: 'primary',\n      children: '登录',\n      onClick: '{{$login}}'\n    }, {\n      component: 'antd.WhiteSpace'\n    }, {\n      component: 'div',\n      className: 'sign-in-forgetOrRegister',\n      children: [{\n        component: 'a',\n        href: '#',\n        children: '忘记密码',\n        onClick: '{{$goForgetPassword}}'\n      }, '|', {\n        component: 'a',\n        href: '#',\n        children: '新用户注册',\n        onClick: '{{$goRegister}}'\n      }]\n    }]\n  }, {\n    component: 'div',\n    className: 'sign-in-footer',\n    children: '支持电话：400-0000-000'\n  }]\n});\n\n//# sourceURL=webpack://MakaApp-sign-in/./view.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/zlj/my/makajs/maka/packages/example/maka-mobile-erp/apps/sys/sign-in/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack://MakaApp-sign-in/multi_./index.js?");

/***/ }),

/***/ "maka":
/*!***********************!*\
  !*** external "maka" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maka__;\n\n//# sourceURL=webpack://MakaApp-sign-in/external_%22maka%22?");

/***/ })

/******/ });
});