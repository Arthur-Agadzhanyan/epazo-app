(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"DetailPage",(function(){return E}));var n=a(38),r=a.n(n),c=a(39),s=a(14),l=a(0),i=a.n(l),o=a(3),u=a(40),m=a(11),p=a(51),b=a.n(p),d=a(60),_=a.n(d),f=a(42),v=function(e){var t=e.post;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement(f.a,{title:t.title,description:t.description}),i.a.createElement("div",{className:"container ".concat(b.a.mb_container)},i.a.createElement("h2",{className:b.a.title},t.title),i.a.createElement("p",{className:b.a.post__date},i.a.createElement("strong",null,new Date(t.date).toUTCString()))),i.a.createElement("div",{className:"container ".concat(b.a.mb_container)},i.a.createElement("div",{className:"row"},i.a.createElement("img",{className:"".concat(b.a.img),src:t.imgUrl,alt:t.title}))),i.a.createElement("div",{className:"container ".concat(b.a.mb_container)},i.a.createElement("div",{className:b.a.text},_()(t.text)))))},E=function(){var e=Object(l.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],p=Object(o.h)().id,b=Object(u.a)(),d=b.request,_=b.loading,f=Object(l.useCallback)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/api/post/".concat(p),"GET",null);case 3:t=e.sent,n(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[p,d]);return Object(l.useEffect)((function(){f()}),[f]),_?i.a.createElement(m.a,null):i.a.createElement(i.a.Fragment,null,!_&&a&&i.a.createElement(v,{post:a}))}},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(38),r=a.n(n),c=a(39),s=a(14),l=a(0),i=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(null),o=Object(s.a)(i,2),u=o[0],m=o[1];return{loading:a,request:Object(l.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,s,l,i,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",c=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{},n(!0),e.prev=4,c&&(c=JSON.stringify(c),s["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:c,headers:s});case 8:return l=e.sent,e.next=11,l.json();case 11:if(i=e.sent,l.ok){e.next=14;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return n(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),n(!1),m(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(l.useCallback)((function(){return m(null)}),[])}}},42:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(44);t.a=function(e){var t=e.title,a=e.description;return r.a.createElement(c.a,null,r.a.createElement("title",null,t," | Epazo"),r.a.createElement("meta",{name:"description",content:"".concat(a)}))}},51:function(e,t,a){e.exports={text:"post_text__1VYUo","browser-default":"post_browser-default__21ObP",title:"post_title__i0-vB",post__date:"post_post__date__1F2iE",img:"post_img__2kYK0",mb_container:"post_mb_container__3a2r9"}},72:function(e,t){}}]);
//# sourceMappingURL=10.66f7189b.chunk.js.map