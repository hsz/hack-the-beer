(this["webpackJsonphack-the-beer"]=this["webpackJsonphack-the-beer"]||[]).push([[0],{14:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(5),a=t(0),c=t.n(a),o=t(8),u=t(12),s=t(10),l=(Object(u.a)([576,992,1200,1300].map((function(n){return"@media (min-width: ".concat(n,"px)")}))),t(4)),f={size:16,rows:10,cols:10,spreadAfter:5};function m(){var n=Object(r.a)(["\n  position: relative;\n  width: ","px;\n  font-size: 0;\n"]);return m=function(){return n},n}var b=s.a.div(m(),f.cols*f.size),d=function(n){var e=n.counter,t=n.gameState,r=n.items,i=n.onCellClick,o=n.onContextClick,u=Object(a.useState)(!1),s=Object(l.a)(u,2),f=s[0],m=s[1],d=Object(a.useCallback)((function(){m(!0)}),[]),v=Object(a.useCallback)((function(){m(!1)}),[]);return c.a.createElement(b,{onMouseDown:d,onMouseUp:v},c.a.createElement(y,null),c.a.createElement(k,{counter:e,stress:f,gameState:t}),r.map((function(n){return c.a.createElement(p,{key:n.position,gameState:t,item:n,onClick:i,onContextClick:o})})))};function v(){var n=Object(r.a)(["\n  width: ","px;\n  height: ","px;\n  display: inline-block;\n  font-size: 16px;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return v=function(){return n},n}var h=s.a.div(v(),f.size,f.size),g=function(n,e){var t=n.isRevealed,r=n.isVirus,i=n.isUnderQuarantine,a=n.isCure,c=n.hint;return t||"ongoing"!==e?i?"quarantine":r?"virus":a?"cure":c:"untouched"},p=function(n){var e=n.gameState,t=n.item,r=n.onClick,i=n.onContextClick,o=Object(a.useCallback)((function(){r(t)}),[t,r]),u=Object(a.useCallback)((function(n){n.preventDefault(),i(t)}),[t,i]);return c.a.createElement(h,{onClick:o,onContextMenu:u},c.a.createElement("img",{src:"/images/".concat(g(t,e),".png"),alt:""}))};function j(){var n=Object(r.a)(["\n  width: ","px;\n  height: ","px;\n  background-color: white;\n  display: flex;\n"]);return j=function(){return n},n}var O=s.a.div(j(),f.size*f.cols,2*f.size),C=function(n){switch(n){case"lost":case"lost-quarantine":return"fail";case"won":return"success";default:return"inprogress"}},k=function(n){var e=n.gameState,t=n.stress||"lost"===e||"lost-quarantine"===e;return c.a.createElement(O,null,c.a.createElement("img",{src:"/images/nurse-".concat(t?"stress":"normal",".png"),alt:""}),c.a.createElement("img",{src:"/images/".concat(C(e),".png"),alt:""}))};function w(){var n=Object(r.a)(["\n  background-color: #181425;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  z-index: 2;\n\n  &:hover img {\n    opacity: 0.75;\n  }\n"]);return w=function(){return n},n}var E=["splash.png","rules.png"],x=s.a.div(w()),y=function(){var n=Object(a.useState)(0),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useCallback)((function(){r(t+1)}),[t]);return E[t]?c.a.createElement(x,null,c.a.createElement("img",{src:"/images/".concat(E[t]),onClick:i,alt:""})):null},S=t(6);t(21);function z(){var n=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return z=function(){return n},n}var V=s.a.div(z()),R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.rows*f.cols,e=Object(S.shuffle)(Object(S.range)(n)),t=Object(l.a)(e,3),r=t[0],i=t[1],a=t[2];return Object(S.range)(n).map((function(n){return{position:n,isVirus:n===r||n===i,isCure:n===a,hint:0}}))}(),q=function(n){if(!n)return[];var e=f.cols,t=f.rows,r=n.position;return[r-1,r+1,r-1-e,r-e,r-e+1,r+e-1,r+e,r+e+1].filter((function(n){return!(n<0||n>=e*t||r%e===0&&n%e===e-1||r%e===9&&n%e===0)})).map((function(n){return R[n]}))},M=function(){var n=Object(a.useState)(0),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)("ongoing"),o=Object(l.a)(i,2),u=o[0],s=o[1];Object(a.useEffect)((function(){"ongoing"!==u&&R.forEach((function(n){n.isRevealed=!0}))}),[u]);var m=Object(a.useCallback)((function(n,e){n.isRevealed||(e(),r(t+1),n.isRevealed=!0,function(n){if(n>f.spreadAfter){var e=Object(S.shuffle)(q(Object(S.shuffle)(R).find((function(n){return n.isVirus})))).find((function(n){return!n.isRevealed&&!n.isCure&&!n.isVirus}));e&&(e.isVirus=!0)}R.forEach((function(n){n.hint=q(n).reduce((function(n,e){return n+ +e.isVirus}),0)}))}(t))}),[t]),b=Object(a.useCallback)((function(n){m(n,(function(){n.isVirus&&s("lost"),n.isCure&&s("won")}))}),[m]),v=Object(a.useCallback)((function(n){m(n,(function(){n.isVirus?n.isUnderQuarantine=!0:s("lost-quarantine")}))}),[m]);return c.a.createElement(V,null,c.a.createElement(d,{gameState:u,counter:t,items:R,onCellClick:b,onContextClick:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(){var n=Object(r.a)(["\n  body,\n  html {\n    height: 100%;\n    background-color: #181425;\n  }\n"]);return U=function(){return n},n}var A=Object(i.c)(U()),B=document.getElementById("root");((null===B||void 0===B?void 0:B.hasChildNodes())?o.hydrate:o.render)(c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{styles:A}),c.a.createElement(M,null)),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c9b330fc.chunk.js.map