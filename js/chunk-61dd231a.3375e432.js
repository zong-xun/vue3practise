(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61dd231a"],{3082:function(t,e,o){},"6ff1":function(t,e,o){"use strict";var a=o("7a23");const l={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog modal-dialog-centered"},s={class:"modal-content"},c={class:"modal-header bg-danger"},i={key:0,class:"modal-title text-light",id:"exampleModalLabel"},d={key:1,class:"modal-title text-light",id:"exampleModalLabel"},p=Object(a["h"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),b={class:"modal-body"},u={key:0},h={key:1},m={class:"modal-footer"},r=Object(a["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function j(t,e,o,j,O,g){return Object(a["y"])(),Object(a["g"])("div",l,[Object(a["h"])("div",n,[Object(a["h"])("div",s,[Object(a["h"])("div",c,[!0===this.istitle?(Object(a["y"])(),Object(a["g"])("h5",i,"刪除產品")):Object(a["f"])("",!0),!1===this.istitle?(Object(a["y"])(),Object(a["g"])("h5",d,"刪除優惠卷")):Object(a["f"])("",!0),p]),Object(a["h"])("div",b,[!0===this.istitle?(Object(a["y"])(),Object(a["g"])("span",u,"是否確定要刪除【"+Object(a["I"])(this.tempProduct.title)+"】",1)):Object(a["f"])("",!0),!1===this.istitle?(Object(a["y"])(),Object(a["g"])("span",h,"是否確定要刪除【"+Object(a["I"])(this.couponData.title)+"】優惠卷",1)):Object(a["f"])("",!0)]),Object(a["h"])("div",m,[r,!0===this.istitle?(Object(a["y"])(),Object(a["g"])("button",{key:0,type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=Object(a["T"])(e=>t.$emit("del-product",O.tempProduct.id),["prevent"]))},"確定")):Object(a["f"])("",!0),!1===this.istitle?(Object(a["y"])(),Object(a["g"])("button",{key:1,type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=Object(a["T"])(e=>t.$emit("del-item",O.couponData.id),["prevent"]))},"確定")):Object(a["f"])("",!0)])])])],512)}var O=o("075e"),g={props:{DelProductData:{type:Object,defaule(){return{}}},item:{type:Object,defaule(){return{}}}},watch:{DelProductData(){this.tempProduct=this.DelProductData,this.istitle=!0,console.log(this.DelProductData.title)},item(){this.couponData=this.item,this.istitle=!1,console.log(this.item)}},data(){return{modal:{},tempProduct:{},couponData:{},istitle:!0}},methods(){},emits:["del-item","del-product"],mixins:[O["a"]]},C=o("6b0d"),f=o.n(C);const y=f()(g,[["render",j]]);e["a"]=y},f329:function(t,e,o){"use strict";o.r(e);var a=o("7a23");const l={class:"text-end mt-4"},n={class:"table mt-4"},s=Object(a["h"])("thead",null,[Object(a["h"])("tr",{class:"tabledisable"},[Object(a["h"])("th",null,"名稱"),Object(a["h"])("th",null,"優惠碼"),Object(a["h"])("th",null,"折扣百分比"),Object(a["h"])("th",null,"到期日"),Object(a["h"])("th",null,"是否啟用"),Object(a["h"])("th",null,"編輯")])],-1),c={key:0,class:"text-success"},i={key:1,class:"text-muted"},d={class:"btn-group"},p=["onClick"],b=Object(a["h"])("i",{class:"bi bi-pencil"},null,-1),u=[b],h=["onClick"],m=Object(a["h"])("i",{class:"bi bi-trash3"},null,-1),r=[m];function j(t,e,o,b,m,j){const O=Object(a["F"])("Loading"),g=Object(a["F"])("couponModal"),C=Object(a["F"])("DelModal"),f=Object(a["F"])("Pagination");return Object(a["y"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",null,[Object(a["j"])(O,{active:m.isLoading},null,8,["active"]),Object(a["h"])("div",l,[Object(a["h"])("button",{class:"btn btn-primary",onClickPassive:e[0]||(e[0]=t=>j.openCouponModel(!0))}," 建立新的優惠券 ",32)]),Object(a["h"])("table",n,[s,Object(a["h"])("tbody",null,[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(this.CouponData,(e,o)=>(Object(a["y"])(),Object(a["g"])("tr",{key:o,class:"tabledisable"},[Object(a["h"])("td",null,Object(a["I"])(e.title),1),Object(a["h"])("td",null,Object(a["I"])(e.code),1),Object(a["h"])("td",null,Object(a["I"])(e.percent)+"%",1),Object(a["h"])("td",null,Object(a["I"])(t.$filters.date(e.due_date)),1),Object(a["h"])("td",null,[1===e.is_enabled?(Object(a["y"])(),Object(a["g"])("span",c,"啟用")):(Object(a["y"])(),Object(a["g"])("span",i,"未起用"))]),Object(a["h"])("td",null,[Object(a["h"])("div",d,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>j.openCouponModel(!1,e)},u,8,p),Object(a["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>j.openDelCouponModal(e)},r,8,h)])])]))),128))])]),Object(a["j"])(g,{ref:"couponModal",onUpdateCoupon:j.updateCoupon,coupon:m.tempCouponitem},null,8,["onUpdateCoupon","coupon"]),Object(a["j"])(C,{item:m.tempCoupon,ref:"delModal",onDelItem:j.DelCoupon},null,8,["item","onDelItem"])]),Object(a["j"])(f,{pages:m.pagination,onUpdataPage:j.getCouponData},null,8,["pages","onUpdataPage"]),Object(a["j"])(O,{active:m.isLoading},null,8,["active"])],64)}const O={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog modal-dialog-centered",role:"document"},C={class:"modal-content"},f={class:"modal-header bg-dark text-white"},y={class:"modal-title",id:"exampleModalLabel"},v=Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),M={class:"modal-body"},D={class:"mb-3"},k=Object(a["h"])("label",{for:"title"},"標題",-1),w={class:"mb-3"},x=Object(a["h"])("label",{for:"coupon_code"},"優惠碼",-1),_={class:"mb-3"},L=Object(a["h"])("label",{for:"due_date"},"到期日",-1),$={class:"mb-3"},P=Object(a["h"])("label",{for:"price"},"折扣百分比",-1),S={class:"mb-3"},I={class:"form-check"},U=Object(a["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),N={class:"modal-footer"},V=Object(a["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function z(t,e,o,l,n,s){return Object(a["y"])(),Object(a["g"])("div",O,[Object(a["h"])("div",g,[Object(a["h"])("div",C,[Object(a["h"])("div",f,[Object(a["h"])("h5",y,Object(a["I"])(this.modeltitle)+"優惠券",1),v]),Object(a["h"])("div",M,[Object(a["h"])("div",D,[k,Object(a["S"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>n.tempCoupon.title=t),placeholder:"請輸入標題"},null,512),[[a["M"],n.tempCoupon.title]])]),Object(a["h"])("div",w,[x,Object(a["S"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=t=>n.tempCoupon.code=t),placeholder:"請輸入優惠碼"},null,512),[[a["M"],n.tempCoupon.code]])]),Object(a["h"])("div",_,[L,Object(a["S"])(Object(a["h"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=t=>n.tempCoupon.due_date=t)},null,512),[[a["M"],n.tempCoupon.due_date]])]),Object(a["h"])("div",$,[P,Object(a["S"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=t=>n.tempCoupon.percent=t),placeholder:"請輸入折扣百分比"},null,512),[[a["M"],n.tempCoupon.percent,void 0,{number:!0}]])]),Object(a["h"])("div",S,[Object(a["h"])("div",I,[Object(a["S"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=t=>n.tempCoupon.is_enabled=t),id:"is_enabled"},null,512),[[a["L"],n.tempCoupon.is_enabled]]),U])])]),Object(a["h"])("div",N,[V,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>t.$emit("update-coupon",n.tempCoupon))},"確定 ")])])])],512)}var F=o("075e"),T={name:"couponModal",props:{coupon:{type:Object,defaule(){return{}}}},watch:{coupon(){if(this.tempCoupon=this.coupon,void 0!==this.coupon.due_date){const t=new Date(1e3*this.tempCoupon.due_date);this.tempCoupon.due_date=t.toISOString().split("T")[0],this.modeltitle="編輯"}else this.tempCoupon.is_enabled=0,this.modeltitle="新增"}},data(){return{tempCoupon:{},modeltitle:"新增",due_date:""}},emits:["update-coupon"],mixins:[F["a"]]},J=o("6b0d"),q=o.n(J);const A=q()(T,[["render",z]]);var B=A,E=o("1799"),G=o("6ff1"),H={components:{CouponModal:B,Pagination:E["a"],DelModal:G["a"]},props:{config:Object},data(){return{tempCoupon:{},isLoading:!1,CouponData:[],pagination:{},isNew:!1,tempCouponitem:{}}},methods:{getCouponData(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/admin/coupons?page="+t;this.$http.get(e).then(t=>{this.isLoading=!1,t.data.success&&(this.CouponData=t.data.coupons,this.pagination=t.data.pagination,this.isLoading=!1)})},openCouponModel(t,e){this.tempCouponitem=t?{}:{...e},this.isNew=t;const o=this.$refs.couponModal;o.showModel()},openDelCouponModal(t){const e=this.$refs.delModal;this.tempCoupon={...t},e.showModel()},DelCoupon(t){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/admin/coupon/"+t,o=this.$refs.delModal;this.$http.delete(e,{data:this.tempProduct}).then(t=>{console.log(t),this.isLoading=!1,o.hideModel(),t.data.success?(this.getCouponData(),this.$httpMessageState(t,"刪除成功")):this.$httpMessageState(t,"刪除失敗")})},updateCoupon(t){this.isLoading=!0,this.tempCoupon=t;const e=+new Date(this.tempCoupon.due_date),o=Math.floor(e/1e3),a=this.$refs.couponModal;this.tempCoupon.due_date=o;let l="https://vue3-course-api.hexschool.io/api/wuzong-api/admin/coupon",n="post";this.isNew||(l="https://vue3-course-api.hexschool.io/api/wuzong-api/admin/coupon/"+t.id,n="put"),this.$http[n](l,{data:this.tempCoupon}).then(t=>{a.hideModel(),this.isLoading=!1,t.data.success?(this.getCouponData(),this.isNew?this.$httpMessageState(t,"新增優惠卷成功"):this.$httpMessageState(t,"編輯成功")):this.isNew?this.$httpMessageState(t,"新增優惠卷失敗"):this.$httpMessageState(t,"編輯失敗")})}},created(){this.getCouponData()}};o("f929");const K=q()(H,[["render",j]]);e["default"]=K},f929:function(t,e,o){"use strict";o("3082")}}]);
//# sourceMappingURL=chunk-61dd231a.3375e432.js.map