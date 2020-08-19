(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],p=0,v=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],s=o["default"].extend({name:"App",components:{},data:function(){return{}}}),i=s,c=n("2877"),l=n("6544"),u=n.n(l),p=n("7496"),v=n("f6c4"),d=Object(c["a"])(i,r,a,!1,null,null,null),b=d.exports;u()(d,{VApp:p["a"],VMain:v["a"]});var f=n("9483");Object(f["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BtnStartProcess")},y=[],g=n("9ab4"),_=n("60a3"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey lighten-5"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"4"}}),n("v-col",{attrs:{sm:"4"}},[n("h6",{staticClass:"text-h6 text-center"},[t._v("Import CSV")]),n("div",{staticClass:"text-subtitle-2 text-center ma-2"},[t._v("Import your contacts from a csv")]),n("v-btn",{attrs:{"x-large":"",color:"secondary",block:"true"},on:{click:t.onClick}},[t._v("Import")])],1),n("v-col",{attrs:{sm:"4"}})],1)],1)},O=[],j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(g["c"])(e,t),e.prototype.onClick=function(){this.$router.push("/import")},e=Object(g["b"])([_["a"]],e),e}(_["c"]),w=j,x=w,C=n("8336"),V=n("62ad"),k=n("a523"),F=n("0fd9"),I=Object(c["a"])(x,S,O,!1,null,null,null),$=I.exports;u()(I,{VBtn:C["a"],VCol:V["a"],VContainer:k["a"],VRow:F["a"]});var A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(g["c"])(e,t),e=Object(g["b"])([Object(_["a"])({components:{BtnStartProcess:$}})],e),e}(_["c"]),B=A,P=B,E=Object(c["a"])(P,h,y,!1,null,null,null),D=E.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[n("v-stepper-header",t._l(t.steps,(function(e,o){return n("v-stepper-step",{key:e,attrs:{step:t.getStep(o),complete:t.e1>o+1}},[t._v(t._s(e.name))])})),1),n("v-stepper-items",t._l(t.steps,(function(e,o){return n("v-stepper-content",{key:e,attrs:{step:t.getStep(o)}},[t.success?n("v-alert",{attrs:{outlined:"",type:"success",text:""}},[t._v(" Success ")]):t._e(),""!=t.error?n("v-alert",{attrs:{outlined:"",type:"error",prominent:"",border:"left"}},[t._v(" An error has occurred ")]):t._e(),1==t.e1?n("Step1",{on:{input:t.onAction}}):t._e(),2==t.e1?n("Step2",{on:{input:t.onAction}}):t._e(),3==t.e1?n("Step3",{on:{input:t.onAction}}):t._e(),4==t.e1?n("Step4",{on:{input:t.onAction}}):t._e()],1)})),1)],1)},M=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey lighten-5"},[n("v-subheader",[n("b",[t._v("Step 1:")]),t._v(" Upload CSV "),n("br"),n("div",{staticClass:"text-subtitle-2 text-left ma-2"},[t._v("File must be CSV")])]),n("form",{attrs:{method:"POST"},on:{submit:t.uploadCSV}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"4"}}),n("v-col",{attrs:{sm:"4"}},[n("div",{staticClass:"text-h5 text-center"},[t._v("Upload CSV")]),n("div",{staticClass:"text-h6 text-center"},[t._v("CSV")]),n("v-btn",{attrs:{color:"teal",block:"true"},on:{click:t.triggerInputFile}},[t._v("Select file")]),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",name:"csvfile",id:"csvfile"}})],1),n("v-col",{attrs:{sm:"4"}})],1),n("br"),n("br"),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("v-divider"),n("br"),n("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("Continue")]),n("v-btn",{attrs:{text:""}},[t._v("Back")])],1)],1)],1)],1)},R=[],U=n("bc3a"),L=n.n(U),G=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(g["c"])(e,t),e.prototype.triggerInputFile=function(){var t=document.getElementById("csvfile");null===t||void 0===t||t.click()},e.prototype.uploadCSV=function(t){return Object(g["a"])(this,void 0,void 0,(function(){var e,n,o,r;return Object(g["d"])(this,(function(a){switch(a.label){case 0:t.preventDefault(),e=this.$refs.file.files[0],n=new FormData,n.append("csvfile",e),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,L.a.post("http://localhost:8000/api/v1/upload_csv",n,{headers:{"Content-Type":"multipart/form-data"}}).catch((function(t){throw new Error(t)}))];case 2:return o=a.sent(),localStorage.setItem("file",o.data.data.file),this.$emit("input",{action:"next"}),[3,4];case 3:return r=a.sent(),this.$emit("input",{action:"error",error:r.message}),[3,4];case 4:return[2]}}))}))},e=Object(g["b"])([_["a"]],e),e}(_["c"]),J=G,K=J,H=n("ce7e"),q=n("e0c7"),z=Object(c["a"])(K,T,R,!1,null,null,null),Q=z.exports;u()(z,{VBtn:C["a"],VCol:V["a"],VContainer:k["a"],VDivider:H["a"],VRow:F["a"],VSubheader:q["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey lighten-5"},[n("v-subheader",[n("b",[t._v("Step 2:")]),t._v(" Map Fields "),n("br"),n("div",{staticClass:"text-subtitle-2 text-left ma-2"},[t._v("Map the fields in your csv to Autopilot's fields.")])]),n("form",{attrs:{action:"",method:"POST"},on:{submit:t.sendMappingField}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("div",{staticClass:"text-black"},[t._v("Found "+t._s(t.totalRows)+" contacts in:")]),n("br"),n("v-chip",{staticClass:"ma-2",attrs:{color:"green",label:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-label")]),t._v(" "+t._s(t.fileName)+" ")],1),n("a",{attrs:{href:"/import"}},[t._v("Upload a different file")])],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("div",[t._v("Map your fields to Autopilot's fields:")]),n("br"),n("v-row",[n("v-col",{attrs:{sm:"4"}},[t._v("CSV Field")]),n("v-col",{attrs:{sm:"4"}},[t._v("Autopilot Field")]),n("v-col",{attrs:{sm:"4"}}),n("v-col",{attrs:{sm:"4"}})],1),t._l(t.columns,(function(e,o){return n("v-row",{key:o},[n("v-col",{attrs:{sm:"4"}},[t._v(t._s(e))]),n("v-col",{attrs:{sm:"4"}},[n("v-select",{ref:e,refInFor:!0,class:{"d-none":"Add an option"==t.inputs[e]},attrs:{name:e,items:t.internalColums,label:"Choose an option",solo:""},on:{change:function(n){return t.onSelected(n,e,"input-"+o)}}}),n("v-row",{ref:"input-"+o,refInFor:!0,staticClass:"d-none"},[n("v-col",{attrs:{sm:"6"}},[n("v-text-field",{attrs:{label:"Key",outlined:""},on:{change:function(n){return t.onInputKey(n,e)}}})],1),n("v-col",{attrs:{sm:"6"}},[n("v-select",{attrs:{items:t.types,label:"Choose an option",solo:""},on:{change:function(n){return t.onInputType(n,e)}}})],1)],1)],1),n("v-col",{attrs:{sm:"4"}}),n("v-col",{attrs:{sm:"4"}})],1)}))],2)],1),n("br"),n("br"),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("v-divider"),n("br"),n("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("Continue")]),n("v-btn",{attrs:{text:""},on:{click:t.onBack}},[t._v("Back")])],1)],1)],1)],1)},X=[],Y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs={},e.types=["text","number","boolean","date"],e.coincidences={"First Name":["first_name","f_name","fname","fn","First_Name","FirstName"],"Last Name":["last_name","l_name","lname","ln","Last_Name","LastName"],Email:["email","mail","e-mail","Email","E-mail","E-Mail"],Phone:["phone","telephone","Phone","Telephone","tel"],"Sticky Phone":["sticky_phone","s_phone","sphone","Sticky_Phone","StickyPhone","Stickyphone"]},e.internalColums=["First Name","Last Name","Email","Phone","Sticky Phone","Add an option"],e}return Object(g["c"])(e,t),e.prototype.mounted=function(){return Object(g["a"])(this,void 0,void 0,(function(){var t,e,n,o,r,a;return Object(g["d"])(this,(function(s){switch(s.label){case 0:return t=localStorage.getItem("file")||"",[4,L.a.get("http://localhost:8000/api/v1/file/"+t).catch((function(){console.log("FAILURE!!")}))];case 1:for(e=s.sent(),this.fileName=t,this.totalRows=+e.data.data.total,this.columns=e.data.data.columns,n=0,o=this.columns;n<o.length;n++)r=o[n],Object.assign(this.inputs,(a={},a[r]="",a));return[2]}}))}))},e.prototype.sendMappingField=function(t){t.preventDefault(),localStorage.setItem("mapping",JSON.stringify(this.inputs)),this.$emit("input",{action:"next"})},e.prototype.onBack=function(){this.$emit("input",{action:"back"})},e.prototype.onShow=function(t){console.log({prop:t})},e.prototype.onSelected=function(t,e,n){"Add an option"==t?this.$refs[n][0].classList.remove("d-none"):this.$refs[n][0].classList.add("d-none"),this.inputs[e]=t},e.prototype.onInputKey=function(t,e){var n;this.inputs[e]=(n={},n[t]="",n),console.log(this.inputs)},e.prototype.onInputType=function(t,e){for(var n=0,o=Object.keys(this.inputs[e]);n<o.length;n++){var r=o[n];this.inputs[e][r]=t}},Object(g["b"])([Object(_["b"])()],e.prototype,"fileName",void 0),Object(g["b"])([Object(_["b"])()],e.prototype,"totalRows",void 0),Object(g["b"])([Object(_["b"])()],e.prototype,"columns",void 0),Object(g["b"])([Object(_["b"])()],e.prototype,"inputs",void 0),e=Object(g["b"])([_["a"]],e),e}(_["c"]),Z=Y,tt=Z,et=n("cc20"),nt=n("132d"),ot=n("b974"),rt=n("8654"),at=Object(c["a"])(tt,W,X,!1,null,null,null),st=at.exports;u()(at,{VBtn:C["a"],VChip:et["a"],VCol:V["a"],VContainer:k["a"],VDivider:H["a"],VIcon:nt["a"],VRow:F["a"],VSelect:ot["a"],VSubheader:q["a"],VTextField:rt["a"]});var it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-subheader",[n("b",[t._v("Step 3:")]),t._v(" Confirm Mappings "),n("br"),n("div",{staticClass:"text-subtitle-2 text-left ma-2"},[t._v("Confirm you've correctly mapped your fields. Below is the first contact in your csv..")])]),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("div",{staticClass:"text-h6 cyan lighten-4 pa-4"},[t._v("Fiel Mapping Preview")]),n("v-card",{attrs:{outlined:""}},[n("v-card-text",[n("v-container",t._l(t.Data,(function(e,o){return n("v-row",{key:o},[n("v-col",{staticClass:"text-body-2 font-weight-bold",attrs:{sm:"4"}},[t._v(t._s(o))]),n("v-col",{attrs:{sm:"4"}},[t._v(t._s(e))]),n("v-col",{attrs:{sm:"4"}}),n("v-col",{attrs:{sm:"4"}})],1)})),1)],1)],1)],1)],1),n("br"),n("br"),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("v-divider"),n("br"),n("form",{attrs:{action:"",method:"POST"},on:{submit:t.sendConfirmation}},[n("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("Continue")]),n("v-btn",{attrs:{text:""},on:{click:t.onBack}},[t._v("Back")])],1)],1)],1)],1)},ct=[],lt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(g["c"])(e,t),e.prototype.mounted=function(){return Object(g["a"])(this,void 0,void 0,(function(){var t,e,n;return Object(g["d"])(this,(function(o){switch(o.label){case 0:return this.Mapper=JSON.parse(localStorage.getItem("mapping")||"{}"),t=new FormData,t.append("remap",localStorage.getItem("mapping")||""),e=localStorage.getItem("file")||"",[4,L.a.post("http://localhost:8000/api/v1/file/"+e+"/sample",t).catch((function(){console.log("FAILURE!!")}))];case 1:return n=o.sent(),this.Data=n.data.data,[2]}}))}))},e.prototype.sendConfirmation=function(t){t.preventDefault(),this.$emit("input",{action:"next"})},e.prototype.onBack=function(){this.$emit("input",{action:"back"})},Object(g["b"])([Object(_["b"])()],e.prototype,"Mapper",void 0),Object(g["b"])([Object(_["b"])()],e.prototype,"Data",void 0),e=Object(g["b"])([_["a"]],e),e}(_["c"]),ut=lt,pt=ut,vt=n("b0af"),dt=n("99d9"),bt=Object(c["a"])(pt,it,ct,!1,null,null,null),ft=bt.exports;u()(bt,{VBtn:C["a"],VCard:vt["a"],VCardText:dt["a"],VCol:V["a"],VContainer:k["a"],VDivider:H["a"],VRow:F["a"],VSubheader:q["a"]});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("b",[t._v("Step 4:")]),t._v(" Select Duplicate Strategy "),n("br"),t._v(" Choose how you'd like to handle any duplicates. ")])],1),n("br"),n("form",{attrs:{action:""},on:{submit:t.submitForm}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("div",[t._v("If an existing contacts is in the CSV")]),n("v-radio-group",{ref:"rdOption",model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},t._l(t.inputs,(function(t,e){return n("v-radio",{key:e,attrs:{label:t.text,value:t.value}})})),1)],1)],1),n("br"),n("br"),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"12"}},[n("v-divider"),n("br"),n("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("Continue")]),n("v-btn",{attrs:{text:""},on:{click:t.onBack}},[t._v("Back")])],1)],1)],1)],1)},ht=[],yt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.radioGroup=1,e.inputs=[{text:"Update them with the data in the spreadsheet, but only for fields that are empty (recommended)",value:1},{text:"Update them with the data in the spreadsheet, including fields that already have a value",value:2},{text:"Don't modify them",value:3}],e}return Object(g["c"])(e,t),e.prototype.submitForm=function(t){return Object(g["a"])(this,void 0,void 0,(function(){var e,n,o;return Object(g["d"])(this,(function(r){switch(r.label){case 0:t.preventDefault(),r.label=1;case 1:return r.trys.push([1,3,,4]),e=new FormData,e.append("remap",localStorage.getItem("mapping")||""),e.append("duplicate_strategy",this.radioGroup.toString()),n=localStorage.getItem("file")||"",[4,L.a.post("http://localhost:8000/api/v1/file/"+n+"/save",e).catch((function(t){throw new Error(t)}))];case 2:return r.sent(),console.log(this.radioGroup),this.$emit("input",{action:"success"}),[3,4];case 3:return o=r.sent(),this.$emit("input",{action:"error",error:o.message}),[3,4];case 4:return[2]}}))}))},e.prototype.onBack=function(){this.$emit("input",{action:"back"})},Object(g["b"])([Object(_["b"])()],e.prototype,"inputs",void 0),e=Object(g["b"])([_["a"]],e),e}(_["c"]),gt=yt,_t=gt,St=n("67b6"),Ot=n("43a6"),jt=Object(c["a"])(_t,mt,ht,!1,null,null,null),wt=jt.exports;u()(jt,{VBtn:C["a"],VCol:V["a"],VContainer:k["a"],VDivider:H["a"],VRadio:St["a"],VRadioGroup:Ot["a"],VRow:F["a"]});var xt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._e1=0,e.steps=[{name:"Import Contacts",description:'<b>Step 1:</b> Upload CSV<br><div class="text-subtitle-2 text-left ma-2">File must be CSV</div>'},{name:"",description:'<b>Step 1:</b> Upload CSV<br><div class="text-subtitle-2 text-center ma-2">File must be CSV</div>'},{name:"",description:'<b>Step 1:</b> Upload CSV<br><div class="text-subtitle-2 text-center ma-2">File must be CSV</div>'},{name:"",description:'<b>Step 1:</b> Upload CSV<br><div class="text-subtitle-2 text-center ma-2">File must be CSV</div>'}],e}return Object(g["c"])(e,t),e.prototype.created=function(){this.e1=1,this.error=""},e.prototype.mounted=function(){this.e1=1},e.prototype.getStep=function(t){return t+1},e.prototype.nextStep=function(){this.e1+=1,this.error="",console.log(this.e1)},e.prototype.backStep=function(){this.e1-=1,this.error="",console.log(this.e1)},e.prototype.onAction=function(t){var e=this,n=t.action,o=t.error;switch(console.log({action:n}),n){case"next":this.nextStep();break;case"back":this.backStep();break;case"success":this.success=!0,setTimeout((function(){e.$router.push("/")}),2e3);break;case"error":this.success=!1,this.error=o;break}},Object(g["b"])([Object(_["b"])()],e.prototype,"success",void 0),Object(g["b"])([Object(_["b"])()],e.prototype,"error",void 0),Object(g["b"])([Object(_["b"])()],e.prototype,"e1",void 0),e=Object(g["b"])([Object(_["a"])({components:{Step1:Q,Step2:st,Step3:ft,Step4:wt}})],e),e}(_["c"]),Ct=xt,Vt=Ct,kt=n("0798"),Ft=n("7e85"),It=n("e516"),$t=n("9c54"),At=n("56a4"),Bt=Object(c["a"])(Vt,N,M,!1,null,null,null),Pt=Bt.exports;u()(Bt,{VAlert:kt["a"],VStepper:Ft["a"],VStepperContent:It["a"],VStepperHeader:$t["a"],VStepperItems:$t["b"],VStepperStep:At["a"]}),o["default"].use(m["a"]);var Et=[{path:"/",name:"Home",component:D},{path:"/import",name:"Import",component:Pt}],Dt=new m["a"]({mode:"history",base:"/",routes:Et}),Nt=Dt,Mt=n("2f62");o["default"].use(Mt["a"]);var Tt=new Mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Rt=n("ce5b"),Ut=n.n(Rt);o["default"].use(Ut.a);var Lt=new Ut.a({});o["default"].config.productionTip=!1,new o["default"]({router:Nt,store:Tt,vuetify:Lt,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.f5f52251.js.map