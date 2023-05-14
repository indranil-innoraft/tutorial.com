!function(o,i){"use strict";var s=Object.assign,u=Array.prototype,e=Object.prototype,c=e.toString,n=u.splice,r=u.some,t="undefined"!=typeof Symbol&&Symbol,f="jQuery"in o,a="cash"in o,d="add",l="remove",p="has",h="get",m="set",v="width",y="clientWidth",g="scroll",b="iterator",E="Observer",w=/-([a-z])/g,C=/^--/,S=/[\11\12\14\15\40]+/,O="data-once",x=o.localStorage,j={},z=Math.pow(2,53)-1,L=(A.prototype.init=function(n,t){t=new A(n,t);return F(n)?(n.idblazy||(n.idblazy=t),n.idblazy):t},A);function A(n,t){if(this.name="dblazy",n){if(H(n))return n;var e=n;if(J(n)){if(!(e=vn(xn(t),n)).length)return}else if(Q(n))return this.ready(n);!e.nodeType&&e!==o||(e=[e]);for(var r=this.length=e.length,i=0;i<r;i++)this[i]=e[i]}}var I=L.prototype,N=I.init;function T(n){var t=this,e=(t=H(t)?t:N(t)).length;return Q(n)&&(e&&1!==e?t.each(n):n(t[0],0)),t}function M(n){var t="[object "+n+"]";return function(n){return c.call(n)===t}}(N.fn=N.prototype=I).length=0,I.splice=n,t&&(I[t[b]]=u[t[b]]);var P,W,R=(P="length",function(n){return U(n)?void 0:n[P]}),k=(W=R,function(n){n=W(n);return"number"==typeof n&&0<=n&&n<=z});function q(n){return _(n)?Object.keys(n):[]}function H(n){return n instanceof L}function B(n){return!J(n)&&(n&&(Array.isArray(n)||k(n)))}function D(n){return!0===n||!1===n||"[object Boolean]"===c.call(n)}function F(n){return n&&n instanceof Element}var Q=M("Function");function $(n){if(U(n)||G(n)||!1===n)return!0;var t=R(n);return"number"==typeof t&&(B(n)||J(n))?0===t:0===R(q(n))}function U(n){return null===n}function V(n){return!isNaN(parseFloat(n))&&isFinite(n)}function _(n){if(!n||"object"!=typeof n)return!1;n=Object.getPrototypeOf(n);return U(n)||n===e}function J(n){return n&&"string"==typeof n}function G(n){return void 0===n}function K(n){return!!n&&n===n.window}function X(n){return-1!==[9,11].indexOf(!!n&&n.nodeType)}function Y(n){return-1!==[1,9,11].indexOf(!!n&&n.nodeType)}function Z(n){return Y(n)||K(n)}function nn(n,t,e){if(Q(n)||J(n)||D(n)||V(n))return[];if(B(n)&&!G(n.length)){var r=n.length;if(!r||1===r&&" "===n[0])return[]}if(_(n)&&$(n))return[];if("[object Object]"===c.call(n)){for(var i in n)if(tn(n,i)&&"length"!==i&&"name"!==i&&!1===t.call(e,n[i],i,n))break}else n&&(n instanceof HTMLCollection&&(n=u.slice.call(n)),(r=n.length)&&1===r&&!G(n[0])?t.call(e,n[0],0,n):n.forEach(t,e));return n}function tn(n,t){return e.hasOwnProperty.call(n,t)}function en(n){return B(n)?n:[n]}function rn(n,t,e,r){return n[t+"Attribute"](e,r)}function on(n,t,r,e){var i=this,o=G(r),u=!_(t)&&(o||D(e)),c=J(e)?e:"";if(u){e=n&&n.length?n[0]:n;return o&&(r=""),un(e,t)?rn(e,h,t):r}return T.call(n,function(e){if(!Y(e))return u?"":i;_(t)?nn(t,function(n,t){rn(e,m,c+t,n)}):U(r)?nn(en(t),function(n){n=c+n;un(e,n)&&rn(e,l,n)}):"src"===t?e.src=r:rn(e,m,t,r)})}function un(n,t){return Y(n)&&rn(n,p,t)}function cn(n,r,i){return T.call(n,function(n,t){var e;Y(n)&&(e=n.classList,Q(r)&&(r=r(rn(n,h,"class"),t)),e&&J(r)&&(t=r.trim().split(" "),G(i)?t.map(function(n){e.toggle(n)}):e[i].apply(e,t)))})}function fn(t,n){var e=0;return F(t)&&F(n)?t!==n&&t.contains(n):B(t)?-1!==t.indexOf(n):(J(t)&&nn(en(n),function(n){-1!==t.indexOf(n)&&e++}),0<e)}function an(n){return n.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function ln(t,n){var e=0;return J(t)&&nn(en(n),function(n){t.startsWith(n)&&e++}),0<e}function sn(n){return n.replace(/\\s+/g," ").trim()}function dn(n,t){return F(n)&&J(t)?n.closest(t):null}function pn(n,t){return!!F(n)&&(J(t)?n.matches(t):F(t)&&n===t)}function hn(t,n){return!(!t||!t.nodeName)&&r.call(en(n),function(n){return t.nodeName.toLowerCase()===n.toLowerCase()})}function mn(n,t,e){if(Y(n))return J(t)&&ln(t,">")&&(fn(t,":scope")||(t=":scope "+t)),G(e)&&J(t)?n.querySelector(t)||[]:function(n,t){var e=en(n);{var r;J(n)&&(r=(t=xn(t)).querySelector(n),e=U(r)?[]:t.querySelectorAll(n))}return u.slice.call(e)}(t,n);return[]}function vn(n,t){return mn(n,t,1)}function yn(n){return F(n)&&n.currentStyle||!G(i.documentMode)}function gn(){return o.devicePixelRatio||1}function bn(){return o.innerWidth||i.documentElement[y]||o.screen[v]}function En(n,t,e,r,i,o){return Sn(n,t,e,r,i,o,d)}function wn(n,t,e,r,i,o){return Sn(n,t,e,r,i,o,l)}function Cn(n){return n.decoded||n.complete}function Sn(n,t,e,c,r,f,a){var i,o=c,l=yn();c=J(e)?(i=fn(t,["touchstart",g,"wheel"]),G(r)&&(r=!l&&{capture:!i,passive:i}),function(n){var t=n.target;if(pn(t,e))o.call(t,n);else for(;t&&t!==this;){if(pn(t,e)){o.call(t,n);break}t=t.parentElement||t.parentNode}}):(f=r,r=o,e);return T.call(n,function(i){var o,u;Z(i)&&(o=!1,u=r||!1,_(r)&&(u=s({capture:!1,passive:!0},r),o=u.once||!1),nn(t.trim().split(" "),function(n){f=f||ln(n,["blazy.","bio."]);var t=a===d,e=(f?n:n.split(".")[0]).trim(),r=c=c||j[n];Q(c)&&(o&&t&&l&&(t=!(c=function n(){i.removeEventListener(e,n,u),r.apply(this,arguments)})),i[a+"EventListener"](e,c,u)),t?j[n]=c:delete j[n]}))})}function On(n){function t(){return setTimeout(n,0,N)}return"loading"!==i.readyState?t():i.addEventListener("DOMContentLoaded",t),this}function xn(n){return J(n=n||i)&&(n=pn(n,"html")?i:i.querySelector(n)),pn(n,"html")&&(n=i),Y(n=jn(n))&&n.children&&n.children.length||X(n)?n:i}function jn(n){var t=f&&n instanceof o.jQuery,e=a&&n instanceof o.cash;return n&&(H(n)||t||e)?n[0]:n}function zn(n){return C.test(n)}function Ln(n,t,e){if(F(n)){var r=n[e];if(G(t))return r;for(;r;){if(pn(r,t)||hn(r,t))return r;r=r[e]}}return null}function An(n,t){return Ln(n,t,"parentElement")}function In(n,t,e){return Ln(n,t,e+"ElementSibling")}function Nn(n,t){return In(n,t,"previous")}function Tn(e,n,r){return n.filter(function(n){var t=pn(n,e);return t&&r&&r(n),t})}function Mn(n,t){return vn(xn(t),n)}function Pn(n){return"["+O+'~="'+n+'"]'}function Wn(n,t){var e=t.add,r=t.remove,i=[];un(n,O)&&nn(on(n,O).trim().split(S),function(n){fn(i,n)||n===r||i.push(n)}),e&&!fn(i,e)&&i.push(e);e=i.join(" ");rn(n,""===e?l:m,O,e)}function Rn(n,t){return Mn(n?Pn(n):"["+O+"]",t)}N.isTag=M,N.isArr=B,N.isBool=D,N.isDoc=X,N.isElm=F,N.isFun=Q,N.isEmpty=$,N.isNull=U,N.isNum=V,N.isObj=_,N.isStr=J,N.isUnd=G,N.isEvt=Z,N.isQsa=Y,N.isIo="Intersection"+E in o,N.isMo="Mutation"+E in o,N.isRo="Resize"+E in o,N.isNativeLazy="loading"in HTMLImageElement.prototype,N.isAmd="function"==typeof define&&define.amd,N.isWin=K,N._er=-1,N._ok=1,N.chain=function(n,t){return T.call(n,t)},N.each=nn,N.extend=s,I.extend=function(n,t){return(t=t||!1)?s(n,I):s(I,n)},N.hasProp=tn,N.parse=function(n){try{return 0===n.length||"1"===n?{}:JSON.parse(n)}catch(n){return{}}},N.toArray=en,N.hasAttr=un,N.attr=on.bind(N),N.removeAttr=function(n,t,e){return on(n,t,null,e||"")}.bind(N),N.hasClass=function(e,n){var r,i=0;return Y(e)&&J(n)&&(n=n.trim(),r=e.classList,nn(n.trim().split(" "),function(n){var t;r&&r.contains(n)&&i++,0!==i||(t=on(e,"class"))&&t.match(n)&&i++})),0<i},N.toggleClass=cn,N.addClass=function(n,t){return cn(n,t,d)},N.removeClass=function(n,t){return cn(n,t,l)},N.contains=fn,N.escape=an,N.startsWith=ln,N.trimSpaces=sn,N.closest=dn,N.is=pn,N.equal=hn,N.find=mn,N.findAll=vn,N.remove=function(n){var t;!F(n)||(t=An(n))&&t.removeChild(n)},N.ie=yn,N.pixelRatio=gn,N.windowWidth=bn,N.windowSize=function(){return{width:bn(),height:o.innerHeight||i.documentElement.clientHeight}},N.activeWidth=function(t,n){var e=n.up||!1,r=q(t),i=r[0],o=r[r.length-1],u=n.ww||bn(),n=u*gn(),c=e?u:n;return G(r=r.filter(function(n){return e?parseInt(n,10)<=c:parseInt(n,10)>=c}).map(function(n){return t[n]})[e?"pop":"shift"]())?t[o<=c?o:i]:r},N.toEvent=Sn,N.on=En,N.off=wn,N.one=function(n,t,e,r){return En(n,t,e,{once:!0},r)},N.trigger=function(n,e,r,i){return T.call(n,function(n){var t;return Z(n)&&(t=G(r)?new Event(e):(t={bubbles:!0,cancelable:!0,detail:r||{}},_(i)&&(t=s(t,i)),new CustomEvent(e,t)),n.dispatchEvent(t)),t})},N.isDecoded=Cn,N.ready=On.bind(N),N.decode=function(e){return Cn(e)?Promise.resolve(e):"decode"in e?(e.decoding="async",e.decode()):new Promise(function(n,t){e.onload=function(){n(e)},e.onerror=t()})},N.once=function(n,t,e,r){var i,o=[];return J(n)?Rn(n,t):(G(e)||(o=Tn(":not("+Pn(i=t)+")",Mn(e,r),function(n){Wn(n,{add:i})})).length&&nn(o,n),o)},N.throttle=function(t,e,r){e=e||50;var i=0;return function(){var n=+new Date;n-i<e||(i=n,t.apply(r,arguments))}},N.resize=function(t,e){return o.onresize=function(n){clearTimeout(e),e=setTimeout(t.bind(n),200)},t},N.template=function(n,t){for(var e in t)tn(t,e)&&(n=n.replace(new RegExp(an("$"+e),"g"),t[e]));return sn(n)},N.context=xn,N.toElm=jn,N.camelCase=function(n){return n.replace(w,function(n,t){return t.toUpperCase()})},N.isVar=zn,N.computeStyle=function(n,t,e){if(F(n)){var r=getComputedStyle(n,null);return G(t)?r:e||zn(t)?r.getPropertyValue(t)||null:r[t]||n.style[t]}},N.rect=function(n){return F(n)?n.getBoundingClientRect():{}},N.empty=function(n){return T.call(n,function(n){if(F(n))for(;n.firstChild;)n.removeChild(n.firstChild)})},N.parent=An,N.next=function(n,t){return In(n,t,"next")},N.prev=Nn,N.index=function(t,n){var e=0;if(F(t))for(G(n)||nn(en(n),function(n){n=dn(t,n);if(F(n))return t=n,!1});!U(t=Nn(t));)e++;return e},N.keys=q,N.create=function(n,t,e){var r=i.createElement(n);return(J(t)||_(t))&&(J(t)?r.className=t:on(r,t)),e&&(e=e.trim(),r.innerHTML=e,"template"===n&&(r=r.content.firstChild||r)),r},N.storage=function(t,e,n,r){if(x){if(G(e))return x.getItem(t);if(U(e))x.removeItem(t);else try{x.setItem(t,e)}catch(n){x.removeItem(t),r&&x.setItem(t,e)}}return n||!1},E={chain:function(n){return T.call(this,n)},each:function(n){return nn(this,n)},ready:function(n){return On.call(this,n)}},I.extend(E),N.matches=pn,N.forEach=nn,N.bindEvent=En.bind(N),N.unbindEvent=wn.bind(N),N.filter=Tn,N.once.find||(N.once.find=Rn,N.once.filter=function(n,t,e){return Tn(Pn(n),Mn(t,e))},N.once.remove=function(t,n,e){return Tn(Pn(t),Mn(n,e),function(n){Wn(n,{remove:t})})},N.once.removeSafely=function(n,t,e){var r=o.jQuery;this.find(n,e).length&&this.remove(n,t,e),f&&r&&r.fn&&Q(r.fn.removeOnce)&&r(t,xn(e)).removeOnce(n)}),"undefined"!=typeof exports?module.exports=N:o.dBlazy=N}(this,this.document);
;
!function(c,n){"use strict";var t=Array.prototype.some,u="remove",h="width",l="height",e="after",r="before",i="begin",o="Top",s="Left",f="Height",a="scroll";function d(t,n,r){var i=this,e=c.isUnd(r),u=c.isObj(n),o=!u&&e;if(o&&c.isStr(n)){var s=t&&t.length?t[0]:t,f=[h,l,"top","right","bottom","left"],e=c.computeStyle(s,n),s=c.isNum(e)?parseInt(e,2):e;return-1===f.indexOf(n)?e:s}return c.chain(t,function(e){if(!c.isElm(e))return o?"":i;function t(t,n){c.isFun(t)&&(t=t()),(c.contains(n,"-")||c.isVar(n))&&(n=c.camelCase(n)),e.style[n]=c.isStr(t)?t:t+"px"}u?c.each(n,t):c.isNull(r)?c.each(c.toArray(n),function(t){e.style.removeProperty(t)}):c.isStr(n)&&t(r,n)})}function p(t){t=c.rect(t);return{top:(t.top||0)+n.body[a+o],left:(t.left||0)+n.body[a+s]}}function m(t,n){return d(t,h,n)}function g(t,n){return d(t,l,n)}function v(t,n,e){var r,i=0;return c.isElm(t)&&(i=t["offset"+e],n&&(r=c.computeStyle(t),t=function(t){return parseInt(r["margin"+t],2)},i+=e===f?t(o)+t("Bottom"):t(s)+t("Right"))),i}function y(t,n){return v(t,n,"Width")}function A(t,n){return v(t,n,f)}function C(t,n,e){c.isElm(t)&&t["insertAdjacent"+(c.isElm(n)?"Element":"HTML")](e,n)}function b(t,n){C(t,n,e+"end")}function x(t,n){C(t,n,r+i)}function S(t,n){C(t,n,r+"end")}function E(t,n){C(t,n,e+i)}function H(t,n){c.isUnd(n)&&(n=!0);return c.chain(t,function(t){return c.isElm(t)&&t.cloneNode(n)})}var N={css:function(t,n){return d(this,t,n)},hasAttr:function(n){return t.call(this,function(t){return c.hasAttr(t,n)})},attr:function(t,n,e){return c.isNull(n)?this.removeAttr(t,e):c.attr(this,t,n,e)},removeAttr:function(t,n){return c.removeAttr(this,t,n)},hasClass:function(n){return t.call(this,function(t){return c.hasClass(t,n)})},toggleClass:function(t,n){return c.toggleClass(this,t,n)},addClass:function(t){return this.toggleClass(t,"add")},removeClass:function(t){return arguments.length?this.toggleClass(t,u):this.attr("class","")},empty:function(){return c.empty(this)},first:function(t){return c.isUnd(t)?this[0]:t},after:function(t){return b(this[0],t)},before:function(t){return x(this[0],t)},append:function(t){return S(this[0],t)},prepend:function(t){return E(this[0],t)},remove:function(){this.each(c.remove)},closest:function(t){return c.closest(this[0],t)},equal:function(t){return c.equal(this[0],t)},find:function(t,n){return c.find(this[0],t,n)},findAll:function(t){return c.findAll(this[0],t)},clone:function(t){return H(this,t)},computeStyle:function(t){return c.computeStyle(this[0],t)},offset:function(){return p(this[0])},parent:function(t){return c.parent(this[0],t)},prev:function(t){return c.prev(this[0],t)},next:function(t){return c.next(this[0],t)},index:function(t){return c.index(this[0],t)},width:function(t){return m(this[0],t)},height:function(t){return g(this[0],t)},outerWidth:function(t){return y(this[0],t)},outerHeight:function(t){return A(this[0],t)},on:function(t,n,e,r,i){return c.on(this,t,n,e,r,i,"add")},off:function(t,n,e,r,i){return c.off(this,t,n,e,r,i,u)},one:function(t,n,e){return c.one(this,t,n,e)},trigger:function(t,n,e){return c.trigger(this,t,n,e)}};c.fn.extend(N),c.css=d,c.offset=p,c.clone=H,c.after=b,c.before=x,c.append=S,c.prepend=E,c.width=m,c.height=g,c.outerWidth=y,c.outerHeight=A}(dBlazy,this.document);
;
!function(e,n,i){"use strict";e.debounce=function(c,t,e,i){n.debounce(function(){c.call(e,t)},i||201,!0)},e.matchMedia=function(c,t){return!!i.matchMedia&&(e.isUnd(t)&&(t="max"),i.matchMedia("("+t+"-device-width: "+c+")").matches)}}(dBlazy,Drupal,this);
;
!function(o,t,n,l,e){"use strict";var s="data",a=".b-blur",r=".media",i="successClass",u=(c="blazy")+".done",c=function(){},d={};t.blazy={context:e,name:"Drupal.blazy",init:null,instances:[],resizeTick:0,resizeTrigger:!1,blazySettings:n.blazy||{},ioSettings:n.blazyIo||{},options:{},clearCompat:c,clearScript:c,checkResize:c,resizing:c,revalidate:c,isIo:function(){return!0},isBlazy:function(){return!o.isIo&&"Blazy"in l},isFluid:function(t,n){return o.equal(t.parentNode,"picture")&&o.hasAttr(n,"data-ratios")},isLoaded:function(t){return o.hasClass(t,this.options[i])},globals:function(){var t=this,n={isMedia:!0,success:t.clearing.bind(t),error:t.clearing.bind(t),resizing:t.resizing.bind(t),selector:".b-lazy",parent:r,errorClass:"b-error",successClass:"b-loaded"};return o.extend(t.blazySettings,t.ioSettings,n)},extend:function(t){d=o.extend({},d,t)},merge:function(t){var n=this;return n.options=o.extend({},n.globals(),n.options,t||{}),n.options},run:function(t){return new BioMedia(t)},mount:function(t){var n=this;return n.merge(),t&&o.each(d,function(t){o.isFun(t)&&t.call(n)}),o.extend(n,d)},selector:function(t){t=t||"";var n=this.options;return n.selector+t+":not(."+n[i]+")"},clearing:function(t){var n,i;t.bclearing||(n=this,i=o.hasClass(t,"b-responsive")&&o.hasAttr(t,s+"-pfsrc"),o.isFun(o.unloading)&&o.unloading(t),o.trigger(t,u,{options:n.options}),n.clearCompat(t),n.clearScript(t),l.picturefill&&i&&l.picturefill({reevaluate:!0,elements:[t]}),t.bclearing=!0)},windowData:function(){return this.init?this.init.windowData():{}},load:function(n){var i=this;l.setTimeout(function(){var t=o.findAll(n||e,i.selector());t.length&&o.each(t,i.update.bind(i))},100)},update:function(t,n,i){function e(){o.hasAttr(t,"data-b-bg")&&o.isFun(o.bg)?o.bg(t,i||s.windowData()):s.init&&(o.hasClass(t,r.substring(1))||(t=o.find(t,r)||t),s.init.load(t,!0,a))}var s=this,a=s.options,r=a.selector;(n=n||!1)?l.setTimeout(e,100):e()},rebind:function(t,i,e){var n=o.findAll(t,this.options.selector+":not("+a+")"),s=n.length;s||(n=o.findAll(t,"img:not("+a+")")),n.length&&o.each(n,function(t){var n=s?u:"load";o.one(t,n,i,s),e&&e.observe(t)})},pad:function(n,i,t){var e=this,s=o.closest(n,r)||n;setTimeout(function(){var t=Math.round(n.naturalHeight/n.naturalWidth*100,2);e.isFluid(n,s)&&(s.style.paddingBottom=t+"%"),o.isFun(i)&&i.call(e,n,s,t)},t||0)}}}(dBlazy,Drupal,drupalSettings,this,this.document);
;
!function(i,s,e,n){"use strict";var t=n,o="description",a="form-checkbox",r="b-"+o,l="b-"+a,f="b-form",c="form--vanilla-on",m="."+o+", .form-item__"+o,d="."+a,u=".form--slick",h=".form-item",v=".js-expandable",p=".b-hint",g="is-focused",C="is-hovered",b="is-selected",y="addClass",x="removeClass",_="checked",w="change",$="click";function S(e){var o=i(e);function s(e){e.removeClass(function(e,n){return(n.match(/(^|\s)form--media-switch-\S+/g)||[]).join(" ")})}i(".details-legend-prefix",o).removeClass("element-invisible"),o[i("."+a+"--vanilla",o).prop(_)?y:x](c),o.on($,"."+a,function(){var e=i(this),n=e.prop(_);e[n?y:x]("on"),e.hasClass(a+"--vanilla")&&(o[n?y:x](c),o[n?x:y]("form--vanilla-off"),n&&(s(o),i('select[name$="[media_switch]"]',o).val("")))}),i('select[name$="[style]"]',o).off(w).on(w,function(){var e=i(this).val();o.removeClass(function(e,n){return(n.match(/(^|\s)form--style-\S+/g)||[]).join(" ")}),""===e?o.addClass("form--style-off form--style-is-grid"):(o.addClass("form--style-on form--style-"+e),"column"!==e&&"grid"!==e&&"flex"!==e&&"nativegrid"!==e||o.addClass("form--style-is-grid"))}).change(),i('input[name$="[grid]"]',o).off(w).on(w,function(){var e=i(this).val();o[""===e?x:y]("form--grid-on")}).change(),o.on($,'input[name$="[override]"]',function(){var e=i(this).prop(_);o[e?y:x]("form--override-on")}),i('select[name$="[responsive_image_style]"]',o).off(w).on(w,function(){var e=i(this);o[""===e.val()?x:y]("form--responsive-image-on")}).change(),i('select[name$="[media_switch]"]',o).off(w).on(w,function(){var e=i(this).val();s(o),o[""===e?x:y]("form--media-switch-on"),o[""===e?x:y]("form--media-switch-"+e),o[""===e||"content"===e||"media"===e||"rendered"===e?x:y]("form--media-switch-lightbox")}).change(),o.on("mouseenter touchstart",p,function(){i(this).closest(h).addClass(C)}),o.on("mouseleave touchend",p,function(){i(this).closest(h).removeClass(C)}),o.on($,p,function(){i(".form-item."+b,o).removeClass(b),i(this).parent().toggleClass(b)}),o.on($,".description, .form-item__description",function(){i(this).closest("."+b).removeClass(b)}),o.off("focus").on("focus",v,function(){i(this).parent().addClass(g)}),o.off("blur").on("blur",v,function(){i(this).parent().removeClass(g)})}function j(e){e=i(e);e.hasClass(o)||e.addClass(o),e.siblings(p).length||e.closest(h).append('<span class="b-hint">?</span>')}function k(e){e=i(e);e.next(".field-suffix").length||e.after('<span class="field-suffix"></span>')}e.behaviors.blazyAdmin={attach:function(e){t=s.context(e),s.once(j,r,m,t),s.once(k,l,d,t),s.once(S,f,u,t)},detach:function(e,n,o){"unload"===o&&(s.once.removeSafely(r,m,t),s.once.removeSafely(l,d,t),s.once.removeSafely(f,u,t))}}}(jQuery,dBlazy,Drupal,this.document);
;
/**
 * @file
 * Drupal's states library.
 */

(function ($, Drupal) {
  /**
   * The base States namespace.
   *
   * Having the local states variable allows us to use the States namespace
   * without having to always declare "Drupal.states".
   *
   * @namespace Drupal.states
   */
  const states = {
    /**
     * An array of functions that should be postponed.
     */
    postponed: [],
  };

  Drupal.states = states;

  /**
   * Inverts a (if it's not undefined) when invertState is true.
   *
   * @function Drupal.states~invert
   *
   * @param {*} a
   *   The value to maybe invert.
   * @param {boolean} invertState
   *   Whether to invert state or not.
   *
   * @return {boolean}
   *   The result.
   */
  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }

  /**
   * Compares two values while ignoring undefined values.
   *
   * @function Drupal.states~compare
   *
   * @param {*} a
   *   Value a.
   * @param {*} b
   *   Value b.
   *
   * @return {boolean}
   *   The comparison result.
   */
  function compare(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }

    return typeof a === 'undefined' || typeof b === 'undefined';
  }

  /**
   * Bitwise AND with a third undefined state.
   *
   * @function Drupal.states~ternary
   *
   * @param {*} a
   *   Value a.
   * @param {*} b
   *   Value b
   *
   * @return {boolean}
   *   The result.
   */
  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }
    if (typeof b === 'undefined') {
      return a;
    }

    return a && b;
  }

  /**
   * Attaches the states.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches states behaviors.
   */
  Drupal.behaviors.states = {
    attach(context, settings) {
      const $states = $(context).find('[data-drupal-states]');
      const il = $states.length;
      for (let i = 0; i < il; i++) {
        const config = JSON.parse(
          $states[i].getAttribute('data-drupal-states'),
        );
        Object.keys(config || {}).forEach((state) => {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state],
          });
        });
      }

      // Execute all postponed functions now.
      while (states.postponed.length) {
        states.postponed.shift()();
      }
    },
  };

  /**
   * Object representing an element that depends on other elements.
   *
   * @constructor Drupal.states.Dependent
   *
   * @param {object} args
   *   Object with the following keys (all of which are required)
   * @param {jQuery} args.element
   *   A jQuery object of the dependent element
   * @param {Drupal.states.State} args.state
   *   A State object describing the state that is dependent
   * @param {object} args.constraints
   *   An object with dependency specifications. Lists all elements that this
   *   element depends on. It can be nested and can contain
   *   arbitrary AND and OR clauses.
   */
  states.Dependent = function (args) {
    $.extend(this, { values: {}, oldValue: null }, args);

    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach((selector) => {
      this.initializeDependee(selector, this.dependees[selector]);
    });
  };

  /**
   * Comparison functions for comparing the value of an element with the
   * specification from the dependency settings. If the object type can't be
   * found in this list, the === operator is used by default.
   *
   * @name Drupal.states.Dependent.comparisons
   *
   * @prop {function} RegExp
   * @prop {function} Function
   * @prop {function} Number
   */
  states.Dependent.comparisons = {
    RegExp(reference, value) {
      return reference.test(value);
    },
    Function(reference, value) {
      // The "reference" variable is a comparison function.
      return reference(value);
    },
    Number(reference, value) {
      // If "reference" is a number and "value" is a string, then cast
      // reference as a string before applying the strict comparison in
      // compare().
      // Otherwise numeric keys in the form's #states array fail to match
      // string values returned from jQuery's val().
      return typeof value === 'string'
        ? compare(reference.toString(), value)
        : compare(reference, value);
    },
  };

  states.Dependent.prototype = {
    /**
     * Initializes one of the elements this dependent depends on.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {string} selector
     *   The CSS selector describing the dependee.
     * @param {object} dependeeStates
     *   The list of states that have to be monitored for tracking the
     *   dependee's compliance status.
     */
    initializeDependee(selector, dependeeStates) {
      // Cache for the states of this dependee.
      this.values[selector] = {};

      Object.keys(dependeeStates).forEach((i) => {
        let state = dependeeStates[i];
        // Make sure we're not initializing this selector/state combination
        // twice.
        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }

        state = states.State.sanitize(state);

        // Initialize the value of this state.
        this.values[selector][state.name] = null;

        // Monitor state changes of the specified state for this dependee.
        $(selector).on(`state:${state}`, { selector, state }, (e) => {
          this.update(e.data.selector, e.data.state, e.value);
        });

        // Make sure the event we just bound ourselves to is actually fired.
        new states.Trigger({ selector, state });
      });
    },

    /**
     * Compares a value with a reference value.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {object} reference
     *   The value used for reference.
     * @param {string} selector
     *   CSS selector describing the dependee.
     * @param {Drupal.states.State} state
     *   A State object describing the dependee's updated state.
     *
     * @return {boolean}
     *   true or false.
     */
    compare(reference, selector, state) {
      const value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        // Use a custom compare function for certain reference value types.
        return states.Dependent.comparisons[reference.constructor.name](
          reference,
          value,
        );
      }

      // Do a plain comparison otherwise.
      return compare(reference, value);
    },

    /**
     * Update the value of a dependee's state.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {string} selector
     *   CSS selector describing the dependee.
     * @param {Drupal.states.state} state
     *   A State object describing the dependee's updated state.
     * @param {string} value
     *   The new value for the dependee's updated state.
     */
    update(selector, state, value) {
      // Only act when the 'new' value is actually new.
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },

    /**
     * Triggers change events in case a state changed.
     *
     * @memberof Drupal.states.Dependent#
     */
    reevaluate() {
      // Check whether any constraint for this dependent state is satisfied.
      let value = this.verifyConstraints(this.constraints);

      // Only invoke a state change event when the value actually changed.
      if (value !== this.oldValue) {
        // Store the new value so that we can compare later whether the value
        // actually changed.
        this.oldValue = value;

        // Normalize the value to match the normalized state name.
        value = invert(value, this.state.invert);

        // By adding "trigger: true", we ensure that state changes don't go into
        // infinite loops.
        this.element.trigger({
          type: `state:${this.state}`,
          value,
          trigger: true,
        });
      }
    },

    /**
     * Evaluates child constraints to determine if a constraint is satisfied.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {object|Array} constraints
     *   A constraint object or an array of constraints.
     * @param {string} selector
     *   The selector for these constraints. If undefined, there isn't yet a
     *   selector that these constraints apply to. In that case, the keys of the
     *   object are interpreted as the selector if encountered.
     *
     * @return {boolean}
     *   true or false, depending on whether these constraints are satisfied.
     */
    verifyConstraints(constraints, selector) {
      let result;
      if ($.isArray(constraints)) {
        // This constraint is an array (OR or XOR).
        const hasXor = $.inArray('xor', constraints) === -1;
        const len = constraints.length;
        for (let i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            const constraint = this.checkConstraints(
              constraints[i],
              selector,
              i,
            );
            // Return if this is OR and we have a satisfied constraint or if
            // this is XOR and we have a second satisfied constraint.
            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      }
      // Make sure we don't try to iterate over things other than objects. This
      // shouldn't normally occur, but in case the condition definition is
      // bogus, we don't want to end up with an infinite loop.
      else if ($.isPlainObject(constraints)) {
        // This constraint is an object (AND).
        // eslint-disable-next-line no-restricted-syntax
        for (const n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(
              result,
              this.checkConstraints(constraints[n], selector, n),
            );
            // False and anything else will evaluate to false, so return when
            // any false condition is found.
            if (result === false) {
              return false;
            }
          }
        }
      }
      return result;
    },

    /**
     * Checks whether the value matches the requirements for this constraint.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {string|Array|object} value
     *   Either the value of a state or an array/object of constraints. In the
     *   latter case, resolving the constraint continues.
     * @param {string} [selector]
     *   The selector for this constraint. If undefined, there isn't yet a
     *   selector that this constraint applies to. In that case, the state key
     *   is propagates to a selector and resolving continues.
     * @param {Drupal.states.State} [state]
     *   The state to check for this constraint. If undefined, resolving
     *   continues. If both selector and state aren't undefined and valid
     *   non-numeric strings, a lookup for the actual value of that selector's
     *   state is performed. This parameter is not a State object but a pristine
     *   state string.
     *
     * @return {boolean}
     *   true or false, depending on whether this constraint is satisfied.
     */
    checkConstraints(value, selector, state) {
      // Normalize the last parameter. If it's non-numeric, we treat it either
      // as a selector (in case there isn't one yet) or as a trigger/state.
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        // Propagate the state to the selector when there isn't one yet.
        selector = state;
        state = null;
      }

      if (state !== null) {
        // Constraints is the actual constraints of an element to check for.
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }

      // Resolve this constraint as an AND/OR operator.
      return this.verifyConstraints(value, selector);
    },

    /**
     * Gathers information about all required triggers.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @return {object}
     *   An object describing the required triggers.
     */
    getDependees() {
      const cache = {};
      // Swivel the lookup function so that we can record all available
      // selector- state combinations for initialization.
      const _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
        // Return nothing (=== undefined) so that the constraint loops are not
        // broken.
      };

      // This call doesn't actually verify anything but uses the resolving
      // mechanism to go through the constraints array, trying to look up each
      // value. Since we swivelled the compare function, this comparison returns
      // undefined and lookup continues until the very end. Instead of lookup up
      // the value, we record that combination of selector and state so that we
      // can initialize all triggers.
      this.verifyConstraints(this.constraints);
      // Restore the original function.
      this.compare = _compare;

      return cache;
    },
  };

  /**
   * @constructor Drupal.states.Trigger
   *
   * @param {object} args
   *   Trigger arguments.
   */
  states.Trigger = function (args) {
    $.extend(this, args);

    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);

      // Only call the trigger initializer when it wasn't yet attached to this
      // element. Otherwise we'd end up with duplicate events.
      if (!this.element.data(`trigger:${this.state}`)) {
        this.initialize();
      }
    }
  };

  states.Trigger.prototype = {
    /**
     * @memberof Drupal.states.Trigger#
     */
    initialize() {
      const trigger = states.Trigger.states[this.state];

      if (typeof trigger === 'function') {
        // We have a custom trigger initialization function.
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach((event) => {
          this.defaultTrigger(event, trigger[event]);
        });
      }

      // Mark this trigger as initialized for this element.
      this.element.data(`trigger:${this.state}`, true);
    },

    /**
     * @memberof Drupal.states.Trigger#
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     * @param {function} valueFn
     *   The function to call.
     */
    defaultTrigger(event, valueFn) {
      let oldValue = valueFn.call(this.element);

      // Attach the event callback.
      this.element.on(
        event,
        $.proxy(function (e) {
          const value = valueFn.call(this.element, e);
          // Only trigger the event if the value has actually changed.
          if (oldValue !== value) {
            this.element.trigger({
              type: `state:${this.state}`,
              value,
              oldValue,
            });
            oldValue = value;
          }
        }, this),
      );

      states.postponed.push(
        $.proxy(function () {
          // Trigger the event once for initialization purposes.
          this.element.trigger({
            type: `state:${this.state}`,
            value: oldValue,
            oldValue: null,
          });
        }, this),
      );
    },
  };

  /**
   * This list of states contains functions that are used to monitor the state
   * of an element. Whenever an element depends on the state of another element,
   * one of these trigger functions is added to the dependee so that the
   * dependent element can be updated.
   *
   * @name Drupal.states.Trigger.states
   *
   * @prop empty
   * @prop checked
   * @prop value
   * @prop collapsed
   */
  states.Trigger.states = {
    // 'empty' describes the state to be monitored.
    empty: {
      // 'keyup' is the (native DOM) event that we watch for.
      keyup() {
        // The function associated with that trigger returns the new value for
        // the state.
        return this.val() === '';
      },
      // Listen to 'change' for number native "spinner" widgets.
      change() {
        return this.val() === '';
      },
    },

    checked: {
      change() {
        // prop() and attr() only takes the first element into account. To
        // support selectors matching multiple checkboxes, iterate over all and
        // return whether any is checked.
        let checked = false;
        this.each(function () {
          // Use prop() here as we want a boolean of the checkbox state.
          // @see http://api.jquery.com/prop/
          checked = $(this).prop('checked');
          // Break the each() loop if this is checked.
          return !checked;
        });
        return checked;
      },
    },

    // For radio buttons, only return the value if the radio button is selected.
    value: {
      keyup() {
        // Radio buttons share the same :input[name="key"] selector.
        if (this.length > 1) {
          // Initial checked value of radios is undefined, so we return false.
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change() {
        // Radio buttons share the same :input[name="key"] selector.
        if (this.length > 1) {
          // Initial checked value of radios is undefined, so we return false.
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
    },

    collapsed: {
      collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e
          ? e.value
          : !this.is('[open]');
      },
    },
  };

  /**
   * A state object is used for describing the state and performing aliasing.
   *
   * @constructor Drupal.states.State
   *
   * @param {string} state
   *   The name of the state.
   */
  states.State = function (state) {
    /**
     * Original unresolved name.
     */
    this.pristine = state;
    this.name = state;

    // Normalize the state name.
    let process = true;
    do {
      // Iteratively remove exclamation marks and invert the value.
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }

      // Replace the state with its normalized name.
      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };

  /**
   * Creates a new State object by sanitizing the passed value.
   *
   * @name Drupal.states.State.sanitize
   *
   * @param {string|Drupal.states.State} state
   *   A state object or the name of a state.
   *
   * @return {Drupal.states.state}
   *   A state object.
   */
  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }

    return new states.State(state);
  };

  /**
   * This list of aliases is used to normalize states and associates negated
   * names with their respective inverse state.
   *
   * @name Drupal.states.State.aliases
   */
  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly',
  };

  states.State.prototype = {
    /**
     * @memberof Drupal.states.State#
     */
    invert: false,

    /**
     * Ensures that just using the state object returns the name.
     *
     * @memberof Drupal.states.State#
     *
     * @return {string}
     *   The name of the state.
     */
    toString() {
      return this.name;
    },
  };

  /**
   * Global state change handlers. These are bound to "document" to cover all
   * elements whose state changes. Events sent to elements within the page
   * bubble up to these handlers. We use this system so that themes and modules
   * can override these state change handlers for particular parts of a page.
   */

  const $document = $(document);
  $document.on('state:disabled', (e) => {
    // Only act when this change was triggered by a dependency and not by the
    // element monitoring itself.
    if (e.trigger) {
      $(e.target)
        .closest('.js-form-item, .js-form-submit, .js-form-wrapper')
        .toggleClass('form-disabled', e.value)
        .find('select, input, textarea')
        .prop('disabled', e.value);

      // Note: WebKit nightlies don't reflect that change correctly.
      // See https://bugs.webkit.org/show_bug.cgi?id=23789
    }
  });

  $document.on('state:required', (e) => {
    if (e.trigger) {
      if (e.value) {
        const label = `label${e.target.id ? `[for=${e.target.id}]` : ''}`;
        const $label = $(e.target)
          .attr({ required: 'required', 'aria-required': 'true' })
          .closest('.js-form-item, .js-form-wrapper')
          .find(label);
        // Avoids duplicate required markers on initialization.
        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target)
          .removeAttr('required aria-required')
          .closest('.js-form-item, .js-form-wrapper')
          .find('label.js-form-required')
          .removeClass('js-form-required form-required');
      }
    }
  });

  $document.on('state:visible', (e) => {
    if (e.trigger) {
      $(e.target)
        .closest('.js-form-item, .js-form-submit, .js-form-wrapper')
        .toggle(e.value);
    }
  });

  $document.on('state:checked', (e) => {
    if (e.trigger) {
      $(e.target)
        .closest('.js-form-item, .js-form-wrapper')
        .find('input')
        .prop('checked', e.value)
        .trigger('change');
    }
  });

  $document.on('state:collapsed', (e) => {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);
;
