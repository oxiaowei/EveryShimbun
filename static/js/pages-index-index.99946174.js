(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1b00":function(t,n,e){t.exports=e.p+"static/img/nodata.56986da7.png"},2884:function(t,n,e){"use strict";e.r(n);var a=e("d755"),i=e("660f");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("df44");var o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"d55768dc",null,!1,a["a"],void 0);n["default"]=s.exports},2909:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()};var a=s(e("6005")),i=s(e("db90")),r=s(e("06c5")),o=s(e("3427"));function s(t){return t&&t.__esModule?t:{default:t}}},"2a21":function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2909"));e("99af");var r={data:function(){return{navIndex:0,navArr:[],newsArr:[],cid:50,currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNewsData(this.cid,this.currentPage)},onReachBottom:function(){2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsData(this.cid,this.currentPage))},methods:{clickNav:function(t,n){this.navIndex=t,this.loading=0,this.currentPage=1,this.newsArr=[],this.getNewsData(n,this.currentPage)},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(n){t.navArr=n.data}})},getNewsData:function(t,n){var e=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:t,page:n},success:function(t){0==t.data.length&&(e.loading=2),e.newsArr=[].concat((0,i.default)(e.newsArr),(0,i.default)(t.data))}})}}};n.default=r},3427:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e("d9e2"),e("d401")},"3fdc":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-d55768dc]{display:flex;border-bottom:1px solid #efefef;padding:%?25?% 0}.newsbox .pic[data-v-d55768dc]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-d55768dc]{width:100%;height:100%}.newsbox .text[data-v-d55768dc]{flex:1;padding-left:%?20?%;display:flex;flex-direction:column;justify-content:space-between;padding-left:%?30?%}.newsbox .text .title[data-v-d55768dc]{font-size:%?36?%;color:#333}.newsbox .text .title .t[data-v-d55768dc]{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.newsbox .text .info[data-v-d55768dc]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-d55768dc]{padding-right:%?30?%}',""]),t.exports=n},"4c0b":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={newsbox:e("2884").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"home"},[a("v-uni-scroll-view",{staticClass:"navscroll",attrs:{"scroll-x":!0}},t._l(t.navArr,(function(n,e){return a("v-uni-view",{key:n.id,staticClass:"item",class:e==t.navIndex?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickNav(e,n.id)}}},[t._v(t._s(n.classname))])})),1),a("v-uni-view",{staticClass:"content"},[t._l(t.newsArr,(function(n,e){return a("v-uni-view",{key:e},[259!=n.id?[a("newsbox",{attrs:{item:n},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(n)}}})]:t._e()],2)})),t.newsArr.length?t._e():a("v-uni-view",{staticClass:"nodata"},[a("v-uni-image",{attrs:{src:e("1b00"),model:"widthFix"}})],1),a("v-uni-view",{staticClass:"loading"},[1==t.loading?a("v-uni-view",[t._v("数据加载中...")]):t._e(),2==t.loading?a("v-uni-view",[t._v("没有更多了~~")]):t._e()],1)],2)],1)},r=[]},"570d":function(t,n,e){"use strict";var a=e("7bb0"),i=e.n(a);i.a},6005:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(e("6b75"))},"660f":function(t,n,e){"use strict";e.r(n);var a=e("f3bf"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"7bb0":function(t,n,e){var a=e("8331");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("45f04d76",a,!0,{sourceMap:!1,shadowMode:!1})},8331:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navscroll[data-v-7af76348]{height:%?100?%;background-color:#f7f8fa;white-space:nowrap;position:fixed;top:var(--window-top);left:%?0?%;z-index:10}.navscroll[data-v-7af76348] ::-webkit-scrollbar{width:%?4?%;height:%?1?%;overflow:auto;background-color:initial;-webkit-appearance:auto;display:block}.navscroll .item[data-v-7af76348]{font-size:%?40?%;display:inline-block;line-height:%?100?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-7af76348]{color:#31c27c}.content[data-v-7af76348]{padding:%?30?%;padding-top:%?90?%}.content .row[data-v-7af76348]{border-bottom:1px solid #efefef;padding:%?20?% 0}.content .nodata[data-v-7af76348]{display:flex;justify-content:center}.content .nodata uni-image[data-v-7af76348]{width:%?360?%}.content .loading[data-v-7af76348]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}',""]),t.exports=n},"90ed":function(t,n,e){"use strict";e.r(n);var a=e("2a21"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},ce68:function(t,n,e){"use strict";e.r(n);var a=e("4c0b"),i=e("90ed");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("570d");var o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"7af76348",null,!1,a["a"],void 0);n["default"]=s.exports},d755:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"newsbox"},[e("v-uni-view",{staticClass:"pic"},[e("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"t"},[t._v(t._s(t.item.title))])],1),t.item.looktime?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v(t._s(t.item.looktime))])],1):e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v(t._s(t.item.author))]),e("v-uni-text",[t._v(t._s(t.item.hits))])],1)],1)],1)},i=[]},db90:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630")},df44:function(t,n,e){"use strict";var a=e("e654"),i=e.n(a);i.a},e654:function(t,n,e){var a=e("3fdc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("80b6a8e2",a,!0,{sourceMap:!1,shadowMode:!1})},f3bf:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"组件内默认的标题",author:"小杨",hits:226,picurl:"../../static/pic/pic1.jpg"}}}},data:function(){return{}}};n.default=a}}]);