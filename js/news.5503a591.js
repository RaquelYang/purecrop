(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"0a2c":function(t,e,s){"use strict";s("9396")},"3a77":function(t,e,s){"use strict";s("a6f1")},"3e35":function(t,e,s){"use strict";var a=s("5530"),r=s("1e6c"),i=s("adda"),n=s("58df"),l=s("80d2"),c=s("1c87"),o=Object(n["a"])(r["a"],c["a"]);e["a"]=o.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(i["a"],{staticClass:"v-carousel__item",props:Object(a["a"])(Object(a["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(l["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,s=t.data;return s.staticClass="v-window-item",s.directives.push({name:"show",value:this.isActive}),this.$createElement(e,s,this.genDefaultSlot())}}})},"5b89":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"news"}},[s("router-view")],1)},r=[],i=s("2877"),n={},l=Object(i["a"])(n,a,r,!1,null,null,null);e["default"]=l.exports},"5e66":function(t,e,s){"use strict";var a=s("5530"),r=(s("a9e3"),s("63b7"),s("f665")),i=s("afdd"),n=s("9d26"),l=s("37c6"),c=s("604c"),o=c["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return c["a"].options.computed.classes.call(this)}},methods:{genData:c["a"].options.methods.genData}}),u=s("80d2"),d=s("d9bd");e["a"]=r["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(d["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:r["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,s=[],a=0;a<e;a++){var r=this.$createElement(i["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",a+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[a],a)}},[this.$createElement(n["a"],{props:{size:18}},this.delimiterIcon)]);s.push(r)}return this.$createElement(o,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},s)},genProgress:function(){return this.$createElement(l["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(u["h"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,s){},"7bab":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newshome"}},[s("v-overlay",{attrs:{value:t.init}},[s("div",{staticClass:"mask white d-flex justify-center align-center"},[s("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),s("v-carousel",{staticClass:"mt-14 mt-sm-16",attrs:{height:"auto",cycle:"","hide-delimiters":"",progress:"",interval:"2500","show-arrows":!1}},t._l(t.newscarousel,(function(t){return s("v-carousel-item",{key:t._id,attrs:{src:t.file,eager:""}})})),1),s("v-container",{staticClass:"home mt-8 mt-md-16"},[s("h3",{staticClass:"text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline"},[t._v("最新消息")]),s("p",{staticClass:"text-center mt-6 mt-lg-10"},[t._v("搶先消息 x 小農活動")]),s("v-row",{staticClass:"mt-4 mt-sm-16"},[s("v-col"),s("v-col",{attrs:{cols:"12"}},[s("v-row",[s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://i.imgur.com/cwfWaCOh.jpg"}}),s("v-card-title",[t._v("春日野餐 x 食物戀")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2022/03/01")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1),s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://www.newsmarket.com.tw/files/2016/12/%E6%94%A4%E4%BD%8D%E5%B8%86%E5%B8%832-%E6%94%A4%E4%BD%8D%E5%90%8D-01-02-edm.jpg"}}),s("v-card-title",[t._v("樂土友善小農市集")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2021/07/22")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1),s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://static.accupass.com/eventbanner/2110271218561340948097.jpg"}}),s("v-card-title",[t._v("小農 DIY 體驗活動")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2021/05/10")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1),s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://static.accupass.com/userupload/1908260648129407078010.jpg"}}),s("v-card-title",[t._v("小農時光走廊")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2019/08/25")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1)],1)],1),s("v-col")],1)],1)],1)},r=[],i=s("1da1"),n=(s("96cf"),{data:function(){return{products:[],newscarousel:[],init:!0}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getProduct();case 3:t.init=!1,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"商品取得失敗"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{getProduct:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/images");case 3:s=e.sent,a=s.data,t.newscarousel=a.result[0].newsswiper,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得圖片失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),l=n,c=(s("0a2c"),s("2877")),o=s("6544"),u=s.n(o),d=s("8336"),h=s("b0af"),m=s("99d9"),v=s("5e66"),p=s("3e35"),g=s("62ad"),f=s("a523"),w=s("adda"),x=s("a797"),C=s("490a"),b=s("0fd9"),_=Object(c["a"])(l,a,r,!1,null,null,null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCarousel:v["a"],VCarouselItem:p["a"],VCol:g["a"],VContainer:f["a"],VImg:w["a"],VOverlay:x["a"],VProgressCircular:C["a"],VRow:b["a"]})},9396:function(t,e,s){},a6f1:function(t,e,s){},b6ca:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newspages"}},[s("v-overlay",{attrs:{value:t.init}},[s("div",{staticClass:"mask white d-flex justify-center align-center"},[s("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),s("v-carousel",{staticClass:"mt-14 mt-sm-16",attrs:{height:"auto",cycle:"","hide-delimiters":"",progress:"",interval:"2500","show-arrows":!1}},t._l(t.newscarousel,(function(t){return s("v-carousel-item",{key:t._id,attrs:{src:t.file}})})),1),s("v-container",{staticClass:"mt-8 mt-md-8"},[s("v-row",[s("v-col"),s("v-col",{staticClass:"relative",attrs:{cols:"12",md:"9"}},[s("v-btn",{staticClass:"light-green darken-1 white--text font-weight-black backtolastpage",attrs:{text:"",ripple:!1,plain:"",icon:"",to:"/news"}},[s("v-icon",{staticClass:"text-h3"},[t._v("mdi-arrow-left-bold")])],1),s("h3",{staticClass:"text-center text-lg-h3 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline4 pt-16"},[t._v("四四南村活動")]),s("v-row",{staticClass:"mt-8 mt-md-16"},[s("v-col",{attrs:{cols:"12",lg:"6",order:"2","order-lg":"1"}},[s("div",{staticClass:"txt"},[s("p",[t._v("我們從台大學生創業起家，已經四年了！")]),s("p",[t._v("由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！")]),s("p",[t._v("使用在地有機、履歷食材，甚至與玉里小農契作無毒米")]),s("p",[t._v("為了讓吃得安心，更請符合國際食品安全認證的食品廠生產。")]),s("p",[t._v("用善待土地而來的食材，善待你的身體。")]),s("p",[t._v("從產地到廚房，再到你手上，每一步都為了更好的環境謹慎用心。")]),s("v-divider",{staticClass:"mt-10"}),s("ul",{staticClass:"mt-10"},[s("li",{staticClass:"font-weight-bold text-h6"},[t._v("注意事項")])]),s("ul",{staticClass:"mt-3"},[s("li",[t._v("▹ 活動日期：2021/10/15（五）- 10/17（日）")]),s("li",[t._v("▹ 活動時間：10/15｜13:00 - 19:00 10/16.17｜13:00 - 20:00")]),s("li",[t._v("▹ 活動地點：台北市信義區 四四南村")]),s("li",[t._v("▹ 現場須配合防疫規定全程配戴")])])],1)]),s("v-col",{attrs:{cols:"12",lg:"6",order:"1","order-lg":"2"}},[s("v-img",{attrs:{src:"https://picsum.photos/1200/800/?random=10",width:"100%",height:"100%"}})],1)],1)],1),s("v-col")],1)],1)],1)},r=[],i=s("1da1"),n=(s("96cf"),{data:function(){return{products:[],newscarousel:[],init:!0}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t.getProduct(),t.init=!1}catch(s){t.$swal({icon:"error",title:"失敗",text:"商品取得失敗"})}case 1:case"end":return e.stop()}}),e)})))()},methods:{getProduct:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/images");case 3:s=e.sent,a=s.data,t.newscarousel=a.result[0].newsswiper,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得圖片失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),l=n,c=(s("3a77"),s("2877")),o=s("6544"),u=s.n(o),d=s("8336"),h=s("5e66"),m=s("3e35"),v=s("62ad"),p=s("a523"),g=s("ce7e"),f=s("132d"),w=s("adda"),x=s("a797"),C=s("490a"),b=s("0fd9"),_=Object(c["a"])(l,a,r,!1,null,null,null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCarousel:h["a"],VCarouselItem:m["a"],VCol:v["a"],VContainer:p["a"],VDivider:g["a"],VIcon:f["a"],VImg:w["a"],VOverlay:x["a"],VProgressCircular:C["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=news.5503a591.js.map