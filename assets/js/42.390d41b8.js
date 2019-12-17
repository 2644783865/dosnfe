(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{711:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue规范","aria-hidden":"true"}},[t._v("#")]),t._v(" VUE规范")]),t._v(" "),a("h2",{attrs:{id:"标签使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 标签使用")]),t._v(" "),a("ul",[a("li",[t._v("除了div ul>li标签外，其他html标签内不能含有任务组件的标签（包括element-ui标签）")]),t._v(" "),a("li",[a("code",[t._v("el-row")]),t._v(" 必须包含"),a("code",[t._v("el-col")]),t._v(" 不要单独使用"),a("code",[t._v("el-col")])])]),t._v(" "),a("h2",{attrs:{id:"样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("code",[t._v("scss")]),t._v("语法 每个"),a("code",[t._v(".vue")]),t._v("文件下的style都必须加上"),a("code",[t._v("scope")]),t._v("属性")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet/scss"')]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scss"')]),t._v(" scoped"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("每个 Vue 组件的代码建议不要超出 200 行，如果超出建议拆分组件。")])]),t._v(" "),a("li",[a("p",[t._v("组件一般情况下是可以拆成基础/ui部分和业务部分，基础组件一般是承载呈现，基础功能，不和业务耦合部分。")])]),t._v(" "),a("li",[a("p",[t._v("业务组件一般包含业务功能业务特殊数据等等。")])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("组件命名")]),t._v(" "),a("ul",[a("li",[t._v("使用小驼峰命名法（有待商议） 引入组件名用小驼峰")]),t._v(" "),a("li",[t._v("命名建议：尽量不要超过三个单词")])])]),t._v(" "),a("li",[a("p",[t._v("UI组件/基础组件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("开发的时候注意可拓展性，支持数据传参进行渲染，支持插槽slot。")])]),t._v(" "),a("li",[a("p",[t._v("设置有mixin，mixin中放了基础信息和方法。")])])])]),t._v(" "),a("li",[a("p",[t._v("容器组件")]),t._v(" "),a("ul",[a("li",[t._v("和当前业务耦合性比较高，由多个基础组件组成，可承载当前页的业务接口请求和数据(vuex)。")])])]),t._v(" "),a("li",[a("p",[t._v("组件存放位置")]),t._v(" "),a("ul",[a("li",[t._v("ui组件存放在 src/components/ 中，包含 xxx.vue和 xxmixin.js 和 readme.md。")])])]),t._v(" "),a("li",[a("p",[t._v("组件通讯")]),t._v(" "),a("ul",[a("li",[t._v("避免数据的分发源混乱，不建议使用 eventBus控制数据，应使用 props来和 $emit来数据分发和传送。")]),t._v(" "),a("li",[t._v("同级组件的通讯一般会有一个中间容器组件作为桥梁。")]),t._v(" "),a("li",[t._v("容器组件作为数据的接受和分发点。")])])]),t._v(" "),a("li",[a("p",[t._v("组件的挂在和销毁")]),t._v(" "),a("ul",[a("li",[t._v("通过v-if控制组件的挂在和销毁")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("testcomponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("componentActive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("testcomponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("通过is控制组件的挂在和销毁")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("componentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])},[],!1,null,null,null);s.default=n.exports}}]);