(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(o)?o:String(o)),r)}var o}var i=new WeakSet;function n(){this.timeNow=Date.now();var t=this.timeNow-this.timeStart,e=Math.floor(t/1e3),i=0;e>=60&&(e-=60*(i=Math.floor(e/60))),i=i<10?"0".concat(i):"".concat(i),e=e<10?"0".concat(e):"".concat(e),this.time="".concat(i,":").concat(e)}const r=function(){function t(e){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=i),r.add(n),this.$container=e,this.time="00:00",this.timeStart=Date.now(),this.timeNow=this.timeStart}var r,o;return r=t,(o=[{key:"draw",value:function(){(function(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i})(this,i,n).call(this),this.$container.innerText="Time: ".concat(this.time)}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(r)?r:String(r)),n)}var r}const s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=e,this.balance=0}var e,i;return e=t,(i=[{key:"increase",value:function(t){this.balance+=t,this.draw()}},{key:"draw",value:function(){this.$container.innerText="Score: ".concat(this.balance)}}])&&a(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==h(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(r)?r:String(r)),n)}var r}function c(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function u(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var f=new WeakSet,v=new WeakSet,m=new WeakSet;function y(){var t=this;this.$container.innerHTML="",this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.$container.appendChild(this.canvas),u(this,v,p).call(this),window.addEventListener("resize",(function(){u(t,v,p).call(t)})),this.media=window.matchMedia("(prefers-color-scheme: dark)"),u(this,m,w).call(this,this.media),this.media.addEventListener("change",(function(){u(t,m,w).call(t,t.media)}))}function p(){this.canvas.width=0,this.canvas.height=0,this.ratio=this.mapHeight/this.mapWidth,this.canvas.width=this.$container.offsetWidth,this.canvas.height=this.canvas.width*this.ratio,this.cellWidth=this.canvas.width/this.mapWidth,this.cellHeight=this.canvas.height/this.mapHeight,this.draw()}function w(t){t.matches?(this.color_canvas="#055159",this.color_cells="#0DC4D9"):(this.color_canvas="#F5F5F5",this.color_cells="#0DC4D9"),this.draw()}const d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,m),c(this,v),c(this,f),this.$container=e,this.matrix=i,this.mapWidth=i.length,this.mapHeight=i[0].length,u(this,f,y).call(this),this.draw()}var e,i;return e=t,(i=[{key:"draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color_canvas,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color_cells;for(var t=0;t<this.mapWidth;t++)for(var e=0;e<this.mapHeight;e++)0!==this.matrix[t][e]&&this.context.fillRect(t*this.cellWidth,e*this.cellHeight,this.cellWidth,this.cellHeight)}}])&&l(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==b(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(r)?r:String(r)),n)}var r}const S=function(){function t(e){var i=e.width,n=void 0===i?null:i,r=e.height,o=void 0===r?null:r,a=e.matrix,s=void 0===a?null:a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s?(this.width=s.length,this.height=s[0].length,this.value=s):(this.width=n,this.height=o,this.value=this.generate(this.width,this.height))}var e,i;return e=t,(i=[{key:"generate",value:function(t,e){for(var i=new Array,n=0;n<t;n++){i[n]=new Array;for(var r=0;r<e;r++)i[n][r]=0}return i}},{key:"clone",value:function(){for(var e=this.generate(this.value.length,this.value[0].length),i=0;i<this.value.length;i++)for(var n=0;n<this.value[i].length;n++)e[i][n]=this.value[i][n];return new t({matrix:e})}},{key:"copy",value:function(){for(var t=this.generate(this.value.length,this.value[0].length),e=0;e<this.value.length;e++)for(var i=0;i<this.value[e].length;i++)t[e][i]=this.value[e][i];return t}},{key:"crop",value:function(t){for(var e=Math.abs(t[1][0]-t[0][0]),i=Math.abs(t[1][1]-t[0][1]),n=this.generate(e,i),r=0;r<e;r++)for(var o=0;o<i;o++){var a=t[0][0]+r,s=t[0][1]+o;n[r][o]=this.value[a][s]}return n}},{key:"insert",value:function(t,e,i){for(var n=this.copy(),r=e,o=0;o<t.length;o++){for(var a=i,s=0;s<t[0].length;s++)n[r][a]=t[o][s],a++;r++}return n}},{key:"reflectX",value:function(){return this.copy().reverse()}},{key:"reflectY",value:function(){for(var t=this.generate(this.value.length,this.value[0].length),e=0;e<this.value.length;e++)t[e]=this.value[e].reverse();return t}},{key:"rotateLeft",value:function(){for(var t=this.generate(this.value[0].length,this.value.length),e=0;e<this.value.length;e++)for(var i=0;i<this.value[e].length;i++){var n=e;t[this.value[e].length-1-i][n]=this.value[e][i]}return t}},{key:"rotateRight",value:function(){for(var t=this.generate(this.value[0].length,this.value.length),e=0;e<this.value.length;e++)for(var i=0;i<this.value[e].length;i++){var n=i,r=this.value.length-1-e;t[n][r]=this.value[e][i]}return t}}])&&g(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=JSON.parse("[[[1,1,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[1,1],[1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[0,1,0],[1,1,1]]]"),x=JSON.parse('["cyan","yellow","purple","green","red","blue","orange"]');function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==k(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(r)?r:String(r)),n)}var r}const P=function(){function t(e){var i=e.type,n=void 0===i?null:i,r=e.color,o=void 0===r?null:r,a=e.column,s=void 0===a?5:a,h=e.row,l=void 0===h?21:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=n,this.color=x[o],this.column=s,this.row=l,this.matrix=this.generate()}var e,i;return e=t,(i=[{key:"generate",value:function(){return new S({matrix:T[this.type]})}},{key:"toLeft",value:function(){this.column--}},{key:"toRight",value:function(){this.column++}},{key:"toDown",value:function(){this.row--}},{key:"rotate",value:function(){this.matrix=new S({matrix:this.matrix.rotateRight()})}}])&&E(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t,e){return Math.floor(Math.random()*(e-t)+t)}function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function R(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==j(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(r)?r:String(r)),n)}var r}function D(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function M(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var A=new WeakSet,H=new WeakSet,I=new WeakSet,_=new WeakSet,O=new WeakSet,C=new WeakSet,$=new WeakSet,L=new WeakSet,G=new WeakSet,K=new WeakSet;function N(){this.matrixState=new S({width:this.MATRIX_WIDTH,height:this.MATRIX_HEIGHT}),this.matrixRender=this.matrixState.clone(),this.matrixDraw=this.matrixRender.crop([[0,0],[this.MAP_WIDTH,this.MAP_HEIGHT]]),this.map=new d(this.$MAP,this.matrixDraw),this.timer=new r(this.$TIMER),this.score=new s(this.$SCORE),this.isPaused=!1,this.isSettled=!1,this.canMove=!0,this.tetromino=this.getTetromino(),this.interval=setInterval(M(this,H,X).bind(this),this.SPEED_RATE)}function X(){M(this,I,q).call(this),M(this,_,z).call(this),M(this,O,F).call(this),M(this,C,J).call(this)}function q(){this.tetromino.row--}function z(){this.matrixRender=new S({matrix:this.matrixState.copy()});var t=this.matrixRender.insert(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row);this.matrixRender=new S({matrix:t})}function F(){this.matrixDraw=new S({matrix:this.matrixRender.crop([[0,0],[this.MAP_WIDTH,this.MAP_HEIGHT]])}),this.matrixDraw.matrix=this.matrixDraw.reflectY(),this.map.matrix=this.matrixDraw.value,this.timer.draw(),this.score.draw(),this.map.draw()}function J(){if(0===this.tetromino.row){var t=this.matrixState.insert(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row);this.matrixState=new S({matrix:t}),this.settled=!0}this.settled&&(this.tetromino=this.getTetromino(),this.settled=!1)}function Y(){this.MATRIX_WIDTH=10,this.MATRIX_HEIGHT=25,this.MAP_WIDTH=10,this.MAP_HEIGHT=20,this.SPEED_RATE=250}function U(){this.$MAP=document.querySelector("#map"),this.$SCORE=document.querySelector("#score"),this.$TIMER=document.querySelector("#timer"),this.$RATING=document.querySelector("#rating")}function B(){M(this,K,Q).call(this)}function Q(){var t=this;window.addEventListener("keydown",(function(e){!0===t.canMove&&("ArrowLeft"===e.code||"KeyA"===e.code?t.tetromino.toLeft():"ArrowUp"===e.code||"KeyW"===e.code?t.tetromino.rotate():"ArrowRight"===e.code||"KeyD"===e.code?t.tetromino.toRight():"ArrowDown"!==e.code&&"KeyS"!==e.code||t.tetromino.toDown()),"KeyR"===e.code&&(clearInterval(t.interval),M(t,A,N).call(t)),"KeyP"===e.code&&(!0===t.isPaused?(t.interval=setInterval(M(t,H,X).bind(t),t.SPEED_RATE),t.isPaused=!1):(clearInterval(t.interval),t.isPaused=!0))}))}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,K),D(this,G),D(this,L),D(this,$),D(this,C),D(this,O),D(this,_),D(this,I),D(this,H),D(this,A),M(this,L,U).call(this),M(this,$,Y).call(this),M(this,G,B).call(this),M(this,A,N).call(this)}var e,i;return e=t,(i=[{key:"getTetromino",value:function(){return new P({type:W(0,7),color:W(0,7)})}}])&&R(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())})();