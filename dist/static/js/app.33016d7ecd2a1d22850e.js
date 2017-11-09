webpackJsonp([1],{"1K8z":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form",{attrs:{name:"login"},on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Email address","label-for":"exampleInput1"}},[r("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Password","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("p",{staticClass:"text-danger"},[t._v(t._s(t.msg))]),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Log in")]),t._v(" "),r("b-button",{attrs:{type:"button",variant:"secondary",to:"register"}},[t._v("Sign up")])],1)],1),t._v(" "),r("b-col",[r("div",{staticStyle:{margin:"40px 0"}},[r("b-button",{attrs:{variant:"primary",href:t.gitUrl}},[r("span",{staticClass:"label label-primary"},[t._v("Github SignIn")])])],1),t._v(" "),r("div",[r("b-button",{attrs:{variant:"primary",href:t.googleUrl}},[r("span",{staticClass:"label label-primary"},[t._v("Google SignIn")])])],1)])],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},"9M+g":function(t,e){},I3L2:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-form-group",{attrs:{label:"Enter video webpage url",description:".eg https://www.youtube.com/watch?v=V54CEElTF_U"}},[r("b-form-input",{on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getReal(e)}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),r("p",[t._v(t._s(t.msg))])],1),t._v(" "),r("b-table",{directives:[{name:"show",rawName:"v-show",value:t.items.length,expression:"items.length"}],attrs:{fields:t.fields,items:t.items},scopedSlots:t._u([{key:"res",fn:function(e){return[t._v("\n              "+t._s(e.value)+"p\n        ")]}},{key:"url",fn:function(e){return[r("b-button",{attrs:{href:e.value,target:"_blank"}},[t._v("Play")])]}}])}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.raw,expression:"raw"}]},[r("b-button",{attrs:{variant:"success"},on:{click:t.show_d}},[t._v("Details")])],1),t._v(" "),r("div",[r("textarea",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"form-control",attrs:{rows:"30",id:"info"}},[t._v(t._s(t.raw))])])],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},IcnI:function(t,e,r){"use strict";var n=r("7+uW"),a=r("NYxO");n.a.use(a.a),e.a=new a.a.Store({state:{token:"",user:null},mutations:{setToken:function(t,e){t.token=e,localStorage.setItem("token",e)},setUser:function(t,e){t.user=e},clearUser:function(t){t.token="",t.user=null,localStorage.removeItem("token")}}})},JJT7:function(t,e,r){"use strict";var n=r("7t+N");r.n(n);e.a={computed:{state:function(){return this.confirm_pass===this.form.password}},data:function(){return{form:{email:"",password:"",secret:"S3CR3T"},confirm_pass:"",msg:""}},methods:{onSubmit:function(){var t=this;this.state&&(this.msg="",Object(n.ajax)({url:"/auth/signup",type:"post",data:this.form,error:function(t){return console.log(t)},success:function(e){e.err?t.msg=e.err:t.$router.push("login")}}))}}}},Jd3k:function(t,e,r){"use strict";var n=r("cvtl"),a=r("I3L2"),s=r("VU/8"),o=s(n.a,a.a,!1,null,null,null);e.a=o.exports},Jmt5:function(t,e){},L4nK:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[r("b-nav-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),r("b-navbar-brand",{attrs:{to:"/"}},[t._v("OTT server")]),t._v(" "),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"#"}},[t._v("Video")]),t._v(" "),r("b-nav-item",{attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[t.user?r("b-nav-item-dropdown",{attrs:{right:""}},[r("template",{slot:"button-content"},[r("em",[t._v(t._s(t.user.name||t.user.email))])]),t._v(" "),r("b-dropdown-item",{attrs:{to:"profile"}},[t._v("Profile")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/"},on:{click:t.loginOut}},[t._v("Signout")])],2):r("b-nav-item",{attrs:{to:"login"}},[t._v("Login")])],1)],1)],1),t._v(" "),r("router-view"),t._v(" "),r("b-nav-text",[t._v("© 2017 - yycc179@gmail.com")])],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},M93x:function(t,e,r){"use strict";function n(t){r("qYYy")}var a=r("xJD8"),s=r("L4nK"),o=r("VU/8"),i=n,u=o(a.a,s.a,!1,i,null,null);e.a=u.exports},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a=r("M93x"),s=r("YaEn"),o=r("sCSS"),i=r("9M+g"),u=(r.n(i),r("Jmt5")),l=(r.n(u),r("IcnI"));n.a.config.productionTip=!1,n.a.use(o.a),new n.a({el:"#app",router:s.a,store:l.a,template:"<App/>",components:{App:a.a}})},"Tl9+":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-file",{attrs:{id:"file_input1"}}),t._v(" "),r("div",{staticClass:"mt-3"},[r("b-form-file",{attrs:{id:"file_input2","choose-label":"Attachment2"}})],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},UF2t:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("h2",[t._v("Server info")]),t._v(" "),r("table",{staticClass:"table"},[r("tbody",t._l(t.items,function(e){return r("tr",[r("td",[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("td",[t._v("\n          "+t._s(e.value)+"\n        ")])])}))]),t._v(" "),r("h2",[t._v("Support")]),t._v(" "),r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item"},[t._v("Activation")]),t._v(" "),r("li",{staticClass:"list-group-item"},[t._v("Video url parse")]),t._v(" "),r("li",{staticClass:"list-group-item"},[t._v("YT Signature API")])])])},a=[],s={render:n,staticRenderFns:a};e.a=s},YaEn:function(t,e,r){"use strict";var n=r("7+uW"),a=r("/ocq"),s=r("Jd3k"),o=r("c27y"),i=r("xJsL"),u=r("o9cx"),l=r("dIqY");n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:s.a},{path:"/about",name:"About",component:o.a},{path:"/login",name:"Login",component:i.a},{path:"/register",name:"Register",component:l.a},{path:"/profile",name:"Profile",component:u.a}]})},Zs8U:function(t,e,r){"use strict";var n=r("7t+N");r.n(n);e.a={data:function(){return{items:[],handle:0}},created:function(){var t=this;this.handle=setInterval(function(){Object(n.getJSON)("/sys",function(e){t.items=e})},1200)},destroyed:function(){clearInterval(this.handle)}}},c27y:function(t,e,r){"use strict";var n=r("Zs8U"),a=r("UF2t"),s=r("VU/8"),o=s(n.a,a.a,!1,null,null,null);e.a=o.exports},cvtl:function(t,e,r){"use strict";var n=r("Gu7T"),a=r.n(n),s=r("ifoU"),o=r.n(s),i=r("M4fF"),u=(r.n(i),r("7t+N"));r.n(u);e.a={name:"video",watch:{url:function(t){this.msg="Waiting for you to stop typing...",this.url&&this.getReal()}},methods:{show_d:function(){this.show=!this.show},getReal:Object(i.debounce)(function(){var t=this;if(!Object(i.startsWith)(this.url,"http")||this.url.length<10)return void(this.msg="Invalid url input");this.msg="Waiting for server to return result...",Object(u.getJSON)("/yts/v?u="+this.url,function(e){if(t.raw=e,!e||!e.formats)return void(t.msg="Get result failed!");t.msg="",t.items.length=0;var r=new o.a;e.formats.forEach(function(t){t.height>=360&&Object(i.startsWith)(t.protocol,"http")&&"mp4"===t.ext&&(console.log(t),r.set(""+t.height,t.url))}),[].concat(a()(r.entries())).forEach(function(e){t.items.push({res:e[0],url:e[1]})})})},500)},data:function(){return{url:"",msg:"",show:!1,raw:"",fields:[{key:"res",label:"Reslution"},{key:"url",label:"Action"}],items:[]}}}},dIqY:function(t,e,r){"use strict";var n=r("JJT7"),a=r("lG4/"),s=r("VU/8"),o=s(n.a,a.a,!1,null,null,null);e.a=o.exports},"lG4/":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{label:"Email address","label-for":"r1",description:"It will be used to get back your account"}},[r("b-form-input",{attrs:{id:"r1",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("b-form-group",{attrs:{label:"Password","label-for":"r2"}},[r("b-form-input",{attrs:{id:"r2",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("b-form-group",{attrs:{label:"Comfirm password","label-for":"r3","aria-describedby":"input-help input-feeback"}},[r("b-form-input",{attrs:{id:"r3",type:"password",required:"",state:t.state},model:{value:t.confirm_pass,callback:function(e){t.confirm_pass=e},expression:"confirm_pass"}}),t._v(" "),r("b-form-feedback",{attrs:{id:"input-feedback"}},[t._v("\n          The passwords entered did not match\n        ")])],1),t._v(" "),r("p",{staticClass:"text-danger"},[t._v(t._s(t.msg))]),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),r("b-button",{attrs:{type:"reset",variant:"secondary"}},[t._v("Reset")])],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},n5Qe:function(t,e,r){"use strict";function n(t,e){Object(s.getJSON)("/auth/renew?token="+t,function(t){console.log(t.token),e(t.token)})}function a(t,e){Object(s.ajax)({url:"auth/profile",dataType:"json",error:function(r){498===r.status&&n(t,function(t){t&&(o.a.commit("setToken",t),a(t,e))})},headers:{Authorization:"Bearer "+t},success:function(t){e(t.err,t)}})}e.a=a;var s=r("7t+N"),o=(r.n(s),r("IcnI"))},"nKb+":function(t,e,r){"use strict";var n=r("7t+N");r.n(n);e.a={data:function(){return{form:{email:"",password:"",secret:"S3CR3T"},loginUrl:"/auth/login",gitUrl:"/auth/oauth/github",googleUrl:"/auth/oauth/google",msg:""}},created:function(){var t=this.$route.query.client;if(t){var e="?client="+t;this.loginUrl+=e,this.gitUrl+=e,this.googleUrl+=e}},methods:{onSubmit:function(t){var e=this;this.msg="",Object(n.ajax)({url:this.loginUrl,type:"post",dataType:"json",data:this.form,error:function(t){e.msg=t},success:function(t){t.err?(e.msg=t.err,setTimeout(function(){e.msg=""},2e3)):(e.$store.commit("setToken",t.token),e.$store.commit("setUser",t.user),e.$router.push("profile"))}})}}}},o9cx:function(t,e,r){"use strict";var n=r("yoF/"),a=r("Tl9+"),s=r("VU/8"),o=s(n.a,a.a,!1,null,null,null);e.a=o.exports},qYYy:function(t,e){},xJD8:function(t,e,r){"use strict";var n=r("NYxO"),a=r("n5Qe");e.a={name:"app",created:function(){var t=this,e=localStorage.getItem("token");e&&Object(a.a)(e,function(e,r){e?t.msg=e:t.$store.commit("setUser",r)})},computed:Object(n.b)(["user"]),methods:{loginOut:function(){this.$store.commit("clearUser")}}}},xJsL:function(t,e,r){"use strict";var n=r("nKb+"),a=r("1K8z"),s=r("VU/8"),o=s(n.a,a.a,!1,null,null,null);e.a=o.exports},"yoF/":function(t,e,r){"use strict";var n=r("n5Qe");e.a={created:function(){var t=this,e=this.$route.query.s;e&&(this.$store.commit("setToken",e),Object(n.a)(e,function(e,r){e?t.msg=e:t.$store.commit("setUser",r)}))}}}},["NHnr"]);
//# sourceMappingURL=app.33016d7ecd2a1d22850e.js.map