(function(e){function n(n){for(var c,r,u=n[0],d=n[1],s=n[2],i=0,f=[];i<u.length;i++)r=u[i],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(c=!1)}c&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={app:0},a={app:0},o=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ab565":"d6fe69f7","chunk-ddfa4c80":"b6990a0a","chunk-043c3ec2":"8dad5829","chunk-61dd231a":"3375e432","chunk-3961fd03":"549a98d7","chunk-5d61e8fa":"0cf6d98e","chunk-ee44cf18":"26bf9dec","chunk-05158d1c":"df829a1d","chunk-053fee3c":"fa419011","chunk-054138b6":"0aecb78a","chunk-46255c11":"195f8dd4"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-61dd231a":1,"chunk-5d61e8fa":1,"chunk-ee44cf18":1,"chunk-46255c11":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0ab565":"31d6cfe0","chunk-ddfa4c80":"31d6cfe0","chunk-043c3ec2":"31d6cfe0","chunk-61dd231a":"e288b2af","chunk-3961fd03":"31d6cfe0","chunk-5d61e8fa":"635fd794","chunk-ee44cf18":"e7b36691","chunk-05158d1c":"31d6cfe0","chunk-053fee3c":"31d6cfe0","chunk-054138b6":"31d6cfe0","chunk-46255c11":"07b94139"}[e]+".css",a=d.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===c||i===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],i=s.getAttribute("data-href");if(i===c||i===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],l.parentNode.removeChild(l),t(o)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=o);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=u(e);var f=new Error;s=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/vue3practise/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2af8":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("7a23"),r=t("cee4"),a=t("130e");function o(e,n,t,r,a,o){const u=Object(c["F"])("router-view");return Object(c["y"])(),Object(c["e"])(u)}t("f507");var u=t("1344");const d=Object(u["a"])();var s=d,i={provide(){return{emitter:s}}},f=(t("b433"),t("6b0d")),l=t.n(f);const h=l()(i,[["render",o]]);var p=h,b=t("6605");const m=[{path:"/",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-3961fd03"),t.e("chunk-05158d1c")]).then(t.bind(null,"dd7b"))},{path:"/dashboard",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-3961fd03"),t.e("chunk-053fee3c")]).then(t.bind(null,"7277")),children:[{path:"products",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-3961fd03"),t.e("chunk-043c3ec2"),t.e("chunk-ee44cf18")]).then(t.bind(null,"2325"))},{path:"orders",component:()=>t.e("chunk-2d0ab565").then(t.bind(null,"159d"))},{path:"coupons",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-043c3ec2"),t.e("chunk-61dd231a")]).then(t.bind(null,"f329"))}]},{path:"/user",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-3961fd03"),t.e("chunk-054138b6")]).then(t.bind(null,"4c5d")),children:[{path:"cart",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-3961fd03"),t.e("chunk-043c3ec2"),t.e("chunk-5d61e8fa")]).then(t.bind(null,"76db"))},{path:"product/:productId",component:()=>Promise.all([t.e("chunk-ddfa4c80"),t.e("chunk-46255c11")]).then(t.bind(null,"f962"))}]}],k=Object(b["a"])({history:Object(b["b"])(),routes:m});var g=k;function v(e){const n=parseInt(e,10);return""+n.toFixed(0).replace(/./g,(e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?(", "+e).replace(/\s/g,""):e)}function y(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var O=function(e,n="更新"){if(e.data.success)s.emit("push-message",{style:"success",title:""+n});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;s.emit("push-message",{style:"danger",title:""+n,content:t.join("、")})}},j=t("7bb1"),P=t("3aa8"),w=t("cbdf"),E=t("9457"),S=t("8a14");t("fe26"),t("cd74");const _=Object(c["d"])(p);_.config.globalProperties.$filters={currency:v,date:y},Object.keys(P["a"]).forEach(e=>{Object(j["e"])(e,P["a"][e])}),Object(j["d"])({generateMessage:Object(w["a"])({zh_TW:E}),validateOnInput:!0}),Object(w["b"])("zh_TW"),_.config.globalProperties.$httpMessageState=O,_.use(a["a"],r["a"]),_.use(g),_.component("Loading",S["a"]),_.component("Form",j["c"]),_.component("Field",j["b"]),_.component("ErrorMessage",j["a"]),_.mount("#app")},b433:function(e,n,t){"use strict";t("2af8")}});
//# sourceMappingURL=app.790f6d41.js.map