webpackJsonp([136],{629:function(e,t,n){var o=n(0)(n(671),n(878),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/plugin/dropdownmenu.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] dropdownmenu.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{param1:["测试1","测试2","测试3"],param2:[{title:"测试1",key:"test1"},{title:"测试2",key:"test2"},{title:"测试3",key:"test3"}],param3:[{title:"测试1",key:"test1",icon:"h-icon-home"},{title:"测试2",key:"test2",disabled:!0,icon:"h-icon-complete"},{divider:!0},{title:"测试3",key:"test3",icon:"h-icon-bell"}],param4:[{title:"测试1",key:"test1",count:4},{title:"测试2",key:"test2",disabled:!0,count:100},{divider:!0},{title:"测试3",key:"test3",count:90}]}},methods:{trigger:function(e){this.$Message.info("您点击了"+e)}},components:{}}},878:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"doc"},[n("h2",[e._v("DropdownMenu 下拉菜单")]),e._v(" "),n("h3",[e._v("基本调用")]),e._v(" "),n("DropdownMenu",{attrs:{datas:e.param1},on:{onclick:e.trigger}},[n("span",[e._v("菜单menu")])]),e._v(" "),n("h3",[e._v("不同调用")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param2,placement:"bottom-end"},on:{onclick:e.trigger}},[n("Button",[e._v("菜单menu2")])],1)],1),e._v(" "),n("h3",[e._v("不同位置")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param2,placement:"bottom-end"},on:{onclick:e.trigger}},[n("span",[e._v("菜单menu2")])])],1),e._v(" "),n("h3",[e._v("不同触发")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param3,trigger:"hover"},on:{onclick:e.trigger}},[n("span",[e._v("菜单menu3")])])],1),e._v(" "),n("h3",[e._v("不添加下拉icon")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param3,trigger:"hover",toggleIcon:!1},on:{onclick:e.trigger}},[n("span",{staticClass:"text-hover"},[e._v("菜单menu3")])])],1),e._v(" "),n("h3",[e._v("和dom同样宽度")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param1,"equal-width":!0},on:{onclick:e.trigger}},[n("p",{staticStyle:{width:"150px"}},[e._v("菜单menu")])])],1),e._v(" "),n("h3",[e._v("自定义宽度")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param4,width:200},on:{onclick:e.trigger}},[n("p",[e._v("菜单menu")])])],1),e._v(" "),n("h3",[e._v("添加未读数")]),e._v(" "),n("div",[n("DropdownMenu",{attrs:{datas:e.param4,"show-count":!0,"max-count":100,width:200},on:{onclick:e.trigger}},[n("p",[e._v("菜单menu")])])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});