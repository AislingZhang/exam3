(function(e){function t(t){for(var n,l,i=t[0],s=t[1],u=t[2],c=0,b=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"da1e6e15"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,o[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},2881:function(e,t,o){},"32e0":function(e,t,o){"use strict";var n=o("2881"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("音乐专辑管理")]),e._v("| "),o("router-link",{attrs:{to:"/about"}},[e._v("爬虫程序")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("存入程序")]),e._v(" | "),o("router-link",{attrs:{to:"/mocha"}},[e._v("mocha测试")]),e._v(" | "),o("router-link",{attrs:{to:"/httptest"}},[e._v("音乐专辑接口测试")])],1),o("router-view")],1)},a=[],l=(o("034f"),o("2877")),i={},s=Object(l["a"])(i,r,a,!1,null,null,null),u=s.exports,c=(o("d3b7"),o("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),e._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},h=d,v=(o("32e0"),Object(l["a"])(h,f,m,!1,null,"0b11c2c6",null)),_=v.exports,k={name:"home",components:{HelloWorld:_}},g=k,y=Object(l["a"])(g,p,b,!1,null,null,null),j=y.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("这是一段信息")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),o("h1",[e._v("音乐专辑管理")]),o("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.book}},[o("el-form-item",{attrs:{label:"唱片ID"}},[o("el-input",{attrs:{type:"number",placeholder:"请输入id,7位数字"},model:{value:e.book.album_id,callback:function(t){e.$set(e.book,"album_id",t)},expression:"book.album_id"}})],1),o("el-form-item",{attrs:{label:"唱片名称"}},[o("el-input",{attrs:{placeholder:"请输入唱片名"},model:{value:e.book.album_name,callback:function(t){e.$set(e.book,"album_name",t)},expression:"book.album_name"}})],1),o("el-form-item",{attrs:{label:"唱片价格"}},[o("el-input",{attrs:{type:"number",placeholder:"请输入价格"},model:{value:e.book.price,callback:function(t){e.$set(e.book,"price",e._n(t))},expression:"book.price"}})],1),o("el-form-item",{attrs:{label:"发行时间"}},[o("el-input",{attrs:{placeholder:"请输入发行时间"},model:{value:e.book.public_time,callback:function(t){e.$set(e.book,"public_time",t)},expression:"book.public_time"}})],1),o("el-form-item",{attrs:{label:"发行周"}},[o("el-input",{attrs:{type:"number",placeholder:"请输入周期"},model:{value:e.book.week,callback:function(t){e.$set(e.book,"week",e._n(t))},expression:"book.week"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.addBook}},[e._v("添加唱片")])],1)],1),o("el-table",{staticStyle:{width:"80%"},attrs:{data:e.books}},[o("el-table-column",{attrs:{prop:"album_id",label:"唱片ID",width:"180"}}),o("el-table-column",{attrs:{prop:"album_name",label:"唱片名称",width:"300"}}),o("el-table-column",{attrs:{prop:"price",label:"唱片价格"}}),o("el-table-column",{attrs:{prop:"singers",label:"歌手名"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("详细内容")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("编辑")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("追加歌手")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return e.deleteBook(t)}}},[e._v("删除")])]}}])})],1),o("h2",[e._v("总价格： "+e._s(e.priceTotal))])],1)},x=[],E=(o("c740"),o("13d5"),o("a434"),{name:"BookManger",created:function(){var e=this;fetch(this.url,{type:"GET"}).then((function(e){return e.json()})).then((function(t){return e.books=t}))},data:function(){return{url:"http://localhost:3000/books",maxId:2,book:{album_name:"",price:"",singers:""},dialogVisible:!1,books:[]}},methods:{deleteBook:function(e){var t=this,o=e.row;fetch(this.url+"/"+o._id,{method:"DELETE"}).then((function(e){return e.json()})).then((function(){var e=t.books.findIndex((function(e){return e._id==o._id}));t.books.splice(e,1)}))},addBook:function(){var e=this;fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.book)}).then((function(e){return e.json()})).then((function(t){return e.books.push(t)}))},handleClose:function(){console.log(123)}},computed:{priceTotal:function(){return this.books.reduce((function(e,t){return e+t.price}),0)}}}),O=E,$=Object(l["a"])(O,w,x,!1,null,"ae36b13e",null),C=$.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"about"},[o("h1",[e._v("Mocha测试代码")]),o("pre",[e._v("    const mongoose=require('mongoose')\n    require('../model')\n    let bookDao=require('../dao/BookDao');\n    const assert=require('assert')\n\n    describe(\"测试BookDao\",function () {\n    before(function () {\n    mongoose.connect('mongodb://39.99.192.85:27017/demo01',function (err) {\n\n    })\n    })\n    after(function () {\n    mongoose.disconnect()\n    })\n\n    it(\"测试添加一张唱片\",function (done) {\n    let book={album_id: \"3751222\", album_name: \"测试唱片\"}\n    bookDao.addBook(book,function (nb) {\n\n    assert.ok(nb._id!=null)\n    done()\n    })\n    })\n    it('测试查询所有唱片',function (done) {\n    bookDao.findAllBooks(function (books) {\n    assert.ok(books.length>0)\n    books.forEach(book=>console.log(book._id))\n    done()\n    })\n    })\n    it(\"测试删除唱片\",function (done) {\n    bookDao.deleteBook(\"5e1683b9ccec4914dc8d2fdc\",function ({}) {\n    console.log({})\n    done()\n    })\n    })\n\n\n    })\n        ")])])}],D={name:"mocha"},S=D,B=Object(l["a"])(S,T,P,!1,null,"78eeb623",null),V=B.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"about"},[o("h1",[e._v("音乐接口测试代码")]),o("pre",[e._v('   GET http://39.99.192.85:3000/books\n   Accept: application/json\n\n    ###\n\n    POST http://39.99.192.85:3000/books\n    Content-Type: application/json\n\n    {\n      "album_id": 3751333,\n      "album_name": "测试唱片9",\n      "price": 888\n    }\n\n    ###\n\n    DELETE http://39.99.192.85:3000/books/5e1693d6a54cb3155c1aa8af\n    Accept: application/json\n\n    ###\n\n        ')])])}],L={name:"mocha"},q=L,z=Object(l["a"])(q,M,I,!1,null,"b00073f8",null),A=z.exports;n["default"].use(c["a"]);var W=[{path:"/",name:"bookManager",component:C},{path:"/httptest",name:"httptest",component:A},{path:"/mocha",name:"mocha",component:V},{path:"/home",name:"home",component:j},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],H=new c["a"]({mode:"hash",base:"/",routes:W}),J=H,F=o("5c96"),G=o.n(F);o("0fae");n["default"].config.productionTip=!1,n["default"].use(G.a),new n["default"]({router:J,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.652154f0.js.map