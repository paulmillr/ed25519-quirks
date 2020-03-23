!function(t){function e(e){for(var r,a,o=e[0],i=e[1],s=0,c=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&c.push(n[a][0]),n[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(l&&l(e);c.length;)c.shift()()}var r={},n={2:0};var a={};var o={41:function(){return{"./ed25519_quirks.js":{__wbindgen_string_new:function(t,e){return r[23].exports.h(t,e)},__wbg_getRandomValues_5dcc5f8d8a8704a2:function(t,e){return r[23].exports.f(t,e)},__wbindgen_throw:function(t,e){return r[23].exports.i(t,e)},__wbindgen_rethrow:function(t){return r[23].exports.g(t)}}}}};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+""+({1:"bundle"}[t]||t)+"."+{1:"8073bf55"}[t]+".js"}(t);var l=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return({1:[41]}[t]||[]).forEach((function(t){var r=a[t];if(r)e.push(r);else{var n,s=o[t](),c=fetch(i.p+""+{41:"e7168291357c8319a7f3"}[t]+".module.wasm");if(s instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)n=Promise.all([WebAssembly.compileStreaming(c),s]).then((function(t){return WebAssembly.instantiate(t[0],t[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)n=WebAssembly.instantiateStreaming(c,s);else{n=c.then((function(t){return t.arrayBuffer()})).then((function(t){return WebAssembly.instantiate(t,s)}))}e.push(a[t]=n.then((function(e){return i.w[t]=(e.instance||e).exports})))}})),Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ed25519-quirks/",i.oe=function(t){throw console.error(t),t},i.w={};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i(i.s=20)}([function(t,e,r){"use strict";function n(t,e,r,n,a,o,i,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}r.d(e,"a",(function(){return n}))},function(t,e,r){var n=r(10);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(12).default)("691a44b3",n,!1,{})},function(t,e,r){t.exports=r(8)},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(2),a=r.n(n),o=r(4),i=r.n(o);function s(t){$(".loading-progress").addClass("border-danger"),$(".loading-progress .card-title").addClass("text-danger").text("Loading failed"),$(".loading-progress .card-text").text("".concat(t))}function c(t){var e={};return $(t).children("[slot]").each((function(){var t=$(this).attr("slot");e[t]=$(this)[0].innerHTML})),e}function u(t){return l.apply(this,arguments)}function l(){return(l=i()(a.a.mark((function t(e){var n,o,i,u,l,f,d,p,h;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(1).then(r.bind(null,14));case 2:return t.next=4,r.e(1).then(r.bind(null,16));case 4:return n=t.sent,o=n.default,t.prev=6,t.next=9,r.e(1).then(r.bind(null,17));case 9:i=t.sent,u=i.default,o.use(u),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),s(t.t0);case 17:return t.next=19,r.e(1).then(r.t.bind(null,18,7));case 19:return l=t.sent,f=l.default,t.next=23,r.e(1).then(r.t.bind(null,15,7));case 23:d=t.sent,p=d.Buffer,o.use((function(t){t.prototype.$Buffer=p,t.prototype.$copy=f})),h=new o({el:"#app",data:{encoding:$("input[name=encoding]:checked").val(),htmlFragments:c("#app")},render:function(t){return t(e,{props:{encoding:this.encoding,htmlFragments:this.htmlFragments}})}}),$("input[name=encoding]").change((function(){h.encoding=$("input[name=encoding]:checked").val()}));case 28:case"end":return t.stop()}}),t,null,[[6,14]])})))).apply(this,arguments)}},function(t,e){function r(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,c,"next",t)}function c(t){r(i,a,o,s,c,"throw",t)}s(void 0)}))}}},function(t,e,r){"use strict";e.a={props:{encoding:{type:String,default:"base64"},htmlFragments:{type:Object,default:{}}},computed:{repr:function(){var t=this;return function(e,r){return t.$Buffer.from(e,r).toString(t.encoding)}}}}},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-1"},[r("div",{staticClass:"col-md-3 col-lg-2 mb-1 mb-md-0 pr-md-2"},[r("a",{staticClass:"clipboard float-right text-secondary small my-1 ml-1",attrs:{href:"#",role:"button",title:"Copy to clipboard"},on:{click:function(e){return e.preventDefault(),t.$copy(t.data)}}},[r("i",{staticClass:"far fa-copy"})]),t._v("\n    "+t._s(t.name)+" "),t._t("key")],2),t._v(" "),r("div",{staticClass:"col-md-9 col-lg-10 bg-light pb-1"},[r("code",{staticClass:"text-dark d-inline-block p-0",class:{wrapped:t.data.indexOf(" ")<0}},[t._v(t._s(t.wrapper.replace("$",t.data)))]),t._v(" "),t.$slots.default?r("p",{staticClass:"small text-muted mb-1"},[t._t("default")],2):t._e()])])};n._withStripped=!0;var a={name:"DataRow",props:{name:{type:String,required:!0},wrapper:{type:String,default:'"$"'},data:{type:String,default:""}}},o=(r(9),r(0)),i=Object(o.a)(a,n,[],!1,null,null,null);i.options.__file="src/components/DataRow.vue";e.a=i.exports},function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("span",["ok"===this.status?e("i",{staticClass:"text-success far fa-check-circle",attrs:{title:"Success!","aria-label":"Success"}}):this._e(),this._v(" "),"fail"===this.status?e("i",{staticClass:"text-danger far fa-times-circle",attrs:{title:"Error","aria-label":"Error"}}):this._e()])};n._withStripped=!0;var a={name:"Status",props:{status:{type:String,default:"ok"}}},o=r(0),i=Object(o.a)(a,n,[],!1,null,null,null);i.options.__file="src/components/Status.vue";e.a=i.exports},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function l(){}function f(){}function d(){}var p={};p[a]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(x([])));v&&v!==e&&r.call(v,a)&&(p=v);var m=d.prototype=l.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,s){var u=c(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,d[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new y(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),m[i]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";var n=r(1);r.n(n).a},function(t,e,r){(t.exports=r(11)(!1)).push([t.i,"\n.wrapped {\n  word-break: break-all;\n}\na.clipboard:hover {\n  color: #545b62;\n}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var a=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[r].concat(o).concat([a]).join("\n")}var i;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(n[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];null!=i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},a=0;a<e.length;a++){var o=e[a],i=o[0],s={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.r(e),r.d(e,"default",(function(){return p}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},f=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,a){u=r,f=a||{};var i=n(t,e);return h(i),function(e){for(var r=[],a=0;a<i.length;a++){var s=i[a];(c=o[s.id]).refs--,r.push(c)}e?h(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var c;if(0===(c=r[a]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(m(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(a=0;a<r.parts.length;a++)i.push(m(r.parts[a]));o[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function m(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(u)return l;n.parentNode.removeChild(n)}if(d){var a=c++;n=s||(s=v()),e=b.bind(null,n,a,!1),r=b.bind(null,n,a,!0)}else n=v(),e=w.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,r,n){var a=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function w(t,e){var r=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),f.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-row mb-2"},[r("div",{staticClass:"col-md-3 col-lg-2 col-form-label"},[r("label",{attrs:{for:"seed"}},[t._v("Seed")]),t._v(" "),r("a",{attrs:{href:"#",role:"button",title:"Generate a new random seed"},on:{click:function(e){return e.preventDefault(),t.generateKeypair()}}},[r("i",{staticClass:"fas fa-dice"})])]),t._v(" "),r("div",{staticClass:"col-md-9 col-lg-10 input-group"},[r("input",{staticClass:"form-control",class:{"is-invalid":t.seedError},attrs:{id:"seed",type:"text"},domProps:{value:t.seed},on:{input:function(e){return t.updateSeed(e.target.value)}}}),t._v(" "),t.seedError?r("div",{staticClass:"invalid-feedback"},[t._v("\n      Invalid seed format.\n    ")]):t._e()])])};n._withStripped=!0;var a={name:"Seed",props:{encoding:{type:String,required:!0}},data:function(){var t=new this.$crypto.Keypair;return{value:t,seed:this.$Buffer.from(t.seed()).toString(this.encoding),seedError:!1}},computed:{repr:function(){var t=this;return function(e,r){return t.$Buffer.from(e,r).toString(t.encoding)}}},watch:{encoding:function(){this.seedError||(this.seed=this.$Buffer.from(this.value.seed()).toString(this.encoding))}},methods:{generateKeypair:function(){this.value=new this.$crypto.Keypair,this.seed=this.repr(this.value.seed()),this.$emit("input",this.value)},updateSeed:function(t){this.seed=t,this.seedError=!1;try{var e=this.$Buffer.from(t,this.encoding);this.value=this.$crypto.Keypair.fromSeed(e),this.$emit("input",this.value)}catch(t){this.seedError=!0}}}},o=r(0),i=Object(o.a)(a,n,[],!1,null,null,null);i.options.__file="src/components/Seed.vue";e.a=i.exports},,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(3),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("Seed",{attrs:{encoding:t.encoding},model:{value:t.keypair,callback:function(e){t.keypair=e},expression:"keypair"}}),t._v(" "),r("div",{staticClass:"form-row mb-3"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-9 col-lg-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"message",placeholder:"Signed message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])])],1),t._v(" "),r("DataRow",{attrs:{name:"Public key",data:t.repr(t.keypair.publicKey().bytes()),wrapper:'A = Pt("$")'}}),t._v(" "),r("DataRow",{attrs:{name:"Signature",data:t.repr(t.signature.bytes()),wrapper:'(R, s) = "$"'}}),t._v(" "),r("DataRow",{attrs:{name:"Signature scalar",data:t.repr(t.signature.scalar()),wrapper:'s = Sc("$")'}}),t._v(" "),r("DataRow",{attrs:{name:"Modified scalar",data:t.repr(t.modifiedScalar.bytes()),wrapper:'s′ = s + ℓ = Sc("$")'}}),t._v(" "),r("DataRow",{attrs:{name:"New signature",data:t.repr(t.modifiedScalar.signature())}},[r("Status",{attrs:{slot:"key",status:t.modifiedScalar.valid()?"ok":"fail"},slot:"key"})],1),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.htmlFragments.randomness)}}),t._v(" "),r("DataRow",{attrs:{name:"Message",data:t.message,wrapper:"$"}},[t._v("\n    Copied from the previous example together\n    with the keypair.\n  ")]),t._v(" "),r("DataRow",{attrs:{name:"Public key",data:t.repr(t.keypair.publicKey().bytes()),wrapper:'A = Pt("$")'}}),t._v(" "),r("DataRow",{attrs:{name:"Random scalar",data:t.repr(t.randomizedSignature.randomScalar()),wrapper:'r = Sc("$")'}},[r("a",{attrs:{slot:"key",href:"#",role:"button"},on:{click:function(e){return e.preventDefault(),t.generateScalar()}},slot:"key"},[r("i",{staticClass:"fas fa-dice"})])]),t._v(" "),r("DataRow",{attrs:{name:"New signature",data:t.repr(t.randomizedSignature.bytes())}}),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.htmlFragments.afterRandomness)}})],1)};a._withStripped=!0;var o=r(6),i=r(13),s=r(7),c=r(5),u={components:{DataRow:o.a,Seed:i.a,Status:s.a},mixins:[c.a],data:function(){return{keypair:new this.$crypto.Keypair,message:"Hello, world!",randomScalar:new this.$crypto.RandomScalar}},computed:{signature:function(){var t=this.$Buffer.from(this.message,"utf8");return this.keypair.sign(t)},randomizedSignature:function(){var t=this.$Buffer.from(this.message,"utf8");return this.keypair.signWithScalar(t,this.randomScalar)},modifiedScalar:function(){return this.signature.modifiedScalar()}},methods:{generateScalar:function(){this.randomScalar=new this.$crypto.RandomScalar}}},l=r(0),f=Object(l.a)(u,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-md-3 col-lg-2 col-form-label",attrs:{for:"message"}},[this._v("Message "),e("code",[this._v("M")])])}],!1,null,null,null);f.options.__file="src/malleability/Malleability.vue";var d=f.exports;Object(n.a)(d)}]);