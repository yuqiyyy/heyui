webpackJsonp([69],{333:function(t,n,e){var s=e(0)(e(383),e(514),null,null);s.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/message/notice.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] notice.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},383:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{config:function(){this.$Notice.config({timeout:1e3})},info:function(){this.$Notice("这是一个普通的提醒")},message:function(t){var n={info:"消息",success:"成功",warn:"警告",error:"错误"}[t],e={type:t,title:n,content:"<p>这是一个"+n+"的消息</p><p>这是一个"+n+"的消息</p>"};this.$Notice(e)},message2:function(t){var n={info:"消息",success:"成功",warn:"警告",error:"错误",loading:"加载中"}[t];this.$Notice[t]("这是一个"+n+"的消息")},message3:function(){this.$Notice({title:"不会关闭",content:"这是一个不会自动关闭的消息",timeout:0})}}}},514:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"doc"},[e("h2",[t._v("Notice 通知")]),t._v(" "),e("p",[e("button",{staticClass:"h-btn",on:{click:function(n){t.info()}}},[t._v("提示")])]),t._v(" "),e("p",[e("button",{staticClass:"h-btn",on:{click:function(n){t.config()}}},[t._v("设置全局的timeout时间为1秒")])]),t._v(" "),e("p",[e("button",{staticClass:"h-btn",on:{click:function(n){t.message("info")}}},[t._v("消息")]),t._v(" "),e("button",{staticClass:"h-btn",on:{click:function(n){t.message("success")}}},[t._v("成功")]),t._v(" "),e("button",{staticClass:"h-btn",on:{click:function(n){t.message("warn")}}},[t._v("警告")]),t._v(" "),e("button",{staticClass:"h-btn",on:{click:function(n){t.message("error")}}},[t._v("错误")])]),t._v(" "),e("p",[e("button",{staticClass:"h-btn",on:{click:function(n){t.message2("info")}}},[t._v("消息")]),t._v(" "),e("button",{staticClass:"h-btn",on:{click:function(n){t.message2("success")}}},[t._v("成功")]),t._v(" "),e("button",{staticClass:"h-btn",on:{click:function(n){t.message2("warn")}}},[t._v("警告")]),t._v(" "),e("button",{staticClass:"h-btn",on:{click:function(n){t.message2("error")}}},[t._v("错误")])]),t._v(" "),e("h3",[t._v("不自动关闭")]),t._v(" "),e("p",[e("button",{staticClass:"h-btn",on:{click:function(n){t.message3("info")}}},[t._v("不自动关闭")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});