(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7731064"],{"075e":function(t,e,i){"use strict";var s=i("7c2b"),n=i.n(s);e["a"]={methods:{showModel(){this.modal.show()},hideModel(){this.modal.hide()}},mounted(){this.modal=new n.a(this.$refs.modal)}}},1494:function(t,e,i){
/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("6a95"),i("aa53"),i("1243"))})(0,(function(t,e,i){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=s(t),a=s(i),o="backdrop",c="fade",l="show",d="mousedown.bs."+o,r={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},h={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class u extends a.default{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return r}static get DefaultType(){return h}static get NAME(){return o}show(t){if(!this._config.isVisible)return void e.execute(t);this._append();const i=this._getElement();this._config.isAnimated&&e.reflow(i),i.classList.add(l),this._emulateAnimation(()=>{e.execute(t)})}hide(t){this._config.isVisible?(this._getElement().classList.remove(l),this._emulateAnimation(()=>{this.dispose(),e.execute(t)})):e.execute(t)}dispose(){this._isAppended&&(n.default.off(this._element,d),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(c),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=e.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),n.default.on(t,d,()=>{e.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){e.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return u}))},5470:function(t,e,i){
/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("6a95"),i("848f"),i("1243"))})(0,(function(t,e,i){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=s(t),a=s(e),o=s(i),c="focustrap",l="bs.focustrap",d="."+l,r="focusin"+d,h="keydown.tab"+d,u="Tab",p="forward",b="backward",m={autofocus:!0,trapElement:null},g={autofocus:"boolean",trapElement:"element"};class f extends o.default{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return m}static get DefaultType(){return g}static get NAME(){return c}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,d),n.default.on(document,r,t=>this._handleFocusin(t)),n.default.on(document,h,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,d))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=a.default.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===b?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===u&&(this._lastTabNavDirection=t.shiftKey?b:p)}}return f}))},"7c2b":function(t,e,i){
/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("aa53"),i("6a95"),i("848f"),i("ba05"),i("302d"),i("1494"),i("5470"),i("0f28"))})(0,(function(t,e,i,s,n,a,o,c){"use strict";const l=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},d=l(e),r=l(i),h=l(s),u=l(n),p=l(a),b=l(o),m="modal",g="bs.modal",f="."+g,_=".data-api",j="Escape",O="hide"+f,y="hidePrevented"+f,v="hidden"+f,w="show"+f,k="shown"+f,x="resize"+f,A="click.dismiss"+f,E="mousedown.dismiss"+f,C="keydown.dismiss"+f,L=`click${f}${_}`,T="modal-open",I="fade",M="show",D="modal-static",$=".modal.show",S=".modal-dialog",N=".modal-body",P='[data-bs-toggle="modal"]',z={backdrop:!0,focus:!0,keyboard:!0},F={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class V extends u.default{constructor(t,e){super(t,e),this._dialog=r.default.findOne(S,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new h.default,this._addEventListeners()}static get Default(){return z}static get DefaultType(){return F}static get NAME(){return m}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=d.default.trigger(this._element,w,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(T),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){if(!this._isShown||this._isTransitioning)return;const t=d.default.trigger(this._element,O);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(M),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])d.default.off(t,f);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new p.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new b.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=r.default.findOne(N,this._dialog);i&&(i.scrollTop=0),t.reflow(this._element),this._element.classList.add(M);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.default.trigger(this._element,k,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){d.default.on(this._element,C,t=>{if(t.key===j)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),d.default.on(window,x,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.default.on(this._element,E,t=>{d.default.one(this._element,A,e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(T),this._resetAdjustments(),this._scrollBar.reset(),d.default.trigger(this._element,v)})}_isAnimated(){return this._element.classList.contains(I)}_triggerBackdropTransition(){const t=d.default.trigger(this._element,y);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;"hidden"===i||this._element.classList.contains(D)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(D),this._queueCallback(()=>{this._element.classList.remove(D),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._scrollBar.getWidth(),s=i>0;if(s&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=i+"px"}if(!s&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=i+"px"}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=V.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return d.default.on(document,L,P,(function(e){const i=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),d.default.one(i,w,e=>{e.defaultPrevented||d.default.one(i,v,()=>{t.isVisible(this)&&this.focus()})});const s=r.default.findOne($);s&&V.getInstance(s).hide();const n=V.getOrCreateInstance(i);n.toggle(this)})),c.enableDismissTrigger(V),t.defineJQueryPlugin(V),V}))},"82b1":function(t,e,i){},"848f":function(t,e,i){
/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("aa53"))})(0,(function(t){"use strict";const e={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(t=>t.matches(e))},parents(t,e){const i=[];let s=t.parentNode.closest(e);while(s)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;while(i){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;while(i){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(e){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(",");return this.find(i,e).filter(e=>!t.isDisabled(e)&&t.isVisible(e))}};return e}))},ba05:function(t,e,i){
/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("848f"),i("109e"),i("aa53"))})(0,(function(t,e,i){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=s(t),a=s(e),o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",c=".sticky-top",l="padding-right",d="margin-right";class r{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,l,e=>e+t),this._setElementAttributes(o,l,e=>e+t),this._setElementAttributes(c,d,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,l),this._resetElementAttributes(o,l),this._resetElementAttributes(c,d)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,i(Number.parseFloat(n))+"px")};this._applyManipulationCallback(t,n)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&a.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=t=>{const i=a.default.getDataAttribute(t,e);null!==i?(a.default.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(i.isElement(t))e(t);else for(const i of n.default.find(t,this._element))e(i)}}return r}))},cb85:function(t,e,i){"use strict";i("82b1")},ec63:function(t,e,i){"use strict";var s=i("7a23");const n={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static"},a={class:"modal-dialog modal-dialog-centered modal-lg"},o={class:"modal-content"},c=Object(s["h"])("div",{class:"modal-header bg-primary"},[Object(s["h"])("h5",{class:"modal-title text-light",id:"exampleModalLabel"},"購物清單"),Object(s["h"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),l={class:"modal-body"},d={class:"container-fluid"},r={class:"row mt-4"},h={class:"col"},u={class:"sticky-top"},p={class:"table align-middle"},b=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th"),Object(s["h"])("th",null,"品名"),Object(s["h"])("th",{style:{"text-align":"center"}},"數量"),Object(s["h"])("th",{style:{"text-align":"end","padding-right":"25px"}},"單價")])],-1),m={class:"tabletrmodel"},g=["onClick"],f=Object(s["h"])("i",{class:"bi bi-trash3"},null,-1),_=[f],j={key:0,class:"text-success"},O={class:"input-group input-group-sm"},y=["onUpdate:modelValue","onChange","disabled"],v={class:"input-group-text"},w={class:"text-end"},k={key:0},x={key:1,class:"text-success"},A=Object(s["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),E={class:"text-end"},C={key:0},L=Object(s["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣後總計",-1),T={class:"text-end text-success"},I={class:"input-group mb-3 input-group-sm"},M={class:"input-group-append"},D={class:"modal-footer"},$=Object(s["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function S(t,e,i,f,S,N){const P=Object(s["F"])("Loading");return Object(s["y"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("div",n,[Object(s["h"])("div",a,[Object(s["h"])("div",o,[c,Object(s["h"])("div",l,[Object(s["h"])("div",d,[Object(s["h"])("div",r,[Object(s["h"])("div",h,[Object(s["h"])("div",u,[Object(s["h"])("table",p,[b,(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(this.shoppingcartdata.carts,e=>(Object(s["y"])(),Object(s["g"])("tbody",{key:e.id},[Object(s["h"])("tr",m,[Object(s["h"])("td",null,[Object(s["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:Object(s["T"])(t=>N.delonecart(e.id),["prevent"])},_,8,g)]),Object(s["h"])("td",null,[Object(s["i"])(Object(s["I"])(e.product.title)+" ",1),this.shoppingcartdata.final_total!==this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("div",j," 已套用優惠券 ")):Object(s["f"])("",!0)]),Object(s["h"])("td",null,[Object(s["h"])("div",O,[Object(s["S"])(Object(s["h"])("input",{type:"number",class:"form-control",style:{"text-align":"center"},"onUpdate:modelValue":t=>e.qty=t,min:"1",onChange:t=>N.updataCart(e),disabled:e.id===S.status.loadingItem},null,40,y),[[s["M"],e.qty,void 0,{number:!0}]]),Object(s["h"])("div",v,Object(s["I"])(e.product.unit),1)])]),Object(s["h"])("td",w,[this.shoppingcartdata.final_total===this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("span",k,Object(s["I"])(t.$filters.currency(e.final_total)),1)):Object(s["f"])("",!0),this.shoppingcartdata.final_total!==this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("small",x,"折扣價："+Object(s["I"])(t.$filters.currency(e.final_total)),1)):Object(s["f"])("",!0)])])]))),128)),Object(s["h"])("tfoot",null,[Object(s["h"])("tr",null,[A,Object(s["h"])("td",E,Object(s["I"])(t.$filters.currency(this.shoppingcartdata.total)),1)]),this.shoppingcartdata.final_total!==this.shoppingcartdata.total?(Object(s["y"])(),Object(s["g"])("tr",C,[L,Object(s["h"])("td",T,Object(s["I"])(t.$filters.currency(this.shoppingcartdata.final_total)),1)])):Object(s["f"])("",!0)])]),Object(s["h"])("div",I,[Object(s["S"])(Object(s["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[0]||(e[0]=t=>S.coupon_code=t)},null,512),[[s["M"],S.coupon_code]]),Object(s["h"])("div",M,[Object(s["h"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=Object(s["T"])(t=>N.addCouponCode(),["prevent"]))}," 套用優惠碼 ")])])])])])])]),Object(s["h"])("div",D,[$,Object(s["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=Object(s["T"])(e=>t.$emit("cart-product",S.shoppingcartdata),["prevent"]))},"確定")])])])],512),Object(s["j"])(P,{active:S.isLoading},null,8,["active"])],64)}var N=i("075e"),P={props:{shoppingcart:{type:Object,defaule(){return{}}}},watch:{shoppingcart(){this.shoppingcartdata=this.shoppingcart,this.coupon_code=""}},data(){return{modal:{},shoppingcartdata:{},isLoading:!1,status:{loadingItem:""},coupon_code:""}},methods:{delonecart(t){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/cart/"+t;this.$http.delete(e).then(t=>{t.data.success&&(this.getcardata(),this.isLoading=!1)})},getcardata(){const t="https://vue3-course-api.hexschool.io/api/wuzong-api/cart";this.$http.get(t).then(t=>{t.data.success&&(this.shoppingcartdata=t.data.data)})},updataCart(t){this.isLoading=!0,this.status.loadingItem=t.id;const e="https://vue3-course-api.hexschool.io/api/wuzong-api/cart/"+t.id,i={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:i}).then(t=>{t.data.success&&(this.getcardata(),this.isLoading=!1,this.status.loadingItem="")})},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/wuzong-api/coupon",e={data:{code:this.coupon_code}};this.$http.post(t,e).then(t=>{t.data.success&&this.getcardata()})}},emits:["cart-product"],mixins:[N["a"]]},z=(i("cb85"),i("6b0d")),F=i.n(z);const V=F()(P,[["render",S]]);e["a"]=V},f962:function(t,e,i){"use strict";i.r(e);var s=i("7a23");const n={class:"container"},a={"aria-label":"breadcrumb"},o={class:"breadcrumb"},c={class:"breadcrumb-item"},l={class:"breadcrumb-item active","aria-current":"page"},d={class:"text-end"},r=Object(s["h"])("i",{class:"bi bi-cart4"},null,-1),h=[r],u={class:"row justify-content-center"},p={class:"col-8"},b=["src"],m={class:"col-4"},g={key:0,class:"h5"},f={key:1,class:"h6"},_={key:2,class:"h5"},j=Object(s["h"])("hr",null,null,-1),O={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},y=Object(s["h"])("span",{class:"visually-hidden"},"Loading...",-1),v=[y],w=Object(s["h"])("i",{class:"bi bi-cart-plus"},null,-1);function k(t,e,i,r,y,k){const x=Object(s["F"])("Loading"),A=Object(s["F"])("router-link"),E=Object(s["F"])("shoppingcartModel");return Object(s["y"])(),Object(s["g"])(s["a"],null,[Object(s["j"])(x,{active:y.isLoading},null,8,["active"]),Object(s["h"])("div",n,[Object(s["h"])("nav",a,[Object(s["h"])("ol",o,[Object(s["h"])("li",c,[Object(s["j"])(A,{to:"/user/cart"},{default:Object(s["R"])(()=>[Object(s["i"])("購物車")]),_:1})]),Object(s["h"])("li",l,Object(s["I"])(y.product.title),1)])]),Object(s["h"])("div",d,[Object(s["h"])("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=Object(s["T"])(t=>k.OpenCartModel(),["prevent"])),style:{"font-size":"29px",padding:"0.1rem 0.6rem"}},h)]),Object(s["h"])("div",u,[Object(s["h"])("article",p,[Object(s["h"])("h2",null,Object(s["I"])(y.product.title),1),Object(s["h"])("div",null,Object(s["I"])(y.product.content),1),Object(s["h"])("div",null,Object(s["I"])(y.product.description),1),(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(y.product.imagesUrl,(t,e)=>(Object(s["y"])(),Object(s["g"])("img",{key:e,src:t,alt:"",class:"img-fluid mb-3"},null,8,b))),128))]),Object(s["h"])("div",m,[y.product.price?Object(s["f"])("",!0):(Object(s["y"])(),Object(s["g"])("div",g,Object(s["I"])(y.product.origin_price)+" 元",1)),y.product.price?(Object(s["y"])(),Object(s["g"])("del",f,"原價 "+Object(s["I"])(y.product.origin_price)+" 元",1)):Object(s["f"])("",!0),y.product.price?(Object(s["y"])(),Object(s["g"])("div",_,"現在只要 "+Object(s["I"])(y.product.price)+" 元",1)):Object(s["f"])("",!0),j,Object(s["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[1]||(e[1]=t=>k.attcart(y.product.id))},[this.status.loadingItem===y.product.id?(Object(s["y"])(),Object(s["g"])("div",O,v)):Object(s["f"])("",!0),w])])])]),Object(s["j"])(E,{ref:"shoppingcartModel",shoppingcart:y.cartdata,onCartProduct:k.closeCartModel},null,8,["shoppingcart","onCartProduct"])],64)}var x=i("ec63"),A={data(){return{product:{},cartdata:{},id:"",isLoading:!1,status:{loadingItem:""}}},components:{shoppingcartModel:x["a"]},methods:{getProduct(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/wuzong-api/product/"+this.id;this.$http.get(t).then(t=>{t.data.success&&(this.isLoading=!1,this.product=t.data.product)})},attcart(t){this.isLoading=!0;const e={product_id:t,qty:1};this.status.loadingItem=t;const i="https://vue3-course-api.hexschool.io/api/wuzong-api/cart";this.$http.post(i,{data:e}).then(t=>{t.data.success&&(this.isLoading=!1,this.status.loadingItem="")})},OpenCartModel(){this.isLoading=!0;const t=this.$refs.shoppingcartModel,e="https://vue3-course-api.hexschool.io/api/wuzong-api/cart";this.$http.get(e).then(e=>{e.data.success&&(this.cartdata=e.data.data,this.isLoading=!1,t.showModel())})},closeCartModel(){const t=this.$refs.shoppingcartModel;t.hideModel()}},created(){this.id=this.$route.params.productId,this.getProduct()},emits:["cart-product"]},E=i("6b0d"),C=i.n(E);const L=C()(A,[["render",k]]);e["default"]=L}}]);
//# sourceMappingURL=chunk-b7731064.031c1c47.js.map