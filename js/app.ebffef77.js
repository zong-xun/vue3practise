(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-7018de96":"052a9b7c","chunk-05158d1c":"7a184523","chunk-053fee3c":"04982bd8","chunk-38b87c66":"dee6f012"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue3practise/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5341:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=n("cee4"),c=n("130e");function a(e,t,n,o,c,a){const u=Object(r["B"])("router-view");return Object(r["u"])(),Object(r["e"])(u)}n("f507");var u=n("1344");const i=Object(u["a"])();var s=i,l={provide(){return{emitter:s}}},p=(n("984e"),n("6b0d")),d=n.n(p);const f=d()(l,[["render",a]]);var h=f,b=n("6605");const g=[{path:"/",component:()=>Promise.all([n.e("chunk-7018de96"),n.e("chunk-05158d1c")]).then(n.bind(null,"dd7b"))},{path:"/dashboard",component:()=>Promise.all([n.e("chunk-7018de96"),n.e("chunk-053fee3c")]).then(n.bind(null,"7277")),children:[{path:"products",component:()=>Promise.all([n.e("chunk-7018de96"),n.e("chunk-38b87c66")]).then(n.bind(null,"2325"))}]}],m=Object(b["a"])({history:Object(b["b"])(),routes:g});var v=m;function y(e){const t=parseInt(e,10);return""+t.toFixed(0).replace(/./g,(e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?(", "+e).replace(/\s/g,""):e)}function j(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var O=function(e,t="更新"){if(e.data.success)s.emit("push-message",{style:"success",title:""+t});else{const n="string"===typeof e.data.message?[e.data.message]:e.data.message;s.emit("push-message",{style:"danger",title:""+t,content:n.join("、")})}},k=n("8a14");n("fe26");const w=Object(r["d"])(h);w.config.globalProperties.$filters={currency:y,date:j},w.config.globalProperties.$httpMessageState=O,w.use(c["a"],o["a"]),w.use(v),w.component("Loading",k["a"]),w.mount("#app")},"984e":function(e,t,n){"use strict";n("5341")}});
//# sourceMappingURL=app.ebffef77.js.map