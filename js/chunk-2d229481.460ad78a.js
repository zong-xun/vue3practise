(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229481"],{dd7b:function(s,e,t){"use strict";t.r(e);var n=t("7a23");const a={class:"container mt-5"},o={class:"col-md-6"},i=Object(n["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},r=Object(n["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},l=Object(n["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(n["h"])("div",{class:"text-end mt-4"},[Object(n["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function b(s,e,t,b,h,p){const m=Object(n["C"])("Loading");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(m,{active:h.isLoading},null,8,["active"]),Object(n["h"])("div",a,[Object(n["h"])("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=Object(n["N"])((...s)=>p.sigin&&p.sigin(...s),["prevent"]))},[Object(n["h"])("div",o,[i,Object(n["h"])("div",c,[r,Object(n["M"])(Object(n["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[n["I"],h.user.username]])]),Object(n["h"])("div",d,[l,Object(n["M"])(Object(n["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[n["I"],h.user.password]])]),u])],32)])],64)}t("14d9");var h={data(){return{isLoading:!1,user:{username:"",password:""}}},methods:{sigin(){this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then(s=>{if(this.isLoading=!1,s.data.success){const{token:e,expired:t}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(t)}`,this.$router.push("/dashboard/products")}})}}},p=t("6b0d"),m=t.n(p);const j=m()(h,[["render",b]]);e["default"]=j}}]);
//# sourceMappingURL=chunk-2d229481.460ad78a.js.map