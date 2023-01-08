(()=>{"use strict";function t(t,e){var n=t&&"number"==typeof t?t:0,i=e&&"number"==typeof e?e:0;return Math.floor(Math.random()*(i-n)+n)}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(o)?o:String(o)),r)}var o}function i(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var r=new WeakSet;function o(){this.interval=null,this.isGameOver=!1,this.isPaused=!1}const a=function(){function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e=this,n=r),n.add(e),i(this,r,o).call(this)}var e,a;return e=t,(a=[{key:"start",value:function(){this.isGameOver&&this.clear(),this.isPaused=!1}},{key:"stop",value:function(){this.isPaused=!0,clearTimeout(this.interval)}},{key:"setGameOver",value:function(){this.stop(),this.isGameOver=!0}},{key:"clear",value:function(){this.stop(),i(this,r,o).call(this)}}])&&n(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===s(r)?r:String(r)),i)}var r}const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._value=e&&"number"==typeof e?e:0}var e,n;return e=t,(n=[{key:"value",get:function(){return this._value},set:function(t){t&&"number"==typeof t&&(this._value=t)}},{key:"increase",value:function(t){this._value+=t&&"number"==typeof t?t:1}},{key:"decrease",value:function(t){this._value-=t&&"number"==typeof t?t:1}},{key:"reset",value:function(){this._value=0}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===u(r)?r:String(r)),i)}var r}function f(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function y(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var v=new WeakSet,m=new WeakSet;function p(){this._timeStart=Date.now(),this._timeNow=this._timeStart,this._value="00:00"}function b(){this._timeNow=Date.now();var t=this._timeNow-this._timeStart,e=Math.floor(t/1e3),n=0;e>=60&&(e-=60*(n=Math.floor(e/60))),n=n<10?"0".concat(n):"".concat(n),e=e<10?"0".concat(e):"".concat(e),this._value="".concat(n,":").concat(e)}const d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,m),f(this,v),y(this,v,p).call(this)}var e,n;return e=t,(n=[{key:"value",get:function(){return y(this,m,b).call(this),this._value}},{key:"reset",value:function(){y(this,v,p).call(this)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==w(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===w(r)?r:String(r)),i)}var r}const S=function(){function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.EMPTY_VALUE=void 0!==i?i:0,r&&Array.isArray(r)?(this.value=this.generate(r.length,r[0].length,this.EMPTY_VALUE),this.insert(r,{x:0,y:0})):this.value=this.generate(e,n,this.EMPTY_VALUE)}var e,n;return e=t,(n=[{key:"generate",value:function(t,e,n){for(var i=t&&"number"==typeof t?Math.abs(Math.trunc(t)):1,r=e&&"number"==typeof e?Math.abs(Math.trunc(e)):1,o=void 0!==n?n:0,a=new Array,s=0;s<i;s++){a[s]=new Array;for(var l=0;l<r;l++)a[s][l]=o}return a}},{key:"clone",value:function(){return new t(null,null,this.EMPTY_VALUE,this.copy())}},{key:"copy",value:function(){for(var t=this.generate(this.value.length,this.value[0].length,this.EMPTY_VALUE),e=0;e<this.value.length;e++)for(var n=0;n<this.value[e].length;n++)t[e][n]=this.value[e][n];return t}},{key:"crop",value:function(t,e){for(var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y),r=this.generate(n,i,this.EMPTY_VALUE),o=0;o<n;o++)for(var a=0;a<i;a++){var s=t.x+o,l=t.y+a;r[o][a]=this.value[s][l]}this.value=r}},{key:"insert",value:function(t,e){for(var n=this.copy(),i=e.x,r=0;r<t.length;r++){for(var o=e.y,a=0;a<t[r].length;a++)n[i][o]=t[r][a],o++;i++}this.value=n}},{key:"reflectX",value:function(){this.value.reverse()}},{key:"reflectY",value:function(){this.value.forEach((function(t){t.reverse()}))}},{key:"rotateLeft",value:function(){for(var t=this.generate(this.value[0].length,this.value.length,this.EMPTY_VALUE),e=0;e<this.value.length;e++)for(var n=0;n<this.value[e].length;n++){var i=e;t[this.value[e].length-1-n][i]=this.value[e][n]}this.value=t}},{key:"rotateRight",value:function(){for(var t=this.generate(this.value[0].length,this.value.length,this.EMPTY_VALUE),e=0;e<this.value.length;e++)for(var n=0;n<this.value[e].length;n++){var i=n,r=this.value.length-1-e;t[i][r]=this.value[e][n]}this.value=t}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),E=JSON.parse("[[[1,1,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[1,1],[1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[0,1,0],[1,1,1]]]"),T=JSON.parse('[{"light":"#D93B23","dark":"#992A18"},{"light":"#D99E23","dark":"#BF8C1F"},{"light":"#FFCB5C","dark":"#FFC342"},{"light":"#02D978","dark":"#018C4D"},{"light":"#25D2E6","dark":"#23C7D9"},{"light":"#240BB3","dark":"#240BB3"},{"light":"#8932B8","dark":"#8932B8"}]');function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==k(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===k(r)?r:String(r)),i)}var r}function x(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function P(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var j=new WeakSet,M=new WeakSet;function R(){return new S(null,null,this.empty,P(this,M,O).call(this))}function O(){var t=this;return E[this.type].map((function(e){return e.map((function(e){return 0===e?t.empty:{exist:!0,color:{light:t.color.light,dark:t.color.dark}}}))}))}const L=function(){function t(e){var n=e.type,i=void 0===n?null:n,r=e.color,o=void 0===r?null:r,a=e.column,s=void 0===a?5:a,l=e.row,c=void 0===l?21:l,u=e.empty,h=void 0===u?null:u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,M),x(this,j),this.type=i,this.color=T[o],this.column=s,this.row=c,this.empty=h,this.matrix=P(this,j,R).call(this)}var e,n;return e=t,(n=[{key:"toLeft",value:function(){this.column--}},{key:"toRight",value:function(){this.column++}},{key:"toDown",value:function(){this.row--}},{key:"rotateLeft",value:function(){this.matrix.rotateLeft()}},{key:"rotateRight",value:function(){this.matrix.rotateRight()}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==C(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===C(r)?r:String(r)),i)}var r}function D(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function I(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var W=new WeakSet,G=new WeakSet,H=new WeakSet;function Y(){var t=this;this.$container.innerHTML="",this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.$container.appendChild(this.canvas),I(this,G,U).call(this),window.addEventListener("resize",(function(){I(t,G,U).call(t)})),this.media=window.matchMedia("(prefers-color-scheme: dark)"),I(this,H,$).call(this,this.media),this.media.addEventListener("change",(function(){I(t,H,$).call(t,t.media)}))}function U(){var t=this.matrix.length,e=this.matrix[0].length,n=e/t;this.canvas.width=0,this.canvas.height=0,this.canvas.width=this.$container.offsetWidth,this.canvas.height=this.canvas.width*n,this.cellWidth=this.canvas.width/t,this.cellHeight=this.canvas.height/e,this.draw()}function $(t){t.matches?this.theme="dark":this.theme="light",this.draw()}const V=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,H),D(this,G),D(this,W),!e||!n)return this.error="Error on construct",this;this.$container=e,this.matrix=n,I(this,W,Y).call(this)}var e,n;return e=t,(n=[{key:"draw",value:function(){if(!this.$container||!this.matrix)return this.error;this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.matrix.length;t++)for(var e=0;e<this.matrix[t].length;e++)this.context.fillStyle=this.matrix[t][e].color[this.theme],this.context.fillRect(t*this.cellWidth,e*this.cellHeight,this.cellWidth,this.cellHeight)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==N(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===N(r)?r:String(r)),i)}var r}function F(t,e,n){return e&&B(t.prototype,e),n&&B(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var z=new WeakSet;function K(){var t=this;window.addEventListener("keydown",(function(e){t._context.isGameOver||("ArrowLeft"===e.code||"KeyA"===e.code?t._context.moveToLeft():"ArrowUp"===e.code||"KeyW"===e.code?t._context.rotate():"ArrowRight"===e.code||"KeyD"===e.code?t._context.moveToRight():"ArrowDown"!==e.code&&"KeyS"!==e.code||t._context.moveToDown()),"KeyR"===e.code&&(t._context.clear(),t._context.start()),"KeyP"===e.code&&(t._context.isGameOver||(t._context.isPaused?t._context.start():t._context.stop()))}))}const X=F((function t(e){var n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,i=z),i.add(n),this._context=e,function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,z,K).call(this)}));function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==q(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===q(r)?r:String(r)),i)}var r}function Z(t,e,n){return e&&Q(t.prototype,e),n&&Q(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function et(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var nt=new WeakSet,it=new WeakSet,rt=new WeakSet,ot=new WeakSet;function at(){et(this,ot,ct).call(this)&&(this.LISTENER_INTERRUPT=10,this.KEYPRESS_INTERRUPT=250,this._gamepadInterval=null,this._keypressCooldown=0,et(this,it,st).call(this))}function st(){var t=this;window.addEventListener("gamepadconnected",(function(){t._gamepadInterval=setInterval((function(){t._keypressCooldown+=t.LISTENER_INTERRUPT;var e,n,i=(e=navigator.getGamepads(),n=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],r=!1,o=null;i.buttons.forEach((function(t,e){1===t.value&&(o=e,r=!0)})),r&&et(t,rt,lt).call(t,o)}),t.LISTENER_INTERRUPT)}))}function lt(t){this._keypressCooldown>=this.KEYPRESS_INTERRUPT&&(9===t&&(this._context.isPaused?(this._context.start(),this._keypressCooldown=0):(this._context.stop(),this._keypressCooldown=0)),0===t&&(this._context.rotate(),this._keypressCooldown=0),3===t&&(this._context.clear(),this._context.start(),this._keypressCooldown=0),13===t&&(this._context.moveToDown(),this._keypressCooldown=0),14===t&&(this._context.moveToLeft(),this._keypressCooldown=0),15===t&&(this._context.moveToRight(),this._keypressCooldown=0))}function ct(){return"getGamepads"in window.navigator}const ut=Z((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),tt(this,ot),tt(this,rt),tt(this,it),tt(this,nt),this._context=e,et(this,nt,at).call(this)}));function ht(t){return ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(t)}function ft(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==ht(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==ht(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===ht(r)?r:String(r)),i)}var r}function yt(){return yt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=vt(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},yt.apply(this,arguments)}function vt(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=dt(t)););return t}function mt(t,e){return mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},mt(t,e)}function pt(t,e){if(e&&("object"===ht(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return bt(t)}function bt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dt(t){return dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},dt(t)}function wt(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function gt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var St=new WeakSet,Et=new WeakSet,Tt=new WeakSet,kt=new WeakSet,_t=new WeakSet,xt=new WeakSet,Pt=new WeakSet,jt=new WeakSet;function Mt(){this.canMove=!0,this.isSettled=!1,this.$DIALOG.innerHTML="Let's have fun!",this.matrixState=new S(this.MATRIX_WIDTH,this.MATRIX_HEIGHT,this.EMPTY_CELL),this.matrixRender=this.matrixState.clone(),this.matrixDraw=this.matrixRender.clone(),this.matrixDraw.crop({x:0,y:0},{x:this.MAP_WIDTH,y:this.MAP_HEIGHT}),this.matrixDraw.reflectY(),this.drawer=new V(this.$MAP,this.matrixDraw.value),this.timer=new d,this.score=new c,this.tetromino=this.getTetromino()}function Rt(){gt(this,Tt,Ot).call(this),gt(this,kt,Lt).call(this),gt(this,_t,Ct).call(this)}function Ot(){this.matrixRender=new S(null,null,this.EMPTY_CELL,this.insertTetromino(this.matrixState.copy(),this.tetromino))}function Lt(){this.$SCORE.innerText="Score: ".concat(this.score.value),this.$TIMER.innerText="Time: ".concat(this.timer.value),this.matrixDraw=this.matrixRender.clone(),this.matrixDraw.crop({x:0,y:0},{x:this.MAP_WIDTH,y:this.MAP_HEIGHT}),this.matrixDraw.reflectY(),this.drawer.matrix=this.matrixDraw.value,this.drawer.draw()}function Ct(){this.checkEndGame(),this.isGameOver&&(this.$DIALOG.innerHTML="Game Over!",clearInterval(this.interval)),this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row-1)?this.tetromino.row--:(this.matrixState=new S(null,null,this.EMPTY_CELL,this.insertTetromino(this.matrixState.copy(),this.tetromino)),this.cleanRows(),this.settled=!0),this.settled&&(this.tetromino=this.getTetromino(),this.settled=!1)}function At(){this.keyboard=new X(this),this.gamepad=new ut(this)}function Dt(){this.MATRIX_WIDTH=10,this.MATRIX_HEIGHT=25,this.MAP_WIDTH=10,this.MAP_HEIGHT=20,this.EMPTY_CELL={exist:!1,color:{light:"#F5F5F5",dark:"#055159"}}}function It(){this.$MAP=document.querySelector("#map"),this.$DIALOG=document.querySelector("#dialog"),this.$SCORE=document.querySelector("#score"),this.$TIMER=document.querySelector("#timer")}new(function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&mt(t,e)}(s,e);var n,i,r,o,a=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=dt(r);if(o){var n=dt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return pt(this,t)});function s(t){var e,n,i,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),wt(bt(r=a.call(this)),jt),wt(bt(r),Pt),wt(bt(r),xt),wt(bt(r),_t),wt(bt(r),kt),wt(bt(r),Tt),wt(bt(r),Et),wt(bt(r),St),r._params=t,r.SPEED_RATE=null!==(e=r._params)&&void 0!==e&&e.speedRate&&"number"==typeof(null===(n=r._params)||void 0===n?void 0:n.speedRate)?null===(i=r._params)||void 0===i?void 0:i.speedRate:250,gt(bt(r),jt,It).call(bt(r)),gt(bt(r),Pt,Dt).call(bt(r)),gt(bt(r),xt,At).call(bt(r)),gt(bt(r),St,Mt).call(bt(r)),r}return n=s,(i=[{key:"getTetromino",value:function(){return new L({type:t(0,7),color:t(0,7),empty:this.EMPTY_CELL})}},{key:"checkEndGame",value:function(){var t=this;this.matrixState.value.forEach((function(e){e[19].exist&&t.setGameOver()}))}},{key:"cleanRows",value:function(){for(var t=this,e=this.matrixState.copy(),n=function(n){for(var r=0,o=0;o<e.length;o++)e[o][n].exist&&r++;10===r&&(e=e.map((function(e){return Array.prototype.concat(e.slice(0,n),e.slice(n+1,e.length),[t.EMPTY_CELL])})),t.score.increase(1),n--),i=n},i=0;i<e[0].length;i++)n(i);this.matrixState=new S(null,null,this.EMPTY_CELL,e)}},{key:"insertTetromino",value:function(t,e){for(var n=e.matrix.value,i=e.column,r=e.row,o=t,a=0;a<n.length;a++)for(var s=0;s<n[a].length;s++)n[a][s].exist&&(o[i+a][r+s]=n[a][s]);return o}},{key:"isValidMove",value:function(t,e,n){for(var i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++){if(e+i>=this.matrixState.value.length||n+r>=this.matrixState.value[0].length||e+i<0||n+r<0)return!1;if(t[i][r].exist&&this.matrixState.value[e+i][n+r].exist)return!1}return!0}},{key:"rotate",value:function(){this.canMove&&(this.tetromino.rotateRight(),this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row)?gt(this,kt,Lt).call(this):this.tetromino.rotateLeft())}},{key:"moveToLeft",value:function(){this.canMove&&this.isValidMove(this.tetromino.matrix.value,this.tetromino.column-1,this.tetromino.row)&&(this.tetromino.toLeft(),gt(this,kt,Lt).call(this))}},{key:"moveToRight",value:function(){this.canMove&&this.isValidMove(this.tetromino.matrix.value,this.tetromino.column+1,this.tetromino.row)&&(this.tetromino.toRight(),gt(this,kt,Lt).call(this))}},{key:"moveToDown",value:function(){this.canMove&&this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row-1)&&(this.tetromino.toDown(),gt(this,kt,Lt).call(this))}},{key:"start",value:function(){yt(dt(s.prototype),"start",this).call(this),this.canMove=!0,this.interval=setInterval(gt(this,Et,Rt).bind(this),this.SPEED_RATE)}},{key:"stop",value:function(){yt(dt(s.prototype),"stop",this).call(this),this.canMove=!1}},{key:"clear",value:function(){yt(dt(s.prototype),"clear",this).call(this),gt(this,St,Mt).call(this)}}])&&ft(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),s}(a))({speedRate:250}).start()})();