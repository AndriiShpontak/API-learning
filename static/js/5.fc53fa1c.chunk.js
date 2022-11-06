/*! For license information please see 5.fc53fa1c.chunk.js.LICENSE.txt */
(this["webpackJsonpmarvel-api-test"]=this["webpackJsonpmarvel-api-test"]||[]).push([[5],{218:function(t,e,r){},230:function(t,e,r){"use strict";r.r(e);var n=r(55),o=r(49),c=r(34),a=r(1),i=r(8),u=r(45),s=r(12),l=r(38),f=(r(218),r(0)),h=function(t,e,r){switch(t){case"waiting":return Object(f.jsx)(s.a,{});case"loading":return r?Object(f.jsx)(e,{}):Object(f.jsx)(s.a,{});case"confirmed":return Object(f.jsx)(e,{});case"error":return Object(f.jsx)(l.a,{});default:throw new Error("Unexpected process state")}},p=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),r=e[0],n=e[1],s=Object(a.useState)(!1),l=Object(c.a)(s,2),p=l[0],d=l[1],v=Object(a.useState)(0),m=Object(c.a)(v,2),b=m[0],y=m[1],g=Object(a.useState)(!1),j=Object(c.a)(g,2),O=j[0],w=j[1],x=Object(u.a)(),_=x.getAllComics,E=x.process,L=x.setProcess;Object(a.useEffect)((function(){k(b,!0)}),[]);var k=function(t,e){d(!e),_(t).then(S).then((function(){return L("confirmed")}))},S=function(t){var e=!1;t.length<8&&(e=!0),n([].concat(Object(o.a)(r),Object(o.a)(t))),d(!1),y(b+8),w(e)};return Object(f.jsxs)("div",{className:"comics__list",children:[h(E,(function(){return function(t){var e=t.map((function(t,e){return Object(f.jsx)("li",{className:"comics__item",children:Object(f.jsxs)(i.b,{to:"/comics/".concat(t.id),children:[Object(f.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(f.jsx)("div",{className:"comics__item-name",children:t.title}),Object(f.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(f.jsx)("ul",{className:"comics__grid",children:e})}(r)}),p),Object(f.jsx)("button",{disabled:p,style:{display:O?"none":"block"},className:"button button__main button__long",onClick:function(){return k(b)},children:Object(f.jsx)("div",{className:"inner",children:"load more"})})]})},d=r(77);e.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(n.a,{children:[Object(f.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(f.jsx)("title",{children:"Comics page"})]}),Object(f.jsx)(d.a,{}),Object(f.jsx)(p,{})]})}},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(42);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},38:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",o=r(0);e.a=function(){return Object(o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},39:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(50);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new k(n||[]);return c(a,"_invoke",{value:x(t,r,i)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=f;var p={};function d(){}function v(){}function m(){}var b={};l(b,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==e&&r.call(g,i)&&(b=g);var j=m.prototype=d.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(c,a,i,u){var s=h(t[c],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==Object(n.a)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var a;c(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return N()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=_(a,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=m,c(j,"constructor",{value:m,configurable:!0}),c(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(w.prototype),l(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var a=new w(f(e,r,n,o),c);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(j),l(j,s,"Generator"),l(j,i,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}},40:function(t,e,r){"use strict";function n(t,e,r,n,o,c,a){try{var i=t[c](a),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,u,"next",t)}function u(t){n(a,o,c,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},42:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(47);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},45:function(t,e,r){"use strict";var n=r(39),o=r(40),c=r(34),a=r(1);e.a=function(){var t=function(){var t=Object(a.useState)("waiting"),e=Object(c.a)(t,2),r=e[0],i=e[1],u=Object(a.useCallback)(function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var r,o,c,a,u,s=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},i("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:o,headers:c});case 7:if((a=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));case 10:return t.next=12,a.json();case 12:return u=t.sent,t.abrupt("return",u);case 16:throw t.prev=16,t.t0=t.catch(4),i("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:u,clearError:Object(a.useCallback)((function(){i("loading")}),[]),process:r,setProcess:i}}(),e=t.request,r=t.clearError,i=t.process,u=t.setProcess,s="https://gateway.marvel.com:443/v1/public/",l="apikey=e084784ba3513ccda2b212d463c65c44",f=function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var r,o,c=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:210,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(Object(n.a)().mark((function t(r){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?name=").concat(r,"&").concat(l));case 2:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(Object(n.a)().mark((function t(r){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",m(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var r,o,c=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:0,t.next=3,e("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(Object(n.a)().mark((function t(r){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",b(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},b=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{clearError:r,process:i,setProcess:u,getAllCharacters:f,getCharacterByName:h,getCharacter:p,getAllComics:d,getComic:v}}},47:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},49:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(47);var o=r(42);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},50:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,"a",(function(){return n}))},76:function(t,e,r){},77:function(t,e,r){"use strict";r(76);var n=r.p+"static/media/Avengers.4065c8f9.png",o=r.p+"static/media/Avengers_logo.9eaf2193.png",c=r(0);e.a=function(){return Object(c.jsxs)("div",{className:"app__banner",children:[Object(c.jsx)("img",{src:n,alt:"Avengers"}),Object(c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(c.jsx)("br",{}),"Stay tuned!"]}),Object(c.jsx)("img",{src:o,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=5.fc53fa1c.chunk.js.map