webpackJsonp([134],{632:function(t,e,n){var i=n(0)(n(674),n(841),null,null);i.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/view/badge.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] badge.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},674:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{count:2}}}},841:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"doc"},[n("h2",[t._v("Badge 徽标数")]),t._v(" "),n("h3",[t._v("基本应用")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("div",[n("ButtonGroup",{attrs:{size:"s"}},[n("Button",{attrs:{icon:"plus"},on:{click:function(e){t.count++}}}),t._v(" "),n("Button",{attrs:{icon:"minus"},on:{click:function(e){t.count<=0||t.count--}}})],1),t._v(" "),n("Badge",{attrs:{count:t.count}},[n("div",{directives:[{name:"width",rawName:"v-width",value:40,expression:"40"}],staticClass:"text-center"},[t._v("消息")])])],1),t._v(" "),n("h3",[t._v("数字为0的时候也展示")]),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("div",[n("Badge",{attrs:{count:100,"max-count":99}},[n("div",{directives:[{name:"width",rawName:"v-width",value:50,expression:"50"}],staticClass:"text-center"},[t._v("消息")])]),t._v("\n       \n    "),n("Badge",{attrs:{count:1e3,"max-count":999}},[n("div",{directives:[{name:"width",rawName:"v-width",value:50,expression:"50"}],staticClass:"text-center"},[t._v("消息")])])],1),t._v(" "),n("h3",[t._v("最大显示数")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("div",[n("Badge",{attrs:{count:0,showZero:!0}},[n("div",{directives:[{name:"width",rawName:"v-width",value:40,expression:"40"}],staticClass:"text-center"},[t._v("消息")])])],1),t._v(" "),n("h3",[t._v("提示小红点")]),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("div",[n("Badge",{attrs:{count:1,dot:!0}},[t._v("消息")]),t._v("\n       \n    "),n("Badge",{attrs:{count:1,dot:!0}},[n("Button",{attrs:{size:"s"}},[t._v("消息")])],1)],1),t._v(" "),n("h3",[t._v("不同展示方式")]),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("div",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}]},[n("div",{staticStyle:{position:"relative",padding:"5px"}},[t._v("\n      Menu 1\n      "),n("Badge",{attrs:{count:20,position:"right"}})],1),t._v(" "),n("div",{staticStyle:{position:"relative",padding:"5px"}},[t._v("\n      Menu2\n      "),n("Badge",{attrs:{count:100,"max-count":99,position:"right"}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("一般"),n("code",[t._v("count")]),t._v("为0的时候不展示")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("设置"),n("code",[t._v("count")]),t._v("为0的时候也展示")])}]},t.exports.render._withStripped=!0}});