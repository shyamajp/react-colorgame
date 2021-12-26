(this["webpackJsonpreact-colorgame"]=this["webpackJsonpreact-colorgame"]||[]).push([[0],{185:function(e,t,a){e.exports=a(328)},193:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"startTimer",(function(){return E})),a.d(n,"stopTimer",(function(){return g})),a.d(n,"resetTimer",(function(){return f})),a.d(n,"changeBoxState",(function(){return b})),a.d(n,"resetBoxState",(function(){return p})),a.d(n,"changeLanguage",(function(){return v})),a.d(n,"changeDisplayMode",(function(){return N}));a(186);var r=a(0),c=a.n(r),l=a(34),i=a.n(l),o=a(21),s=a(62),m=a(173),u=(a(193),a(55)),d=a(16),h=a(37),E=function(){return function(e){e({type:"start_timer",payload:(new Date).getTime()})}},g=function(){return function(e){e({type:"stop_timer",payload:(new Date).getTime()})}},f=function(){return function(e){e({type:"reset_timer"})}},b=function(e){return function(t){t({type:"changeBoxState",payload:e})}},p=function(){return function(e){e({type:"resetBoxState"})}},v=function(e){return function(t){t({type:"changeLanguage",payload:e})}},N=function(){return function(e){e({type:"changeDisplayMode"})}},y=Object(o.b)((function(e){return e}),n)((function(e){var t=Object(r.useState)(0),a=Object(h.a)(t,2),n=a[0],l=a[1];return Object(r.useEffect)((function(){var t;return e.timer.startAt&&e.timer.endAt?clearInterval(t):e.timer.startAt&&!e.timer.endAt?t=setInterval((function(){var t=(((new Date).getTime()-e.timer.startAt)/1e3).toFixed(1);l(t)}),100):l((0).toFixed(1)),function(){return clearInterval(t)}}),[e.timer.startAt,e.timer.endAt]),c.a.createElement("div",{className:"ui column centered grid secondary menu mt-s"},c.a.createElement("li",{className:"neumorphic-box"},e.timer.startAt?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"clock icon"}),n):c.a.createElement(u.b,{to:"/"},c.a.createElement("i",{className:"gamepad icon"}),"Play")),c.a.createElement("li",{className:"neumorphic-box"},c.a.createElement(u.b,{to:"/about"},c.a.createElement("i",{className:"info circle icon"}),"About")),c.a.createElement("li",{className:"neumorphic-box"},c.a.createElement(u.b,{to:"/settings"},c.a.createElement("i",{className:"settings icon"}),"Settings")))})),j=Object(o.b)(null,n)((function(e){var t=e.startGame,a=e.resetBoxState,n=Object(r.useState)(3),l=Object(h.a)(n,2),i=l[0],o=l[1];return Object(r.useEffect)((function(){a(),0===i&&t();var e=setInterval((function(){o((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}),[i,t,a]),c.a.createElement("div",{className:"parent"},c.a.createElement("h1",{className:"ui header child"},i),c.a.createElement("div",{className:"spin child"}))})),O=function(e){var t=e.loadGame;return c.a.createElement("div",{className:"w100"},c.a.createElement("h2",{className:"ui header"},c.a.createElement("i",{className:"ui icon question circle"}),c.a.createElement("div",{className:"content"},"How to play")),c.a.createElement("h3",{className:"ui block header"},"Rules"),c.a.createElement("h2",{className:"ui header center aligned"},"Find Lightest Color!"),c.a.createElement("h4",{className:"ui header center aligned"},"Be accurate and quick."),c.a.createElement("br",null),c.a.createElement("div",{className:"ui column centered grid"},c.a.createElement("li",{className:"neumorphic-box",onClick:function(){t()}},c.a.createElement("i",{className:" power icon"}),"Start")))},x=a(5),w=a.n(x),S=Object(o.b)((function(e){return{box:e.box}}),n)((function(e){var t=e.id,a=e.deleted,n=e.color,r=e.changeBoxState;return c.a.createElement("div",{className:w()({box:!0,deleted:a}),style:{backgroundColor:n},onClick:function(){return r(t)}})})),k=Object(o.b)((function(e){return{box:e.box}}),n)((function(e){Object(r.useEffect)((function(){!0===e.box.find((function(t){return t.id===e.box.length-1})).deleted&&e.finishGame()}),[e]);var t=e.box.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,deleted:e.deleted,color:e.color})}));return c.a.createElement("div",{id:"game",className:"w100"},t)})),A=a(109),T="https://shyamajp.github.io/react-colorgame/",M=function(e){return{url:T,shareText:"I played ColorGame! Time:".concat(e,"(s) at")}},G=Object(o.b)((function(e){return{timer:e.timer}}))((function(e){var t=e.timer,a=e.restartGame,n=Object(r.useState)(null),l=Object(h.a)(n,2),i=l[0],o=l[1],s=(new Date).toString();return Object(r.useEffect)((function(){return o((t.endAt-t.startAt)/1e3),function(){o(null)}}),[t]),c.a.createElement("div",{className:"ui column"},c.a.createElement("div",{className:"ui card grid centered row"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"YOUR FINAL SCORE"),c.a.createElement("div",{className:"meta"},s),c.a.createElement("div",{className:"description"},c.a.createElement("table",{className:"w100"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Mode"),c.a.createElement("td",null,"EASY")),c.a.createElement("tr",null,c.a.createElement("td",null,"Missed"),c.a.createElement("td",null,"-")),c.a.createElement("tr",null,c.a.createElement("td",null,"Time"),c.a.createElement("td",null,i,"s"))))))),c.a.createElement("div",{className:"ui grid row centered mt-l"},c.a.createElement("li",{className:"neumorphic-box",onClick:function(){return a()}},c.a.createElement("i",{className:"power icon"}),"Restart")),c.a.createElement("div",{className:"ui grid row centered"},c.a.createElement("li",{className:"neumorphic-box"},c.a.createElement("i",{className:"twitter icon"}),c.a.createElement(A.Twitter,{url:M(i).url,shareText:M(i).shareText})),c.a.createElement("li",{className:"neumorphic-box"},c.a.createElement("i",{className:"facebook icon"}),c.a.createElement(A.Facebook,{url:T}))))})),C=0,D=1,B=2,I=3,R=Object(o.b)(null,n)((function(e){var t=e.startTimer,a=e.stopTimer,n=e.resetTimer,l=Object(r.useState)(C),i=Object(h.a)(l,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){return function(){s(C),n()}}),[n]),o===C?c.a.createElement(O,{loadGame:function(){return s(D)}}):o===D?c.a.createElement(j,{startGame:function(){t(),s(B)}}):o===B?c.a.createElement(k,{finishGame:function(){a(),s(I)}}):o===I?c.a.createElement(G,{restartGame:function(){n(),s(C)}}):void 0})),F=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",{align:"center"},c.a.createElement("small",null,"Copyright \xa9 ",e," shyamajp. All Rights Reserved."))},q=a(339),L=a(338),_=[{short:"en",long:"English"},{short:"jp",long:"\u65e5\u672c\u8a9e"}],H=Object(o.b)((function(e){return{settings:e.settings}}),n)((function(e){Object(r.useEffect)((function(){return e.settings.nightMode?document.querySelector("html").setAttribute("data-theme","dark"):document.querySelector("html").setAttribute("data-theme","normal"),"en"===e.settings.language?document.querySelector("html").setAttribute("lang","en"):document.querySelector("html").setAttribute("lang","jp"),function(){}}),[e]);var t=_.map((function(t){return c.a.createElement(q.a.Field,{key:t.long},c.a.createElement(L.a,{radio:!0,disabled:"en"!==t.short,label:t.long,name:"lang",value:t.short,checked:e.settings.language===t.short,onChange:function(){return e.changeLanguage(t.short)}}))}));return c.a.createElement("div",{className:"w100"},c.a.createElement("h2",{className:"ui header"},c.a.createElement("i",{className:"ui icon settings"}),c.a.createElement("div",{className:"content"},"Settings")),c.a.createElement("h3",{className:"ui block header"},"Display Mode"),c.a.createElement("div",null,c.a.createElement("h5",null,"Night Mode: ",e.settings.nightMode?"ON":"OFF"),c.a.createElement(L.a,{toggle:!0,onChange:function(){return e.changeDisplayMode()},checked:e.settings.nightMode})),c.a.createElement("h3",{className:"ui block header"},"Display Language"),c.a.createElement(q.a,null,t))})),U=function(){return c.a.createElement("div",{className:"w100"},c.a.createElement("div",null,c.a.createElement("h2",{className:"ui header"},c.a.createElement("i",{className:"ui icon info circle"}),c.a.createElement("div",{className:"content"},"About")),c.a.createElement("h3",{className:"ui block header"},"ColorGame"),c.a.createElement("p",null,"ColorGame is a simple color game developed by ",c.a.createElement("a",{href:"https://github.com/shyamajp"},"shyamajp"),". The objective of ColorGame is to find the lightest color as quickly as possible. Setting aside the primary use of the app, players can make use of its content as a test - if your monitor displays clear colors or even better, for a quick eye test."),c.a.createElement("h3",{className:"ui block header"},"Technologies"),c.a.createElement("div",null,"Technologies that have been used to develop this app are the followings:",c.a.createElement("br",null),c.a.createElement("div",{className:"ui list"},c.a.createElement("li",{className:"item"},c.a.createElement("i",{className:"right triangle icon"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"React"),c.a.createElement("div",{className:"description"},"This app is developed in ",c.a.createElement("a",{href:"https://reactjs.org/"},"React"),", fully with React Hooks."))),c.a.createElement("li",{className:"item"},c.a.createElement("i",{className:"right triangle icon"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"Redux"),c.a.createElement("div",{className:"description"},"The state of the entire application is maintained by ",c.a.createElement("a",{href:"https://redux.js.org/"},"Redux"),"."))),c.a.createElement("li",{className:"item"},c.a.createElement("i",{className:"right triangle icon"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"Semantic UI"),c.a.createElement("div",{className:"description"},"Design is mostly done with great help of ",c.a.createElement("a",{href:"https://semantic-ui.com/"},"Semantic UI"),". Buttons are inspired by neumorphic design."))),c.a.createElement("li",{className:"item"},c.a.createElement("i",{className:"right triangle icon"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"Github"),c.a.createElement("div",{className:"description"},"This app is hosted at ",c.a.createElement("a",{href:"https://pages.github.com/"},"Github pages"),"."))),c.a.createElement("br",null),"Source code can be found at ",c.a.createElement("a",{href:"https://github.com/shyamajp/colorgame"},"GitHub"),".")),c.a.createElement("h3",{className:"ui block header"},"Developer"),c.a.createElement("p",null,"I am a front-end engineer.")))};var Y=function(){return c.a.createElement("div",{id:"app"},c.a.createElement(u.a,{basename:"/react-colorgame"},c.a.createElement(y,null),c.a.createElement("div",{id:"content",className:"ui grid container"},c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(R,null)),c.a.createElement(d.a,{path:"/about"},c.a.createElement(U,null)),c.a.createElement(d.a,{path:"/settings"},c.a.createElement(H,null))),c.a.createElement(F,null)))},J=a(27),P={startAt:null,endAt:null},z=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}([{id:0,deleted:!1,color:"#ffffff"},{id:1,deleted:!1,color:"#eeeeee"},{id:2,deleted:!1,color:"#dddddd"},{id:3,deleted:!1,color:"#cccccc"},{id:4,deleted:!1,color:"#bbbbbb"},{id:5,deleted:!1,color:"#aaaaaa"},{id:6,deleted:!1,color:"#999999"},{id:7,deleted:!1,color:"#888888"},{id:8,deleted:!1,color:"#777777"},{id:9,deleted:!1,color:"#666666"},{id:10,deleted:!1,color:"#555555"},{id:11,deleted:!1,color:"#444444"},{id:12,deleted:!1,color:"#333333"},{id:13,deleted:!1,color:"#222222"},{id:14,deleted:!1,color:"#111111"},{id:15,deleted:!1,color:"#000000"}]),K={language:"en",nightMode:!1},Q=Object(s.b)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"start_timer":return Object(J.a)(Object(J.a)({},e),{},{startAt:t.payload});case"stop_timer":return Object(J.a)(Object(J.a)({},e),{},{endAt:t.payload});case"reset_timer":return P;default:return e}},box:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeBoxState":var a=e.find((function(e){return t.payload-1===e.id}));return 0===t.payload||t.payload>0&&!0===a.deleted?e.map((function(e){return e.id===t.payload?Object(J.a)(Object(J.a)({},e),{},{deleted:!0}):e})):e;case"resetBoxState":return z;default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeLanguage":return Object(J.a)(Object(J.a)({},e),{},{language:t.payload});case"changeDisplayMode":return Object(J.a)(Object(J.a)({},e),{},{nightMode:!e.nightMode});default:return e}}}),V=Object(s.c)(Q,{},Object(s.a)(m.a));i.a.render(c.a.createElement(o.a,{store:V},c.a.createElement(Y,null)),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.5fccba58.chunk.js.map