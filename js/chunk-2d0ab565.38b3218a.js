(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab565"],{"159d":function(t,e,c){"use strict";c.r(e);var l=c("7a23");const n={class:"table mt-4"},b=Object(l["h"])("thead",null,[Object(l["h"])("tr",null,[Object(l["h"])("th",null,"購買時間"),Object(l["h"])("th",null,"Email"),Object(l["h"])("th",null,"購買款項"),Object(l["h"])("th",null,"應付金額"),Object(l["h"])("th",null,"是否付款"),Object(l["h"])("th",null,"編輯")])],-1),a=["textContent"],o={class:"list-unstyled"},d={class:"text-right"},s={class:"form-check form-switch"},i=["id","onUpdate:modelValue","onChange"],O=["for"],j={key:0},h={key:1},u={class:"btn-group"},r=["onClick"],p=["onClick"];function g(t,e,c,g,w,k){const m=Object(l["D"])("Loading");return Object(l["w"])(),Object(l["g"])(l["a"],null,[Object(l["k"])(m,{active:t.isLoading},null,8,["active"]),Object(l["h"])("table",n,[b,Object(l["h"])("tbody",null,[(Object(l["w"])(!0),Object(l["g"])(l["a"],null,Object(l["B"])(w.orders,(e,c)=>(Object(l["w"])(),Object(l["g"])(l["a"],{key:c},[w.orders.length?(Object(l["w"])(),Object(l["g"])("tr",{key:0,class:Object(l["q"])({"text-secondary":!e.is_paid})},[Object(l["h"])("td",null,Object(l["G"])(t.$filters.date(e.create_at)),1),Object(l["h"])("td",null,[e.user?(Object(l["w"])(),Object(l["g"])("span",{key:0,textContent:Object(l["G"])(e.user.email)},null,8,a)):Object(l["f"])("",!0)]),Object(l["h"])("td",null,[Object(l["h"])("ul",o,[(Object(l["w"])(!0),Object(l["g"])(l["a"],null,Object(l["B"])(e.products,(t,e)=>(Object(l["w"])(),Object(l["g"])("li",{key:e},Object(l["G"])(t.product.title)+" 數量："+Object(l["G"])(t.qty)+" "+Object(l["G"])(t.product.unit),1))),128))])]),Object(l["h"])("td",d,Object(l["G"])(e.total),1),Object(l["h"])("td",null,[Object(l["h"])("div",s,[Object(l["N"])(Object(l["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch"+e.id,"onUpdate:modelValue":t=>e.is_paid=t,onChange:t=>k.updatePaid(e)},null,40,i),[[l["I"],e.is_paid]]),Object(l["h"])("label",{class:"form-check-label",for:"paidSwitch"+e.id},[e.is_paid?(Object(l["w"])(),Object(l["g"])("span",j,"已付款")):(Object(l["w"])(),Object(l["g"])("span",h,"未付款"))],8,O)])]),Object(l["h"])("td",null,[Object(l["h"])("div",u,[Object(l["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>k.openModal(!1,e)},"檢視",8,r),Object(l["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>k.openDelOrderModal(e)},"刪除",8,p)])])],2)):Object(l["f"])("",!0)],64))),128))])])],64)}var w={data(){return{orders:{}}},methods:{getOrders(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/wuzong-api/admin/orders";this.$http.get(t).then(t=>{this.isLoading=!1,console.log(t)})},openModal(){},openDelOrderModal(){},updatePaid(){},delOrder(){}},created(){}},k=c("6b0d"),m=c.n(k);const f=m()(w,[["render",g]]);e["default"]=f}}]);
//# sourceMappingURL=chunk-2d0ab565.38b3218a.js.map