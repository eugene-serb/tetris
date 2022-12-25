/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/timer.js */ \"./timer.js\");\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    var _this = this;\n    _classCallCheck(this, Game);\n    _defineProperty(this, \"configurations\", function () {\n      _this.MATRIX_WIDTH = 10;\n      _this.MATRIX_HEIGHT = 24;\n      _this.SPEED_RATE = 1000;\n    });\n    this.DOMs();\n    this.configurations();\n    this.eventListeners();\n    this.start();\n  }\n  _createClass(Game, [{\n    key: \"start\",\n    value: function start() {\n      this.timer = new _timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.$TIMER);\n      this.interval = setInterval(this.eventLoop, this.SPEED_RATE);\n    }\n  }, {\n    key: \"eventLoop\",\n    value: function eventLoop() {\n      update();\n      this.draw();\n      this.eventHandler();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      console.log('update');\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      this.timer.draw();\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler() {\n      console.log('eventHandler');\n    }\n  }, {\n    key: \"DOMs\",\n    value: function DOMs() {\n      this.$MAP = document.querySelector('#map');\n      this.$SCORE = document.querySelector('#score');\n      this.$TIMER = document.querySelector('#timer');\n      this.$RATING = document.querySelector('#rating');\n    }\n  }, {\n    key: \"eventListeners\",\n    value: function eventListeners() {\n      this.keyboard();\n    }\n  }, {\n    key: \"keyboard\",\n    value: function keyboard() {\n      var _this2 = this;\n      window.addEventListener('keydown', function (e) {\n        if (_this2.canMove === true) {\n          if (e.code === 'ArrowLeft' || e.code === 'KeyA') {\n            console.log('keydown', e.code);\n          } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {\n            console.log('keydown', e.code);\n          } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {\n            console.log('keydown', e.code);\n          } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {\n            console.log('keydown', e.code);\n          }\n        }\n        if (e.code === 'KeyR') {\n          clearInterval(_this2.interval);\n          _this2.start();\n        }\n        if (_this2.canMove === true) {\n          if (e.code === 'KeyP') {\n            if (_this2.isPaused === true) {\n              _this2.interval = setInterval(_this2.eventLoop, _this2.SPEED_RATE);\n              _this2.isPaused = false;\n            } else {\n              clearInterval(_this2.interval);\n              _this2.isPaused = true;\n            }\n          }\n        }\n      });\n    }\n  }]);\n  return Game;\n}();\nnew Game();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./timer.js":
/*!******************!*\
  !*** ./timer.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timer\": () => (/* binding */ Timer),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\nvar _calculate = /*#__PURE__*/new WeakSet();\nvar Timer = /*#__PURE__*/function () {\n  function Timer(container) {\n    _classCallCheck(this, Timer);\n    _classPrivateMethodInitSpec(this, _calculate);\n    this.$container = container;\n    this.time = '00:00';\n    this.timeStart = Date.now();\n    this.timeNow = this.timeStart;\n    this.draw();\n  }\n  _createClass(Timer, [{\n    key: \"draw\",\n    value: function draw() {\n      _classPrivateMethodGet(this, _calculate, _calculate2).call(this);\n      this.$container.innerText = \"Time: \".concat(this.time);\n    }\n  }]);\n  return Timer;\n}();\nfunction _calculate2() {\n  this.timeNow = Date.now();\n  var delta = this.timeNow - this.timeStart;\n  var seconds = Math.floor(delta / 1000);\n  var minutes = 0;\n  if (seconds >= 60) {\n    minutes = Math.floor(seconds / 60);\n    seconds = seconds - minutes * 60;\n  }\n  minutes = minutes < 10 ? \"0\".concat(minutes) : \"\".concat(minutes);\n  seconds = seconds < 10 ? \"0\".concat(seconds) : \"\".concat(seconds);\n  this.time = \"\".concat(minutes, \":\").concat(seconds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n//# sourceURL=webpack:///./timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;