!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);const n=document.querySelector(".item"),o=document.querySelectorAll(".placeholder");for(const e of o)e.addEventListener("dragover",a),e.addEventListener("dragenter",d),e.addEventListener("dragleave",i),e.addEventListener("drop",u);function a(e){e.preventDefault()}function d(e){e.target.classList.add("hovered")}function i(e){e.target.classList.remove("hovered")}function u(e){e.target.append(n),e.target.classList.remove("hovered")}n.addEventListener("dragstart",(function(e){e.target.classList.add("hold"),setTimeout(()=>e.target.classList.add("hide"),0)})),n.addEventListener("dragend",(function(e){e.target.className="item"}))},function(e,t,r){}]);
//# sourceMappingURL=app.7ab420ca.js.map