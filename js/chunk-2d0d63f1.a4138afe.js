(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(a,t,e){"use strict";e.r(t);var s=e("7a23");const c={class:"container-fluid"};function n(a,t,e,n,o,i){const r=Object(s["A"])("Navbar"),l=Object(s["A"])("router-view");return Object(s["t"])(),Object(s["f"])(s["a"],null,[Object(s["j"])(r),Object(s["g"])("div",c,[Object(s["j"])(l)])],64)}e("14d9");const o={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},r=Object(s["g"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),l=Object(s["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(s["g"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNav"},g={class:"navbar-nav"},u=Object(s["g"])("li",{class:"nav-item"},[Object(s["g"])("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")],-1),v=Object(s["g"])("li",{class:"nav-item"},[Object(s["g"])("a",{class:"nav-link",href:"#"},"Features")],-1),h={class:"nav-item"};function d(a,t,e,c,n,d){const j=Object(s["A"])("Loading");return Object(s["t"])(),Object(s["f"])(s["a"],null,[Object(s["j"])(j,{active:n.isLoading},null,8,["active"]),Object(s["g"])("nav",o,[Object(s["g"])("div",i,[r,l,Object(s["g"])("div",b,[Object(s["g"])("ul",g,[u,v,Object(s["g"])("li",h,[Object(s["g"])("a",{class:"nav-link",href:"#",onClick:t[0]||(t[0]=Object(s["L"])((...a)=>d.logout&&d.logout(...a),["prevent"]))},"登出")])])])])])],64)}var j={data(){return{isLoading:!1}},methods:{logout(){this.isLoading=!0,console.log(this.isLoading);const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then(a=>{this.isLoading=!1,console.log(this.isLoading),a.data.success&&this.$router.push("/")})}}},p=e("6b0d"),O=e.n(p);const f=O()(j,[["render",d]]);var k=f,m={components:{Navbar:k},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then(a=>{a.data.success||this.$router.push("/")})}};const L=O()(m,[["render",n]]);t["default"]=L}}]);
//# sourceMappingURL=chunk-2d0d63f1.a4138afe.js.map