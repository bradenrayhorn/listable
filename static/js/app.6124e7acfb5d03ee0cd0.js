webpackJsonp([0],[function(e,t,s){"use strict";var n=s(2),i=s(24),o=s(18),a=s.n(o),r=s(19),l=s.n(r),c=s(17),u=s.n(c);n.a.use(i.a),t.a=new i.a({routes:[{path:"/lists",name:"Lists",component:u.a},{path:"/login",name:"Login",component:a.a},{path:"/unsupported",name:"Unsupported",component:l.a}]})},,,,function(e,t,s){function n(e){s(13)}var i=s(1)(s(6),s(23),n,null,null);e.exports=i.exports},,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0);t.default={beforeCreate:function(){"undefined"==typeof localStorage&&n.a.push("unsupported"),void 0!==localStorage.id&&void 0!==localStorage.token||n.a.push("login"),void 0!==localStorage.id&&void 0!==localStorage.token&&n.a.push("lists")}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(s(0),[]);t.default={data:function(){return{currentListName:"",message:"Loading...",messageType:"",itemToAdd:"",working:!0,currentListData:{},listNames:[],deleteMode:!1}},beforeCreate:function(){var e=this,t=this;this.$http.post("http://listable.braden.cc/getlists.php",{user:localStorage.id,token:localStorage.token},{emulateJSON:!0}).then(function(s){if(e.working=!1,e.message="",localStorage.token=s.body.token,"100"==s.body.code){var i=s.body.data;for(var o in i)i.hasOwnProperty(o)&&t.listNames.push(o);if(n=i,t.listNames.length<1)return void t.showMessage("You have no lists!");void 0!==localStorage.currentList&&-1!=t.listNames.indexOf(localStorage.currentList)?t.updateList(localStorage.currentList):t.updateList(t.listNames[0])}else e.showMessage(s.body.message)},function(t){e.showMessage("An error occurred while logging in!"),e.working=!1})},methods:{showMessage:function(e){var t=this;this.message=e,setTimeout(function(){t.message=""},2500)},nextList:function(){var e=this.listNames.length;if(1!=e){var t=this.listNames.indexOf(this.currentListName);t++,t>e-1?(t=0,this.updateList(this.listNames[t])):this.updateList(this.listNames[t])}},updateList:function(e){this.currentListName=e,this.currentListData=n[e],0==n[e].length&&(n[e]={},this.currentListData={}),localStorage.currentList=e},itemClick:function(e){var t=this;if(this.deleteMode){var s=this;this.$http.post("http://listable.braden.cc/deleteitem.php",{user:localStorage.id,token:localStorage.token,list:this.currentListName,item:e},{emulateJSON:!0}).then(function(i){localStorage.token=i.body.token,"100"!=i.body.code&&(s.currentListData[e]=!0,n[s.currentListName]=s.currentListData,s.showMessage(i.body.message),t.$forceUpdate())},function(e){t.showMessage("An error occurred while deleting the item!")}),delete this.currentListData[e],n[this.currentListName]=this.currentListData,this.$forceUpdate()}else this.$http.post("http://listable.braden.cc/cross.php",{user:localStorage.id,token:localStorage.token,list:this.currentListName,item:e,set:!this.currentListData[e]},{emulateJSON:!0}).then(function(e){localStorage.token=e.body.token},function(e){t.showMessage("An error occurred while crossing the item!")}),this.currentListData[e]=!this.currentListData[e],this.$forceUpdate()},addItem:function(){var e=this;if(this.itemToAdd.length>0){var t=this;this.$http.post("http://listable.braden.cc/additem.php",{user:localStorage.id,token:localStorage.token,list:this.currentListName,item:this.itemToAdd},{emulateJSON:!0}).then(function(s){localStorage.token=s.body.token,"100"!=s.body.code&&(t.showMessage(s.body.message),delete t.currentListData[t.itemToAdd],n[t.currentListName]=t.currentListData,e.$forceUpdate())},function(t){e.showMessage("An error occurred while crossing the item!")}),t.currentListData[t.itemToAdd]=!0,n[this.currentListName]=t.currentListData,t.itemToAdd=""}else this.showMessage("The item can not be empty!")},toggleDelete:function(){this.deleteMode=!this.deleteMode},deleteAll:function(){var e=this;if(confirm("Are you sure you wish to delete all items?")){var t=this;this.$http.post("http://listable.braden.cc/deleteall.php",{user:localStorage.id,token:localStorage.token,list:this.currentListName},{emulateJSON:!0}).then(function(e){localStorage.token=e.body.token,"100"==e.body.code?t.showMessage("Deleted all items!"):(t.showMessage(e.body.message),setTimeout(function(){location.reload()},1500))},function(t){e.showMessage("An error occurred while deleting the items!"),setTimeout(function(){location.reload()},1500)}),this.currentListData={},n[this.currentListName]={},this.$forceUpdate()}}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0);t.default={data:function(){return{username:"",working:!1,message:""}},methods:{submitLogin:function(){var e=this;""!=this.username?(this.working=!0,this.$http.post("http://listable.braden.cc/login.php",{user:this.username,token:""},{emulateJSON:!0}).then(function(t){"100"==t.body.code?(localStorage.id=e.username,localStorage.token=t.body.token,n.a.push("lists")):(e.showMessage(t.body.message),e.working=!1)},function(t){e.showMessage("An error occurred while logging in!"),e.working=!1})):this.showMessage("You must enter a username!")},showMessage:function(e){var t=this;this.message=e,setTimeout(function(){t.message=""},2500)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),i=s(4),o=s.n(i),a=s(0),r=s(5);n.a.use(r.a),new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a}})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,s){function n(e){s(11)}var i=s(1)(s(7),s(21),n,"data-v-34cfe120",null);e.exports=i.exports},function(e,t,s){function n(e){s(10)}var i=s(1)(s(8),s(20),n,"data-v-164062f4",null);e.exports=i.exports},function(e,t,s){function n(e){s(12)}var i=s(1)(null,s(22),n,"data-v-70552d80",null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"title"},[e._v("\n        Login\n    ")]),e._v(" "),s("div",{staticClass:"form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username",disabled:e.working},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),s("div",[s("input",{attrs:{type:"submit",value:"Login"},on:{click:e.submitLogin}})])]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.message?s("div",{staticClass:"message"},[e._v("\n            "+e._s(e.message)+"\n        ")]):e._e()])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"list-name",on:{click:e.nextList}},[e._v("\n        "+e._s(e.currentListName)+"\n    ")]),e._v(" "),s("div",{staticClass:"list"},e._l(e.currentListData,function(t,n){return s("div",{class:{crossed:!t,delete:e.deleteMode},on:{click:function(t){e.itemClick(n)}}},[e._v("\n            "+e._s(n)+"\n        ")])})),e._v(" "),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemToAdd,expression:"itemToAdd"}],attrs:{type:"text",disabled:e.working},domProps:{value:e.itemToAdd},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.addItem()},input:function(t){t.target.composing||(e.itemToAdd=t.target.value)}}}),e._v(" "),s("div",{staticClass:"buttons"},[s("button",{staticClass:"delete",class:{enabled:e.deleteMode},on:{click:e.toggleDelete}},[e._v("Delete Mode")]),s("button",{staticClass:"delete",on:{click:e.deleteAll}},[e._v("Delete All")])])]),e._v(" "),s("transition",{attrs:{name:"slide"}},[e.message?s("div",{staticClass:"message"},[e._v(e._s(e.message))]):e._e()])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"warn"},[e._v("\n    Your device is unsupported!\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",[s("router-view")],1)},staticRenderFns:[]}},,,function(e,t){}],[9]);