/*!
  * vue-router v3.3.4
  * (c) 2020 Evan You
  * @license MIT
  */
 var t,e;t=this,e=function(){"use strict";function t(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function e(e,r){return t(e)&&e._isRouter&&(null==r||e.type===r)}function r(t,e){for(var r in e)t[r]=e[r];return t}var n={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,a=e.parent,s=e.data;s.routerView=!0;for(var u=a.$createElement,c=n.name,p=a.$route,f=a._routerViewCache||(a._routerViewCache={}),h=0,l=!1;a&&a._routerRoot!==a;){var d=a.$vnode?a.$vnode.data:{};d.routerView&&h++,d.keepAlive&&a._directInactive&&a._inactive&&(l=!0),a=a.$parent}if(s.routerViewDepth=h,l){var v=f[c],y=v&&v.component;return y?(v.configProps&&o(y,s,v.route,v.configProps),u(y,s,i)):u()}var m=p.matched[h],g=m&&m.components[c];if(!m||!g)return f[c]=null,u();f[c]={component:g},s.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var w=m.props&&m.props[c];return w&&(r(f[c],{route:p,configProps:w}),o(g,s,p,w)),u(g,s,i)}};function o(t,e,n,o){var i=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}(n,o);if(i){i=e.props=r({},i);var a=e.attrs=e.attrs||{};for(var s in i)t.props&&s in t.props||(a[s]=i[s],delete i[s])}}var i=/[!'()*]/g,a=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,u=function(t){return encodeURIComponent(t).replace(i,a).replace(s,",")},c=decodeURIComponent;function p(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=c(r.shift()),o=r.length>0?c(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function f(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return u(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(u(e)):n.push(u(e)+"="+u(t)))}),n.join("&")}return u(e)+"="+u(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var h=/\/?$/;function l(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=d(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:m(e,o),matched:t?y(t):[]};return r&&(a.redirectedFrom=m(r,o)),Object.freeze(a)}function d(t){if(Array.isArray(t))return t.map(d);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=d(t[r]);return e}return t}var v=l(null,{path:"/"});function y(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function m(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||f)(n)+o}function g(t,e){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(h,"")===e.path.replace(h,"")&&t.hash===e.hash&&w(t.query,e.query):!(!t.name||!e.name)&&t.name===e.name&&t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?w(n,o):String(n)===String(o)})}function b(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function x(t){return t.replace(/\/\//g,"/")}var R=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},k=I,E=j,O=function(t,e){return L(j(t,e),e)},A=L,C=U,_=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t,e){for(var r,n=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(r=_.exec(t));){var u=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||s,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?P(R):m?".*":"[^"+$(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function S(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function L(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",q(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?S:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(R(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[s].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?u.prefix:u.delimiter)+c}}else{if(c=u.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):a(p),!r[s].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function P(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function U(t,e,r){R(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=$(s);else{var u=$(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var p=$(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",T(new RegExp("^"+i,q(r)),e)}function I(t,e,r){return R(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return T(t,e)}(t,e):R(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(I(t[o],e,r).source);return T(new RegExp("(?:"+n.join("|")+")",q(r)),e)}(t,e,r):function(t,e,r){return U(j(t,r),e,r)}(t,e,r)}k.parse=E,k.compile=O,k.tokensToFunction=A,k.tokensToRegExp=C;var M=Object.create(null);function V(t,e,r){e=e||{};try{var n=M[t]||(M[t]=k.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function B(t,e,n,o){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){var a=(i=r({},t)).params;return a&&"object"==typeof a&&(i.params=r({},a)),i}if(!i.path&&i.params&&e){(i=r({},i))._normalized=!0;var s=r(r({},e.params),i.params);if(e.name)i.name=e.name,i.params=s;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=V(u,s,e.path)}return i}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),f=e&&e.path||"/",h=c.path?b(c.path,f,n||i.append):f,l=function(t,e,r){void 0===e&&(e={});var n,o=r||p;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(c.query,i.query,o&&o.options.parseQuery),d=i.hash||c.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:h,query:l,hash:d}}var H,z=[String,Object],F=[String,Array],N=function(){},D={name:"RouterLink",props:{to:{type:z,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:F,default:"click"}},render:function(t){var e=this,n=this.$router,o=this.$route,i=n.resolve(this.to,o,this.append),a=i.location,s=i.route,u=i.href,c={},p=n.options.linkActiveClass,f=n.options.linkExactActiveClass,d=null==p?"router-link-active":p,v=null==f?"router-link-exact-active":f,y=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?v:this.exactActiveClass,w=s.redirectedFrom?l(null,B(s.redirectedFrom),null,n):s;c[m]=g(o,w),c[y]=this.exact?c[m]:function(t,e){return 0===t.path.replace(h,"/").indexOf(e.path.replace(h,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(o,w);var b=c[m]?this.ariaCurrentValue:null,x=function(t){K(t)&&(e.replace?n.replace(a,N):n.push(a,N))},R={click:K};Array.isArray(this.event)?this.event.forEach(function(t){R[t]=x}):R[this.event]=x;var k={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:s,navigate:x,isActive:c[y],isExactActive:c[m]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)k.on=R,k.attrs={href:u,"aria-current":b};else{var O=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(O){O.isStatic=!1;var A=O.data=r({},O.data);for(var C in A.on=A.on||{},A.on){var _=A.on[C];C in R&&(A.on[C]=Array.isArray(_)?_:[_])}for(var j in R)j in A.on?A.on[j].push(R[j]):A.on[j]=x;var S=O.data.attrs=r({},O.data.attrs);S.href=u,S["aria-current"]=b}else k.on=R}return t(this.tag,k,this.$slots.default)}};function K(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var J="undefined"!=typeof window;function Q(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){!function t(e,r,n,o,i,a){var s=o.path,u=o.name,c=o.pathToRegexpOptions||{},p=function(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:x(e.path+"/"+t)}(s,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:X(p,c),components:o.components||{default:o.component},instances:{},name:u,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};if(o.children&&o.children.forEach(function(o){var i=a?x(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}),r[f.path]||(e.push(f.path),r[f.path]=f),void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){var d=h[l],v={path:d,children:o.children};t(e,r,n,v,i,f.path||"/")}u&&(n[u]||(n[u]=f))}(o,i,a,t)});for(var s=0,u=o.length;s<u;s++)"*"===o[s]&&(o.push(o.splice(s,1)[0]),u--,s--);return{pathList:o,pathMap:i,nameMap:a}}function X(t,e){return k(t,[],e)}function Y(t,e){var r=Q(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var s=B(t,r,!1,e),c=s.name;if(c){var p=i[c];if(!p)return u(null,s);var f=p.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof s.params&&(s.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in s.params)&&f.indexOf(h)>-1&&(s.params[h]=r.params[h]);return s.path=V(p.path,s.params),u(p,s,a)}if(s.path){s.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(W(v.regex,s.path,s.params))return u(v,s,a)}}return u(null,s)}function s(t,r){var n=t.redirect,o="function"==typeof n?n(l(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return u(null,r);var s=o,c=s.name,p=s.path,f=r.query,h=r.hash,d=r.params;return f=s.hasOwnProperty("query")?s.query:f,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,c?(i[c],a({_normalized:!0,name:c,query:f,hash:h,params:d},void 0,r)):p?a({_normalized:!0,path:V(function(t,e){return b(t,e.parent?e.parent.path:"/",!0)}(p,t),d),query:f,hash:h},void 0,r):u(null,r)}function u(t,r,n){return t&&t.redirect?s(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:V(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,u(i,e)}return u(null,e)}(0,r,t.matchAs):l(t,r,n,e)}return{match:a,addRoutes:function(t){Q(t,n,o,i)}}}function W(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],s="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=s)}return!0}var G=J&&window.performance&&window.performance.now?window.performance:Date;function Z(){return G.now().toFixed(3)}var tt=Z();function et(){return tt}function rt(t){return tt=t}var nt=Object.create(null);function ot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=et(),window.history.replaceState(n,"",e),window.addEventListener("popstate",st),function(){window.removeEventListener("popstate",st)}}function it(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var i=function(){var t=et();if(t)return nt[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then(function(t){ht(t,i)}).catch(function(t){}):ht(a,i))})}}function at(){var t=et();t&&(nt[t]={x:window.pageXOffset,y:window.pageYOffset})}function st(t){at(),t.state&&t.state.key&&rt(t.state.key)}function ut(t){return pt(t.x)||pt(t.y)}function ct(t){return{x:pt(t.x)?t.x:window.pageXOffset,y:pt(t.y)?t.y:window.pageYOffset}}function pt(t){return"number"==typeof t}var ft=/^#\d/;function ht(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ft.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:pt((r=i).x)?r.x:0,y:pt(r.y)?r.y:0})}else ut(t)&&(e=ct(t))}else n&&ut(t)&&(e=ct(t));e&&window.scrollTo(e.x,e.y)}var lt,dt=J&&(-1===(lt=window.navigator.userAgent).indexOf("Android 2.")&&-1===lt.indexOf("Android 4.0")||-1===lt.indexOf("Mobile Safari")||-1!==lt.indexOf("Chrome")||-1!==lt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState;function vt(t,e){at();var n=window.history;try{if(e){var o=r({},n.state);o.key=et(),n.replaceState(o,"",t)}else n.pushState({key:rt(Z())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function yt(t){vt(t,!0)}function mt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function gt(e){return function(r,n,o){var i=!1,a=0,s=null;wt(e,function(e,r,n,u){if("function"==typeof e&&void 0===e.cid){i=!0,a++;var c,p=Rt(function(t){var r;((r=t).__esModule||xt&&"Module"===r[Symbol.toStringTag])&&(t=t.default),e.resolved="function"==typeof t?t:H.extend(t),n.components[u]=t,--a<=0&&o()}),f=Rt(function(e){var r="Failed to resolve async component "+u+": "+e;s||(s=t(e)?e:new Error(r),o(s))});try{c=e(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||o()}}function wt(t,e){return bt(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function bt(t){return Array.prototype.concat.apply([],t)}var xt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Rt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var kt={redirected:1,aborted:2,cancelled:3,duplicated:4};function Et(t,e){return At(t,e,kt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return Ct.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function Ot(t,e){return At(t,e,kt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function At(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var Ct=["params","query","hash"],_t=function(t,e){this.router=t,this.base=function(t){if(!t)if(J){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function jt(t,e,r,n){var o=wt(t,function(t,n,o,i){var a=function(t,e){return"function"!=typeof t&&(t=H.extend(t)),t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return bt(n?o.reverse():o)}function St(t,e){if(e)return function(){return t.apply(e,arguments)}}_t.prototype.listen=function(t){this.cb=t},_t.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},_t.prototype.onError=function(t){this.errorCbs.push(t)},_t.prototype.transitionTo=function(t,r,n){var o=this,i=this.router.match(t,this.current);this.confirmTransition(i,function(){var t=o.current;o.updateRoute(i),r&&r(i),o.ensureURL(),o.router.afterHooks.forEach(function(e){e&&e(i,t)}),o.ready||(o.ready=!0,o.readyCbs.forEach(function(t){t(i)}))},function(t){n&&n(t),t&&!o.ready&&(o.ready=!0,e(t,kt.redirected)?o.readyCbs.forEach(function(t){t(i)}):o.readyErrorCbs.forEach(function(e){e(t)}))})},_t.prototype.confirmTransition=function(r,n,o){var i,a=this,s=this.current,u=function(r){!e(r)&&t(r)&&(a.errorCbs.length?a.errorCbs.forEach(function(t){t(r)}):console.error(r)),o&&o(r)},c=r.matched.length-1,p=s.matched.length-1;if(g(r,s)&&c===p&&r.matched[c]===s.matched[p])return this.ensureURL(),u(At(i=s,r,kt.duplicated,'Avoided redundant navigation to current location: "'+i.fullPath+'".'));var f=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,r.matched),h=f.updated,l=f.deactivated,d=f.activated,v=[].concat(function(t){return jt(t,"beforeRouteLeave",St,!0)}(l),this.router.beforeHooks,function(t){return jt(t,"beforeRouteUpdate",St)}(h),d.map(function(t){return t.beforeEnter}),gt(d));this.pending=r;var y=function(e,n){if(a.pending!==r)return u(Ot(s,r));try{e(r,s,function(e){!1===e?(a.ensureURL(!0),u(function(t,e){return At(t,e,kt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(s,r))):t(e)?(a.ensureURL(!0),u(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(u(Et(s,r)),"object"==typeof e&&e.replace?a.replace(e):a.push(e)):n(e)})}catch(t){u(t)}};mt(v,y,function(){var t=[];mt(function(t,e,r){return jt(t,"beforeRouteEnter",function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,s){return t(i,a,function(t){"function"==typeof t&&n.push(function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout(function(){t(e,r,n,o)},16)}(t,e.instances,r,o)}),s(t)})}}(t,o,i,e,r)})}(d,t,function(){return a.current===r}).concat(a.router.resolveHooks),y,function(){if(a.pending!==r)return u(Ot(s,r));a.pending=null,n(r),a.router.app&&a.router.app.$nextTick(function(){t.forEach(function(t){t()})})})})},_t.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},_t.prototype.setupListeners=function(){},_t.prototype.teardownListeners=function(){this.listeners.forEach(function(t){t()}),this.listeners=[]};var Lt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=$t(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=dt&&r;n&&this.listeners.push(ot());var o=function(){var r=t.current,o=$t(t.base);t.current===v&&o===t._startLocation||t.transitionTo(o,function(t){n&&it(e,t,r,!0)})};window.addEventListener("popstate",o),this.listeners.push(function(){window.removeEventListener("popstate",o)})}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){vt(x(n.base+t.fullPath)),it(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){yt(x(n.base+t.fullPath)),it(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if($t(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?vt(e):yt(e)}},e.prototype.getCurrentLocation=function(){return $t(this.base)},e}(_t);function $t(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Pt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=$t(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}(this.base)||Tt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=dt&&e;r&&this.listeners.push(ot());var n=function(){var e=t.current;Tt()&&t.transitionTo(qt(),function(n){r&&it(t.router,n,e,!0),dt||Mt(n.fullPath)})},o=dt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push(function(){window.removeEventListener(o,n)})}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){It(t.fullPath),it(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Mt(t.fullPath),it(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;qt()!==e&&(t?It(e):Mt(e))},e.prototype.getCurrentLocation=function(){return qt()},e}(_t);function Tt(){var t=qt();return"/"===t.charAt(0)||(Mt("/"+t),!1)}function qt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Ut(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function It(t){dt?vt(Ut(t)):window.location.hash=t}function Mt(t){dt?yt(Ut(t)):window.location.replace(Ut(t))}var Vt=function(t){function r(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},r.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},r.prototype.go=function(t){var r=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var o=this.stack[n];this.confirmTransition(o,function(){r.index=n,r.updateRoute(o)},function(t){e(t,kt.duplicated)&&(r.index=n)})}},r.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},r.prototype.ensureURL=function(){},r}(_t),Bt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Y(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!dt&&!1!==t.fallback,this.fallback&&(e="hash"),J||(e="abstract"),this.mode=e,e){case"history":this.history=new Lt(this,t.base);break;case"hash":this.history=new Pt(this,t.base,this.fallback);break;case"abstract":this.history=new Vt(this,t.base)}},Ht={currentRoute:{configurable:!0}};function zt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}return Bt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Ht.currentRoute.get=function(){return this.history&&this.history.current},Bt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()}),!this.app){this.app=t;var r=this.history;if(r instanceof Lt||r instanceof Pt){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},Bt.prototype.beforeEach=function(t){return zt(this.beforeHooks,t)},Bt.prototype.beforeResolve=function(t){return zt(this.resolveHooks,t)},Bt.prototype.afterEach=function(t){return zt(this.afterHooks,t)},Bt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Bt.prototype.onError=function(t){this.history.onError(t)},Bt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise(function(e,r){n.history.push(t,e,r)});this.history.push(t,e,r)},Bt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise(function(e,r){n.history.replace(t,e,r)});this.history.replace(t,e,r)},Bt.prototype.go=function(t){this.history.go(t)},Bt.prototype.back=function(){this.go(-1)},Bt.prototype.forward=function(){this.go(1)},Bt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Bt.prototype.resolve=function(t,e,r){var n=B(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?x(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Bt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Bt.prototype,Ht),Bt.install=function t(e){if(!t.installed||H!==e){t.installed=!0,H=e;var r=function(t){return void 0!==t},o=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,o(this,this)},destroyed:function(){o(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",n),e.component("RouterLink",D);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},Bt.version="3.3.4",J&&window.Vue&&window.Vue.use(Bt),Bt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).VueRouter=e();