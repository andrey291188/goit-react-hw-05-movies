/*! For license information please see 80.9cec355a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[80],{839:function(t,e,r){r.d(e,{a:function(){return a}});var n=r(856),o=r(223),i=r(184),a=function(){return(0,i.jsx)("div",{className:o.Z.loader,children:(0,i.jsx)(n.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})})}},80:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(861),o=r(439),i=r(791),a=r(689),c=r(87),s=r(223),u=r(243);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var f={};function p(){}function v(){}function d(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=d.prototype=p.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var s=h(t[n],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function h(){return(h=(0,n.Z)(l().mark((function t(e){var r,n,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGM3MjViYmU2YWZiZDk3NzEwNTBkODAxN2E1Yzk1OCIsInN1YiI6IjY0ZGM5N2YyMzcxMDk3MDExYzUyMjkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZ16pKVVZS_QZ7Uem4lr0Lt3wQqutmu-dtJ9xHrA60g"}},t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),r);case 3:return n=t.sent,o=n.data,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=function(t){return h.apply(this,arguments)},p=r(839),v=r(184);function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var h={};function f(){}function p(){}function v(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=v.prototype=f.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var s=l(t[n],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var y=function(){var t,e=(0,a.UO)().movieId,r=(0,i.useState)(),u=(0,o.Z)(r,2),l=u[0],h=u[1],y=(0,i.useState)(!1),m=(0,o.Z)(y,2),g=m[0],w=m[1],_=(0,i.useState)(!1),x=(0,o.Z)(_,2),b=x[0],L=x[1],j=(0,a.TH)(),E=null!==(t=(0,i.useRef)(j.state))&&void 0!==t?t:"/";(0,i.useEffect)((function(){k(e)}),[e]);var k=function(){var t=(0,n.Z)(d().mark((function t(e){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,f(e);case 4:r=t.sent,h([r]),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),L(!0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:s.Z.movie_details,children:[(0,v.jsx)(c.rU,{to:E.current,className:s.Z.button_back,children:"Go Back"}),g&&(0,v.jsx)(p.a,{}),l&&l.map((function(t){var e=t.poster_path,r=t.title,n=t.overview,o=t.vote_average,i=t.genres,a=t.id,c=t.release_date;return(0,v.jsxs)("div",{className:s.Z.details,children:[(0,v.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png",alt:r,className:s.Z.poster,width:500}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsxs)("h3",{children:[r," (",c||"no info",")"]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("p",{children:["User score: ",o||"no info"]})}),(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:"Overview"})}),(0,v.jsx)("li",{children:(0,v.jsx)("p",{className:s.Z.overview,children:n||"no info"})}),(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:"Genres"})}),(0,v.jsx)("li",{className:s.Z.genres,children:i.length>0?i.map((function(t){var e=t.id,r=t.name;return(0,v.jsx)("p",{className:s.Z.genres_item,children:r},e)})):(0,v.jsx)("p",{className:s.Z.genres_item,children:"no info"})})]})]},a)})),b&&(0,v.jsx)("p",{children:"Sorry something went wrong, try again"}),(0,v.jsx)(c.rU,{to:"cast",className:s.Z.more_info,children:"Cast"}),(0,v.jsx)(c.rU,{to:"reviews",className:s.Z.more_info,children:"Reviews"}),(0,v.jsx)(i.Suspense,{children:(0,v.jsx)(a.j3,{})})]})}},223:function(t,e){e.Z={headers:"styles_headers__mN34y",link:"styles_link__E2HOR",form:"styles_form__0WE+t",input:"styles_input__928Sc",button:"styles_button__5bLG7",movie_request:"styles_movie_request__xnVFk",more_info:"styles_more_info__F1XGR",details:"styles_details__wvuyK",poster:"styles_poster__jIzKU",genres:"styles_genres__LCYNG",genres_item:"styles_genres_item__1Nks4",overview:"styles_overview__nunxD",movie_details:"styles_movie_details__NpkKd",cast:"styles_cast__wPTkI",cast_item:"styles_cast_item__SoL-6",reviews:"styles_reviews__Ew15L",reviews_author:"styles_reviews_author__plr2U",button_back:"styles_button_back__39AHU",loader:"styles_loader__RuL2j"}}}]);
//# sourceMappingURL=80.9cec355a.chunk.js.map