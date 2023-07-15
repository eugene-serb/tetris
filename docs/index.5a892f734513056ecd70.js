(()=>{"use strict";function t(t,e){var n=t&&"number"==typeof t?t:0,i=e&&"number"==typeof e?e:0;return Math.floor(Math.random()*(i-n)+n)}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(o)?o:String(o)),r)}var o}function i(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var r=new WeakSet;function o(){this.interval=null,this.isGameOver=!1,this.isPaused=!1,this.canMove=!0}const a=function(){function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e=this,n=r),n.add(e),i(this,r,o).call(this)}var e,a;return e=t,(a=[{key:"start",value:function(){this.isGameOver&&this.clear(),this.isPaused=!1,this.canMove=!0}},{key:"stop",value:function(){this.isPaused=!0,this.canMove=!1,clearTimeout(this.interval)}},{key:"setGameOver",value:function(){this.isGameOver=!0,this.stop()}},{key:"clear",value:function(){this.stop(),i(this,r,o).call(this)}}])&&n(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===s(r)?r:String(r)),i)}var r}const c=function(){function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.EMPTY_VALUE=void 0!==i?i:0,r&&Array.isArray(r)?(this.value=this.generate(r.length,r[0].length,this.EMPTY_VALUE),this.insert(r,{x:0,y:0})):this.value=this.generate(e,n,this.EMPTY_VALUE)}var e,n;return e=t,(n=[{key:"generate",value:function(t,e,n){for(var i=t&&"number"==typeof t?Math.abs(Math.trunc(t)):1,r=e&&"number"==typeof e?Math.abs(Math.trunc(e)):1,o=void 0!==n?n:0,a=new Array,s=0;s<i;s++){a[s]=new Array;for(var l=0;l<r;l++)a[s][l]=o}return a}},{key:"clone",value:function(){return new t(null,null,this.EMPTY_VALUE,this.copy())}},{key:"copy",value:function(){for(var t=this.generate(this.value.length,this.value[0].length,this.EMPTY_VALUE),e=0;e<this.value.length;e++)for(var n=0;n<this.value[e].length;n++)t[e][n]=this.value[e][n];return t}},{key:"crop",value:function(t,e){for(var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y),r=this.generate(n,i,this.EMPTY_VALUE),o=0;o<n;o++)for(var a=0;a<i;a++){var s=t.x+o,l=t.y+a;r[o][a]=this.value[s][l]}this.value=r}},{key:"insert",value:function(t,e){for(var n=this.copy(),i=e.x,r=0;r<t.length;r++){for(var o=e.y,a=0;a<t[r].length;a++)n[i][o]=t[r][a],o++;i++}this.value=n}},{key:"reflectX",value:function(){this.value.reverse()}},{key:"reflectY",value:function(){this.value.forEach((function(t){t.reverse()}))}},{key:"rotateLeft",value:function(){for(var t=this.generate(this.value[0].length,this.value.length,this.EMPTY_VALUE),e=0;e<this.value.length;e++)for(var n=0;n<this.value[e].length;n++){var i=e;t[this.value[e].length-1-n][i]=this.value[e][n]}this.value=t}},{key:"rotateRight",value:function(){for(var t=this.generate(this.value[0].length,this.value.length,this.EMPTY_VALUE),e=0;e<this.value.length;e++)for(var n=0;n<this.value[e].length;n++){var i=n,r=this.value.length-1-e;t[i][r]=this.value[e][n]}this.value=t}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===u(r)?r:String(r)),i)}var r}function f(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function y(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var v=new WeakSet,m=new WeakSet,p=new WeakSet;function d(){var t=this;this.$container.innerHTML="",this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.$container.appendChild(this.canvas),y(this,m,b).call(this),window.addEventListener("resize",(function(){return y(t,m,b).call(t)})),this.media=window.matchMedia("(prefers-color-scheme: dark)"),y(this,p,w).call(this,this.media),this.media.addEventListener("change",(function(){return y(t,p,w).call(t,t.media)}))}function b(){var t=this.matrix.length,e=this.matrix[0].length,n=e/t;this.canvas.width=0,this.canvas.height=0,this.canvas.width=this.$container.offsetWidth,this.canvas.height=this.canvas.width*n,this.cellWidth=this.canvas.width/t,this.cellHeight=this.canvas.height/e,this.draw()}function w(t){t.matches?this.theme="dark":this.theme="light",this.draw()}const g=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p),f(this,m),f(this,v),!e||!n)return this.error="Error on construct",this;this.$container=e,this.matrix=n,y(this,v,d).call(this)}var e,n;return e=t,(n=[{key:"draw",value:function(){if(!this.$container||!this.matrix)return this.error;this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.matrix.length;t++)for(var e=0;e<this.matrix[t].length;e++)this.context.fillStyle=this.matrix[t][e].color[this.theme],this.context.fillRect(t*this.cellWidth,e*this.cellHeight,this.cellWidth,this.cellHeight)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==S(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===S(r)?r:String(r)),i)}var r}const E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._value=e&&"number"==typeof e?e:0}var e,n;return e=t,(n=[{key:"value",get:function(){return this._value},set:function(t){t&&"number"==typeof t&&(this._value=t)}},{key:"increase",value:function(t){this._value+=t&&"number"==typeof t?t:1}},{key:"decrease",value:function(t){this._value-=t&&"number"==typeof t?t:1}},{key:"reset",value:function(){this._value=0}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function k(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==_(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===_(r)?r:String(r)),i)}var r}function x(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function P(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var R=new WeakSet,j=new WeakSet;function M(){this._timeStart=Date.now(),this._timeNow=this._timeStart,this._value="00:00"}function O(){this._timeNow=Date.now();var t=this._timeNow-this._timeStart,e=Math.floor(t/1e3),n=0;e>=60&&(e-=60*(n=Math.floor(e/60))),n=n<10?"0".concat(n):"".concat(n),e=e<10?"0".concat(e):"".concat(e),this._value="".concat(n,":").concat(e)}const L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,j),x(this,R),P(this,R,M).call(this)}var e,n;return e=t,(n=[{key:"value",get:function(){return P(this,j,O).call(this),this._value}},{key:"reset",value:function(){P(this,R,M).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==C(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===C(r)?r:String(r)),i)}var r}function I(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function D(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var W=new WeakSet,G=new WeakSet,Y=new WeakSet,H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,Y),I(this,G),I(this,W),this._key=e,this._value=[],D(this,Y,U).call(this)}var e,n;return e=t,n=[{key:"value",get:function(){return D(this,Y,U).call(this),this._value}},{key:"add",value:function(t,e){if(t&&"number"==typeof t&&e&&"string"==typeof e){var n={date:Date.now(),score:t,time:e};this._value.push(n),D(this,W,N).call(this),D(this,G,$).call(this)}}},{key:"clean",value:function(){this._value=[],D(this,G,$).call(this)}}],n&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(){this._value.sort((function(t,e){return t.score<e.score?1:t.score>e.score?-1:void 0}))}function $(){localStorage.setItem(this._key,JSON.stringify(this._value))}function U(){localStorage[this._key]?this._value=JSON.parse(localStorage[this._key]):this._value=[],D(this,W,N).call(this)}const V=H;function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==B(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===B(r)?r:String(r)),i)}var r}function K(t,e,n){return e&&z(t.prototype,e),n&&z(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var F=new WeakSet;function X(){var t=this;window.addEventListener("keydown",(function(e){t._context.isGameOver||("ArrowLeft"===e.code||"KeyA"===e.code?t._context.moveToLeft():"ArrowUp"===e.code||"KeyW"===e.code?t._context.rotate():"ArrowRight"===e.code||"KeyD"===e.code?t._context.moveToRight():"ArrowDown"!==e.code&&"KeyS"!==e.code||t._context.moveToDown()),"KeyR"===e.code&&(t._context.clear(),t._context.start()),"KeyP"===e.code&&(t._context.isGameOver||(t._context.isPaused?t._context.start():t._context.stop()))}))}const q=K((function t(e){var n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,i=F),i.add(n),this._context=e,function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,F,X).call(this)}));function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==J(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===J(r)?r:String(r)),i)}var r}function tt(t,e,n){return e&&Z(t.prototype,e),n&&Z(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function nt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var it=new WeakSet,rt=new WeakSet,ot=new WeakSet,at=new WeakSet;function st(){nt(this,at,ut).call(this)&&(this.LISTENER_INTERRUPT=10,this.KEYPRESS_INTERRUPT=250,this._gamepadInterval=null,this._keypressCooldown=0,nt(this,rt,lt).call(this))}function lt(){var t=this;window.addEventListener("gamepadconnected",(function(){t._gamepadInterval=setInterval((function(){t._keypressCooldown+=t.LISTENER_INTERRUPT;var e,n,i=(e=navigator.getGamepads(),n=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],r=!1,o=null;i.buttons.forEach((function(t,e){1===t.value&&(o=e,r=!0)})),r&&nt(t,ot,ct).call(t,o)}),t.LISTENER_INTERRUPT)}))}function ct(t){this._keypressCooldown>=this.KEYPRESS_INTERRUPT&&(8===t&&(this._context.isPaused?(this._context.start(),this._keypressCooldown=0):(this._context.stop(),this._keypressCooldown=0)),9===t&&(this._context.clear(),this._context.start(),this._keypressCooldown=0),0===t&&(this._context.rotate(),this._keypressCooldown=0),13===t&&(this._context.moveToDown(),this._keypressCooldown=0),14===t&&(this._context.moveToLeft(),this._keypressCooldown=0),15===t&&(this._context.moveToRight(),this._keypressCooldown=0))}function ut(){return"getGamepads"in window.navigator}const ht=tt((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),et(this,at),et(this,ot),et(this,rt),et(this,it),this._context=e,nt(this,it,st).call(this)}));function ft(t){return ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(t)}function yt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==ft(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==ft(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===ft(r)?r:String(r)),i)}var r}function vt(t,e,n){return e&&yt(t.prototype,e),n&&yt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var mt=new WeakSet;function pt(){var t=this,e=0,n=0;this._container.addEventListener("touchstart",(function(t){e=t.touches[0].pageX,n=t.touches[0].pageY})),this._container.addEventListener("touchend",(function(i){var r=i.changedTouches[0].pageX,o=i.changedTouches[0].pageY,a=r-e,s=o-n,l=Math.abs(a)>Math.abs(s),c=Math.abs(s)>Math.abs(a);a>0&&l?t._context.moveToRight():a<0&&l?t._context.moveToLeft():s>0&&c?t._context.moveToDown():s<0&&c&&t._context.rotate()}))}const dt=vt((function t(e,n){var i,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(i=this,r=mt),r.add(i),this._context=e,this._container=n,function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,mt,pt).call(this)})),bt=JSON.parse("[[[1,1,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[1,1],[1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[0,1,0],[1,1,1]]]"),wt=JSON.parse('[{"light":"#D93B23","dark":"#992A18"},{"light":"#D99E23","dark":"#BF8C1F"},{"light":"#FFCB5C","dark":"#FFC342"},{"light":"#02D978","dark":"#018C4D"},{"light":"#25D2E6","dark":"#23C7D9"},{"light":"#240BB3","dark":"#240BB3"},{"light":"#8932B8","dark":"#8932B8"}]');function gt(t){return gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(t)}function St(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==gt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==gt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===gt(r)?r:String(r)),i)}var r}function Tt(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function Et(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var _t=new WeakSet,kt=new WeakSet;function xt(){return new c(null,null,this.empty,Et(this,kt,Pt).call(this))}function Pt(){var t=this;return bt[this.type].map((function(e){return e.map((function(e){return 0===e?t.empty:{exist:!0,color:{light:t.color.light,dark:t.color.dark}}}))}))}const Rt=function(){function t(e){var n=e.type,i=void 0===n?null:n,r=e.color,o=void 0===r?null:r,a=e.column,s=void 0===a?5:a,l=e.row,c=void 0===l?21:l,u=e.empty,h=void 0===u?null:u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Tt(this,kt),Tt(this,_t),this.type=i,this.color=wt[o],this.column=s,this.row=c,this.empty=h,this.matrix=Et(this,_t,xt).call(this)}var e,n;return e=t,(n=[{key:"toLeft",value:function(){this.column--}},{key:"toRight",value:function(){this.column++}},{key:"toDown",value:function(){this.row--}},{key:"rotateLeft",value:function(){this.matrix.rotateLeft()}},{key:"rotateRight",value:function(){this.matrix.rotateRight()}}])&&St(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function jt(t){return jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jt(t)}function Mt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==jt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==jt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===jt(r)?r:String(r)),i)}var r}function Ot(){return Ot="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=At(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},Ot.apply(this,arguments)}function Lt(t,e){return Lt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Lt(t,e)}function Ct(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function At(t){return At=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},At(t)}function It(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function Dt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var Wt=new WeakSet,Gt=new WeakSet,Yt=new WeakSet,Ht=new WeakSet,Nt=new WeakSet,$t=new WeakSet,Ut=new WeakSet,Vt=new WeakSet,Bt=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Lt(t,e)}(s,e);var n,i,r,o,a=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=At(r);if(o){var n=At(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===jt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Ct(t)}(this,t)});function s(t){var e,n,i,r,o,l,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),It(Ct(c=a.call(this)),Vt),It(Ct(c),Ut),It(Ct(c),$t),It(Ct(c),Nt),It(Ct(c),Ht),It(Ct(c),Yt),It(Ct(c),Gt),It(Ct(c),Wt),c._params=t,c.SPEED_RATE=null!==(e=c._params)&&void 0!==e&&e.speedRate&&"number"==typeof(null===(n=c._params)||void 0===n?void 0:n.speedRate)?null===(i=c._params)||void 0===i?void 0:i.speedRate:250,c.KEY_RATING=null!==(r=c._params)&&void 0!==r&&r.keyRating&&"string"==typeof(null===(o=c._params)||void 0===o?void 0:o.keyRating)?null===(l=c._params)||void 0===l?void 0:l.keyRating:"tetris",Dt(Ct(c),Vt,Zt).call(Ct(c)),Dt(Ct(c),Ut,Qt).call(Ct(c)),Dt(Ct(c),$t,Jt).call(Ct(c)),Dt(Ct(c),Wt,zt).call(Ct(c)),c}return n=s,i=[{key:"getTetromino",value:function(){return new Rt({type:t(0,7),color:t(0,7),empty:this.EMPTY_CELL})}},{key:"checkEndGame",value:function(){for(var t=0;t<this.matrixState.value.length;t++)if(this.matrixState.value[t][19].exist){this.setGameOver();break}}},{key:"cleanRows",value:function(){for(var t=this,e=this.matrixState.copy(),n=function(n){for(var r=0,o=0;o<e.length;o++)e[o][n].exist&&r++;10===r&&(e=e.map((function(e){return Array.prototype.concat(e.slice(0,n),e.slice(n+1,e.length),[t.EMPTY_CELL])})),t.score.increase(1),n--),i=n},i=0;i<e[0].length;i++)n(i);this.matrixState=new c(null,null,this.EMPTY_CELL,e)}},{key:"insertTetromino",value:function(t,e){for(var n=e.matrix.value,i=e.column,r=e.row,o=t,a=0;a<n.length;a++)for(var s=0;s<n[a].length;s++)n[a][s].exist&&(o[i+a][r+s]=n[a][s]);return o}},{key:"isValidMove",value:function(t,e,n){for(var i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++){if(e+i>=this.matrixState.value.length||n+r>=this.matrixState.value[0].length||e+i<0||n+r<0)return!1;if(t[i][r].exist&&this.matrixState.value[e+i][n+r].exist)return!1}return!0}},{key:"rotate",value:function(){this.canMove&&(this.tetromino.rotateRight(),this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row)?Dt(this,Ht,Xt).call(this):this.tetromino.rotateLeft())}},{key:"moveToLeft",value:function(){this.canMove&&this.isValidMove(this.tetromino.matrix.value,this.tetromino.column-1,this.tetromino.row)&&(this.tetromino.toLeft(),Dt(this,Ht,Xt).call(this))}},{key:"moveToRight",value:function(){this.canMove&&this.isValidMove(this.tetromino.matrix.value,this.tetromino.column+1,this.tetromino.row)&&(this.tetromino.toRight(),Dt(this,Ht,Xt).call(this))}},{key:"moveToDown",value:function(){this.canMove&&this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row-1)&&(this.tetromino.toDown(),Dt(this,Ht,Xt).call(this))}},{key:"start",value:function(){Ot(At(s.prototype),"start",this).call(this),this.interval=setInterval(Dt(this,Gt,Kt).bind(this),this.SPEED_RATE)}},{key:"setGameOver",value:function(){Ot(At(s.prototype),"setGameOver",this).call(this);var t=this.score.value,e=this.timer.value;this.rating.add(t,e),this.drawRating()}},{key:"clear",value:function(){Ot(At(s.prototype),"clear",this).call(this),Dt(this,Wt,zt).call(this)}},{key:"drawRating",value:function(){this.$RATING.innerHTML="";for(var t=this.rating.value,e=0;e<t.length&&e<10;e++){var n=document.createElement("tr"),i=document.createElement("td"),r=document.createElement("td"),o=document.createElement("td"),a=document.createElement("td"),s=new Date(t[e].date);i.innerText=e+1,r.innerText=t[e].score,o.innerText=t[e].time,a.innerText=s.toLocaleDateString(),n.append(i,r,o,a),this.$RATING.appendChild(n)}}}],i&&Mt(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),s}(a);function zt(){this.isSettled=!1,this.$DIALOG.innerHTML="Let's have fun!",this.rating=new V(this.KEY_RATING),this.drawRating(),this.timer=new L,this.score=new E,this.matrixState=new c(this.MATRIX_WIDTH,this.MATRIX_HEIGHT,this.EMPTY_CELL),this.matrixRender=this.matrixState.clone(),this.matrixDraw=this.matrixRender.clone(),this.matrixDraw.crop({x:0,y:0},{x:this.MAP_WIDTH,y:this.MAP_HEIGHT}),this.matrixDraw.reflectY(),this.drawer=new g(this.$MAP,this.matrixDraw.value),this.tetromino=this.getTetromino()}function Kt(){Dt(this,Yt,Ft).call(this),Dt(this,Ht,Xt).call(this),Dt(this,Nt,qt).call(this)}function Ft(){this.matrixRender=new c(null,null,this.EMPTY_CELL,this.insertTetromino(this.matrixState.copy(),this.tetromino))}function Xt(){this.$SCORE.innerText="Score: ".concat(this.score.value),this.$TIMER.innerText="Time: ".concat(this.timer.value),this.matrixDraw=this.matrixRender.clone(),this.matrixDraw.crop({x:0,y:0},{x:this.MAP_WIDTH,y:this.MAP_HEIGHT}),this.matrixDraw.reflectY(),this.drawer.matrix=this.matrixDraw.value,this.drawer.draw()}function qt(){this.checkEndGame(),this.isGameOver&&(this.$DIALOG.innerHTML="Game Over!",clearInterval(this.interval)),this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row-1)?this.tetromino.row--:(this.matrixState=new c(null,null,this.EMPTY_CELL,this.insertTetromino(this.matrixState.copy(),this.tetromino)),this.cleanRows(),this.settled=!0),this.settled&&(this.tetromino=this.getTetromino(),this.settled=!1)}function Jt(){this.keyboard=new q(this),this.gamepad=new ht(this),this.touchscreen=new dt(this,this.$MAP)}function Qt(){this.MATRIX_WIDTH=10,this.MATRIX_HEIGHT=25,this.MAP_WIDTH=10,this.MAP_HEIGHT=20,this.EMPTY_CELL={exist:!1,color:{light:"#F5F5F5",dark:"#055159"}}}function Zt(){this.$MAP=document.querySelector("#map"),this.$DIALOG=document.querySelector("#dialog"),this.$SCORE=document.querySelector("#score"),this.$TIMER=document.querySelector("#timer"),this.$RATING=document.querySelector("#rating")}new Bt({speedRate:250,keyRating:"es:tetris"}).start()})();