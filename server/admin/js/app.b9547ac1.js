(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0a9a":function(e,t,r){"use strict";var n=r("d700"),a=r.n(n);a.a},"126a":function(e,t,r){"use strict";var n=r("79c1"),a=r.n(n);a.a},"1ee6":function(e,t,r){"use strict";var n=r("e20f"),a=r.n(n);a.a},"472f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i={name:"app",components:{}},o=i,l=(r("034f"),r("2877")),c=Object(l["a"])(o,a,s,!1,null,null,null),u=c.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","unique-opened":"","default-active":e.$route.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("span",{staticClass:"user"},[e._v(e._s(e.admin.username))]),r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.$router.push("/admin_users/edit/"+e.admin._id)}}},[e._v("编辑")]),r("el-dropdown-item",{nativeOn:{click:function(t){return e.$router.push("/login")}}},[e._v("退出")])],1)],1)],1),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},d=[],f=(r("96cf"),r("1da1")),h={data:function(){return{admin:"",token:""}},methods:{fetchAdmin:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("user");case 2:r=t.sent,e.admin=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchAdmin()}},v=h,b=(r("126a"),Object(l["a"])(v,p,d,!1,null,"f14b6752",null)),g=b.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card"},[r("div",{staticClass:"login-head"},e._l(e.titles,(function(t,n){return r("span",{key:t,class:{active:!e.state==n},on:{click:function(t){e.state=!e.state}}},[e._v(e._s(t))])})),0),e.state?r("div",[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1):r("div",[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("注册")])],1)],1)],1)])],1)},w=[],_={data:function(){return{model:{},state:!0,titles:["登录","注册"]}},methods:{login:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,localStorage.token=r.data.token,e.$router.push("/"),e.$message({type:"success",message:"登录成功"});case 6:case"end":return t.stop()}}),t)})))()},register:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("register",e.model);case 2:e.$message({type:"success",message:"注册成功"});case 3:case"end":return t.stop()}}),t)})))()}},computed:{isState:function(){return this.state?"登录":"注册"}}},y=_,$=(r("0a9a"),Object(l["a"])(y,x,w,!1,null,"46aea49b",null)),k=$.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},O=[],j={props:{id:{type:String}},data:function(){return{model:{},parents:[]}},methods:{save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/categories/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/categories",e.model);case 7:e.$router.push("/categories/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchParents:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.parents=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchParents(),this.id&&this.fetch()}},S=j,C=Object(l["a"])(S,R,O,!1,null,null,null),T=C.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},z=[],D=(r("b0c0"),{data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认删除分类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("rest/categories/".concat(e._id)),t.$message({type:"success",message:"删除成功!"}),t.fetch()})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}}),P=D,A=Object(l["a"])(P,E,z,!1,null,null,null),B=A.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},U=[],H={props:{id:{type:String}},data:function(){return{model:{}}},methods:{afterUpload:function(e){this.$set(this.model,"icon",e.url)},save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/items/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/items",e.model);case 7:e.$router.push("/items/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},L=H,M=(r("6888"),Object(l["a"])(L,I,U,!1,null,"7cefdbbe",null)),V=M.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("物品列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),r("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},J=[],N={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认删除分类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("rest/items/".concat(e._id)),t.$message({type:"success",message:"删除成功!"}),t.fetch()})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},F=N,G=Object(l["a"])(F,q,J,!1,null,null,null),K=G.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{type:"border-card",value:"basic"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,headers:e.getAuthHeaders(),"on-success":function(t){return e.$set(e.model,"avatar",t.url)}}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"背景"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,headers:e.getAuthHeaders(),"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?r("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"11px"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"11px"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"11px"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"11px"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.item1,callback:function(t){e.$set(e.model,"item1",t)},expression:"model.item1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.item2,callback:function(t){e.$set(e.model,"item2",t)},expression:"model.item2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加技能 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:t.cd,callback:function(r){e.$set(t,"cd",r)},expression:"item.cd"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"英雄关系",name:"partners"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加英雄 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(r){e.$set(t,"hero",r)},expression:"item.hero"}},e._l(e.heroes,(function(e){return r("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"4px"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},W=[],X={props:{id:{type:String}},data:function(){return{model:{name:"",avatar:"",banner:"",scores:{difficult:0},skills:[],partners:[],item1:[],item2:[]},categories:[],items:[],heroes:[]}},methods:{save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/heroes/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/heroes",e.model);case 7:e.$router.push("/heroes/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchHeroes:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.heroes=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCategories(),this.fetchItems(),this.fetchHeroes(),this.id&&this.fetch()}},Y=X,Z=(r("e497"),Object(l["a"])(Y,Q,W,!1,null,"f8b00142",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},re=[],ne={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认删除分类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("rest/heroes/".concat(e._id)),t.$message({type:"success",message:"删除成功!"}),t.fetch()})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},ae=ne,se=Object(l["a"])(ae,te,re,!1,null,null,null),ie=se.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},le=[],ce=r("5873"),ue={props:{id:{type:String}},data:function(){return{model:{},categories:[]}},components:{VueEditor:ce["a"]},methods:{handleImageAdded:function(e,t,r,n){var a=this;return Object(f["a"])(regeneratorRuntime.mark((function s(){var i,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=new FormData,i.append("file",e),s.next=4,a.$http.post("upload",i);case 4:o=s.sent,t.insertEmbed(r,"image",o.data.url),n();case 7:case"end":return s.stop()}}),s)})))()},save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/articles/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/articles",e.model);case 7:e.$router.push("/articles/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},me=ue,pe=Object(l["a"])(me,oe,le,!1,null,null,null),de=pe.exports,fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("文章列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},he=[],ve={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认删除文章"'.concat(e.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("rest/articles/".concat(e._id)),t.$message({type:"success",message:"删除成功!"}),t.fetch()})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},be=ve,ge=Object(l["a"])(be,fe,he,!1,null,null,null),xe=ge.exports,we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"广告"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加广告 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return r("el-col",{key:n,attrs:{md:24}},[r("el-form-item",{attrs:{label:"跳转链接(URL)"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.5rem"},attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)}}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},_e=[],ye={props:{id:{type:String}},data:function(){return{model:{items:[]}}},methods:{save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/ads/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/ads",e.model);case 7:e.$router.push("/ads/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},$e=ye,ke=(r("1ee6"),Object(l["a"])($e,we,_e,!1,null,"61b6cb9e",null)),Re=ke.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("广告位列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},je=[],Se={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认删除"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("rest/ads/".concat(e._id)),t.$message({type:"success",message:"删除成功!"}),t.fetch()})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Ce=Se,Te=Object(l["a"])(Ce,Oe,je,!1,null,null,null),Ee=Te.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},De=[],Pe={props:{id:{type:String}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/admin_users/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/admin_users",e.model);case 7:e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},Ae=Pe,Be=Object(l["a"])(Ae,ze,De,!1,null,null,null),Ie=Be.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},He=[],Le={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认删除"'.concat(e.username,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.delete("rest/admin_users/".concat(e._id)),t.$message({type:"success",message:"删除成功!"}),t.fetch()})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Me=Le,Ve=Object(l["a"])(Me,Ue,He,!1,null,null,null),qe=Ve.exports;n["default"].use(m["a"]);var Je=[{path:"/login",name:"login",component:k,meta:{isPublic:!0}},{path:"/",component:g,children:[{path:"/categories/create",component:T},{path:"/categories/edit/:id",component:T,props:!0},{path:"/categories/list",component:B},{path:"/items/create",component:V},{path:"/items/edit/:id",component:V,props:!0},{path:"/items/list",component:K},{path:"/heroes/create",component:ee},{path:"/heroes/edit/:id",component:ee,props:!0},{path:"/heroes/list",component:ie},{path:"/articles/create",component:de},{path:"/articles/edit/:id",component:de,props:!0},{path:"/articles/list",component:xe},{path:"/ads/create",component:Re},{path:"/ads/edit/:id",component:Re,props:!0},{path:"/ads/list",component:Ee},{path:"/admin_users/create",component:Ie},{path:"/admin_users/edit/:id",component:Ie,props:!0},{path:"/admin_users/list",component:qe}]}],Ne=new m["a"]({routes:Je});Ne.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!localStorage.token)return r("/login");r()}));var Fe=Ne,Ge=r("2f62");n["default"].use(Ge["a"]);var Ke=new Ge["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Qe=r("5c96"),We=r.n(Qe);r("0fae");n["default"].use(We.a);r("d3b7");var Xe=r("bc3a"),Ye=r.n(Xe),Ze=Ye.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Ze.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),Ze.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&Fe.push("/login")),Promise.reject(e)}));var et=Ze;n["default"].config.productionTip=!1,n["default"].prototype.$http=et,n["default"].mixin({methods:{getAuthHeaders:function(){return{Authorization:"Bear ".concat(localStorage.token||"")}}}}),new n["default"]({router:Fe,store:Ke,render:function(e){return e(u)}}).$mount("#app")},6888:function(e,t,r){"use strict";var n=r("472f"),a=r.n(n);a.a},"79c1":function(e,t,r){},"85ec":function(e,t,r){},b309:function(e,t,r){},d700:function(e,t,r){},e20f:function(e,t,r){},e497:function(e,t,r){"use strict";var n=r("b309"),a=r.n(n);a.a}});
//# sourceMappingURL=app.b9547ac1.js.map