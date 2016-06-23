(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	const scrollTo = (element, to, duration, cb) => {
	  const start = element.scrollTop;
	  const change = to - start;
	  const increment = 40;
	  const easeInOut = function (currentTime, start, change, duration) {
	    currentTime /= duration / 2;
	    if (currentTime < 1) {
	      return change / 2 * currentTime * currentTime + start;
	    }
	    currentTime -= 1;
	    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
	  };

	  const animateScroll = function (elapsed) {
	    const elapsedTime = elapsed + increment;
	    const position = easeInOut(elapsedTime, start, change, duration);

	    if (element.nodeName === 'BODY') {
	      document.body.scrollTop = position;
	      if (document.documentElement) {
	        document.documentElement.scrollTop = position;
	      }
	    } else {
	      element.scrollTop = position;
	    }

	    if (elapsedTime < duration) {
	      setTimeout(function () {
	        animateScroll(elapsedTime);
	      }, increment);
	    } else {
	      cb && cb();
	    }
	  };
	  animateScroll(0);
	};

	module.exports = {
	  scrollTo
	};

/***/ }
/******/ ])
});
;