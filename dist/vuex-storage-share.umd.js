(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuex-storage-share"] = factory();
	else
		root["vuex-storage-share"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/vuex-storage-share.js
const StoragePluginCache = {}

const vuexStorageShare = function(storagePrefix, options) {
  if (typeof options !== 'object') {
    options = {}
  }
  if (typeof storagePrefix === 'object') {
    options = Object.assign(storagePrefix, options)
  }
  if (typeof storagePrefix === 'string') {
    options.storagePrefix = storagePrefix
  }
  options = Object.assign(
    {
      expires_in: 3600,
      storagePrefix: 'VUEX_STORAGE/',
      predicate: () => {
        return true
      }
    },
    options
  )
  if(!StoragePluginCache[options.storagePrefix]) {
  	StoragePluginCache[options.storagePrefix] = new StoragePlugin(options)
  }
  return StoragePluginCache[options.storagePrefix]
}

const StoragePlugin = function(options) {
  this.initStatus = false
  this.storagePrefix = options.storagePrefix
  this.expires_in = options.expires_in
  this.uniqueId = `${Date.now()}-${Math.random()}`

  if (Array.isArray(options.predicate)) {
    const predicate = options.predicate
    if (predicate.length) {
      options.predicate = (mutation) => {
        return predicate.includes(mutation.type)
      }
    }
    if (!predicate.length) {
      options.predicate = (mutation) => {
        return true
      }
    }
  }

  let in_progress = false

  this.subscriber = store => {
    if(!this.initStatus) {
      const storageHandler = (e) => {
        console.log(e)
        if (!e.key || !this.initStatus || e.key.indexOf(this.storagePrefix) !== 0) {
          return
        }

        let newValue = e.newValue
        let type = null
        let payload = null

        try {
          newValue = JSON.parse(newValue)
          payload = newValue.payload
          type = newValue.type
        } catch (e) {
          // console.log(e)
        }

        const uniqueId = newValue && newValue.uniqueId

        if(uniqueId === this.uniqueId) {
          return
        }

        if (!type) {
          return
        }

        if (typeof options.storageListener === 'function') {
          options.storageListener.call(this, {
            type,
            payload
          })
        }
        try {
          in_progress = true
          store.commit(type, payload)
        } finally {
          in_progress = false
        }
      }

      window.addEventListener('storage', storageHandler, false)
    }
    // ??? localStorage ?????? state ???????????????
    Object.keys(window.localStorage).forEach(key => {
      if (key.indexOf(this.storagePrefix) !== 0) {
        return
      }
      key = key.substring(this.storagePrefix.length)
      if (!options.predicate({
        type: key
      })) {
        return
      }
      const mutation = this.get(key)
      try {
        store.commit(mutation.type, mutation.payload)
      } catch (e) {
        // console.log(e)
      }
    })
    this.initStatus = true
    // ??? store ??????????????????
    store.subscribe((mutation, state) => {
      // ?????? mutation ????????????
      // mutation ???????????? { type, payload }
      if(in_progress) {
        return
      }
      if (options.predicate(mutation, state)) {
        this.set(mutation.type, mutation.payload)
      }
    })
  }
}

StoragePlugin.prototype.set = function(key, data) {
  const storeKey = this.storagePrefix + key
  try {
    data = JSON.stringify({
      type: key,
      payload: data,
      uniqueId: this.uniqueId
    })
  } catch (e) {
    // console.log(e)
  }
  window.localStorage.setItem(storeKey, data)
}

StoragePlugin.prototype.get = function(key) {
  key = this.storagePrefix + key
  let data = window.localStorage.getItem(key)
  try {
    data = JSON.parse(data)
  } catch (e) {
    // console.log(e)
  }
  return data
}

StoragePlugin.prototype.remove = function(key) {
  key = this.storagePrefix + key
  try {
    window.localStorage.removeItem(key)
  } catch (e) {
    // console.log(e)
  }
}

StoragePlugin.prototype.clear = function() {
  Object.keys(window.localStorage).forEach(key => {
    if (key.indexOf(this.storagePrefix) !== 0) {
      return
    }
    key = key.substring(this.storagePrefix.length)
    this.remove(key)
  })
}

/* harmony default export */ var vuex_storage_share = (vuexStorageShare);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuex_storage_share);



/***/ })

/******/ });
});
//# sourceMappingURL=vuex-storage-share.umd.js.map