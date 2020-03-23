!function(t){function e(e){for(var r,o,a=e[0],i=e[1],s=0,c=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(l&&l(e);c.length;)c.shift()()}var r={},n={3:0};var o={};var a={41:function(){return{"./ed25519_quirks.js":{__wbindgen_string_new:function(t,e){return r[23].exports.h(t,e)},__wbg_getRandomValues_5dcc5f8d8a8704a2:function(t,e){return r[23].exports.f(t,e)},__wbindgen_throw:function(t,e){return r[23].exports.i(t,e)},__wbindgen_rethrow:function(t){return r[23].exports.g(t)}}}}};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+""+({1:"bundle"}[t]||t)+"."+{1:"8073bf55"}[t]+".js"}(t);var l=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}n[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return({1:[41]}[t]||[]).forEach((function(t){var r=o[t];if(r)e.push(r);else{var n,s=a[t](),c=fetch(i.p+""+{41:"e7168291357c8319a7f3"}[t]+".module.wasm");if(s instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)n=Promise.all([WebAssembly.compileStreaming(c),s]).then((function(t){return WebAssembly.instantiate(t[0],t[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)n=WebAssembly.instantiateStreaming(c,s);else{n=c.then((function(t){return t.arrayBuffer()})).then((function(t){return WebAssembly.instantiate(t,s)}))}e.push(o[t]=n.then((function(e){return i.w[t]=(e.instance||e).exports})))}})),Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ed25519-quirks/",i.oe=function(t){throw console.error(t),t},i.w={};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i(i.s=21)}([function(t,e,r){"use strict";function n(t,e,r,n,o,a,i,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}r.d(e,"a",(function(){return n}))},function(t,e,r){var n=r(10);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(12).default)("691a44b3",n,!1,{})},function(t,e,r){t.exports=r(8)},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(2),o=r.n(n),a=r(4),i=r.n(a);function s(t){$(".loading-progress").addClass("border-danger"),$(".loading-progress .card-title").addClass("text-danger").text("Loading failed"),$(".loading-progress .card-text").text("".concat(t))}function c(t){var e={};return $(t).children("[slot]").each((function(){var t=$(this).attr("slot");e[t]=$(this)[0].innerHTML})),e}function u(t){return l.apply(this,arguments)}function l(){return(l=i()(o.a.mark((function t(e){var n,a,i,u,l,f,d,p,h;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(1).then(r.bind(null,14));case 2:return t.next=4,r.e(1).then(r.bind(null,16));case 4:return n=t.sent,a=n.default,t.prev=6,t.next=9,r.e(1).then(r.bind(null,17));case 9:i=t.sent,u=i.default,a.use(u),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),s(t.t0);case 17:return t.next=19,r.e(1).then(r.t.bind(null,18,7));case 19:return l=t.sent,f=l.default,t.next=23,r.e(1).then(r.t.bind(null,15,7));case 23:d=t.sent,p=d.Buffer,a.use((function(t){t.prototype.$Buffer=p,t.prototype.$copy=f})),h=new a({el:"#app",data:{encoding:$("input[name=encoding]:checked").val(),htmlFragments:c("#app")},render:function(t){return t(e,{props:{encoding:this.encoding,htmlFragments:this.htmlFragments}})}}),$("input[name=encoding]").change((function(){h.encoding=$("input[name=encoding]:checked").val()}));case 28:case"end":return t.stop()}}),t,null,[[6,14]])})))).apply(this,arguments)}},function(t,e){function r(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function s(t){r(i,o,a,s,c,"next",t)}function c(t){r(i,o,a,s,c,"throw",t)}s(void 0)}))}}},function(t,e,r){"use strict";e.a={props:{encoding:{type:String,default:"base64"},htmlFragments:{type:Object,default:{}}},computed:{repr:function(){var t=this;return function(e,r){return t.$Buffer.from(e,r).toString(t.encoding)}}}}},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-1"},[r("div",{staticClass:"col-md-3 col-lg-2 mb-1 mb-md-0 pr-md-2"},[r("a",{staticClass:"clipboard float-right text-secondary small my-1 ml-1",attrs:{href:"#",role:"button",title:"Copy to clipboard"},on:{click:function(e){return e.preventDefault(),t.$copy(t.data)}}},[r("i",{staticClass:"far fa-copy"})]),t._v("\n    "+t._s(t.name)+" "),t._t("key")],2),t._v(" "),r("div",{staticClass:"col-md-9 col-lg-10 bg-light pb-1"},[r("code",{staticClass:"text-dark d-inline-block p-0",class:{wrapped:t.data.indexOf(" ")<0}},[t._v(t._s(t.wrapper.replace("$",t.data)))]),t._v(" "),t.$slots.default?r("p",{staticClass:"small text-muted mb-1"},[t._t("default")],2):t._e()])])};n._withStripped=!0;var o={name:"DataRow",props:{name:{type:String,required:!0},wrapper:{type:String,default:'"$"'},data:{type:String,default:""}}},a=(r(9),r(0)),i=Object(a.a)(o,n,[],!1,null,null,null);i.options.__file="src/components/DataRow.vue";e.a=i.exports},function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("span",["ok"===this.status?e("i",{staticClass:"text-success far fa-check-circle",attrs:{title:"Success!","aria-label":"Success"}}):this._e(),this._v(" "),"fail"===this.status?e("i",{staticClass:"text-danger far fa-times-circle",attrs:{title:"Error","aria-label":"Error"}}):this._e()])};n._withStripped=!0;var o={name:"Status",props:{status:{type:String,default:"ok"}}},a=r(0),i=Object(a.a)(o,n,[],!1,null,null,null);i.options.__file="src/components/Status.vue";e.a=i.exports},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function l(){}function f(){}function d(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(S([])));v&&v!==e&&r.call(v,o)&&(p=v);var m=d.prototype=l.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var u=c(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,d[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";var n=r(1);r.n(n).a},function(t,e,r){(t.exports=r(11)(!1)).push([t.i,"\n.wrapped {\n  word-break: break-all;\n}\na.clipboard:hover {\n  color: #545b62;\n}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[r].concat(a).concat([o]).join("\n")}var i;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=a[0],s={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.r(e),r.d(e,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},f=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,o){u=r,f=o||{};var i=n(t,e);return h(i),function(e){for(var r=[],o=0;o<i.length;o++){var s=i[o];(c=a[s.id]).refs--,r.push(c)}e?h(i=n(t,e)):i=[];for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(m(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(m(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function m(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(u)return l;n.parentNode.removeChild(n)}if(d){var o=c++;n=s||(s=v()),e=b.bind(null,n,o,!1),r=b.bind(null,n,o,!0)}else n=v(),e=w.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function w(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),f.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(3),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"form-group form-row"},[r("label",{staticClass:"col-md-3 col-lg-2 col-form-label pt-0"},[t._v("Torsion point")]),t._v(" "),r("div",{staticClass:"col-md-9 col-lg-10"},t._l([0,1,2,3,4,5,6,7],(function(e){return r("div",{key:e,staticClass:"custom-control custom-radio custom-control-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.torsionIndex,expression:"torsionIndex"}],staticClass:"custom-control-input",attrs:{id:"torsion-index-"+e,type:"radio",name:"torsion-index"},domProps:{value:e,checked:t._q(t.torsionIndex,e)},on:{change:function(r){t.torsionIndex=e}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"torsion-index-"+e}},[r("code",0===e?[t._v("O")]:[t._v("E"),r("sub",[t._v(t._s(e))])])])])})),0),t._v(" "),r("label",{staticClass:"col-md-3 col-lg-2 col-form-label",attrs:{for:"user-message"}},[t._v("\n        Feeling lucky?\n        "),r("Status",{attrs:{status:t.publicKey.verify(t.$Buffer.from(t.message,"utf8"),t.signature.bytes())?"ok":"fail"}})],1),t._v(" "),r("div",{staticClass:"col-md-9 col-lg-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"user-message",type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),r("small",{staticClass:"form-text text-muted"},[t._v("\n          A message you enter will be correctly signed with the signature below\n          with probability "+t._s(t.probability)+".\n        ")])])])]),t._v(" "),r("DataRow",{attrs:{name:"Public key",data:t.repr(t.publicKey.bytes()),wrapper:'A = Pt("$")'}}),t._v(" "),r("DataRow",{attrs:{name:"Signature",data:t.repr(t.signature.bytes())}},[r("a",{attrs:{slot:"key",href:"#",role:"button",title:"Generate a new signature"},on:{click:function(e){return e.preventDefault(),t.updateSignature()}},slot:"key"},[r("i",{staticClass:"fas fa-dice"})])]),t._v(" "),t._l(t.messages,(function(e,n){return r("DataRow",{key:e,attrs:{name:t.messageName(n),data:e,wrapper:"$"}})})),t._v(" "),r("div",{staticClass:"row my-2 justify-content-center"},[r("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.moreMessages()}}},[t._v("Some more messages")])])],2)};o._withStripped=!0;var a=r(6),i=r(7),s=r(5),c={components:{DataRow:a.a,Status:i.a},mixins:[s.a],data:function(){var t=this.$crypto.Signature.fromRandomScalar(),e=this.$crypto.SMALL_SUBGROUP[1];return{torsionIndex:1,signature:t,message:"Hello, world!",messages:t.generateValidMessages(e,3)}},computed:{publicKey:function(){return this.$crypto.SMALL_SUBGROUP[this.torsionIndex]},probability:function(){switch(this.torsionIndex){case 0:return"1";case 1:case 3:case 5:case 7:return"1/8";case 2:case 6:return"1/4";case 4:return"1/2";default:return""}}},watch:{torsionIndex:function(){this.messages=this.signature.generateValidMessages(this.publicKey,3)}},methods:{messageName:function(t){switch(t){case 0:return"Signed message";case 1:return"…Or this one?";case 2:return"…Or maybe this?";case 3:return"…Or this?";case 4:return"Another message";case 5:return"One more";case 42:return"Meaning of life";case 666:return"Message approved by Mr. Satan";default:return"Message #".concat(t)}},updateSignature:function(){this.signature=this.$crypto.Signature.fromRandomScalar(),this.messages=this.signature.generateValidMessages(this.publicKey,3)},moreMessages:function(){var t=this;this.signature.generateValidMessages(this.publicKey,3).forEach((function(e){return t.messages.push(e)}))}}},u=r(0),l=Object(u.a)(c,o,[],!1,null,null,null);l.options.__file="src/wildcards/Wildcards.vue";var f=l.exports;Object(n.a)(f)}]);