(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(8),s=c.n(a),o=(c(15),c(2)),i=(c(16),c(0));function u(e){var t=e.score,c=e.highscore;return Object(i.jsxs)("div",{className:"score-board",children:[Object(i.jsxs)("p",{children:["Score: ",t]}),Object(i.jsxs)("p",{children:["Highscore: ",c]})]})}function j(e){var t=e.score,c=e.highscore;return Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{className:"title",children:"Memory Game"}),Object(i.jsx)(u,{score:t,highscore:c})]})}c(7);function d(e){var t=e.cards;return Object(i.jsx)("div",{className:"game-board",children:t})}var h=c(10),f=c(6),l=c.n(f),b=c(9);c(19);function m(e){var t=Object(n.useState)({name:"",img:"",id:""}),c=Object(o.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t="https://pokeapi.co/api/v2/pokemon/"+e.id,c=function(){var c=Object(b.a)(l.a.mark((function c(){var n,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(t);case 3:return n=c.sent,c.next=6,n.json();case 6:r=c.sent,a({name:r.name,img:r.sprites.front_default,id:e.id}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),console.log("error",c.t0);case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}();c()}),[e.id]),Object(i.jsxs)("div",{className:"card",onClick:function(){return e.handleClick(r.id)},children:[Object(i.jsx)("img",{className:"pokemon-img",src:r.img,alt:r.name}),Object(i.jsx)("div",{className:"card-container",children:Object(i.jsx)("h4",{children:Object(i.jsx)("b",{className:"pokemon-name",children:r.name})})})]})}var O=function(){var e=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){for(var e=[],t=0;t<12;t++){for(var c=Math.floor(150*Math.random())+1,n=a(c,e);!1===n;)c=Math.floor(150*Math.random())+1,n=a(c,e);e.push(c)}r(e)}),[]);var a=function(e,t){return!t.includes(e)&&e};return[c,r]}(),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),u=s[0],j=s[1],d=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(o.a)(a,2),i=s[0],u=s[1];return[c,i,function(){r((function(e){var t=e+1;return t>i&&u(t),t}))},function(){r(0)}]}(),f=Object(o.a)(d,4),l=f[0],b=f[1],O=f[2],v=f[3],p=function(e){u.includes(e)?(v(),j([]),x(c)):(j((function(t){return[].concat(Object(h.a)(t),[e])})),O(),x(c))},x=function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var n=[e[t],e[c]];e[c]=n[0],e[t]=n[1]}r(e)};return[l,b,c.map((function(e){return Object(i.jsx)(m,{id:e,handleClick:p},e)})),p]};function v(){var e=O(),t=Object(o.a)(e,4),c=t[0],n=t[1],r=t[2],a=t[3];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{score:c,highscore:n}),Object(i.jsx)(d,{cards:r,handleClick:a})]})}s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[20,1,2]]]);
//# sourceMappingURL=main.0bdf1f88.chunk.js.map