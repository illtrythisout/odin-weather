(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>h});var r=e(601),o=e.n(r),a=e(314),i=e.n(a),c=e(417),s=e.n(c),d=new URL(e(25),e.b),l=new URL(e(433),e.b),u=new URL(e(386),e.b),p=i()(o()),f=s()(d),g=s()(l),m=s()(u);p.push([n.id,`*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  line-height: 1.5;\n  text-decoration: none;\n  font-family: Poppins;\n  list-style-type: none;\n  color: var(--white-color);\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\ninput, button, textarea, select {\n    font: inherit;\n}\nbutton:hover {\n  cursor: pointer;\n}\n\n:root {\n  --default-padding: 1rem;\n  --primary-color: #075985;\n  --primary-dark-color: #082f49;\n  --secondary-color: #c96534;\n  --secondary-variant-color: #c14f10;\n  --white-color: #f5f5f5;\n  --gray-color: #f0f9ff;\n}\n\n@font-face {\n  font-family: poppins;\n  src: url(${f});\n}\n@font-face {\n  font-family: poppins;\n  src: url(${g});\n  font-weight: 300;\n}\n@font-face {\n  font-family: poppins;\n  src: url(${m});\n  font-weight: 700;\n}\n\nbody {\n  height: 100dvh;\n\n  display: grid;\n  grid-template: min-content 1fr / min-content 1fr;\n\n  background-color: var(--primary-color);\n  font-family: poppins;\n}\n\n.container {\n  padding: var(--default-padding);\n}\n\n.searchContainer {\n  grid-column: 1 / -1;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--default-padding);\n}\n.locationInputContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0.5rem;\n  padding-left: 1rem;\n\n  background-color: var(--primary-dark-color);\n  border-radius: 50vw;\n}\n.locationInputContainer > input {\n  background-color: transparent;\n  border: none;\n  caret-color: var(--white-color);\n}\n.locationInputContainer > input:focus {\n  outline: none;\n}\n.locationInputContainer > button, #myLocationBtn {\n  padding: 0.25rem;\n\n  background-color: var(--secondary-color);\n  border: none;\n  border-radius: 50vw;\n  \n  transition: background-color 0.3s;\n}\n.locationInputContainer > button:hover, #myLocationBtn:hover {\n  background-color: var(--secondary-variant-color);\n}\n#myLocationBtn {\n  padding: 0.5rem 1rem;\n  height: 100%;\n}\n\n.currentWeatherContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--default-padding);\n\n  padding: var(--default-padding) calc(6 * var(--default-padding));\n}\n.currentWeatherContainer > .current {\n  text-align: center;\n  font-size: 1.3rem;\n}\n.currentWeatherContainer > img {\n  --size: 10rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: var(--size);\n  width: var(--size);\n  max-width: none;\n}\n.currentWeatherContainer > .temp {\n  font-size: 2rem;\n}\n\n.forecastWeatherContainer table {\n  margin: var(--default-padding) 0;\n  border-collapse: collapse;\n  font-size: 1.1rem;\n  min-width: 400px;\n  border-radius: 5px 5px 0 0;\n  overflow: hidden;\n}\n.forecastWeatherContainer table thead tr {\n  background-color: var(--secondary-color);\n  text-align: left;\n  font-weight: 700;\n}\n.forecastWeatherContainer table th,\n.forecastWeatherContainer table td {\n  padding: calc(0.5 * var(--default-padding));\n}\n.forecastWeatherContainer table tbody tr {\n  border-bottom: 1px solid var(--gray-color);\n}\n.forecastWeatherContainer table tbody tr:last-of-type {\n  border-bottom: 2px solid var(--secondary-color);\n}\n.forecastWeatherContainer table tbody tr img {\n  --size: 1.5rem;\n  height: var(--size);\n  width: var(--size);\n}`,""]);const h=p},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var g=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},386:(n,t,e)=>{n.exports=e.p+"cdb29a5d7ccf57ff05a3.ttf"},433:(n,t,e)=>{n.exports=e.p+"7641a0f76ca9ef6c252c.ttf"},25:(n,t,e)=>{n.exports=e.p+"35d26b781dc5fda684cc.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),c=e(659),s=e.n(c),d=e(56),l=e.n(d),u=e(540),p=e.n(u),f=e(113),g=e.n(f),m=e(365),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals;const v={short:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"},long:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}},y={0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"};function b(n,t=0,e=new Date){const r=e.getDay(),o=y[r],a=e.getDate()+t,i=e.getMonth();return o+", "+a+" "+v[n][i]}let w={};function x(n,t,e){n.querySelector(t).textContent=e}function C(n,t,e,r){n.querySelector(t).setAttribute(e,r)}const S={"clear-day":e.p+"bf877f488d1a79b3bb25.svg","clear-night":e.p+"ac4e7f9759a0bcdb372e.svg",cloudy:e.p+"ddffd7e163c27873badb.svg",fog:e.p+"59b5358ea1e9aadfc30a.svg","partly-cloudy-day":e.p+"3eae7f723241b0e28d7e.svg","partly-cloudy-night":e.p+"36e31f408cbf665f9f7f.svg",rain:e.p+"3a6bca46b675a0892a5b.svg",snow:e.p+"94869d956172e9a3d54d.svg",wind:e.p+"351811b2eb7085923889.svg"};let A={};async function T(n){try{await async function(){try{const n=await new Promise(((n,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(n,t):t(new Error("Geolocation not supported"))}));return w.latitude=n.coords.latitude,w.longitude=n.coords.longitude,w}catch(n){throw console.error("Error retrieving location:",n),n}}(),await async function(n=w){let t;"string"==typeof n||(n=n.latitude+","+n.longitude),t=await async function(n){const t="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+n+"?unitGroup=metric&key=PXYVXC7BCTT2L6QWWQRGU4AG5",e=await fetch(t);return await e.json()}(n),A={today:{date:"",temp:"",icon:"",condition:""},forecast:[{date:"",temp:"",icon:""},{date:"",temp:"",icon:""},{date:"",temp:"",icon:""},{date:"",temp:"",icon:""},{date:"",temp:"",icon:""}]},A.today.date=b("long"),A.today.temp=t.currentConditions.temp,A.today.icon=t.currentConditions.icon,A.today.condition=t.currentConditions.conditions,A.forecast.forEach(((n,e)=>{n.date=b("short",e+1),n.temp=t.days[e+1].temp,n.icon=t.days[e+1].icon}))}(n),console.log("Weather Data:",A),x(document,".current.date",A.today.date),x(document,".current.temp",A.today.temp+"°C"),C(document,".current.icon","src",S[A.today.icon]),x(document,".current.condition",A.today.condition),function(){const n=document.querySelectorAll(".forecastRow");A.forecast.forEach(((t,e)=>{const r=n[e];console.log(r),x(r,".date",t.date),C(r,".icon","src",S[t.icon]),x(r,".temp",t.temp+"°C")}))}()}catch(n){console.error("Error getting location or weather:",n)}}const W=document.querySelector("#locationInput");T(),document.querySelector("#searchLocationBtn").addEventListener("click",(function(){T(W.value),W.value=""})),document.querySelector("#myLocationBtn").addEventListener("click",(function(){T()}))})();