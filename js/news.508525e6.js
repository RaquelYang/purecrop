(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"0a2c":function(t,e,s){"use strict";s("9396")},"3a77":function(t,e,s){"use strict";s("a6f1")},"3e35":function(t,e,s){"use strict";var r=s("5530"),a=s("1e6c"),i=s("adda"),n=s("58df"),c=s("80d2"),l=s("1c87"),o=Object(n["a"])(a["a"],l["a"]);e["a"]=o.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(i["a"],{staticClass:"v-carousel__item",props:Object(r["a"])(Object(r["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(c["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,s=t.data;return s.staticClass="v-window-item",s.directives.push({name:"show",value:this.isActive}),this.$createElement(e,s,this.genDefaultSlot())}}})},"5b89":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"news"}},[s("router-view")],1)},a=[],i=s("2877"),n={},c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"5e66":function(t,e,s){"use strict";var r=s("5530"),a=(s("a9e3"),s("63b7"),s("f665")),i=s("afdd"),n=s("9d26"),c=s("37c6"),l=s("604c"),o=l["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return l["a"].options.computed.classes.call(this)}},methods:{genData:l["a"].options.methods.genData}}),u=s("80d2"),d=s("d9bd");e["a"]=a["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(d["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:a["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,s=[],r=0;r<e;r++){var a=this.$createElement(i["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",r+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[r],r)}},[this.$createElement(n["a"],{props:{size:18}},this.delimiterIcon)]);s.push(a)}return this.$createElement(o,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},s)},genProgress:function(){return this.$createElement(c["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=a["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(u["h"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,s){},"7bab":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newshome"}},[s("v-overlay",{attrs:{value:t.init}},[s("div",{staticClass:"mask white d-flex justify-center align-center"},[s("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),s("v-carousel",{staticClass:"carousel mt-14 mt-sm-16",attrs:{height:"auto",cycle:"","hide-delimiters":"",progress:"",interval:"2500","show-arrows":!1}},t._l(t.newscarousel,(function(t){return s("v-carousel-item",{key:t._id,staticClass:"carousel",attrs:{src:t.file}})})),1),s("v-container",{staticClass:"home mt-8 mt-md-16"},[s("h3",{staticClass:"text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline"},[t._v("最新消息")]),s("p",{staticClass:"text-center mt-6 mt-lg-10"},[t._v("搶先消息 x 小農活動")]),s("v-row",{staticClass:"mt-4 mt-sm-16"},[s("v-col"),s("v-col",{attrs:{cols:"12"}},[s("v-row",[t._l(t.news,(function(e){return s("v-col",{key:e._id,attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:e.image}}),s("v-card-title",[t._v(t._s(e.name))]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v(t._s(new Date(e.date).toLocaleDateString("zh-tw")))]),s("p",{staticClass:"ellipsis mb-0"},[t._v(t._s(e.content))])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/singlenews/"+e._id,text:"",ripple:!1}},[t._v("read more")])],1)],1)],1)})),s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://www.newsmarket.com.tw/files/2016/12/%E6%94%A4%E4%BD%8D%E5%B8%86%E5%B8%832-%E6%94%A4%E4%BD%8D%E5%90%8D-01-02-edm.jpg"}}),s("v-card-title",[t._v("樂土友善小農市集")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2021/07/22")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1),s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://static.accupass.com/eventbanner/2110271218561340948097.jpg"}}),s("v-card-title",[t._v("小農 DIY 體驗活動")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2021/05/10")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1),s("v-col",{attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[s("v-card",{attrs:{ripple:!1}},[s("v-img",{staticClass:"imgscale",attrs:{height:"200",src:"https://static.accupass.com/userupload/1908260648129407078010.jpg"}}),s("v-card-title",[t._v("小農時光走廊")]),s("v-card-text",[s("div",{staticClass:"pb-2"},[t._v("2019/08/25")]),s("p",{staticClass:"ellipsis mb-0"},[t._v("我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米")])]),s("v-card-actions",{staticClass:"justify-end px-4 pb-4"},[s("v-btn",{staticClass:"light-green darken-1 white--text",attrs:{to:"/news/pages",text:"",ripple:!1}},[t._v("read more")])],1)],1)],1)],2)],1),s("v-col")],1)],1)],1)},a=[],i=s("1da1"),n=(s("96cf"),{data:function(){return{news:[],newscarousel:[],init:!0}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getCarousel();case 3:return e.next=5,t.getNews();case 5:t.init=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{getCarousel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/images");case 3:s=e.sent,r=s.data,t.newscarousel=r.result[0].newsswiper,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得圖片失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getNews:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/news");case 3:s=e.sent,r=s.data,console.log(r.result),t.news=r.result,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得最新消息失敗"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}}),c=n,l=(s("0a2c"),s("2877")),o=s("6544"),u=s.n(o),d=s("8336"),h=s("b0af"),m=s("99d9"),v=s("5e66"),p=s("3e35"),g=s("62ad"),w=s("a523"),f=s("adda"),x=s("a797"),b=s("490a"),C=s("0fd9"),_=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCarousel:v["a"],VCarouselItem:p["a"],VCol:g["a"],VContainer:w["a"],VImg:f["a"],VOverlay:x["a"],VProgressCircular:b["a"],VRow:C["a"]})},9396:function(t,e,s){},a6f1:function(t,e,s){},b6ca:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newspages"}},[s("v-overlay",{attrs:{value:t.init}},[s("div",{staticClass:"mask white d-flex justify-center align-center"},[s("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),s("v-carousel",{staticClass:"carousel mt-14 mt-sm-16",attrs:{height:"auto",cycle:"","hide-delimiters":"",progress:"",interval:"2500","show-arrows":!1}},t._l(t.newscarousel,(function(t){return s("v-carousel-item",{key:t._id,staticClass:"carousel",attrs:{src:t.file}})})),1),s("v-container",{staticClass:"mt-8 mt-md-8"},[s("v-row",[s("v-col"),s("v-col",{staticClass:"relative",attrs:{cols:"12",md:"9"}},[s("v-btn",{staticClass:"light-green darken-1 white--text font-weight-black backtolastpage",attrs:{text:"",ripple:!1,plain:"",icon:"",to:"/news"}},[s("v-icon",{staticClass:"text-h3"},[t._v("mdi-arrow-left-bold")])],1),s("h3",{staticClass:"text-center text-lg-h3 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline4 pt-16"},[t._v(t._s(t.news.name))]),s("v-row",{staticClass:"mt-8 mt-md-16"},[s("v-col",{attrs:{cols:"12",lg:"6",order:"2","order-lg":"1"}},[s("div",{staticClass:"txt"},[s("p",{staticClass:"text-subtitle-1 text-sm-h6",domProps:{innerHTML:t._s(t.contentNews)}}),s("v-divider",{staticClass:"mt-10"}),s("ul",{staticClass:"mt-10"},[s("li",{staticClass:"font-weight-bold text-h6"},[t._v("注意事項")])]),s("ul",{staticClass:"mt-3 notice"},[s("li",[s("span",{staticClass:"pb-0",domProps:{innerHTML:t._s(t.noticeNews)}})])])],1)]),s("v-col",{attrs:{cols:"12",lg:"6",order:"1","order-lg":"2"}},[s("v-img",{attrs:{src:t.news.image,width:"100%",height:"100%"}})],1)],1)],1),s("v-col")],1)],1)],1)},a=[],i=s("1da1"),n=(s("ac1f"),s("5319"),s("96cf"),{data:function(){return{news:[],newscarousel:[],init:!0}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getCarousel();case 3:return e.next=5,t.getSingleNews();case 5:t.init=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{getCarousel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/images");case 3:s=e.sent,r=s.data,t.newscarousel=r.result[0].newsswiper,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得圖片失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getSingleNews:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/news/"+t.$route.params.id);case 3:s=e.sent,r=s.data,t.news=r.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得最新消息失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},computed:{contentNews:function(){return this.news.content.replace(/\n/g,"<br /><br />")},noticeNews:function(){return this.news.notice.replace(/\n/g,"<br /><br />")}}}),c=n,l=(s("3a77"),s("2877")),o=s("6544"),u=s.n(o),d=s("8336"),h=s("5e66"),m=s("3e35"),v=s("62ad"),p=s("a523"),g=s("ce7e"),w=s("132d"),f=s("adda"),x=s("a797"),b=s("490a"),C=s("0fd9"),_=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCarousel:h["a"],VCarouselItem:m["a"],VCol:v["a"],VContainer:p["a"],VDivider:g["a"],VIcon:w["a"],VImg:f["a"],VOverlay:x["a"],VProgressCircular:b["a"],VRow:C["a"]})}}]);
//# sourceMappingURL=news.508525e6.js.map