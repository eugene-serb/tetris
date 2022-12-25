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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/timer.js */ \"./timer.js\");\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nvar _start = /*#__PURE__*/new WeakSet();\nvar _eventLoop = /*#__PURE__*/new WeakSet();\nvar _update = /*#__PURE__*/new WeakSet();\nvar _draw = /*#__PURE__*/new WeakSet();\nvar _eventHandler = /*#__PURE__*/new WeakSet();\nvar _configurations = /*#__PURE__*/new WeakMap();\nvar _DOMs = /*#__PURE__*/new WeakSet();\nvar _eventListeners = /*#__PURE__*/new WeakSet();\nvar _keyboard = /*#__PURE__*/new WeakSet();\nvar Game = /*#__PURE__*/_createClass(function Game() {\n  var _this = this;\n  _classCallCheck(this, Game);\n  _classPrivateMethodInitSpec(this, _keyboard);\n  _classPrivateMethodInitSpec(this, _eventListeners);\n  _classPrivateMethodInitSpec(this, _DOMs);\n  _classPrivateMethodInitSpec(this, _eventHandler);\n  _classPrivateMethodInitSpec(this, _draw);\n  _classPrivateMethodInitSpec(this, _update);\n  _classPrivateMethodInitSpec(this, _eventLoop);\n  _classPrivateMethodInitSpec(this, _start);\n  _classPrivateFieldInitSpec(this, _configurations, {\n    writable: true,\n    value: function value() {\n      _this.MATRIX_WIDTH = 10;\n      _this.MATRIX_HEIGHT = 24;\n      _this.SPEED_RATE = 1000;\n    }\n  });\n  _classPrivateMethodGet(this, _DOMs, _DOMs2).call(this);\n  _classPrivateFieldGet(this, _configurations).call(this);\n  _classPrivateMethodGet(this, _eventListeners, _eventListeners2).call(this);\n  _classPrivateMethodGet(this, _start, _start2).call(this);\n});\nfunction _start2() {\n  this.timer = new _timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.$TIMER);\n  this.isPaused = false;\n  this.canMove = true;\n  this.interval = setInterval(_classPrivateMethodGet(this, _eventLoop, _eventLoop2).bind(this), this.SPEED_RATE);\n}\nfunction _eventLoop2() {\n  _classPrivateMethodGet(this, _update, _update2).call(this);\n  _classPrivateMethodGet(this, _draw, _draw2).call(this);\n  _classPrivateMethodGet(this, _eventHandler, _eventHandler2).call(this);\n}\nfunction _update2() {}\nfunction _draw2() {\n  this.timer.draw();\n}\nfunction _eventHandler2() {}\nfunction _DOMs2() {\n  this.$MAP = document.querySelector('#map');\n  this.$SCORE = document.querySelector('#score');\n  this.$TIMER = document.querySelector('#timer');\n  this.$RATING = document.querySelector('#rating');\n}\nfunction _eventListeners2() {\n  _classPrivateMethodGet(this, _keyboard, _keyboard2).call(this);\n}\nfunction _keyboard2() {\n  var _this2 = this;\n  window.addEventListener('keydown', function (e) {\n    if (_this2.canMove === true) {\n      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {\n        console.log('keydown', e.code);\n      } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {\n        console.log('keydown', e.code);\n      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {\n        console.log('keydown', e.code);\n      } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {\n        console.log('keydown', e.code);\n      }\n    }\n    if (e.code === 'KeyR') {\n      clearInterval(_this2.interval);\n      _classPrivateMethodGet(_this2, _start, _start2).call(_this2);\n    }\n    if (e.code === 'KeyP') {\n      if (_this2.isPaused === true) {\n        _this2.interval = setInterval(_classPrivateMethodGet(_this2, _eventLoop, _eventLoop2).bind(_this2), _this2.SPEED_RATE);\n        _this2.isPaused = false;\n      } else {\n        clearInterval(_this2.interval);\n        _this2.isPaused = true;\n      }\n    }\n  });\n}\nnew Game();\n\n//# sourceURL=webpack:///./index.js?");

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