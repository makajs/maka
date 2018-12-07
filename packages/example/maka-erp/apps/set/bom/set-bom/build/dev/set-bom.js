(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maka"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["maka", "react"], factory);
	else if(typeof exports === 'object')
		exports["MakaApp-set-bom"] = factory(require("maka"), require("react"));
	else
		root["MakaApp-set-bom"] = factory(root["maka"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = {"isMakaApp":true,"name":"set-bom","description":"set-bom","version":"1.0.0","license":"MIT","author":"","repository":{"type":"git","url":"https://github.com/makajs/set-bom.git"},"bugs":{"url":"https://github.com/makajs/set-bom/issues"},"homepage":"https://github.com/makajs/set-bom#readme","scripts":{"start":"maka start","dev":"maka start --dev","build":"maka build","pkg":"maka pkg"},"dependencies":{},"server":{"proxy":null,"port":8000},"subAppDir":["./apps","../../../base"]};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(2);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(11);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(5);

// CONCATENATED MODULE: ./view.js
/* harmony default export */ var view = ({
  component: 'div',
  className: 'voucher set-bom',
  children: [{
    component: 'div',
    className: 'voucher-header',
    children: [{
      component: 'div',
      className: 'voucher-header-left',
      children: [{
        component: 'antd.Button.Group',
        children: [{
          component: 'antd.Button',
          className: 'icon-button-softly',
          icon: 'left',
          title: '上一张',
          onClick: '{{$prev}}'
        }, {
          component: 'antd.Button',
          className: 'icon-button-softly',
          icon: 'right',
          title: '下一张',
          onClick: '{{$next}}'
        }]
      }]
    }, {
      component: 'div',
      className: 'voucher-header-center'
    }, {
      component: 'div',
      className: 'voucher-header-right',
      children: [{
        component: 'antd.Button',
        className: 'button-showy',
        onClick: '{{$save}}',
        children: '保存'
      }, {
        component: 'antd.Button',
        className: 'button-bluesky',
        onClick: '{{$add}}',
        children: '新增'
      }]
    }]
  }, {
    component: 'tpl.Form',
    className: 'voucher-form',
    children: [{
      type: 'input',
      title: '编码',
      bindPath: 'data.form.code',
      required: true
    }, {
      type: 'select',
      title: '物料编码',
      bindPath: 'data.form.materiel',
      required: true,
      onLoadOption: '{{$loadMateriel}}',
      titleGetter: '{{(v)=> v && v.code}}',
      displayGetter: "{{(v)=> v && '(' + v.code + ')' + v.name}}"
    }, {
      type: 'input',
      title: '物料名称',
      bindPath: 'data.form.materiel.name',
      disabled: true
    }, {
      type: 'input',
      title: '物料规格',
      bindPath: 'data.form.materiel.spec',
      disabled: true
    }, {
      type: 'input',
      title: '物料属性',
      bindPath: 'data.form.materiel.prop',
      disabled: true
    }, {
      type: 'input',
      title: '单位',
      bindPath: 'data.form.materiel.uom.name',
      disabled: true
    }, {
      type: 'select',
      title: '工艺',
      bindPath: 'data.form.technic',
      required: true,
      onLoadOption: '{{$loadTechnic}}',
      displayGetter: "{{(v)=> v && '(' + v.code + ')' + v.name}}"
    }, {
      type: 'number',
      title: '数量',
      bindPath: 'data.form.amount',
      required: true,
      min: 0
    }, {
      type: 'number',
      title: '成品率',
      bindPath: 'data.form.yield',
      required: true,
      min: 0,
      max: 100
    }, {
      type: 'checkbox',
      title: '虚拟层',
      bindPath: 'data.form.isVirtual'
    }, {
      type: 'select',
      title: '使用状态',
      bindPath: 'data.form.status',
      onLoadOption: '{{$loadStatus}}'
    }]
  }, {
    component: 'tpl.Table',
    bindPath: 'data.form.details',
    enablePagination: false,
    columns: [{
      type: 'sequence'
    }, {
      type: 'select',
      title: '物料编码',
      bindField: 'materiel',
      required: true,
      fixed: true,
      flexGrow: 1,
      onLoadOption: '{{$loadMateriel}}',
      titleGetter: '{{(v)=> v && v.code}}',
      displayGetter: "{{(v)=> v && '(' + v.code + ')' + v.name}}"
    }, {
      type: 'text',
      title: '物料名称',
      bindField: 'materiel.name',
      width: 100,
      fixed: true,
      flexGrow: 1
    }, {
      type: 'text',
      title: '规格型号',
      bindField: 'materiel.spec',
      width: 100,
      flexGrow: 1
    }, {
      type: 'text',
      title: '物料属性',
      bindField: 'materiel.prop',
      width: 100,
      flexGrow: 1
    }, {
      type: 'text',
      title: '单位',
      bindField: 'materiel.uom.name',
      width: 150,
      flexGrow: 1
    }, {
      type: 'number',
      title: '用量',
      bindField: 'amount',
      width: 100,
      required: true,
      min: 0
    }, {
      type: 'number',
      title: '损耗率',
      bindField: 'lossRate',
      width: 100,
      required: true,
      min: 0,
      max: 100
    }, {
      type: 'select',
      title: '工序号',
      bindField: 'technicDetail',
      required: true,
      onLoadOption: '{{$loadTechnicDetail}}',
      titleGetter: '{{(v)=> v && v.code}}',
      displayGetter: "{{(v)=> v && '(' + v.code + ')' + v.name}}"
    }, {
      type: 'text',
      title: '工序名称',
      bindField: 'technicDetail.name'
    }, {
      type: 'number',
      title: '提前期偏置',
      bindField: 'leadTimeOffset',
      width: 100
    }, {
      type: 'addAndDel',
      onHeaderAddRow: '{{$headerAddRow}}',
      onAddRow: '{{$addRow(row.rowIndex)}}',
      onDelRow: '{{$delRow(row.rowIndex)}}'
    }]
  }, {
    component: 'tpl.Form',
    className: 'voucher-form',
    children: [{
      type: 'datePicker',
      title: '创建日期',
      bindPath: 'data.form.createTime',
      disabled: true
    }, {
      type: 'input',
      title: '最后更新人',
      bindPath: 'data.form.updateUserName',
      disabled: true
    }, {
      type: 'datePicker',
      title: '最后更新日期',
      bindPath: 'data.form.updateTime',
      disabled: true
    }, {
      type: 'input',
      title: '审核人',
      bindPath: 'data.form.auditUserName',
      disabled: true
    }, {
      type: 'datePicker',
      title: '审核日期',
      bindPath: 'data.form.datePicker',
      disabled: true
    }]
  }]
});
// CONCATENATED MODULE: ./state.js
/* harmony default export */ var state = ({
  data: {
    form: {
      amount: 1,
      yield: 100,
      createTime: '2018-01-01',
      status: {
        id: 2,
        name: '未使用'
      },
      details: [{
        amount: 1,
        lossRate: 0
      }]
    },
    other: {
      isChanged: false
    }
  }
});
// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(6);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "maka"
var external_maka_ = __webpack_require__(1);

// CONCATENATED MODULE: ./action.js






var _dec, _class;




var action_action = (_dec = Object(external_maka_["actionMixin"])('base', 'moment', 'tableHelper', 'message', 'modal'), _dec(_class =
/*#__PURE__*/
function () {
  function action(option) {
    var _this = this;

    classCallCheck_default()(this, action);

    defineProperty_default()(this, "onInit",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var resp;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //设置监听tab关闭事件
              _this.component.props.addTabCloseListener && _this.component.props.addTabCloseListener(_this.component.props.appFullName, _this.tabClose); //设置监听tab激活事件

              _this.component.props.addTabActiveListener && _this.component.props.addTabActiveListener(_this.component.props.appFullName, _this.tabActive);

              if (!(_this.component.props.bomId || _this.component.props.bomId == 0)) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return external_maka_["fetch"].post('/v1/bom/findById', {
                id: _this.component.props.bomId
              });

            case 5:
              resp = _context.sent;

              _this.setForm(resp);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    defineProperty_default()(this, "checkChanged",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.base.gs('data.other.isChanged')) {
                _context2.next = 4;
                break;
              }

              _context2.next = 3;
              return _this.modal.confirm({
                title: '确认',
                content: '存在未保存的更改，是否继续该操作?'
              });

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
              return _context2.abrupt("return", true);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    defineProperty_default()(this, "prev",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3() {
      var resp;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.checkChanged();

            case 2:
              _context3.t0 = _context3.sent;

              if (!(_context3.t0 == false)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return");

            case 5:
              _context3.next = 7;
              return external_maka_["fetch"].post('/v1/bom/prev', {
                id: _this.base.gs('data.form.id')
              });

            case 7:
              resp = _context3.sent;

              _this.setForm(resp);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    defineProperty_default()(this, "next",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      var resp;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.checkChanged();

            case 2:
              _context4.t0 = _context4.sent;

              if (!(_context4.t0 == false)) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return");

            case 5:
              _context4.next = 7;
              return external_maka_["fetch"].post('/v1/bom/next', {
                id: _this.base.gs('data.form.id')
              });

            case 7:
              resp = _context4.sent;

              _this.setForm(resp);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    defineProperty_default()(this, "add",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee5() {
      return regenerator_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.checkChanged();

            case 2:
              _context5.t0 = _context5.sent;

              if (!(_context5.t0 == false)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return");

            case 5:
              _this.base.ss({
                'data': state.data
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    defineProperty_default()(this, "save",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6() {
      var form, msg, isModify, resp;
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              form = _this.base.gs('data.form');
              msg = _this.checkSave(form);

              if (!(msg.length > 0)) {
                _context6.next = 5;
                break;
              }

              _this.message.error(external_react_default.a.createElement("ul", {
                style: {
                  textAlign: 'left'
                }
              }, msg.map(function (o) {
                return external_react_default.a.createElement("li", null, o);
              })));

              return _context6.abrupt("return", false);

            case 5:
              isModify = form.id || form.id == 0;

              if (!isModify) {
                _context6.next = 12;
                break;
              }

              _context6.next = 9;
              return external_maka_["fetch"].post('/v1/bom/update', form);

            case 9:
              resp = _context6.sent;
              _context6.next = 15;
              break;

            case 12:
              _context6.next = 14;
              return external_maka_["fetch"].post('/v1/bom/create', form);

            case 14:
              resp = _context6.sent;

            case 15:
              _this.setForm(resp);

              _this.message.success(isModify ? '修改BOM成功' : '新增BOM成功');

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    })));

    defineProperty_default()(this, "headerAddRow", function () {
      _this.addRow(-1)();
    });

    defineProperty_default()(this, "addRow", function (rowIndex) {
      return function () {
        var lst = _this.base.gs('data.form.details');

        lst.splice(rowIndex + 1, 0, state.data.form.details[0]);

        _this.base.ss({
          'data.form.details': lst
        });
      };
    });

    defineProperty_default()(this, "delRow", function (rowIndex) {
      return function () {
        var lst = _this.base.gs('data.form.details');

        lst.splice(rowIndex, 1);

        _this.base.ss({
          'data.form.details': lst
        });
      };
    });

    defineProperty_default()(this, "loadMateriel",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee7() {
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return external_maka_["fetch"].post('/v1/materiel/queryAll', {});

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    })));

    defineProperty_default()(this, "loadTechnic",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee8() {
      return regenerator_default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return external_maka_["fetch"].post('/v1/technic/queryAll', {});

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    })));

    defineProperty_default()(this, "loadStatus",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee9() {
      return regenerator_default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", [{
                id: 1,
                name: '已使用'
              }, {
                id: 2,
                name: '未使用'
              }]);

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    })));

    defineProperty_default()(this, "loadTechnicDetail",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee10() {
      var technic;
      return regenerator_default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              technic = _this.base.gs('data.form.technic');

              if (technic) {
                _context10.next = 3;
                break;
              }

              return _context10.abrupt("return", []);

            case 3:
              _context10.next = 5;
              return external_maka_["fetch"].post('/v1/technic/detail/queryAll', {
                technicId: technic.id
              });

            case 5:
              return _context10.abrupt("return", _context10.sent);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    })));

    defineProperty_default()(this, "setState", function (baseSetState) {
      return function (json) {
        json['data.other.isChanged'] = json['data.other.isChanged'] !== false;
        baseSetState(json);
      };
    });

    defineProperty_default()(this, "setForm", function (form) {
      _this.base.setState({
        'data.form': form,
        'data.other.isChanged': false
      });
    });

    defineProperty_default()(this, "tabActive",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee11() {
      var resp;
      return regenerator_default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _this.checkChanged();

            case 2:
              _context11.t0 = _context11.sent;

              if (!(_context11.t0 == false)) {
                _context11.next = 5;
                break;
              }

              return _context11.abrupt("return");

            case 5:
              _context11.next = 7;
              return external_maka_["fetch"].post('/v1/bom/findById', {
                id: _this.component.props.bomId
              });

            case 7:
              resp = _context11.sent;

              _this.setForm(resp);

            case 9:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    })));

    defineProperty_default()(this, "tabClose",
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee12() {
      return regenerator_default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return _this.checkChanged();

            case 2:
              return _context12.abrupt("return", _context12.sent);

            case 3:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    })));

    Object.assign(this, option.mixins);
    this.base.setState = this.setState(this.base.setState);
  }

  createClass_default()(action, [{
    key: "checkSave",
    value: function checkSave(form) {
      var msg = [];
      !form.code && msg.push('编码不能为空!');
      !form.materiel && msg.push('物料不能为空!');
      !form.technic && msg.push('工艺不能为空!');
      !form.amount && msg.push('数量不能为空或者0!');
      !form.yield && msg.push('成品率不能为空或者0!');
      if (form.details.length == 0) msg.push("BOM\u81F3\u5C11\u9700\u8981\u4E00\u884C\u660E\u7EC6\u4FE1\u606F\uFF01");
      form.details.forEach(function (d, index) {
        !d.materiel && msg.push("\u660E\u7EC6\u7B2C".concat(index + 1, "\u884C\uFF0C\u7269\u6599\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));
        !d.amount && msg.push("\u660E\u7EC6\u7B2C".concat(index + 1, "\u884C\uFF0C\u7528\u91CF\u4E0D\u80FD\u4E3A\u7A7A\u6216\u80050\uFF01"));
        !d.lossRate && d.lossRate !== 0 && msg.push("\u660E\u7EC6\u7B2C".concat(index + 1, "\u884C\uFF0C\u635F\u8017\u7387\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));
        !d.technicDetail && msg.push("\u660E\u7EC6\u7B2C".concat(index + 1, "\u884C\uFF0C\u5DE5\u5E8F\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));
      });
      return msg;
    }
  }]);

  return action;
}()) || _class);

// EXTERNAL MODULE: ./style.less
var style = __webpack_require__(12);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@makajs/cli/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(8);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./mock.js


var moment = Object(external_maka_["getAction"])('moment');
var mockData = external_maka_["fetch"].mockData;

function initMockData() {
  if (!mockData.materiels) {
    mockData.materiels = [{
      id: 1,
      code: 'M001',
      name: '物料1',
      spec: '规格1',
      prop: '属性1',
      uom: {
        name: '个'
      }
    }, {
      id: 2,
      code: 'M002',
      name: '物料2',
      spec: '规格2',
      prop: '属性2',
      uom: {
        name: '件'
      }
    }];
  }

  if (!mockData.technics) {
    mockData.technics = [{
      id: 1,
      code: 'T001',
      name: '工艺1'
    }, {
      id: 2,
      code: 'T002',
      name: '工艺2'
    }];
  }

  if (!mockData.technicDetails) {
    mockData.technicDetails = [{
      id: 1,
      technicId: 1,
      code: 'TD001',
      name: '工艺1工序1'
    }, {
      id: 2,
      technicId: 1,
      code: 'T002',
      name: '工艺1工序2'
    }, {
      id: 1,
      technicId: 2,
      code: 'TD003',
      name: '工艺2工序1'
    }, {
      id: 2,
      technicId: 2,
      code: 'T004',
      name: '工艺2工序2'
    }];
  }

  if (!mockData.boms) {
    mockData.boms = [{
      id: 0,
      code: '001',
      materiel: mockData.materiels[0],
      technic: mockData.technics[0],
      amount: 1,
      yield: 100,
      status: {
        id: 2,
        name: '未使用'
      },
      details: [{
        id: 1,
        materiel: mockData.materiels[0],
        amount: 1,
        lossRate: 0,
        technicDetail: mockData.technicDetails[0]
      }]
    }];
  }
}

external_maka_["fetch"].mock('/v1/bom/findById', function (option) {
  initMockData();
  var bom = mockData.boms.find(function (o) {
    return o.id == option.id;
  });
  return {
    result: true,
    value: bom
  };
});
external_maka_["fetch"].mock('/v1/bom/prev', function (option) {
  initMockData();

  if (mockData.boms.length == 0) {
    return {
      result: false,
      error: {
        message: '已经是首页'
      }
    };
  }

  var index = 0;
  if (option.id || option.id == 0) index = mockData.boms.findIndex(function (o) {
    return o.id == option.id;
  });else index = mockData.boms.length;

  if (index == 0) {
    return {
      result: false,
      error: {
        message: '已经是首页'
      }
    };
  }

  return {
    result: true,
    value: mockData.boms[index - 1]
  };
});
external_maka_["fetch"].mock('/v1/bom/next', function (option) {
  initMockData();

  if (mockData.boms.length == 0) {
    return {
      result: false,
      error: {
        message: '已经是末页'
      }
    };
  }

  var index = 0;
  if (option.id || option.id == 0) index = mockData.boms.findIndex(function (o) {
    return o.id == option.id;
  });else index = -1;

  if (index == mockData.boms.length - 1) {
    return {
      result: false,
      error: {
        message: '已经是末页'
      }
    };
  }

  return {
    result: true,
    value: mockData.boms[index + 1]
  };
});
external_maka_["fetch"].mock('/v1/bom/create', function (option) {
  initMockData();
  var id = mockData.boms.length;

  var v = objectSpread_default()({}, option, {
    id: id
  });

  mockData.boms.push(v);
  return {
    result: true,
    value: v
  };
});
external_maka_["fetch"].mock('/v1/bom/update', function (option) {
  initMockData();
  var index = mockData.boms.findIndex(function (o) {
    return o.id == option.id;
  });
  mockData.boms[index] = option;
  return {
    result: true,
    value: option
  };
});
external_maka_["fetch"].mock('/v1/materiel/queryAll', function (option) {
  initMockData();
  return {
    result: true,
    value: mockData.materiels
  };
});
external_maka_["fetch"].mock('/v1/technic/queryAll', function (option) {
  initMockData();
  return {
    result: true,
    value: mockData.technics
  };
});
external_maka_["fetch"].mock('/v1/technic/detail/queryAll', function (option) {
  initMockData();
  var details = mockData.technicDetails.filter(function (o) {
    return o.technicId == option.technicId;
  });
  return {
    result: true,
    value: details
  };
});
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return index_name; });
/* concated harmony reexport state */__webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* concated harmony reexport action */__webpack_require__.d(__webpack_exports__, "action", function() { return action_action; });
/* concated harmony reexport view */__webpack_require__.d(__webpack_exports__, "view", function() { return view; });






var index_name = package_0.name;


/***/ })
/******/ ]);
});