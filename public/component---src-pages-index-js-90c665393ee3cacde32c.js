(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[678],{8543:function(t,e,n){var i;!function(){function o(t,e,n){return t.call.apply(t.bind,arguments)}function a(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function s(t,e,n){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function l(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,i){if(e=t.c.createElement(e),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?e.style.cssText=n[o]:e.setAttribute(o,n[o]));return i&&e.appendChild(t.c.createTextNode(i)),e}function h(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||i.push(e[o])}for(e=[],o=0;o<i.length;o+=1){for(a=!1,s=0;s<n.length;s+=1)if(i[o]===n[s]){a=!0;break}a||e.push(i[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var n=t.className.split(/\s+/),i=0,o=n.length;i<o;i++)if(n[i]==e)return!0;return!1}function g(t,e,n){function i(){r&&o&&a&&(r(s),r=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var o=!1,a=!0,s=null,r=n||null;c?(e.onload=function(){o=!0,i()},e.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),h(t,"head",e)}function m(t,e,n,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=u(t,"script",{src:e}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,n&&n(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){s||(s=!0,n&&n(Error("Script load timeout")))}),i||5e3),a}return null}function y(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,b(t)}}function w(t,e){t.c=e,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function E(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function _(t){return t.a+t.f}function k(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function S(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function T(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new x("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function C(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),p(t.f,n,i)}A(t,"inactive")}function A(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,_(n)):t.h[e]())}function B(){this.c={}}function N(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function G(t){h(t.c,"body",t.a)}function W(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+E(t.c)+";font-style:"+k(t)+";font-weight:"+t.f+"00;"}function F(t,e,n,i,o,a){this.g=t,this.j=e,this.a=i,this.c=n,this.f=o||3e3,this.h=a||void 0}function P(t,e,n,i,o,a,s){this.v=t,this.B=e,this.c=n,this.a=i,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.m=new N(this.c,this.s),t=W(t=new j(this.a.c+",serif",_(this.a))),this.g.a.style.cssText=t,t=W(t=new j(this.a.c+",sans-serif",_(this.a))),this.h.a.style.cssText=t,t=W(t=new j("serif",_(this.a))),this.j.a.style.cssText=t,t=W(t=new j("sans-serif",_(this.a))),this.m.a.style.cssText=t,G(this.g),G(this.h),G(this.j),G(this.m)}x.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},F.prototype.start=function(){var t=this.c.o.document,e=this,n=r(),i=new Promise((function(i,o){!function a(){r()-n>=e.f?o():t.fonts.load(function(t){return k(t)+" "+t.f+"00 300px "+E(t.c)}(e.a),e.h).then((function(t){1<=t.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,n){o=setTimeout(n,e.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),e.g(e.a)}),(function(){e.j(e.a)}))};var z={D:"serif",C:"sans-serif"},I=null;function L(){if(null===I){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return I}function O(t,e,n){for(var i in z)if(z.hasOwnProperty(i)&&e===t.f[z[i]]&&n===t.f[z[i]])return!0;return!1}function D(t){var e,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=L()&&O(t,n,i)),e?r()-t.A>=t.w?L()&&O(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?H(t,t.v):H(t,t.B):function(t){setTimeout(s((function(){D(this)}),t),50)}(t):H(t,t.v)}function H(t,e){setTimeout(s((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),e(this.a)}),t),0)}function M(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}P.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),D(this)};var R=null;function $(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),A(t,"active")):C(t.a))}function U(t){this.j=t,this.a=new B,this.h=0,this.f=this.g=!0}function Z(t,e,n,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=i||{};if(0===n.length&&a)C(e.a);else{e.f+=n.length,a&&(e.j=a);var l,c=[];for(l=0;l<n.length;l++){var u=n[l],h=r[u.c],f=e.a,d=u;if(f.g&&p(f.f,[f.a.c("wf",d.c,_(d).toString(),"loading")]),A(f,"fontloading",d),f=null,null===R)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=d?42<parseInt(d[1],10):!g}else R=!1;f=R?new F(s(e.g,e),s(e.h,e),e.c,u,e.s,h):new P(s(e.g,e),s(e.h,e),e.c,u,e.s,t,h),c.push(f)}for(l=0;l<c.length;l++)c[l].start()}}),0)}function q(t,e){this.c=t,this.a=e}function J(t,e){this.c=t,this.a=e}function K(t,e){this.c=t||V,this.a=[],this.f=[],this.g=e||""}M.prototype.g=function(t){var e=this.a;e.g&&p(e.f,[e.a.c("wf",t.c,_(t).toString(),"active")],[e.a.c("wf",t.c,_(t).toString(),"loading"),e.a.c("wf",t.c,_(t).toString(),"inactive")]),A(e,"fontactive",t),this.m=!0,$(this)},M.prototype.h=function(t){var e=this.a;if(e.g){var n=d(e.f,e.a.c("wf",t.c,_(t).toString(),"active")),i=[],o=[e.a.c("wf",t.c,_(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,_(t).toString(),"inactive")),p(e.f,i,o)}A(e,"fontinactive",t),$(this)},U.prototype.load=function(t){this.c=new l(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],o=n.timeout;!function(t){t.g&&p(t.f,[t.a.c("wf","loading")]),A(t,"loading")}(e);i=function(t,e,n){var i,o=[];for(i in e)if(e.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(e[i],n))}return o}(t.a,n,t.c);var a=new M(t.c,e,o);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load((function(e,n,i){Z(t,a,e,n,i)}))}(this,new T(this.c,t),t)},q.prototype.load=function(t){function e(){if(a["__mti_fntLst"+i]){var n,o=a["__mti_fntLst"+i](),s=[];if(o)for(var r=0;r<o.length;r++){var l=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,s.push(new j(l,n))):s.push(new j(l))}t(s)}else setTimeout((function(){e()}),50)}var n=this,i=n.a.projectId,o=n.a.version;if(i){var a=n.c.o;m(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(o?"?v="+o:""),(function(o){o?t([]):(a["__MonotypeConfiguration__"+i]=function(){return n.a},e())})).id="__MonotypeAPIScript__"+i}else t([])},J.prototype.load=function(t){var e,n,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new y;for(e=0,n=i.length;e<n;e++)g(this.c,i[e],v(s));var r=[];for(e=0,n=o.length;e<n;e++)if((i=o[e].split(":"))[1])for(var l=i[1].split(","),c=0;c<l.length;c+=1)r.push(new j(i[0],l[c]));else r.push(new j(i[0]));w(s,(function(){t(r,a)}))};var V="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},tt={i:"i",italic:"i",n:"n",normal:"n"},et=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function nt(t,e){this.c=t,this.a=e}var it={Arimo:!0,Cousine:!0,Tinos:!0};function ot(t,e){this.c=t,this.a=e}function at(t,e){this.c=t,this.f=e,this.a=[]}nt.prototype.load=function(t){var e=new y,n=this.c,i=new K(this.a.api,this.a.text),o=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var o=e[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(i,o);var a=new X(o);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var s;if(s=[],r=i[1])for(var r,l=(r=r.split(",")).length,c=0;c<l;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(h=et.exec(u.toLowerCase())))u="";else{if(u=null==(u=h[2])||""==u?"n":tt[u],null==(h=h[1])||""==h)h="4";else var h=Y[h]||(isNaN(h)?"4":h.substr(0,1));u=[u,h].join("")}else u="";u&&s.push(u)}0<s.length&&(a=s),3==i.length&&(s=[],0<(i=(i=i[2])?i.split(","):s).length&&(i=Q[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=Q[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new j(o,a[i]))}}(a),g(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),v(e)),w(e,(function(){t(a.a,a.c,it)}))},ot.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],o=0;o<e.length;o+=2)for(var a=e[o],s=e[o+1],r=0;r<s.length;r++)i.push(new j(a,s[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}t(i)}}),2e3):t([])},at.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var o=0,a=n.fonts.length;o<a;++o){var s=n.fonts[o];i.a.push(new j(s.name,S("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var st=new U(window);st.a.c.custom=function(t,e){return new J(e,t)},st.a.c.fontdeck=function(t,e){return new at(e,t)},st.a.c.monotype=function(t,e){return new q(e,t)},st.a.c.typekit=function(t,e){return new ot(e,t)},st.a.c.google=function(t,e){return new nt(e,t)};var rt={load:s(st.load,st)};void 0===(i=function(){return rt}.call(e,n,e,t))||(t.exports=i)}()},3981:function(t,e,n){"use strict";var i=n(3552),o=n(7294),a=(n(8543),{position:"fixed",top:0,left:0,minWidth:"100vw",minHeight:"100vh",zIndex:-1}),s=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={video:n.props.video},n}(0,i.Z)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t){t.video!==this.props.video&&(console.log("test: "+this.props.video),this.setState({video:this.props.video}))},n.render=function(){return o.createElement("video",{autoplay:"autoplay",muted:!0,loop:!0,style:a,id:"landing-clip",key:this.state.video},o.createElement("source",{src:this.state.video,type:"video/mp4"}))},e}(o.Component);e.Z=s},7704:function(t,e,n){"use strict";n.r(e);var i=n(7294),o=n(5444),a=(n(8140),n(3981),{color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"}),s={marginTop:0,marginBottom:64,maxWidth:320},r={color:"#663399"},l={marginBottom:48},c={color:"#8A6534",padding:4,backgroundColor:"#FFF4DB",fontSize:"1.25rem",borderRadius:4},u={marginBottom:96,paddingLeft:0},h={fontWeight:300,fontSize:24,maxWidth:560,marginBottom:30},f={color:"#8954A8",fontWeight:"bold",fontSize:16,verticalAlign:"5%"},p=Object.assign({},f,{listStyleType:"none",marginBottom:24}),d={color:"#232129",fontSize:14,marginTop:10,marginBottom:0,lineHeight:1.25},g="Documentation",m="https://www.gatsbyjs.com/docs/",y={color:"#fff",backgroundColor:"#088413",border:"1px solid #088413",fontSize:11,fontWeight:"bold",letterSpacing:1,borderRadius:4,padding:"4px 6px",display:"inline-block",position:"relative",top:-2,marginLeft:10,lineHeight:1},v=[{text:"Tutorial",url:"https://www.gatsbyjs.com/docs/tutorial/",description:"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",color:"#E95800"},{text:"How to Guides",url:"https://www.gatsbyjs.com/docs/how-to/",description:"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",color:"#1099A8"},{text:"Reference Guides",url:"https://www.gatsbyjs.com/docs/reference/",description:"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",color:"#BC027F"},{text:"Conceptual Guides",url:"https://www.gatsbyjs.com/docs/conceptual/",description:"Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",color:"#0D96F2"},{text:"Plugin Library",url:"https://www.gatsbyjs.com/plugins",description:"Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",color:"#8EB814"},{text:"Build and Host",url:"https://www.gatsbyjs.com/cloud",badge:!0,description:"Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",color:"#663399"}];e.default=function(){return i.createElement("main",{style:a},i.createElement("title",null,"Home Page"),i.createElement("h1",{style:s},"Congratulations",i.createElement("br",null),i.createElement("span",{style:r},"— you just made a New Jersey site! "),i.createElement("span",{role:"img","aria-label":"Party popper emojis"},"🎉🎉🎉"),i.createElement(o.rU,{to:"/landing-page"},"This is a link")),i.createElement("p",{style:l},"Edit ",i.createElement("code",{style:c},"src/pages/index.js")," to see this page update in real-time."," ",i.createElement("span",{role:"img","aria-label":"Sunglasses smiley emoji"},"😎")),i.createElement("ul",{style:u},i.createElement("li",{style:p},i.createElement("a",{style:f,href:m+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},g)),v.map((function(t){return i.createElement("li",{key:t.url,style:Object.assign({},h,{color:t.color})},i.createElement("span",null,i.createElement("a",{style:f,href:t.url+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},t.text),t.badge&&i.createElement("span",{style:y,"aria-label":"New Badge"},"NEW!"),i.createElement("p",{style:d},t.description)))}))),i.createElement("img",{alt:"Gatsby G Logo",src:"data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"}))}},8140:function(t,e,n){"use strict";e.Z=n.p+"static/rain-test-2de9dc2bc26e4a2e46582b43bf641b5d.mp4"}}]);
//# sourceMappingURL=component---src-pages-index-js-90c665393ee3cacde32c.js.map