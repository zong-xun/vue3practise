(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf1515d4"],{2833:function(t,e,a){},"627b":function(t,e,a){"use strict";a("2833")},"76db":function(t,e,a){"use strict";a.r(e);var s=a("7a23");const c={class:"container-fluid"},o={class:"row mt-4"},l={class:"col-md table-responsive"},i={class:"text-end"},d=Object(s["h"])("i",{class:"bi bi-cart4"},null,-1),r=[d],n={class:"table align-middle table-hover"},h=Object(s["h"])("thead",null,[Object(s["h"])("tr",{class:"tabletr"},[Object(s["h"])("th",null,"圖片"),Object(s["h"])("th",null,"商品名稱"),Object(s["h"])("th",null,"價格"),Object(s["h"])("th")])],-1),b={style:{width:"200px"}},u={href:"#",class:"text-dark"},p={class:"h6"},O={class:"h5"},j={class:"btn-group btn-group-sm"},m=["onClick"],g=["onClick","disabled"],f={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},y=Object(s["h"])("span",{class:"visually-hidden"},"Loading...",-1),v=[y],k=Object(s["h"])("i",{class:"bi bi-cart-plus"},null,-1);function x(t,e,a,d,y,x){const M=Object(s["F"])("Pagination"),w=Object(s["F"])("shoppingcartModel"),C=Object(s["F"])("userOrderModal"),_=Object(s["F"])("checkoutModal"),I=Object(s["F"])("Loading");return Object(s["y"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("div",c,[Object(s["h"])("div",o,[Object(s["h"])("div",l,[Object(s["h"])("div",i,[Object(s["h"])("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=Object(s["T"])(t=>x.OpenCartModel(),["prevent"])),style:{"font-size":"29px",padding:"0.1rem 0.6rem"}},r)]),Object(s["h"])("table",n,[h,Object(s["h"])("tbody",null,[(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(y.productsdata,e=>(Object(s["y"])(),Object(s["g"])("tr",{key:e.id,class:"tabletr"},[Object(s["h"])("td",b,[Object(s["h"])("div",{style:Object(s["s"])([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.imagesUrl})`}])},null,4)]),Object(s["h"])("td",null,[Object(s["h"])("a",u,Object(s["I"])(e.title),1)]),Object(s["h"])("td",null,[Object(s["h"])("del",p,"原價 "+Object(s["I"])(t.$filters.currency(e.origin_price))+"元",1),Object(s["h"])("div",O,"現在只要 "+Object(s["I"])(t.$filters.currency(e.price))+"元",1)]),Object(s["h"])("td",null,[Object(s["h"])("div",j,[Object(s["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:Object(s["T"])(t=>x.getproduct(e.id),["prevent"]),style:{"border-top-right-radius":"0.25rem","border-bottom-right-radius":"0.25rem"}}," 查看更多 ",8,m),Object(s["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:Object(s["T"])(t=>x.attcart(e.id),["prevent"]),disabled:this.status.loadingItem===e.id,style:{"align-items":"center",display:"flex","justify-content":"center","border-top-left-radius":"0.25rem","border-bottom-left-radius":"0.25rem"}},[this.status.loadingItem===e.id?(Object(s["y"])(),Object(s["g"])("div",f,v)):Object(s["f"])("",!0),k],8,g)])])]))),128))])])])])]),Object(s["j"])(M,{pages:y.pagination,onUpdataPage:x.getproducts},null,8,["pages","onUpdataPage"]),Object(s["j"])(w,{ref:"shoppingcartModel",shoppingcart:y.cartdata,onCartProduct:x.closeCartModel},null,8,["shoppingcart","onCartProduct"]),Object(s["j"])(C,{ref:"userOrderModal",onUserOrderPrevious:x.OpenCartModel,onUserOrderCheckout:x.closeUserOrderModal},null,8,["onUserOrderPrevious","onUserOrderCheckout"]),Object(s["j"])(_,{ref:"checkoutModal",onCheckoutPrevious:x.OpenUserOrderModal,onCheckoutClose:x.ClosecheckoutModal,checkoutdata:y.allData},null,8,["onCheckoutPrevious","onCheckoutClose","checkoutdata"]),Object(s["j"])(I,{active:y.isLoading},null,8,["active"])],64)}a("14d9");var M=a("1799"),w=a("ec63");const C={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static"},_={class:"modal-dialog modal-dialog-centered modal-lg"},I={class:"modal-content"},$=Object(s["h"])("div",{class:"modal-header bg-primary"},[Object(s["h"])("h5",{class:"modal-title text-light",id:"exampleModalLabel"},"訂購資訊"),Object(s["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},D={class:"modal-body"},U={class:"container-fluid"},V={class:"mb-3"},T=Object(s["h"])("label",{for:"email",class:"form-label"},"Email",-1),q={class:"mb-3"},z=Object(s["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),F={class:"mb-3"},P=Object(s["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),S={class:"mb-3"},E=Object(s["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),R={class:"mb-3"},H=Object(s["h"])("label",{for:"message",class:"form-label"},"留言",-1),J={class:"text-end modal-footer",style:{"padding-bottom":"0"}},N={key:1,class:"btn btn-primary"};function X(t,e,a,c,o,l){const i=Object(s["F"])("Field"),d=Object(s["F"])("ErrorMessage"),r=Object(s["F"])("Form");return Object(s["y"])(),Object(s["g"])("div",C,[Object(s["h"])("div",_,[Object(s["h"])("div",I,[$,Object(s["h"])("div",L,[Object(s["h"])("div",D,[Object(s["h"])("div",U,[Object(s["h"])("div",null,[Object(s["j"])(r,{class:"col",onSubmit:l.createOrder},{default:Object(s["R"])(({errors:a})=>[Object(s["h"])("div",V,[T,Object(s["j"])(i,{id:"email",name:"email",type:"email",class:Object(s["r"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.user.email=t)},null,8,["class","modelValue"]),Object(s["j"])(d,{name:"email",class:"invalid-feedback"})]),Object(s["h"])("div",q,[z,Object(s["j"])(i,{id:"name",name:"姓名",type:"text",class:Object(s["r"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.user.name=t)},null,8,["class","modelValue"]),Object(s["j"])(d,{name:"姓名",class:"invalid-feedback"})]),Object(s["h"])("div",F,[P,Object(s["j"])(i,{id:"tel",name:"電話",type:"tel",class:Object(s["r"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:o.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.user.tel=t)},null,8,["class","modelValue"]),Object(s["j"])(d,{name:"電話",class:"invalid-feedback"})]),Object(s["h"])("div",S,[E,Object(s["j"])(i,{id:"address",name:"地址",type:"text",class:Object(s["r"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.user.address=t)},null,8,["class","modelValue"]),Object(s["j"])(d,{name:"地址",class:"invalid-feedback"})]),Object(s["h"])("div",R,[H,Object(s["S"])(Object(s["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=t=>o.form.message=t)},null,512),[[s["M"],o.form.message]])]),Object(s["h"])("div",J,[Object(s["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[5]||(e[5]=Object(s["T"])(e=>t.$emit("User-Order-Previous"),["prevent"]))},"上一步"),""!==o.form.user.address||""!==o.form.user.email||""!==o.form.user.name||""!==o.form.user.tel?(Object(s["y"])(),Object(s["g"])("button",{key:0,class:"btn btn-primary",onClick:e[6]||(e[6]=Object(s["T"])(e=>t.$emit("User-Order-checkout",o.form),["prevent"]))},"送出訂單")):(Object(s["y"])(),Object(s["g"])("button",N,"送出訂單"))])]),_:1},8,["onSubmit"])])])])])])])],512)}var A=a("075e"),B={props:{userorder:{type:Object,defaule(){return{}}}},watch:{},data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder(){}},emits:["User-Order-Previous","User-Order-checkout"],mixins:[A["a"]]},K=a("6b0d"),Z=a.n(K);const G=Z()(B,[["render",X]]);var Q=G;const W={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static"},Y={class:"modal-dialog modal-dialog-centered modal-lg"},tt={class:"modal-content"},et=Object(s["h"])("div",{class:"modal-header bg-primary"},[Object(s["h"])("h5",{class:"modal-title text-light",id:"exampleModalLabel"},"結帳"),Object(s["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),at={class:"modal-body"},st={class:"modal-body"},ct={class:"container-fluid"},ot={class:"row mt-4"},lt={class:"table align-middle"},it=Object(s["h"])("thead",null,[Object(s["h"])("th",null,"品名"),Object(s["h"])("th",null,"數量"),Object(s["h"])("th",{style:{"text-align":"center"}},"單價")],-1),dt={class:"text-end"},rt=Object(s["h"])("td",{colspan:"2",class:"text-end"},"總計",-1),nt={class:"text-end"},ht={class:"table"},bt=Object(s["h"])("th",{width:"100"},"Email",-1),ut=Object(s["h"])("th",null,"姓名",-1),pt=Object(s["h"])("th",null,"收件人電話",-1),Ot=Object(s["h"])("th",null,"收件人地址",-1),jt=Object(s["h"])("th",null,"付款狀態",-1),mt={key:0},gt={key:1,class:"text-success"},ft={class:"modal-footer"},yt={key:1,class:"btn btn-primary"};function vt(t,e,a,c,o,l){const i=Object(s["F"])("Loading");return Object(s["y"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("div",W,[Object(s["h"])("div",Y,[Object(s["h"])("div",tt,[et,Object(s["h"])("div",at,[Object(s["h"])("div",st,[Object(s["h"])("div",ct,[Object(s["h"])("div",ot,[Object(s["h"])("div",null,[Object(s["h"])("form",{class:"col",onSubmit:e[3]||(e[3]=Object(s["T"])((...t)=>l.Orderapi&&l.Orderapi(...t),["prevent"]))},[Object(s["h"])("table",lt,[it,Object(s["h"])("tbody",null,[(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(this.checkoutdata.product.carts,(t,e)=>(Object(s["y"])(),Object(s["g"])("tr",{key:e},[Object(s["h"])("td",null,Object(s["I"])(t.product.title),1),Object(s["h"])("td",null,Object(s["I"])(t.qty)+"/"+Object(s["I"])(t.product.unit),1),Object(s["h"])("td",dt,Object(s["I"])(t.final_total),1)]))),128))]),Object(s["h"])("tfoot",null,[Object(s["h"])("tr",null,[rt,Object(s["h"])("td",nt,Object(s["I"])(this.checkoutdata.product.final_total),1)])])]),Object(s["h"])("table",ht,[Object(s["h"])("tbody",null,[Object(s["h"])("tr",null,[bt,Object(s["h"])("td",null,Object(s["I"])(this.checkoutdata.email),1)]),Object(s["h"])("tr",null,[ut,Object(s["h"])("td",null,Object(s["I"])(this.checkoutdata.name),1)]),Object(s["h"])("tr",null,[pt,Object(s["h"])("td",null,Object(s["I"])(this.checkoutdata.tel),1)]),Object(s["h"])("tr",null,[Ot,Object(s["h"])("td",null,Object(s["I"])(this.checkoutdata.address),1)]),Object(s["h"])("tr",null,[jt,Object(s["h"])("td",null,[!1===this.newOrderData.is_paid?(Object(s["y"])(),Object(s["g"])("span",mt,"尚未付款")):(Object(s["y"])(),Object(s["g"])("span",gt,"付款完成"))])])])]),Object(s["h"])("div",ft,[!1===this.newOrderData.is_paid?(Object(s["y"])(),Object(s["g"])("button",{key:0,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[0]||(e[0]=Object(s["T"])(e=>t.$emit("checkout-Previous"),["prevent"]))},"上一步")):Object(s["f"])("",!0),!1===this.newOrderData.is_paid?(Object(s["y"])(),Object(s["g"])("button",yt,"確認付款去")):(Object(s["y"])(),Object(s["g"])("button",{key:2,type:"button",class:"btn btn-primary",onClick:[e[1]||(e[1]=Object(s["T"])(e=>t.$emit("checkout-close",o.paydata),["prevent"])),e[2]||(e[2]=(...t)=>l.rest&&l.rest(...t))]},"關閉"))])],32)])])])])])])])],512),Object(s["j"])(i,{active:o.isLoading},null,8,["active"])],64)}const kt={_origin:"https://api.emailjs.com"},xt=(t,e="https://api.emailjs.com")=>{kt._userID=t,kt._origin=e},Mt=(t,e,a)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class wt{constructor(t){this.status=t.status,this.text=t.responseText}}const Ct=(t,e,a={})=>new Promise((s,c)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:t})=>{const e=new wt(t);200===e.status||"OK"===e.text?s(e):c(e)}),o.addEventListener("error",({target:t})=>{c(new wt(t))}),o.open("POST",kt._origin+t,!0),Object.keys(a).forEach(t=>{o.setRequestHeader(t,a[t])}),o.send(e)}),_t=(t,e,a,s)=>{const c=s||kt._userID;Mt(c,t,e);const o={lib_version:"3.2.0",user_id:c,service_id:t,template_id:e,template_params:a};return Ct("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},It=t=>{let e;if(e="string"===typeof t?document.querySelector(t):t,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},$t=(t,e,a,s)=>{const c=s||kt._userID,o=It(a);Mt(c,t,e);const l=new FormData(o);return l.append("lib_version","3.2.0"),l.append("service_id",t),l.append("template_id",e),l.append("user_id",c),Ct("/api/v1.0/email/send-form",l)};var Lt={init:xt,send:_t,sendForm:$t},Dt={props:{checkoutdata:{type:Object,defaule(){return{}}}},watch:{checkoutdata(){}},data(){return{orderr:{},orderarr:[],isLoading:!1,user:{},newOrderData:{is_paid:!1},form:{user:{name:"",email:"",tel:"",address:""},message:""},paydata:{}}},methods:{getOrder(t){const e="https://vue3-course-api.hexschool.io/api/wuzong-api/order/"+t;this.$http.get(e).then(t=>{t.data.success&&(console.log(t),this.newOrderData=t.data.order)})},payOrder(t){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/pay/"+t;this.$http.post(e).then(e=>{e.data.success&&(console.log(e),this.paydata=e,this.getOrder(t),this.sendEmail(this.checkoutdata),this.isLoading=!1)})},sendEmail(t){console.log(t);const e=Object.values(t.product.carts);console.log(e);let a="",s="";for(let o=0;o<=e.length-1;o++){for(let t=0;t<=e[o].product.imagesUrl.length;t++)s+=` <img src="${e[o].product.imagesUrl[t]}" alt="">`;a+=`\n                        <div style="font-size:30px;">\n                        名稱 : <span >${e[o].product.title}</span>\n                        </div>\n                        ${s}\n                        <div style="font-size:30px;">\n                        價格 : <span>${e[o].final_total}</span>\n                        </div>\n                    `,s=""}const c={user:t.name,email:t.email,address:t.address,tel:t.tel,total:t.product.final_total,htmlemailtep:a};Lt.send("service_zong","template_ia2bt5u",c,"es4Xj-CcZvB4tDDAV").then(()=>{},()=>{})},Orderapi(){this.isLoading=!0,console.log(this.checkoutdata),this.form.user.name=this.checkoutdata.name,this.form.user.email=this.checkoutdata.email,this.form.user.tel=this.checkoutdata.tel,this.form.user.address=this.checkoutdata.address,this.form.message=this.checkoutdata.message;const t="https://vue3-course-api.hexschool.io/api/wuzong-api/order";this.$http.post(t,{data:this.form}).then(t=>{t.data.success&&(console.log(t),this.payOrder(t.data.orderId),this.isLoading=!1)})},rest(){console.log("1"),this.newOrderData.is_paid=!1}},emits:["checkout-close"],mixins:[A["a"]]};const Ut=Z()(Dt,[["render",vt]]);var Vt=Ut,Tt={data(){return{productsdata:[],pagination:{},isLoading:!1,status:{loadingItem:""},cartdata:{},checkoutdata:{},allData:{product:{}},allDataproduct:{}}},components:{Pagination:M["a"],shoppingcartModel:w["a"],checkoutModal:Vt,userOrderModal:Q},methods:{getproducts(t){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/products?page="+t;this.$http.get(e).then(t=>{t.data.success&&(this.isLoading=!1,this.productsdata=t.data.products,this.pagination=t.data.pagination)})},getproduct(t){this.$router.push("/user/product/"+t)},attcart(t){const e={product_id:t,qty:1};this.status.loadingItem=t;const a="https://vue3-course-api.hexschool.io/api/wuzong-api/cart";this.$http.post(a,{data:e}).then(t=>{t.data.success&&(this.status.loadingItem="")})},OpenCartModel(){this.isLoading=!0;const t=this.$refs.shoppingcartModel,e="https://vue3-course-api.hexschool.io/api/wuzong-api/cart";this.$http.get(e).then(e=>{e.data.success&&(this.cartdata=e.data.data,this.isLoading=!1,t.showModel())})},closeCartModel(t){console.log(t),this.allDataproduct=t,console.log(this.allData);const e=this.$refs.shoppingcartModel;e.hideModel(),this.OpenUserOrderModal()},OpenUserOrderModal(){const t=this.$refs.userOrderModal;t.showModel()},closeUserOrderModal(t){this.allData=t.user,this.allData.product=this.allDataproduct,console.log(this.allData);const e=this.$refs.userOrderModal;e.hideModel(),this.OpencheckoutModal()},OpencheckoutModal(){const t=this.$refs.checkoutModal;t.showModel()},ClosecheckoutModal(t){console.log(t);const e=this.$refs.checkoutModal;e.hideModel(),this.$httpMessageState(t,"感謝您的購買")}},created(){this.getproducts()}};a("627b");const qt=Z()(Tt,[["render",x]]);e["default"]=qt},b45d:function(t,e,a){},c006:function(t,e,a){"use strict";a("b45d")},ec63:function(t,e,a){"use strict";var s=a("7a23");const c={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static"},o={class:"modal-dialog modal-dialog-centered modal-lg"},l={class:"modal-content"},i=Object(s["h"])("div",{class:"modal-header bg-primary"},[Object(s["h"])("h5",{class:"modal-title text-light",id:"exampleModalLabel"},"購物清單"),Object(s["h"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),d={class:"modal-body"},r={class:"container-fluid"},n={class:"row mt-4"},h={class:"col"},b={class:"sticky-top"},u={class:"table align-middle"},p=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th"),Object(s["h"])("th",null,"品名"),Object(s["h"])("th",{style:{"text-align":"center"}},"數量"),Object(s["h"])("th",{style:{"text-align":"end","padding-right":"25px"}},"單價")])],-1),O={class:"tabletrmodel"},j=["onClick"],m=Object(s["h"])("i",{class:"bi bi-trash3"},null,-1),g=[m],f={key:0,class:"text-success"},y={class:"input-group input-group-sm"},v=["onUpdate:modelValue","onChange","disabled"],k={class:"input-group-text"},x={class:"text-end"},M={key:0},w={key:1,class:"text-success"},C=Object(s["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),_={class:"text-end"},I={key:0},$=Object(s["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣後總計",-1),L={class:"text-end text-success"},D={class:"input-group mb-3 input-group-sm"},U={class:"input-group-append"},V={class:"modal-footer"},T=Object(s["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function q(t,e,a,m,q,z){const F=Object(s["F"])("Loading");return Object(s["y"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("div",c,[Object(s["h"])("div",o,[Object(s["h"])("div",l,[i,Object(s["h"])("div",d,[Object(s["h"])("div",r,[Object(s["h"])("div",n,[Object(s["h"])("div",h,[Object(s["h"])("div",b,[Object(s["h"])("table",u,[p,(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(this.shoppingcartdata.carts,e=>(Object(s["y"])(),Object(s["g"])("tbody",{key:e.id},[Object(s["h"])("tr",O,[Object(s["h"])("td",null,[Object(s["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:Object(s["T"])(t=>z.delonecart(e.id),["prevent"])},g,8,j)]),Object(s["h"])("td",null,[Object(s["i"])(Object(s["I"])(e.product.title)+" ",1),this.shoppingcartdata.final_total!==this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("div",f," 已套用優惠券 ")):Object(s["f"])("",!0)]),Object(s["h"])("td",null,[Object(s["h"])("div",y,[Object(s["S"])(Object(s["h"])("input",{type:"number",class:"form-control",style:{"text-align":"center"},"onUpdate:modelValue":t=>e.qty=t,min:"1",onChange:t=>z.updataCart(e),disabled:e.id===q.status.loadingItem},null,40,v),[[s["M"],e.qty,void 0,{number:!0}]]),Object(s["h"])("div",k,Object(s["I"])(e.product.unit),1)])]),Object(s["h"])("td",x,[this.shoppingcartdata.final_total===this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("span",M,Object(s["I"])(t.$filters.currency(e.final_total)),1)):Object(s["f"])("",!0),this.shoppingcartdata.final_total!==this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("small",w,"折扣價："+Object(s["I"])(t.$filters.currency(e.final_total)),1)):Object(s["f"])("",!0)])])]))),128)),Object(s["h"])("tfoot",null,[Object(s["h"])("tr",null,[C,Object(s["h"])("td",_,Object(s["I"])(t.$filters.currency(this.shoppingcartdata.total)),1)]),this.shoppingcartdata.final_total!==this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("tr",I,[$,Object(s["h"])("td",L,Object(s["I"])(t.$filters.currency(this.shoppingcartdata.final_total)),1)])):Object(s["f"])("",!0)])]),Object(s["h"])("div",D,[Object(s["S"])(Object(s["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[0]||(e[0]=t=>q.coupon_code=t)},null,512),[[s["M"],q.coupon_code]]),Object(s["h"])("div",U,[Object(s["h"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=Object(s["T"])(t=>z.addCouponCode(),["prevent"]))}," 套用優惠碼 ")])])])])])])]),Object(s["h"])("div",V,[T,Object(s["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=Object(s["T"])(e=>t.$emit("cart-product",q.shoppingcartdata),["prevent"]))},"確定")])])])],512),Object(s["j"])(F,{active:q.isLoading},null,8,["active"])],64)}var z=a("075e"),F={props:{shoppingcart:{type:Object,defaule(){return{}}}},watch:{shoppingcart(){this.shoppingcartdata=this.shoppingcart,this.coupon_code=""}},data(){return{modal:{},shoppingcartdata:{},isLoading:!1,status:{loadingItem:""},coupon_code:""}},methods:{delonecart(t){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/cart/"+t;this.$http.delete(e).then(t=>{t.data.success&&(this.getcardata(),this.isLoading=!1)})},getcardata(){const t="https://vue3-course-api.hexschool.io/api/wuzong-api/cart";this.$http.get(t).then(t=>{t.data.success&&(this.shoppingcartdata=t.data.data)})},updataCart(t){this.isLoading=!0,this.status.loadingItem=t.id;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/cart/"+t.id,a={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:a}).then(t=>{t.data.success&&(this.getcardata(),this.isLoading=!1,this.status.loadingItem="")})},addCouponCode(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/wuzong-api/coupon",e={data:{code:this.coupon_code}};this.$http.post(t,e).then(t=>{t.data.success?(console.log(t),this.getcardata()):this.$httpMessageState(t,"優惠券"),this.isLoading=!1})}},emits:["cart-product"],mixins:[z["a"]]},P=(a("c006"),a("6b0d")),S=a.n(P);const E=S()(F,[["render",q]]);e["a"]=E}}]);
//# sourceMappingURL=chunk-cf1515d4.1f6bbbef.js.map