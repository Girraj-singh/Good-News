(this["webpackJsonpinshort-clone"]=this["webpackJsonpinshort-clone"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(7),r=n.n(s),i=(n(72),n(42)),o=n.n(i),l=n(54),j=n(25),u=n(55),b=n.n(u),d=(n(92),n(137)),h=(n(93),n(94),n(2)),O=function(e){var t=e.newsItem;console.log(t);var n=new Date(t.publishedAt).toString().split(" "),a=parseInt(n[4].substring(0,2)),c=a>12;return Object(h.jsxs)("div",{className:"newsCard",children:[Object(h.jsx)("img",{alt:t.title,src:t.urlToImage?t.urlToImage:"http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1",className:"newsImage"}),Object(h.jsxs)("div",{className:"newsText",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"title",children:t.title}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"author",children:[Object(h.jsx)("a",{href:t.url,target:"__blank",children:Object(h.jsx)("b",{children:"short "})})," ",Object(h.jsxs)("span",{className:"muted",children:[" ","by ",t.author?t.author:"unknown"," /"," ",c?"".concat(a-12,":").concat(n[4].substring(3,5)," pm"):"".concat(a,":").concat(n[4].substring(3,5)," am")," ","on ",n[2]," ",n[1]," ",n[3],", ",n[0]]})]})]}),Object(h.jsxs)("div",{className:"lowerNewsText",children:[Object(h.jsx)("div",{className:"description",children:t.description}),Object(h.jsxs)("span",{className:"readmore",children:["read more at"," ",Object(h.jsx)("a",{href:t.url,target:"__blank",className:"source",children:Object(h.jsx)("b",{children:t.source.name})})]})]})]})]})},x=function(e){var t=e.newsArray;e.newResult;return Object(h.jsxs)(d.a,{maxWidth:"md",children:[Object(h.jsx)("div",{className:"content"}),t.map((function(e){return Object(h.jsx)(O,{newsItem:e},e.title)}))]})},m=n(39),f=n(43),p=n(4),g=n(143),w=n(62),v=n(145),y=n(139),F=n(146),N=n(144),D=n(140),k=n(142),C=n(141),I=n(147),S=n(61),T=n.n(S),P=["business","entartaintment","general","health","science","sports","technology"],R=Object(y.a)({list:{width:200},fullList:{width:"auto"}});function L(e){var t=e.setCategory,n=R(),a=c.a.useState({left:!1}),s=Object(j.a)(a,2),r=s[0],i=s[1],o=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&i(Object(f.a)(Object(f.a)({},r),{},Object(m.a)({},e,t)))}},l=function(e){return Object(h.jsxs)("div",{className:Object(p.a)(n.list,{}),role:"presentation",onClick:o(e,!1),onKeyDown:o(e,!1),children:[Object(h.jsx)(D.a,{children:Object(h.jsx)(C.a,{children:"Categories"})}),Object(h.jsx)(k.a,{}),Object(h.jsx)(D.a,{children:P.map((function(e,n){return Object(h.jsx)(C.a,{style:{height:"40px",borderRadius:"3px"},button:!0,onClick:function(){t(e)},children:Object(h.jsx)(I.a,{primary:e})},e)}))})]})},u=Object(g.a)("(prefers-color-scheme: dark)"),b=c.a.useMemo((function(){return Object(w.a)({palette:{type:"dark"}})}),[u]);return Object(h.jsx)("div",{children:["left"].map((function(e){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(N.a,{onClick:o(e,!0),children:Object(h.jsx)(T.a,{})}),Object(h.jsx)(v.a,{theme:b,children:Object(h.jsx)(F.a,{anchor:e,open:r[e],onClose:o(e,!1),children:l(e)})})]},e)}))})}n(104);var _=function(e){var t=e.setCategory;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"Nav",children:[Object(h.jsx)(L,{setCategory:t}),Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("h1",{children:"Pheonix"})})]})})};n(105);var A=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("span",{className:"name",children:["Pheonix made by-"," ",Object(h.jsx)("a",{href:"https://www.linkedin.com/in/durga-nand-choudhary-3251641b6/",className:"",children:"Durga Nand Choudhary"})]})})};var E=function(){var e=Object(a.useState)("general"),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(j.a)(s,2),i=r[0],u=r[1],d=Object(a.useState)(),O=Object(j.a)(d,2),m=O[0],f=O[1],p=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://newsapi.org/v2/top-headlines?country=in&category=".concat(n,"&apiKey=").concat("2aa14a6707394f7f9359fb52cd3def72"));case 3:t=e.sent,u(t.data.articles),f(t.data.totalResults),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[m,n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{setCategory:c}),Object(h.jsx)(x,{newResult:m,newsArray:i}),Object(h.jsx)(A,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),M()},72:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.ec11926b.chunk.js.map