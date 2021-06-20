/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.c0162b59.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/anime3.4438e506.png"},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(86),c=a(2),r=a.n(c),i=a(28),s=a.n(i),l=a(32),o=a(14),d=a(16),j=a(38),u=a(52),b=a.n(u),m=a(144),h=a(145),f=a(146),v=a(147),p=a(148),O=a(149),x=a(150),g=a(82),N=a(151),k=a(165),C=a(166),w=a(152),y=a(153),S=a(164),L=a(154),E=a(155),A=a(26),I=a(4),R=Object(c.createContext)({data:[],onSetData:function(){},onSearch:function(){}}),D=function(e){var t=e.children,a=r.a.useState([]),n=Object(d.a)(a,2),c=n[0],i=n[1],s=r.a.useState([]),l=Object(d.a)(s,2),o=l[0],j=l[1],u={data:c,onSetData:function(e){e&&(i(Object(A.a)(e)),j(Object(A.a)(e)))},onSearch:function(e){if(""===e)i(Object(A.a)(o));else{var t=null===o||void 0===o?void 0:o.filter((function(t){var a;return(null===t||void 0===t||null===(a=t.title)||void 0===a?void 0:a.toLowerCase().indexOf(null===e||void 0===e?void 0:e.toLowerCase()))>-1}));i(Object(A.a)(t))}}};return Object(I.jsx)(R.Provider,{value:u,children:t})};var T,B=function(e){var t=r.a.useState(!1),n=Object(d.a)(t,2),c=n[0],i=n[1],s=r.a.useState(!1),l=Object(d.a)(s,2),o=l[0],j=l[1],u=r.a.useState("navbar-transparent"),A=Object(d.a)(u,2),D=A[0],T=A[1],B=r.a.useContext(R).onSearch;r.a.useEffect((function(){return window.addEventListener("resize",F),function(){window.removeEventListener("resize",F)}}));var F=function(){window.innerWidth<993&&c?T("bg-white"):T("navbar-transparent")},W=function(){j(!o)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{className:b()("navbar-absolute",D),expand:"lg",children:Object(I.jsxs)(h.a,{fluid:!0,children:[Object(I.jsxs)("div",{className:"navbar-wrapper",children:[Object(I.jsx)("div",{className:b()("navbar-toggle d-inline",{toggled:e.sidebarOpened}),children:Object(I.jsxs)(f.a,{onClick:e.toggleSidebar,children:[Object(I.jsx)("span",{className:"navbar-toggler-bar bar1"}),Object(I.jsx)("span",{className:"navbar-toggler-bar bar2"}),Object(I.jsx)("span",{className:"navbar-toggler-bar bar3"})]})}),Object(I.jsx)(v.a,{style:{fontSize:30,fontWeight:"bold"},href:"#pablo",onClick:function(e){return e.preventDefault()},children:e.brandText})]}),Object(I.jsxs)(f.a,{onClick:function(){T(c?"navbar-transparent":"bg-white"),i(!c)},children:[Object(I.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"}),Object(I.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"}),Object(I.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"})]}),Object(I.jsx)(p.a,{navbar:!0,isOpen:c,children:Object(I.jsxs)(O.a,{className:"ml-auto",navbar:!0,children:[Object(I.jsx)(x.a,{className:"search-bar",children:Object(I.jsxs)(g.a,{color:"link",onClick:W,children:[Object(I.jsx)("i",{className:"tim-icons icon-zoom-split"}),Object(I.jsx)("span",{className:"d-lg-none d-md-block",children:"Search"})]})}),Object(I.jsxs)(N.a,{nav:!0,children:[Object(I.jsxs)(k.a,{caret:!0,color:"default",nav:!0,onClick:function(e){return e.preventDefault()},children:[Object(I.jsx)("div",{className:"photo",children:Object(I.jsx)("img",{alt:"...",src:a(104).default})}),Object(I.jsx)("b",{className:"caret d-none d-lg-block d-xl-block"}),Object(I.jsx)("p",{className:"d-lg-none",children:"Log out"})]}),Object(I.jsxs)(C.a,{className:"dropdown-navbar",right:!0,tag:"ul",children:[Object(I.jsx)(w.a,{tag:"li",children:Object(I.jsx)(y.a,{className:"nav-item",children:"Profile"})}),Object(I.jsx)(y.a,{divider:!0,tag:"li"}),Object(I.jsx)(w.a,{tag:"li",children:Object(I.jsx)(y.a,{className:"nav-item",children:"Log out"})})]})]}),Object(I.jsx)("li",{className:"separator d-lg-none"})]})})]})}),Object(I.jsx)(S.a,{modalClassName:"modal-search",isOpen:o,toggle:W,children:Object(I.jsxs)(L.a,{children:[Object(I.jsx)(E.a,{placeholder:"SEARCH",type:"text",onChange:function(e){var t=e.target;B(t.value)}}),Object(I.jsx)("button",{"aria-label":"Close",className:"close",onClick:W,children:Object(I.jsx)("i",{className:"tim-icons icon-simple-remove"})})]})})]})},F="primary",W="blue",z="green",P=Object(c.createContext)({color:W,changeColor:function(e){}});function _(e){var t=Object(o.g)(),a=r.a.useRef(null);r.a.useEffect((function(){return navigator.platform.indexOf("Win")>-1&&(T=new j.a(a.current,{suppressScrollX:!0,suppressScrollY:!1})),function(){navigator.platform.indexOf("Win")>-1&&T.destroy()}}));var n=e.routes,c=e.rtlActive,i=e.logo,s=null,d=null;return void 0!==i&&(void 0!==i.outterLink?(s=Object(I.jsx)("a",{href:i.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:e.toggleSidebar,children:Object(I.jsx)("div",{className:"logo-img",children:Object(I.jsx)("img",{src:i.imgSrc,alt:"react-logo"})})}),d=Object(I.jsx)("a",{href:i.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:e.toggleSidebar,children:i.text})):(s=Object(I.jsx)(l.b,{to:i.innerLink,className:"simple-text logo-mini",onClick:e.toggleSidebar,children:Object(I.jsx)("div",{className:"logo-img",children:Object(I.jsx)("img",{src:i.imgSrc,alt:"react-logo"})})}),d=Object(I.jsx)(l.b,{to:i.innerLink,className:"simple-text logo-normal",onClick:e.toggleSidebar,children:i.text}))),Object(I.jsx)(P.Consumer,{children:function(r){var i=r.color;return Object(I.jsx)("div",{className:"sidebar",data:i,children:Object(I.jsxs)("div",{className:"sidebar-wrapper",ref:a,children:[null!==s||null!==d?Object(I.jsxs)("div",{className:"logo",children:[s,d]}):null,Object(I.jsx)(O.a,{children:n.map((function(a,n){return a.redirect?null:Object(I.jsx)("li",{className:(r=a.path,(t.pathname===r?"active":"")+(a.pro?" active-pro":"")),children:Object(I.jsxs)(l.c,{to:a.path,className:"nav-link",activeClassName:"active",onClick:e.toggleSidebar,children:[Object(I.jsx)("i",{className:a.icon}),Object(I.jsx)("p",{children:c?a.rtlName:a.name})]})},n);var r}))})]})})}})}_.defaultProps={rtlActive:!1,routes:[{}]};var G=_,X=a(53),H=a(156),K="",M="white-content",Y=Object(c.createContext)({theme:K,changeTheme:function(){}});var q=function(e){var t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],c=a[1];return Object(I.jsx)("div",{className:"fixed-plugin",children:Object(I.jsxs)(X.a,{isOpen:n,toggle:function(){c(!n)},children:[Object(I.jsx)(k.a,{tag:"div",children:Object(I.jsx)("i",{className:"fa fa-cog fa-2x"})}),Object(I.jsxs)("ul",{className:"dropdown-menu show",children:[Object(I.jsx)("li",{className:"header-title",children:"SIDEBAR BACKGROUND"}),Object(I.jsx)("li",{className:"adjustments-line",children:Object(I.jsxs)("div",{className:"badge-colors text-center",children:[Object(I.jsx)(H.a,{color:"primary",className:e.bgColor===F?"active":"",onClick:function(){e.handleBgClick(F)}})," ",Object(I.jsx)(H.a,{color:"info",className:e.bgColor===W?"active":"",onClick:function(){e.handleBgClick(W)}})," ",Object(I.jsx)(H.a,{color:"success",className:e.bgColor===z?"active":"",onClick:function(){e.handleBgClick(z)}})," "]})}),Object(I.jsx)("li",{className:"adjustments-line text-center color-change",children:Object(I.jsx)(Y.Consumer,{children:function(e){var t=e.changeTheme;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("span",{className:"color-label",children:"LIGHT MODE"})," ",Object(I.jsx)(H.a,{className:"light-badge mr-2",onClick:function(){return t(M)}})," ",Object(I.jsx)(H.a,{className:"dark-badge ml-2",onClick:function(){return t(K)}})," ",Object(I.jsx)("span",{className:"color-label",children:"DARK MODE"})," "]})}})}),Object(I.jsx)("li",{className:"button-container"})]})]})})},J=a(23),Q=a.n(J),U=a(30),V=a(45);a(119),a(143);V.a.initializeApp({apiKey:"AIzaSyB4AMu_1aLw8klRQEtIY70XFlTPvfkTinQ",authDomain:"fir-d9861.firebaseapp.com",databaseURL:"https://fir-d9861.firebaseio.com",projectId:"fir-d9861",storageBucket:"fir-d9861.appspot.com",messagingSenderId:"936442884198",appId:"1:936442884198:web:c2fa1461ce725f1bf1bda7",measurementId:"G-FTXH1NGCS8"});var Z=V.a.firestore(),$=function(e){var t=e.update,a=e.dev,n=void 0===a?"riafy":a;Object(c.useEffect)((function(){var e=Z.collection("riafy-store").doc(n).onSnapshot((function(e){var a;t(null===e||void 0===e||null===(a=e.data())||void 0===a?void 0:a.apps)}));return function(){return e()}}),[n])},ee=a(157),te=a(158),ae=a(159),ne=a(160),ce=a(161),re=a(162),ie=a(163),se=a(46),le=a.n(se),oe=function(e){Object(c.useEffect)((function(){(function(){var t=Object(U.a)(Q.a.mark((function t(){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.a.get(e).catch((function(){}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[])},de="https://riafy-app-server.herokuapp.com/api/",je={base_url:de,riafyApi:de+"developers?devId=Riafy%20Technologies",rstreamApi:de+"developers?devId=Rstream%20Labs"};function ue(e){return be.apply(this,arguments)}function be(){return(be=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.a.get("".concat(je.base_url,"download?pack=").concat(t)).then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.result;window.open(a,"_self")})).catch((function(){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me,he=[{path:"/Riafy",name:"Riafy",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-chart-pie-36",component:function(e){var t=r.a.useState(""),n=Object(d.a)(t,2),c=n[0],i=n[1],s=r.a.useContext(R),l=s.data,o=s.onSetData;oe(je.riafyApi),$({update:function(e){return e&&o(Object(A.a)(e))},dev:"riafy"});var j=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(t),e.next=3,ue(t);case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=a(43);return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"content",children:[Object(I.jsxs)(ee.a,{tag:"h1",children:[l.length," apps"]}),Object(I.jsx)(te.a,{children:l.map((function(e,t){var a;return Object(I.jsx)(ae.a,{lg:"6",children:Object(I.jsxs)(ne.a,{className:"card-chart ",style:{display:"flex",flexDirection:"row"},children:[Object(I.jsx)(ce.a,{style:{textAlign:"center"},children:Object(I.jsx)("div",{className:"chart-area",style:{width:100,height:100,marginBottom:16},children:Object(I.jsx)("img",{src:(null===e||void 0===e?void 0:e.icon)?null===e||void 0===e?void 0:e.icon:u,alt:""})})}),Object(I.jsxs)(re.a,{children:[Object(I.jsx)(ee.a,{tag:"h3",children:(null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.length)>20?(null===e||void 0===e?void 0:e.title.slice(0,20))+"...":null===e||void 0===e?void 0:e.title}),Object(I.jsx)(ie.a,{children:null===e||void 0===e?void 0:e.appId}),c===e.appId?Object(I.jsx)(ie.a,{children:" Loading..."}):Object(I.jsx)(g.a,{onClick:function(){return j(null===e||void 0===e?void 0:e.appId)},children:"Download"})]})]})},t)}))})]})})},layout:"/"},{path:"/Rstream",name:"Rstream",rtlName:"\u0644\u0648\u062d\u0629",icon:"tim-icons icon-chart-pie-36",component:function(e){var t=r.a.useState(""),n=Object(d.a)(t,2),c=n[0],i=n[1],s=r.a.useContext(R),l=s.data,o=s.onSetData;oe(je.rstreamApi),$({update:function(e){return e&&o(Object(A.a)(e))},dev:"rstream"});var j=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(t),ue(t),i("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=a(43);return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"content",children:[Object(I.jsxs)(ee.a,{tag:"h1",children:[l.length," apps"]}),Object(I.jsx)(te.a,{children:l.map((function(e,t){var a;return Object(I.jsx)(ae.a,{lg:"6",children:Object(I.jsxs)(ne.a,{className:"card-chart ",style:{display:"flex",flexDirection:"row"},children:[Object(I.jsx)(ce.a,{style:{textAlign:"center"},children:Object(I.jsx)("div",{className:"chart-area",style:{width:100,height:100,marginBottom:16},children:Object(I.jsx)("img",{src:(null===e||void 0===e?void 0:e.icon)?null===e||void 0===e?void 0:e.icon:u,alt:""})})}),Object(I.jsxs)(re.a,{children:[Object(I.jsx)(ee.a,{tag:"h3",children:(null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.length)>20?(null===e||void 0===e?void 0:e.title.slice(0,20))+"...":null===e||void 0===e?void 0:e.title}),Object(I.jsx)(ie.a,{children:null===e||void 0===e?void 0:e.appId}),c===e.appId?Object(I.jsx)("div",{role:"status",className:"spinner-border",children:Object(I.jsx)("span",{style:{position:"relative"},className:"sr-only",children:"Loading..."})}):Object(I.jsx)(g.a,{onClick:function(){return j(null===e||void 0===e?void 0:e.appId)},children:"Download"})]})]})},t)}))})]})})},layout:"/"}],fe=a(43);var ve=function(e){var t=Object(o.g)(),a=r.a.useRef(null),n=r.a.useState(-1!==document.documentElement.className.indexOf("nav-open")),c=Object(d.a)(n,2),i=c[0],s=c[1];r.a.useEffect((function(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),me=new j.a(a.current,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),t=0;t<e.length;t++)me=new j.a(e[t])}return function(){navigator.platform.indexOf("Win")>-1&&(me.destroy(),document.documentElement.classList.add("perfect-scrollbar-off"),document.documentElement.classList.remove("perfect-scrollbar-on"))}})),r.a.useEffect((function(){if(navigator.platform.indexOf("Win")>-1)for(var e=document.querySelectorAll(".table-responsive"),t=0;t<e.length;t++)me=new j.a(e[t]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,a.current&&(a.current.scrollTop=0)}),[t]);var l=function(){document.documentElement.classList.toggle("nav-open"),s(!i)},u=function(e){for(var a=0;a<he.length;a++)if(-1!==t.pathname.indexOf(he[a].layout+he[a].path))return he[a].name;return"RIAFY"};return Object(I.jsx)(P.Consumer,{children:function(e){var n,c=e.color,s=e.changeColor;return Object(I.jsxs)(r.a.Fragment,{children:[Object(I.jsxs)("div",{className:"wrapper",children:[Object(I.jsx)(G,{routes:he,logo:{outterLink:"/",text:"Riafy Store",imgSrc:fe.default},toggleSidebar:l}),Object(I.jsxs)("div",{className:"main-panel",ref:a,data:c,children:[Object(I.jsx)(B,{brandText:u(t.pathname),toggleSidebar:l,sidebarOpened:i}),Object(I.jsxs)(o.d,{children:[(n=he,n.map((function(e,t){return"/"===e.layout?Object(I.jsx)(o.b,{path:e.path,component:e.component},t):null}))),Object(I.jsx)(o.a,{from:"*",to:"/Riafy"})]})]})]}),Object(I.jsx)(q,{bgColor:c,handleBgClick:s})]})}})};a(138),a(139),a(140),a(141);function pe(e){var t=Object(c.useState)(K),a=Object(d.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){switch(n){case M:document.body.classList.add("white-content");break;case K:default:document.body.classList.remove("white-content")}}),[n]),Object(I.jsx)(Y.Provider,{value:{theme:n,changeTheme:function(e){r(e)}},children:e.children})}function Oe(e){var t=Object(c.useState)(W),a=Object(d.a)(t,2),n=a[0],r=a[1];return Object(I.jsx)(P.Provider,{value:{color:n,changeColor:function(e){r(e)}},children:e.children})}s.a.render(Object(I.jsx)(D,{children:Object(I.jsx)(pe,{children:Object(I.jsx)(Oe,{children:Object(I.jsx)(l.a,{children:Object(I.jsx)(o.d,{children:Object(I.jsx)(o.b,{path:"/",render:function(e){return Object(I.jsx)(ve,Object(n.a)({},e))}})})})})})}),document.getElementById("root"))},43:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/react-logo.561f1671.png"}},[[142,1,2]]]);
//# sourceMappingURL=main.c0162b59.chunk.js.map