(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{"14cf":function(t,e,a){},1681:function(t,e,a){},"1d34":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cartcheck"}},[a("v-overlay",{attrs:{value:t.init}},[a("div",{staticClass:"mask white d-flex justify-center align-center"},[a("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),a("v-container",{staticClass:"mt-8 mt-md-16"},[a("v-row",[a("v-col"),a("v-col",{attrs:{cols:"12",md:"11",lg:"9"}},[a("h3",{staticClass:"text-lg-h2 text-sm-h3 text-h4 light-green--text text--darken-1 font-weight-bold text-center text-sm-start"},[t._v("無疑農｜購物車")]),0===t.user.cart?a("div",{staticClass:"nocart"},[a("span",[t._v(" 目前購物車沒有商品 ")])]):t._e(),0!==t.user.cart?a("v-simple-table",{staticClass:"mt-10 grey lighten-4 px-3 py-3 hidden-sm-and-down"},[a("thead",[a("tr",[a("th",{staticClass:" text-start text-h5 ps-8"},[t._v("品名")]),a("th",{staticClass:" text-h5",attrs:{width:"15%"}},[t._v("商品")]),a("th",{staticClass:"text-h5",attrs:{width:"15%"}},[t._v("單價")]),a("th",{staticClass:" text-h5",attrs:{width:"15%"}},[t._v("數量")]),a("th",{staticClass:"text-h5",attrs:{width:"15%"}},[t._v("總計")]),a("th",{staticClass:" text-h5",attrs:{width:"10%"}},[t._v("操作")])])]),t._l(t.products,(function(e){return a("tbody",{key:e._id},[a("tr",[a("td",{staticClass:"text-start"},[a("span",{staticClass:"text-h6 ps-8"},[t._v(t._s(e.product.name))])]),a("td",[a("img",{attrs:{src:e.product.image,width:"80px"}})]),a("td",[t._v("$ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price)))]),a("td",[a("v-text-field",{attrs:{"background-color":"transparent","hide-spin-buttons":"",readonly:"",flat:"",solo:"",type:"number",value:"product.quantity"},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",t._n(a))},expression:"product.quantity"}},[a("template",{slot:"append"},[a("v-btn",{staticClass:"orange--text text--darken-4",attrs:{text:"",ripple:!1,plain:""},on:{click:function(a){return t.plus(e.product._id)}}},[t._v(" + ")])],1),a("template",{slot:"prepend-inner"},[a("v-btn",{attrs:{text:"",ripple:!1,plain:""},on:{click:function(a){return t.menos(e.product._id)}}},[t._v(" - ")])],1)],2)],1),a("td",[t._v("$ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price*e.quantity)))]),a("td",[a("v-icon",{staticClass:"orange--text text--darken-4",on:{click:function(a){return t.plus(e.product._id,0)}}},[t._v(" mdi-trash-can-outline ")])],1)])])}))],2):t._e(),0!==t.user.cart?a("v-simple-table",{staticClass:"mt-10 grey lighten-4 px-3 py-3 hidden-md-and-up"},[a("thead",[a("tr",[a("th",{staticClass:"text-h4"},[t._v("購物車商品")])])]),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e._id},[a("td",[a("v-row",{staticClass:"align-center justify-center"},[a("v-col",{attrs:{cols:"4"}},[a("img",{attrs:{src:e.product.image,width:"100px"}})]),a("v-col",{attrs:{cols:"5"}},[a("p",{staticClass:"text-h6 text-start ellipsis"},[t._v(t._s(e.product.name))]),a("p",{staticClass:"text-subtitle-1 text-start"},[t._v("$ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price)))]),a("v-text-field",{attrs:{"background-color":"transparent","hide-spin-buttons":"",readonly:"",flat:"",solo:"",type:"number",value:"product.quantity"},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",t._n(a))},expression:"product.quantity"}},[a("template",{slot:"append"},[a("v-btn",{staticClass:"orange--text text--darken-4",attrs:{text:"",ripple:!1,plain:""},on:{click:function(a){return t.plus(e.product._id)}}},[t._v(" + ")])],1),a("template",{slot:"prepend-inner"},[a("v-btn",{attrs:{text:"",ripple:!1,plain:""},on:{click:function(a){return t.menos(e.product._id)}}},[t._v(" - ")])],1)],2)],1),a("v-col",{attrs:{cols:"3"}},[a("v-icon",{staticClass:"orange--text text--darken-4",on:{click:function(a){return t.plus(e.product._id,0)}}},[t._v(" mdi-trash-can-outline ")])],1)],1)],1)])})),0)]):t._e(),0!==t.user.cart?a("v-simple-table",{staticClass:"grey lighten-4 px-3 py-3"},[a("tbody",[a("tr",[a("td",{attrs:{colspan:"6"}},[a("div",{staticClass:"d-flex align-center justify-end pe-5"},[a("p",{staticClass:"pr-2 text-subtitle-1"},[t._v("總金額 ：")]),a("p",{staticClass:"text-h4 orange--text text--darken-4 "},[t._v(t._s(new Intl.NumberFormat("en-IN").format(t.total)))]),a("p",{staticClass:"text-subtitle-1"},[t._v("元")])])])]),a("tr",[a("td",{attrs:{colspan:"6"}},[a("div",{staticClass:"d-flex justify-end py-5 pe-5"},[a("v-btn",{staticClass:"primary",attrs:{ripple:!1,text:"",large:"",to:"/cart/cartcheckout"}},[a("span",{staticClass:"text-h5 px-3"},[t._v("去買單")])])],1)])])])]):t._e()],1),a("v-col")],1)],1)],1)},r=[],n=a("1da1"),i=(a("c740"),a("a434"),a("d3b7"),a("96cf"),{data:function(){return{products:[],init:!0,idx:-1}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/me/cart",{headers:{authorization:"Bearer "+t.user.token}});case 3:a=e.sent,s=a.data,t.products=s.result,t.init=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得購物車資料失敗"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},methods:{plus:function(t,e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a.idx=a.products.findIndex((function(e){return e.product._id===t})),s.prev=1,0===e){s.next=8;break}return a.products[a.idx].quantity++,s.next=6,a.api.patch("/users/me/cart",{product:a.products[a.idx].product._id,quantity:a.products[a.idx].quantity},{headers:{authorization:"Bearer "+a.user.token}});case 6:s.next=11;break;case 8:if(0!==e){s.next=11;break}return s.next=11,a.api.patch("/users/me/cart",{product:a.products[a.idx].product._id,quantity:e},{headers:{authorization:"Bearer "+a.user.token}});case 11:0===e&&(a.products.splice(a.idx,1),a.$store.commit("user/updateCart",a.user.cart-1),a.$swal({icon:"success",title:"成功",text:"刪除商品成功"})),s.next=17;break;case 14:s.prev=14,s.t0=s["catch"](1),a.$swal({icon:"error",title:"失敗",text:"修改購物車失敗"});case 17:case"end":return s.stop()}}),s,null,[[1,14]])})))()},menos:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.idx=e.products.findIndex((function(e){return e.product._id===t})),!(e.products[e.idx].quantity<=1)){a.next=3;break}return a.abrupt("return");case 3:return e.products[e.idx].quantity--,a.prev=4,a.next=7,e.api.patch("/users/me/cart",{product:e.products[e.idx].product._id,quantity:e.products[e.idx].quantity},{headers:{authorization:"Bearer "+e.user.token}});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](4),e.$swal({icon:"error",title:"失敗",text:"修改購物車失敗"});case 12:case"end":return a.stop()}}),a,null,[[4,9]])})))()}},computed:{total:function(){return this.products.reduce((function(t,e){return t+e.quantity*e.product.price}),0)},cart:function(){return this.user.cart}},watch:{cart:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/me/cart",{headers:{authorization:"Bearer "+t.user.token}});case 3:a=e.sent,s=a.data,t.products=s.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得購物車資料失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),c=i,l=(a("cfde"),a("2877")),o=a("6544"),d=a.n(o),u=a("8336"),p=a("62ad"),v=a("a523"),h=a("132d"),x=a("a797"),m=a("490a"),f=a("0fd9"),g=a("1f4f"),b=a("8654"),C=Object(l["a"])(c,s,r,!1,null,null,null);e["default"]=C.exports;d()(C,{VBtn:u["a"],VCol:p["a"],VContainer:v["a"],VIcon:h["a"],VOverlay:x["a"],VProgressCircular:m["a"],VRow:f["a"],VSimpleTable:g["a"],VTextField:b["a"]})},"1f4f":function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("8b37"),a("80d2")),n=a("7560"),i=a("58df");e["a"]=Object(i["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2b33":function(t,e,a){},"2fa4":function(t,e,a){"use strict";a("20f6");var s=a("80d2");e["a"]=Object(s["i"])("spacer","div","v-spacer")},3795:function(t,e,a){"use strict";a("df7a")},"474f":function(t,e){},4824:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cart"}},[a("router-view")],1)},r=[]},6532:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cartcheckout"}},[a("v-container",{staticClass:"mt-8 mt-md-16"},[a("v-row",[a("v-col"),a("v-col",{attrs:{cols:"12",md:"11",lg:"9"}},[a("v-dialog",{attrs:{width:"600",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"px-10 py-5"},[a("v-card-title",{staticClass:"py-5 font-weight-bold text-h6 text-md-h4"},[t._v(" 請輸入信用卡卡號 ")]),a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("vue-paycard",{attrs:{"value-fields":t.valueFields}}),a("v-row",{staticClass:"pt-10 pt-sm-10"},[a("v-col",{attrs:{cols:"12"}},[a("input",{directives:[{name:"cardformat",rawName:"v-cardformat:formatCardNumber",arg:"formatCardNumber"},{name:"model",rawName:"v-model",value:t.valueFields.cardNumber,expression:"valueFields.cardNumber"}],staticClass:"py-3 px-5",staticStyle:{width:"100%",border:"1px solid #888","border-radius":".2rem",outline:"none"},attrs:{type:"text",placeholder:"請輸入信用卡卡號"},domProps:{value:t.valueFields.cardNumber},on:{input:function(e){e.target.composing||t.$set(t.valueFields,"cardNumber",e.target.value)}}})]),a("v-col",{attrs:{cols:"6"}},[a("input",{directives:[{name:"cardformat",rawName:"v-cardformat:formatCardExpiry",arg:"formatCardExpiry"}],staticClass:"py-3 px-5",staticStyle:{width:"100%",border:"1px solid #888","border-radius":".2rem",outline:"none"},attrs:{type:"text",placeholder:"請輸入使用期限"}})]),a("v-col",{attrs:{cols:"6"}},[a("input",{directives:[{name:"cardformat",rawName:"v-cardformat:formatCardCVC",arg:"formatCardCVC"},{name:"model",rawName:"v-model.number",value:t.valueFields.cardCvv,expression:"valueFields.cardCvv",modifiers:{number:!0}}],staticClass:"py-3 px-5",staticStyle:{width:"100%",border:"1px solid #888","border-radius":".2rem",outline:"none"},attrs:{type:"text",placeholder:"請輸入安全碼"},domProps:{value:t.valueFields.cardCvv},on:{input:function(e){e.target.composing||t.$set(t.valueFields,"cardCvv",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])],1)],1),a("v-card-actions",{staticClass:"py-0 px-0"},[a("v-spacer"),a("v-btn",{staticClass:"text-h5 white--text px-5 mx-5 my-5",attrs:{large:"",color:"red darken-1"},on:{click:t.cancelcredit}},[t._v(" 取消 ")]),a("v-btn",{staticClass:"text-h5 px-5 my-5",attrs:{large:"",color:"primary darken-1"},on:{click:t.submitcredit}},[t._v(" 送出 ")])],1)],1)],1),a("h3",{staticClass:"text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-2 font-weight-bold"},[t._v("無疑農｜結帳")]),a("v-simple-table",{staticClass:"mt-10 grey lighten-4 px-3 py-3 hidden-sm-and-down"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"6"}},[a("p",{staticClass:"text-h4"},[t._v("訂單商品")])])]),a("tr",[a("th",{staticClass:" text-start px-5 text-h5"},[t._v("品名")]),a("th",{staticClass:" text-h5",attrs:{width:"10%"}},[t._v("商品")]),a("th",{staticClass:"text-h5",attrs:{width:"10%"}},[t._v("單價")]),a("th",{staticClass:" text-h5",attrs:{width:"20%"}},[t._v("數量")]),a("th",{staticClass:"text-h5",attrs:{width:"15%"}},[t._v("總計")])])]),t._l(t.products,(function(e){return a("tbody",{key:e._id},[a("tr",[a("td",{staticClass:"text-start px-5"},[a("span",{staticClass:"text-h6"},[t._v(t._s(e.product.name))])]),a("td",[a("img",{attrs:{src:e.product.image,height:"80px"}})]),a("td",[t._v("$ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price)))]),a("td",[a("v-text-field",{attrs:{"background-color":"transparent","hide-spin-buttons":"",readonly:"",flat:"",solo:"",type:"number",value:"product.quantity"},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",t._n(a))},expression:"product.quantity"}})],1),a("td",[t._v("$ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price*e.quantity)))])])])}))],2),a("v-simple-table",{staticClass:"mt-10 grey lighten-4 px-3 py-3 hidden-md-and-up"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"6"}},[a("p",{staticClass:"text-h4"},[t._v("訂單商品")])])]),a("tr",[a("th",{staticClass:"text-h6"},[t._v("商品")]),a("th",{staticClass:"text-h6"},[t._v("總價")])])]),t._l(t.products,(function(e){return a("tbody",{key:e._id},[a("tr",[a("td",[a("v-row",{staticClass:"align-center justify-center"},[a("v-col",{attrs:{cols:"4"}},[a("img",{attrs:{src:e.product.image,height:"80px"}})]),a("v-col",{staticClass:"text-start pl-8",attrs:{cols:"8"}},[a("p",{staticClass:"text-h6 mb-1 ellipsis"},[t._v(t._s(e.product.name))]),a("p",{staticClass:"text-subtitle-1 mb-1"},[t._v("$ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price)))]),a("p",{staticClass:"text-subtitle-1 mb-1"},[t._v("數量："+t._s(e.quantity)+" ")])])],1)],1),a("td",[a("span",{staticClass:"text-h6 orange--text text--darken-4"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(e.product.price*e.quantity))+" ")])])])])}))],2),a("v-simple-table",{staticClass:"grey lighten-4 px-3 py-3 hidden-sm-and-down"},[a("tbody",[a("tr",[a("td",{staticClass:"text-start",attrs:{colspan:"2"}},[a("form",{staticClass:" align-center pt-3"},[a("label",{staticClass:"px-2 text-h5"},[t._v("留言：")]),a("v-textarea",{staticClass:"message py-2 text-start",attrs:{outlined:"",placeholder:"統一編號/警衛代收/電話聯絡時間..."},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)]),a("td",{staticClass:"text-start text-subtitle-1",attrs:{colspan:"4"}},[a("tr",[a("td",{staticClass:"text-start ps-3  text-md-h6 text-lg-h5",attrs:{width:"30%"}},[t._v("賣家資訊")]),a("td",{staticClass:"hidden-lg-and-down"}),a("td",{staticClass:"text-end pe-3 text-md-h6 text-lg-h5",attrs:{colspan:"2",width:"50%"}},[t._v("快遞： "),a("span",{staticClass:"text-h5 pr-2 orange--text text--darken-4"},[t._v("$ 60")])])]),a("tr",[a("td",{staticClass:"text-start ps-3 text-md-h6 text-lg-h5"},[t._v("賣家宅配")]),a("td",{staticClass:"text-end"},[a("v-btn",{class:{payselect:t.addresscolor},attrs:{ripple:!1,plain:"",text:"",outlined:""},on:{click:function(e){t.parentdialog=!0}}},[t._v(" ＋新增收件人地址 ")])],1)])])]),a("tr",[a("td",{attrs:{colspan:"4"}},[a("div",{staticClass:"d-flex align-center justify-end"},[a("span",{staticClass:"text-subtitle-1 pr-2 orderprice"},[t._v("訂單金額("),a("span",[t._v(t._s(this.products.length))]),t._v("商品)：")]),a("span",{staticClass:"text-h4 pr-2 orange--text text--darken-4"},[t._v(t._s(new Intl.NumberFormat("en-IN").format(t.total)))]),a("span",{staticClass:"text-subtitle-1"},[t._v("元")])])])]),a("tr",{staticClass:"border"},[a("td",{attrs:{width:"20%"}},[t._v("付款方式")]),a("td",{staticClass:"text-start",attrs:{colspan:"2"}},t._l(t.payselects,(function(e){return a("v-btn",{key:e,staticClass:"me-4",class:{payselect:e===t.selected},attrs:{ripple:!1,plain:"",text:"",outlined:""},on:{click:function(a){return t.payselected(e)}}},[t._v(" "+t._s(e)+" ")])})),1)]),"信用卡/金融卡"===t.selected?a("tr",{staticClass:"border"},[a("td",[t._v("選擇帳戶")]),a("td",{staticClass:"text-start"},[a("v-btn",{class:{payselect:t.creditselected},attrs:{ripple:!1,plain:"",text:"",outlined:""},on:{click:function(e){t.dialog=!0}}},[t._v(" ＋新增信用卡付款 ")])],1),a("td")]):t._e(),a("tr",[a("td"),a("td"),a("td",[a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"text-subtitle-1"},[t._v("商品總金額")]),a("v-col",{staticClass:"text-end"},[a("span",{staticClass:"text-h6 pr-2 orange--text text--darken-4"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(t.total))+" ")])])],1),a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"text-subtitle-1"},[t._v("運費總金額")]),a("v-col",{staticClass:"text-end"},[a("span",{staticClass:"text-h6 pr-2 orange--text text--darken-4"},[t._v(" $ 60 ")])])],1),a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"text-subtitle-1"},[t._v("總付款金額")]),a("v-col",{staticClass:"text-end"},[a("span",{staticClass:"text-h4 pr-2 orange--text text--darken-4"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(t.total+60))+" ")])])],1)],1)]),a("tr",[a("td"),a("td"),a("td",{staticClass:"text-end pb-1"},[a("v-btn",{staticClass:"changebtn light-green  darken-2 white--text font-weight-bold text-h6",attrs:{ripple:!1,plain:"",text:"",outlined:"",large:""},on:{click:function(e){return t.checkOut()}}},[t._v(" 下訂單 ")]),a("UserInfo",{attrs:{products:t.products,parentdialog:t.parentdialog},on:{closedialog:function(e){t.parentdialog=!1},changetable:t.adddelivey}})],1)])])]),a("v-simple-table",{staticClass:"grey lighten-4 px-3 py-3 hidden-md-and-up"},[a("tbody",[a("tr",{staticClass:"border"},[a("td",{staticClass:"text-start",attrs:{colspan:"2"}},[a("form",{staticClass:" align-center pt-3"},[a("label",{staticClass:"px-2 text-h5"},[t._v("留言：")]),a("v-textarea",{staticClass:"message py-2 text-start",attrs:{outlined:"",placeholder:"統一編號/警衛代收/電話聯絡時間..."},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)])]),a("tr",{staticClass:"border"},[a("td",{staticClass:"text-start ps-3 text-h6",attrs:{width:"30%"}},[t._v("賣家資訊")]),a("td",{staticClass:"text-end pe-3 text-h6"},[t._v("快遞： "),a("span",{staticClass:"text-h5 pr-2 orange--text text--darken-4"},[t._v("$ 60")])])]),a("tr",{staticClass:"border"},[a("td",{staticClass:"text-start ps-3 text-h6"},[t._v("賣家宅配")]),a("td",{staticClass:"text-end"},[a("v-btn",{class:{payselect:t.addresscolor},attrs:{ripple:!1,plain:"",text:"",outlined:""},on:{click:function(e){t.parentdialog=!0}}},[t._v(" ＋新增收件人地址 ")])],1)]),a("tr",[a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"d-flex align-center justify-end"},[a("span",{staticClass:"text-subtitle-1 pr-2 orderprice"},[t._v("訂單金額("),a("span",[t._v(t._s(this.products.length))]),t._v("商品)：")]),a("span",{staticClass:"text-h4 pr-2 orange--text text--darken-4"},[t._v(t._s(new Intl.NumberFormat("en-IN").format(t.total)))]),a("span",{staticClass:"text-subtitle-1"},[t._v("元")])])])]),a("tr",{staticClass:"border"},[a("td",{staticClass:"text-start text-h6",attrs:{colspan:"2"}},[t._v("付款方式")])]),a("tr",[a("td",{staticClass:"text-start",attrs:{colspan:"2"}},t._l(t.payselects,(function(e){return a("v-btn",{key:e,staticClass:"me-4",class:{payselect:e===t.selected},attrs:{ripple:!1,plain:"",text:"",outlined:""},on:{click:function(a){return t.payselected(e)}}},[t._v(" "+t._s(e)+" ")])})),1)]),"信用卡/金融卡"===t.selected?a("tr",[a("td",{staticClass:"text-h6"},[t._v("選擇帳戶")]),a("td",{staticClass:"text-start"},[a("v-btn",{class:{payselect:t.creditselected},attrs:{ripple:!1,plain:"",text:"",outlined:""},on:{click:function(e){t.dialog=!0}}},[t._v(" ＋新增信用卡付款 ")])],1)]):t._e(),a("tr",{staticClass:"border"},[a("td",{attrs:{colspan:"2"}},[a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"text-subtitle-1"},[t._v("商品總金額")]),a("v-col",{staticClass:"text-end"},[a("span",{staticClass:"text-h6 pr-2 orange--text text--darken-4"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(t.total))+" ")])])],1)],1)]),a("tr",{staticClass:"border"},[a("td",{attrs:{colspan:"2"}},[a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"text-subtitle-1"},[t._v("運費總金額")]),a("v-col",{staticClass:"text-end"},[a("span",{staticClass:"text-h6 pr-2 orange--text text--darken-4"},[t._v(" $ 60 ")])])],1)],1)]),a("tr",[a("td",{attrs:{colspan:"2"}},[a("v-row",{staticClass:"justify-center align-center"},[a("v-col",{staticClass:"text-subtitle-1"},[t._v("總付款金額")]),a("v-col",{staticClass:"text-end"},[a("span",{staticClass:"text-h4 pr-2 orange--text text--darken-4"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(t.total+60))+" ")])])],1)],1)]),a("tr",[a("td",{staticClass:"text-end pb-1",attrs:{colspan:"2"}},[a("v-btn",{staticClass:"changebtn light-green  darken-2 white--text font-weight-bold text-h6",attrs:{ripple:!1,plain:"",text:"",outlined:"",large:""},on:{click:function(e){return t.checkOut()}}},[t._v(" 下訂單 ")]),a("UserInfo",{attrs:{products:t.products,parentdialog:t.parentdialog},on:{closedialog:function(e){t.parentdialog=!1},changetable:t.adddelivey}})],1)])])])],1),a("v-col")],1)],1)],1)},r=[],n=a("1da1"),i=(a("b0c0"),a("d3b7"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"userinfo"}},[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-dialog",{staticClass:"dialog",attrs:{persistent:"","max-width":"500px"},model:{value:t.parentdialog,callback:function(e){t.parentdialog=e},expression:"parentdialog"}},[a("section",{staticClass:"grey lighten-4 py-8"},[a("div",{staticClass:"d-flex justify-end pe-6 pb-2"},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{large:""},on:{click:function(e){return t.$emit("closedialog")}}},[t._v("mdi-close")])],1)],1),a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{cols:"11",lg:"11"}},[a("v-card",[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"text-h3 font-weight-bold light-green--text text--darken-3",attrs:{cols:"12"}},[t._v("寄送資訊")]),a("v-col",{attrs:{cols:"12",md:"12",xl:"12"}},[a("v-text-field",{attrs:{rules:[t.rules.required],label:"姓名",type:"string",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("v-text-field",{attrs:{rules:[t.rules.required,t.rules.phoneValidator],label:"電話",type:"string",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),a("v-text-field",{attrs:{rules:[t.rules.required],label:"地址",type:"string",required:""},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("v-col",{attrs:{cols:"12",md:"6",xl:"8"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"text-h5 white--text px-5 mx-5 my-5",attrs:{large:"",color:"red darken-1"},on:{click:t.cancelForm}},[t._v(" 取消 ")]),a("v-btn",{staticClass:"text-h5 px-5 mx-5 my-5",attrs:{large:"",color:"primary darken-1",disabled:!t.valid},on:{click:t.submitForm}},[t._v(" 送出 ")])],1)],1)],1)],1)],1)],1)])],1)],1)}),c=[],l=a("f90c"),o=a.n(l),d={data:function(){var t=this;return{form:{name:"",address:"",phone:""},valid:!0,rules:{required:function(t){return!!t||"此為必填欄位"},phoneValidator:function(e){return 0===t.form.phone.length?"":o.a.isMobilePhone(t.form.phone,"zh-TW")||"行動電話格式錯誤"}}}},methods:{cancelForm:function(t){this.form={name:"",address:"",phone:null},this.$emit("closedialog")},submitForm:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.preventDefault(),e.form.name&&e.form.address&&e.form.phone){a.next=4;break}return e.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),a.abrupt("return");case 4:e.$emit("changetable",e.form),e.$swal({icon:"success",title:"成功",text:"編輯成功"}),e.$emit("closedialog");case 7:case"end":return a.stop()}}),a)})))()}},props:["parentdialog"],emits:["closedialog","changetable"]},u=d,p=(a("3795"),a("2877")),v=a("6544"),h=a.n(v),x=a("8336"),m=a("b0af"),f=a("99d9"),g=a("62ad"),b=a("a523"),C=a("169a"),_=a("4bd4"),y=a("132d"),w=a("0fd9"),k=a("2fa4"),$=a("8654"),N=Object(p["a"])(u,i,c,!1,null,null,null),I=N.exports;h()(N,{VBtn:x["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["c"],VCol:g["a"],VContainer:b["a"],VDialog:C["a"],VForm:_["a"],VIcon:y["a"],VRow:w["a"],VSpacer:k["a"],VTextField:$["a"]});var V={data:function(){return{months:["1","2","3","4","5","6","7","8","9","10","11","12"],years:["2022","2023","2024","2025"],valid:!0,valueFields:{cardName:"",cardNumber:"",cardMonth:"",cardYear:"",cardCvv:""},dialog:!1,parentdialog:!1,products:[],selected:!1,creditselected:!1,message:"",name:"",phone:null,address:"",pay:"",payselects:["信用卡/金融卡","貨到付款"],addresscolor:!1,rules:{required:function(t){return!!t||"此為必填欄位"}}}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/me/cart",{headers:{authorization:"Bearer "+t.user.token}});case 3:a=e.sent,s=a.data,t.products=s.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得購物車資料失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{checkOut:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.post("/orders",{message:t.message,name:t.name,phone:t.phone,address:t.address,pay:t.pay},{headers:{authorization:"Bearer "+t.user.token}});case 3:t.$swal({icon:"success",title:"成功",text:"結帳成功"}),t.$store.dispatch("user/orderCart"),t.$router.push("/orders"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"資料填寫未完全"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},payselected:function(t){this.selected=t,this.pay=t},adddelivey:function(t){this.name=t.name,this.phone=t.phone,this.address=t.address,this.addresscolor=!0},cancelcredit:function(){this.valueFields={cardName:null,cardNumber:"",cardMonth:"",cardYear:"",cardCvv:""},this.dialog=!1},submitcredit:function(){this.dialog=!1,this.creditselected=!0,this.$swal({icon:"success",title:"成功",text:"編輯成功"})}},computed:{total:function(){return this.products.reduce((function(t,e){return t+e.quantity*e.product.price}),0)}},components:{UserInfo:I}},F=V,q=(a("a5fc"),a("1f4f")),j=a("a844"),O=Object(p["a"])(F,s,r,!1,null,null,null);e["default"]=O.exports;h()(O,{VBtn:x["a"],VCard:m["a"],VCardActions:f["a"],VCardTitle:f["d"],VCol:g["a"],VContainer:b["a"],VDialog:C["a"],VForm:_["a"],VRow:w["a"],VSimpleTable:q["a"],VSpacer:k["a"],VTextField:$["a"],VTextarea:j["a"]})},"8b37":function(t,e,a){},9221:function(t,e,a){"use strict";a.r(e);var s=a("474f"),r=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=r.a},a5fc:function(t,e,a){"use strict";a("2b33")},a844:function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("1681"),a("8654")),n=a("58df"),i=Object(n["a"])(r["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var a;t?e.calculateInputHeight():null==(a=e.$refs.input)||a.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},cfde:function(t,e,a){"use strict";a("14cf")},db0c:function(t,e,a){"use strict";a.r(e);var s=a("4824"),r=a("9221");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);var i=a("2877"),c=Object(i["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},df7a:function(t,e,a){}}]);
//# sourceMappingURL=cart.89f1e94c.js.map