(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(9),i=n.n(r),a=(n(15),n(16),n(17),n(6)),j=n(2),o=n(8),l=n.n(o),b=n(10),u=n(4),h=n(1),d=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(u.a)(r,2),a=i[0],j=i[1],o=function(){j(!0),fetch("https://api.thecatapi.com/v1/images/search").then((function(e){return e.json()})).then((function(e){s(e[0].url),j(!1)}))},d=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("body",{url:n,vote:t}),e.next=3,fetch("https://aydang.cis188.org/api/vote",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({url:n,vote:t})});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(h.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[a?Object(h.jsx)("div",{className:"spinner-border text-primary"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:n,style:{height:"500px"},className:"img-fluid mb-2",alt:"(no anime yet...)"}),Object(h.jsx)("br",{}),n&&Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(h.jsx)("button",{className:"btn btn-dark mx-2",onClick:function(){d(1).then(o)},children:"\ud83d\ude3b"}),Object(h.jsx)("button",{className:"btn btn-light",onClick:function(){d(-1).then(o)},children:"\ud83d\ude3f"})]})]}),Object(h.jsx)("br",{})]})},f=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),i=Object(u.a)(r,2),a=i[0],j=i[1];return Object(c.useEffect)((function(){fetch("https://aydang.cis188.org/api/top").then((function(e){return e.json()})).then((function(e){var t=e.top;j(t),s(!1)}))}),[]),n?Object(h.jsx)("div",{className:"spinner-border text-primary"}):Object(h.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(h.jsx)("h1",{children:"top cats"}),a?Object(h.jsx)("div",{children:a.map((function(e,t){var n=e.url,c=e.votes;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h4",{children:[t+1,". With ",c," vote",1!==Math.abs(c)&&"s"]}),Object(h.jsx)("img",{src:n,alt:"...",style:{height:"250px"},className:"img-fluid mb-2"},n)]})}))}):Object(h.jsx)("div",{className:"spinner-border text-primary"})]})};var x=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(a.b,{to:"/generate",children:"Generate"})," |"," ",Object(h.jsx)(a.b,{to:"/top",children:"Most Popular"})]}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/generate",element:Object(h.jsx)(d,{})}),Object(h.jsx)(j.b,{path:"/top",element:Object(h.jsx)(f,{})}),Object(h.jsx)(j.b,{path:"*",element:Object(h.jsx)(j.a,{to:"/generate"})})]})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.aadd8891.chunk.js.map