(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{147:function(e,t,a){e.exports={container:"create_container__cN2GE",input_container:"create_input_container__3yNmK",textarea:"create_textarea___6nxt",btn:"create_btn__3sDMs"}},154:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a.n(n),c=a(39),l=a(14),i=a(0),u=a.n(i),s=a(147),o=a.n(s),p=a(40),m=a(15),d=a(3),b=a(53),f=a.n(b),v=a(55),h=a.n(v);t.default=function(){var e=Object(i.useContext)(m.a),t=Object(d.g)(),a=Object(i.useState)(""),n=Object(l.a)(a,2),s=n[0],b=n[1],v=Object(i.useState)(""),x=Object(l.a)(v,2),j=x[0],E=x[1],O=Object(i.useState)(""),g=Object(l.a)(O,2),_=g[0],N=g[1],k=Object(i.useState)(""),w=Object(l.a)(k,2),y=w[0],S=w[1],C=Object(i.useState)(""),q=Object(l.a)(C,2),F=q[0],T=q[1],D=Object(p.a)().request;Object(i.useEffect)((function(){window.M.updateTextFields()}),[]);var J=function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),a.prev=1,!(F.length>=216)){a.next=6;break}alert("\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 215 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),a.next=10;break;case 6:return a.next=8,D("/api/resources/generate","POST",{imgUrl:j,title:s,text:_,link:y,description:F},{Authorization:"Bearer ".concat(e.token)});case 8:c=a.sent,t.push("/resources/".concat(c.resource._id));case 10:a.next=14;break;case 12:a.prev=12,a.t0=a.catch(1);case 14:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}();return u.a.createElement("div",{className:"row ".concat(o.a.container)},u.a.createElement("div",{className:"col l6 offset-l3 col m8 offset-m2 col s12"},u.a.createElement("form",{onSubmit:J},u.a.createElement("div",{className:"input-field ".concat(o.a.input_container)},u.a.createElement("label",{htmlFor:"title"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Url \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),u.a.createElement("input",{placeholder:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"validate",id:"image",type:"text",value:j,onChange:function(e){return E(e.target.value)},required:!0})),u.a.createElement("div",{className:"input-field ".concat(o.a.input_container)},u.a.createElement("label",{htmlFor:"title"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),u.a.createElement("input",{placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",className:"validate",id:"title",type:"text",value:s,onChange:function(e){return b(e.target.value)},required:!0})),u.a.createElement("div",{className:"input-field ".concat(o.a.input_container)},u.a.createElement("label",{htmlFor:"description"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),u.a.createElement("input",{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",className:"validate",id:"description",type:"text",value:F,onChange:function(e){return T(e.target.value)},required:!0})),u.a.createElement("div",{className:"input-field ".concat(o.a.input_container)},u.a.createElement("label",{htmlFor:"text",className:o.a.textarea_label},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"),u.a.createElement(f.a,{onChange:function(e,t){var a=t.getData();N(a)},className:o.a.textarea,editor:h.a,id:"text",name:"text",value:_,required:!0})),u.a.createElement("div",{className:"input-field ".concat(o.a.input_container)},u.a.createElement("label",{htmlFor:"link"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0421\u0441\u044b\u043b\u043a\u0443"),u.a.createElement("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430",className:"validate",id:"link",type:"text",value:y,onChange:function(e){return S(e.target.value)}})),u.a.createElement("button",{type:"submit",className:o.a.btn},"Submit"))))}},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(38),r=a.n(n),c=a(39),l=a(14),i=a(0),u=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(i.useState)(null),s=Object(l.a)(u,2),o=s[0],p=s[1];return{loading:a,request:Object(i.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,l,i,u,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",c=s.length>2&&void 0!==s[2]?s[2]:null,l=s.length>3&&void 0!==s[3]?s[3]:{},n(!0),e.prev=4,c&&(c=JSON.stringify(c),l["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:c,headers:l});case 8:return i=e.sent,e.next=11,i.json();case 11:if(u=e.sent,i.ok){e.next=14;break}throw new Error(u.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return n(!1),e.abrupt("return",u);case 18:throw e.prev=18,e.t0=e.catch(4),n(!1),p(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(i.useCallback)((function(){return p(null)}),[])}}}}]);
//# sourceMappingURL=14.cce4cca5.chunk.js.map