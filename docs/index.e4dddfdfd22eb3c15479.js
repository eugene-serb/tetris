(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(o)?o:String(o)),r)}var o}var i=new WeakSet;function n(){this.timeNow=Date.now();var t=this.timeNow-this.timeStart,e=Math.floor(t/1e3),i=0;e>=60&&(e-=60*(i=Math.floor(e/60))),i=i<10?"0".concat(i):"".concat(i),e=e<10?"0".concat(e):"".concat(e),this.time="".concat(i,":").concat(e)}const r=function(){function t(e){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=i),r.add(n),this.$container=e,this.time="00:00",this.timeStart=Date.now(),this.timeNow=this.timeStart}var r,o;return r=t,(o=[{key:"draw",value:function(){(function(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i})(this,i,n).call(this),this.$container.innerText="Time: ".concat(this.time)}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(r)?r:String(r)),n)}var r}const s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=e,this.balance=0}var e,i;return e=t,(i=[{key:"increase",value:function(t){this.balance+=t,this.draw()}},{key:"draw",value:function(){this.$container.innerText="Score: ".concat(this.balance)}}])&&a(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==h(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(r)?r:String(r)),n)}var r}function c(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function u(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var f=new WeakSet,m=new WeakSet,v=new WeakSet;function y(){var t=this;this.$container.innerHTML="",this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.$container.appendChild(this.canvas),u(this,m,p).call(this),window.addEventListener("resize",(function(){u(t,m,p).call(t)})),this.media=window.matchMedia("(prefers-color-scheme: dark)"),u(this,v,d).call(this,this.media),this.media.addEventListener("change",(function(){u(t,v,d).call(t,t.media)}))}function p(){this.canvas.width=0,this.canvas.height=0,this.ratio=this.mapHeight/this.mapWidth,this.canvas.width=this.$container.offsetWidth,this.canvas.height=this.canvas.width*this.ratio,this.cellWidth=this.canvas.width/this.mapWidth,this.cellHeight=this.canvas.height/this.mapHeight,this.draw()}function d(t){t.matches?this.theme="dark":this.theme="light",this.draw()}const w=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,v),c(this,m),c(this,f),this.$container=e,this.matrix=i,this.mapWidth=i.length,this.mapHeight=i[0].length,u(this,f,y).call(this),this.draw()}var e,i;return e=t,(i=[{key:"draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.mapWidth;t++)for(var e=0;e<this.mapHeight;e++)this.context.fillStyle=this.matrix[t][e].color[this.theme],this.context.fillRect(t*this.cellWidth,e*this.cellHeight,this.cellWidth,this.cellHeight)}}])&&l(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==g(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(r)?r:String(r)),n)}var r}const S=function(){function t(e){var i=e.width,n=void 0===i?null:i,r=e.height,o=void 0===r?null:r,a=e.empty,s=void 0===a?null:a,h=e.matrix,l=void 0===h?null:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l?(this.width=l.length,this.height=l[0].length,this.empty=s,this.value=this.generate(this.width,this.height,this.empty),this.value=this.insert(l,0,0)):(this.width=n,this.height=o,this.empty=s,this.value=this.generate(this.width,this.height,this.empty))}var e,i;return e=t,(i=[{key:"generate",value:function(t,e,i){for(var n=new Array,r=0;r<t;r++){n[r]=new Array;for(var o=0;o<e;o++)n[r][o]=i}return n}},{key:"clone",value:function(){for(var e=this.generate(this.value.length,this.value[0].length),i=0;i<this.value.length;i++)for(var n=0;n<this.value[i].length;n++)e[i][n]=this.value[i][n];return new t({matrix:e})}},{key:"copy",value:function(){for(var t=this.generate(this.value.length,this.value[0].length),e=0;e<this.value.length;e++)for(var i=0;i<this.value[e].length;i++)t[e][i]=this.value[e][i];return t}},{key:"crop",value:function(t){for(var e=Math.abs(t[1][0]-t[0][0]),i=Math.abs(t[1][1]-t[0][1]),n=this.generate(e,i),r=0;r<e;r++)for(var o=0;o<i;o++){var a=t[0][0]+r,s=t[0][1]+o;n[r][o]=this.value[a][s]}return n}},{key:"insert",value:function(t,e,i){for(var n=this.copy(),r=e,o=0;o<t.length;o++){for(var a=i,s=0;s<t[0].length;s++)n[r][a]=t[o][s],a++;r++}return n}},{key:"reflectX",value:function(){return this.copy().reverse()}},{key:"reflectY",value:function(){for(var t=this.generate(this.value.length,this.value[0].length),e=0;e<this.value.length;e++)t[e]=this.value[e].reverse();return t}},{key:"rotateLeft",value:function(){for(var t=this.generate(this.value[0].length,this.value.length),e=0;e<this.value.length;e++)for(var i=0;i<this.value[e].length;i++){var n=e;t[this.value[e].length-1-i][n]=this.value[e][i]}return t}},{key:"rotateRight",value:function(){for(var t=this.generate(this.value[0].length,this.value.length),e=0;e<this.value.length;e++)for(var i=0;i<this.value[e].length;i++){var n=i,r=this.value.length-1-e;t[n][r]=this.value[e][i]}return t}}])&&b(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=JSON.parse("[[[1,1,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[1,1],[1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[0,1,0],[1,1,1]]]"),E=JSON.parse('[{"light":"#D93B23","dark":"#992A18"},{"light":"#D99E23","dark":"#BF8C1F"},{"light":"#FFCB5C","dark":"#FFC342"},{"light":"#02D978","dark":"#018C4D"},{"light":"#25D2E6","dark":"#23C7D9"},{"light":"#240BB3","dark":"#240BB3"},{"light":"#8932B8","dark":"#8932B8"}]');function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function x(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==k(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(r)?r:String(r)),n)}var r}function P(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function M(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var L=new WeakSet,R=new WeakSet;function D(){return new S({matrix:M(this,R,C).call(this)})}function C(){var t=this;return T[this.type].map((function(e){return e.map((function(e){return 0===e?t.empty:{exist:!0,color:{light:t.color.light,dark:t.color.dark}}}))}))}const W=function(){function t(e){var i=e.type,n=void 0===i?null:i,r=e.color,o=void 0===r?null:r,a=e.column,s=void 0===a?5:a,h=e.row,l=void 0===h?21:h,c=e.empty,u=void 0===c?null:c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,R),P(this,L),this.type=n,this.color=E[o],this.column=s,this.row=l,this.empty=u,this.matrix=M(this,L,D).call(this)}var e,i;return e=t,(i=[{key:"toLeft",value:function(){this.column--}},{key:"toRight",value:function(){this.column++}},{key:"toDown",value:function(){this.row--}},{key:"rotateLeft",value:function(){this.matrix=new S({matrix:this.matrix.rotateLeft()})}},{key:"rotateRight",value:function(){this.matrix=new S({matrix:this.matrix.rotateRight()})}}])&&x(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t,e){return Math.floor(Math.random()*(e-t)+t)}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function H(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==A(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(r)?r:String(r)),n)}var r}function I(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function O(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var _=new WeakSet,$=new WeakSet,G=new WeakSet,Y=new WeakSet,B=new WeakSet,F=new WeakSet,K=new WeakSet,N=new WeakSet,V=new WeakSet,q=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,V),I(this,N),I(this,K),I(this,F),I(this,B),I(this,Y),I(this,G),I(this,$),I(this,_),O(this,K,tt).call(this),O(this,F,Z).call(this),O(this,N,et).call(this),O(this,_,z).call(this)}var e,i;return e=t,i=[{key:"getTetromino",value:function(){return new W({type:j(0,7),color:j(0,7),empty:this.EMPTY_CELL})}},{key:"checkEndGame",value:function(){var t=this;this.matrixState.value.forEach((function(e){e[19].exist&&(t.isGameOver=!0)}))}},{key:"cleanRows",value:function(){for(var t=this,e=this.matrixState.copy(),i=function(i){for(var r=0,o=0;o<e.length;o++)e[o][i].exist&&r++;10===r&&(e=e.map((function(e){return Array.prototype.concat(e.slice(0,i),e.slice(i+1,e.length),[t.EMPTY_CELL])})),t.score.increase(1),i--),n=i},n=0;n<e[0].length;n++)i(n);this.matrixState=new S({matrix:e,empty:this.EMPTY_CELL})}},{key:"insertTetromino",value:function(t,e){for(var i=e.matrix.value,n=e.column,r=e.row,o=t,a=0;a<i.length;a++)for(var s=0;s<i[a].length;s++)i[a][s].exist&&(o[n+a][r+s]=i[a][s]);return o}},{key:"isValidMove",value:function(t,e,i){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++){if(e+n>=this.matrixState.value.length||i+r>=this.matrixState.value[0].length||e+n<0||i+r<0)return!1;if(t[n][r].exist&&this.matrixState.value[e+n][i+r].exist)return!1}return!0}},{key:"rotate",value:function(){this.tetromino.rotateRight(),this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row)?O(this,Y,U).call(this):this.tetromino.rotateLeft()}},{key:"moveToLeft",value:function(){this.isValidMove(this.tetromino.matrix.value,this.tetromino.column-1,this.tetromino.row)&&(this.tetromino.toLeft(),O(this,Y,U).call(this))}},{key:"moveToRight",value:function(){this.isValidMove(this.tetromino.matrix.value,this.tetromino.column+1,this.tetromino.row)&&(this.tetromino.toRight(),O(this,Y,U).call(this))}},{key:"moveToDown",value:function(){this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row-1)&&(this.tetromino.toDown(),O(this,Y,U).call(this))}}],i&&H(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(){this.$DIALOG.innerHTML="Let's have fun!",this.matrixState=new S({width:this.MATRIX_WIDTH,height:this.MATRIX_HEIGHT,empty:this.EMPTY_CELL}),this.matrixRender=this.matrixState.clone(),this.matrixDraw=this.matrixRender.crop([[0,0],[this.MAP_WIDTH,this.MAP_HEIGHT]]),this.map=new w(this.$MAP,this.matrixDraw),this.timer=new r(this.$TIMER),this.score=new s(this.$SCORE),this.isGameOver=!1,this.isPaused=!1,this.isSettled=!1,this.canMove=!0,this.tetromino=this.getTetromino(),this.interval=setInterval(O(this,$,X).bind(this),this.SPEED_RATE)}function X(){O(this,G,J).call(this),O(this,Y,U).call(this),O(this,B,Q).call(this)}function J(){this.matrixRender=new S({matrix:this.matrixState.copy(),empty:this.EMPTY_CELL}),this.matrixRender=new S({matrix:this.insertTetromino(this.matrixRender.copy(),this.tetromino),empty:this.EMPTY_CELL})}function U(){this.matrixDraw=new S({matrix:this.matrixRender.crop([[0,0],[this.MAP_WIDTH,this.MAP_HEIGHT]]),empty:this.EMPTY_CELL}),this.matrixDraw.matrix=this.matrixDraw.reflectY(),this.map.matrix=this.matrixDraw.value,this.timer.draw(),this.score.draw(),this.map.draw()}function Q(){this.checkEndGame(),this.isGameOver&&(this.$DIALOG.innerHTML="Game Over!",clearInterval(this.interval)),this.isValidMove(this.tetromino.matrix.value,this.tetromino.column,this.tetromino.row-1)?this.tetromino.row--:(this.matrixState=new S({matrix:this.insertTetromino(this.matrixState.copy(),this.tetromino),empty:this.EMPTY_CELL}),this.cleanRows(),this.settled=!0),this.settled&&(this.tetromino=this.getTetromino(),this.settled=!1)}function Z(){this.MATRIX_WIDTH=10,this.MATRIX_HEIGHT=25,this.MAP_WIDTH=10,this.MAP_HEIGHT=20,this.SPEED_RATE=250,this.EMPTY_CELL={exist:!1,color:{light:"#F5F5F5",dark:"#055159"}}}function tt(){this.$MAP=document.querySelector("#map"),this.$DIALOG=document.querySelector("#dialog"),this.$SCORE=document.querySelector("#score"),this.$TIMER=document.querySelector("#timer"),this.$RATING=document.querySelector("#rating")}function et(){O(this,V,it).call(this)}function it(){var t=this;window.addEventListener("keydown",(function(e){t.isGameOver||!0===t.canMove&&("ArrowLeft"===e.code||"KeyA"===e.code?t.moveToLeft():"ArrowUp"===e.code||"KeyW"===e.code?t.rotate():"ArrowRight"===e.code||"KeyD"===e.code?t.moveToRight():"ArrowDown"!==e.code&&"KeyS"!==e.code||t.moveToDown()),"KeyR"===e.code&&(clearInterval(t.interval),O(t,_,z).call(t)),"KeyP"===e.code&&(t.isGameOver||(!0===t.isPaused?(t.interval=setInterval(O(t,$,X).bind(t),t.SPEED_RATE),t.isPaused=!1):(clearInterval(t.interval),t.isPaused=!0)))}))}new q})();