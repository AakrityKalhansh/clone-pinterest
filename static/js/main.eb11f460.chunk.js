(this["webpackJsonpclone-pinterest"]=this["webpackJsonpclone-pinterest"]||[]).push([[0],{60:function(n,e,t){},61:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var c,r,o,i,a,s,j,l,u=t(0),b=t.n(u),d=t(17),x=t.n(d),h=(t(60),t(33)),p=t(31),O=(t(61),t(4)),f=t(5),g=t(44),v=t.n(g),m=t(100),y=t(45),w=t.n(y),k=t(46),C=t.n(k),S=t(48),F=t.n(S),z=t(47),P=t.n(z),E=t(49),I=t.n(E),J=t(2);var D,L,M=function(n){var e=Object(u.useState)(""),t=Object(p.a)(e,2),c=t[0],r=t[1];return Object(J.jsxs)(T,{children:[Object(J.jsx)(A,{children:Object(J.jsx)(m.a,{children:Object(J.jsx)(v.a,{})})}),Object(J.jsx)(H,{children:Object(J.jsx)("a",{href:"/",children:"HomePage"})}),Object(J.jsx)(N,{children:Object(J.jsx)("a",{href:"/",children:"Following"})}),Object(J.jsx)(R,{children:Object(J.jsxs)(q,{children:[Object(J.jsx)(m.a,{children:Object(J.jsx)(w.a,{})}),Object(J.jsxs)("form",{children:[Object(J.jsx)("input",{type:"text",onChange:function(n){return r(n.target.value)}}),Object(J.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),n.onSubmit(c)}})]})]})}),Object(J.jsxs)(Q,{children:[Object(J.jsx)(m.a,{children:Object(J.jsx)(C.a,{})}),Object(J.jsx)(m.a,{children:Object(J.jsx)(P.a,{})}),Object(J.jsx)(m.a,{children:Object(J.jsx)(F.a,{})}),Object(J.jsx)(m.a,{children:Object(J.jsx)(I.a,{})})]})]})},T=f.a.div(c||(c=Object(O.a)(["\ndisplay:flex;\nalign-items: center;\nheigth: 56px;\npadding: 12px 4px 4px 16px;\nbackground-color: white;\ncolor: black;\n"]))),A=f.a.div(r||(r=Object(O.a)(["\n.MuiSvgIcon-root {\n    color: #e60023;\n    font-size: 32px;\n    cursor: pointer;\n}\n"]))),B=f.a.div(o||(o=Object(O.a)(["\ndisplay: flex;\nheight: 48px;\nmin-width: 123px;\nalign-items: center;\njustify-content: center;\nborder-radius: 24px;\ncursor: pointer;\n"]))),H=Object(f.a)(B)(i||(i=Object(O.a)(["\nbackground-color: rgb(17, 17, 17);\n\na{\n    text-decoration: none;\n    color: white;\n    font-weight: 700;\n}\n"]))),N=Object(f.a)(B)(a||(a=Object(O.a)(["\nbackground-color: white;\n\na{\n    text-decoration: none;\n    color: black;\n    font-weight: 700;\n}\n:hover {\n    background-color: #e1e1e1;\n}\n"]))),R=f.a.div(s||(s=Object(O.a)([" \n    flex: 1;\n "]))),q=f.a.div(j||(j=Object(O.a)(["\n    background-color: #efefef;\n    display: flex;\n    heigth: 58px;\n    width: 100%;\n    border-radius: 50px;\n    border: none;\n    padding-left: 10px;\n\n    form {\n        display: flex;\n        flex: 1;\n    }\n\n    form > input {\n        background-color:transparent;\n        border: none;\n        width: 100%;\n        margin-left: 5px;\n        font-size: 16px;\n    }\n\n    form > button {\n        display: none;\n    }\n\n    input:focus {\n        outline: none;\n    }\n"]))),Q=f.a.div(l||(l=Object(O.a)([""])));var U,V,Y=function(n){var e=n.urls;return Object(J.jsx)(Z,{children:Object(J.jsx)(_,{children:Object(J.jsx)("img",{src:null===e||void 0===e?void 0:e.regular,alt:"pin"})})})},Z=f.a.div(D||(D=Object(O.a)(["\n    display: inline-flex;\n    padding: 8px;\n"]))),_=f.a.div(L||(L=Object(O.a)(["\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    cursor: pointer;\n    width: 236px;\n\n    img{\n        display: flex;\n        width: 100%;\n        cursor: zoom-in;\n        border-radius: 16px;\n        object-fit: cover;\n    }\n"])));var G=function(n){var e=n.pins;return console.log(e),Object(J.jsx)(K,{children:Object(J.jsx)(W,{children:e.map((function(n,e){var t=n.urls;return Object(J.jsx)(Y,{urls:t},e)}))})})},K=f.a.div(U||(U=Object(O.a)(["\n    background-color: white;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    margin-top: 15px;\n    justify-content: center;\n"]))),W=f.a.div(V||(V=Object(O.a)(["\n  \n    column-count: 5;\n    column-gap:10px;\n    margin: 0 auto;\n    height:100%;\n    max-width: 1260px;\n    background-color: white;\n"]))),X=t(53),$=t.n(X).a.create({baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID jFdNg1c1MO7uVvtm_y-1xZctCtH5RYyjgJPpgJoQArE"}});var nn=function(){var n=Object(u.useState)([]),e=Object(p.a)(n,2),t=e[0],c=e[1],r=function(n){return $.get("https://api.unsplash.com/search/photos",{params:{query:n}})};return Object(u.useEffect)((function(){!function(){var n=[],e=[];["ocean","Tokyo","dogs","cats"].forEach((function(t){n.push(r(t).then((function(n){var t=n.data.results;(e=e.concat(t)).sort((function(n,e){return.5}))})))})),Promise.all(n).then((function(){c(e)}))}()}),[]),Object(J.jsxs)("div",{className:"app",children:[Object(J.jsx)(M,{onSubmit:function(n){console.log("on search submit",n),r(n).then((function(n){var e=n.data.results,r=[].concat(Object(h.a)(e),Object(h.a)(t));r.sort((function(n,e){return.5})),c(r)}))}}),Object(J.jsx)(G,{pins:t})]})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),o(n),i(n)}))};x.a.render(Object(J.jsx)(b.a.StrictMode,{children:Object(J.jsx)(nn,{})}),document.getElementById("root")),en()}},[[85,1,2]]]);
//# sourceMappingURL=main.eb11f460.chunk.js.map