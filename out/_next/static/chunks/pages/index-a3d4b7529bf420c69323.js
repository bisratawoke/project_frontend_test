_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"HaE+":function(t,n,e){"use strict";function o(t,n,e,o,r,c,i){try{var a=t[c](i),u=a.value}catch(s){return void e(s)}a.done?n(u):Promise.resolve(u).then(o,r)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(r,c){var i=t.apply(n,e);function a(t){o(i,r,c,a,u,"next",t)}function u(t){o(i,r,c,a,u,"throw",t)}a(void 0)}))}}e.d(n,"a",(function(){return r}))},RNiq:function(t,n,e){"use strict";e.r(n);var o=e("nKUr"),r=e("o0o1"),c=e.n(r),i=e("HaE+"),a=e("q1tI"),u=e("Ul1y");n.default=function(){var t=Object(a.useContext)(u.a);t.state,t.dispatch,Object(a.useEffect)((function(){var t=!!window.localStorage.getItem("token")&&window.localStorage.getItem("token");t?n(t):window.location.assign("/login")}),[]);var n=function(){var t=Object(i.a)(c.a.mark((function t(n){var e,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:5000/loginWithToken",t.prev=1,e={headers:{Authorization:"token ".concat(n)},method:"POST"},t.next=5,fetch("http://localhost:5000/loginWithToken",e);case 5:o=t.sent,console.log(o.status),200==o.status?window.location.assign("/home"):window.location.assign("/login"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(n){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Loading"}),Object(o.jsx)("span",{children:"TODO:splash screen"})]})}},Ul1y:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return p}));var o=e("rePB"),r=e("q1tI");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(o.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var a=Object(r.createContext)(null),u={login:!1,token:null},s="login",l="logout",f="set_token",p=function(t,n){switch(n.type){case f:return i(i({},t),{},{token:window.localStorage.getItem("token")});case s:return i(i({},t),{},{login:!0,token:window.localStorage.setItem("token",n.payload)});case l:return i(i({},t),{},{login:!1})}}},rePB:function(t,n,e){"use strict";function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return o}))},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,2,1]]]);