"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[66],{8267:function(t,e,a){var i=a(3552),s=a(7294),n=a(5444),o=a(3935),l=(a(6316),{top:0,left:0,minHeight:"100vh",zIndex:-1,background:"black"}),r=["Harm reduction works where criminalization of drug use fails.","Harm reduction works because it helps people make realistic, incremental changes.","Syringe access leads the way in preventing the spread of HIV and viral hepatitis..","People who use drugs are on the frontline of overdose prevention.","Syringe Access connects people to other stabilizing services."],c=["#CC4400","#70EBCA","#B999FF","#FF925C","#FFE4D6"],d=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={highlighted:!1,data:{title:a.props.title,id:a.props.id,blurb:r[a.props.id],color:c[a.props.id]}},a}(0,i.Z)(e,t);var a=e.prototype;return a.componentDidMount=function(){"first"==this.props.videoName&&o.findDOMNode(this).click(),this.setState({beforeStyle:{"::before":{background:"linear-gradient(147.23deg, rgba(255, 84, 0, 0.54) 10.03%, "+c[this.state.data.id]+" 45.96%)"}}}),console.log(this.state.beforeStyle),console.log(l)},a.render=function(){var t=this,e={top:0,left:0,minHeight:"100vh",backgroundImage:"url("+this.props.source+")"},a=[];function i(t){!function(t){for(var e=(a=Array.prototype.slice.call(document.getElementsByClassName("video-container"))).length-1;e>=0;e--)a[e]!==t&&a[e].classList.remove("column-highlighted")}(o.findDOMNode(t)),o.findDOMNode(t).classList.contains("column-highlighted")?o.findDOMNode(t).classList.remove("column-highlighted"):o.findDOMNode(t).classList.add("column-highlighted")}return console.log(this.state.id),s.createElement("div",{className:"video-container",onClick:function(){return i(t)},style:e},s.createElement("div",{className:"background-image"}),s.createElement("div",{className:"video-title"},this.props.title),s.createElement(n.rU,{className:"story-link",to:"/story-page",id:"story-link-"+this.props.id,state:{data:this.state.data}},">>"))},e}(s.Component);e.Z=d},6695:function(t,e,a){a.d(e,{Z:function(){return o}});var i=a(3552),s=a(7294),n={fontFamily:"Roboto",position:"fixed",bottom:0,left:0,margin:"40px",maxHeight:"78px",display:"inline-block",color:"white",lineHeight:"24px",textTransform:"uppercase",width:"440px",fontSize:"14px"},o=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={},a}return(0,i.Z)(e,t),e.prototype.render=function(){var t={maxWidth:"158px",float:"left",paddingRight:"36px",display:this.props.wordmark?"block":"none"},e={paddingTop:"16px",display:this.props.sideCopy?"block":"none",color:"small"==this.props.size?"#ACACAC":"white",fontSize:"small"==this.props.size?"12pt":"14pt"};return s.createElement("div",{className:"logoBlock",style:n},s.createElement("img",{className:"wordmark",style:t,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAACaCAQAAACePjzKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDctMjlUMTM6NTY6MTUtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0ZDNlNDU5LWQ2YjAtMTk0ZS05YjUwLWE4NDNiYzkxNTgzZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NGQzZTQ1OS1kNmIwLTE5NGUtOWI1MC1hODQzYmM5MTU4M2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NGQzZTQ1OS1kNmIwLTE5NGUtOWI1MC1hODQzYmM5MTU4M2QiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY0ZDNlNDU5LWQ2YjAtMTk0ZS05YjUwLWE4NDNiYzkxNTgzZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsuldRQAAAy+SURBVHja7d19UBTnHQfwG4dhGAejSPGKep6G4Es1jqVGCaWGKGGSqrXqUEIJJUSDaNGoUUNQUELUcShDEJEw5wsm1lprjLVUpacSRDQUDbVUpOSCiAyhSI5Tgoj48PQQDQr3ss/u3u7KfZ/vv9yye7/P7evzPKuiKgSRPvgKEMBDAA9BAA8BPAQBPATwEMQ54LkPeH2+LuvfZTdqbpvq60ov7M7+VcggFxQU8ByYIa6bEpqbaJ9WV5u2daSn/U/vzWHJWA2YAJ45kWFGC+getdqa0Hm2Pz9aTZlayAwwATxVYjwldqSQTQmAB3iixkyKcLBCNiYAHuCJlkWRnNg9oBcVDniAJ0pGq28ZuXNpbvL2ADzAEyF7c9jAbE8DPMATHK26k7CBaW/zcAM8wBOYuBjK3N5dAXiAJzAn89jh/e0I4AGewDQ3scNrbAA8wBOUYe6UsMMzfwbwAE9IxnhTPo14uQMe4AnIKC/s8QBPltxtY3fX0Q54gCcwFeXs8M4XAR7gCcz2NHZ4GamAB3gCE+TPfJZHpk8BPMATnJJiNjDFhXhWC3giJDiQaZ9H/CYAHuCJkp0Z3Nklb7DevQrwAI8pz7hUVXJjpz9ufSmAB3jMGe7xTZV9dmf0tpYBeIDHI+4DdqTbPNcjH6XaXgLgAR7PzAk27/cs4SNfFpsvQVSAB3gOy8yAjzOvXH7E735HZcX2tCB/Lp8EPMAT4XLjWe9xWq16qBv3zwAe4MkSwAM8wAM8wAM8wAM8wAM8wAM8wAM8+xnpOTt4VVxSfEpS8obE+KjwIH8Pt/4GT6ueG7I8tnsbk+LXrJgZMMmnv1IZ6hbgFxO1MSF9W07m3pxc3e7s7WkpSWtXhsz46QTB8Ia5P+/LPaO8LC1ykMsboYcO3Gyw8GyBVBv26cLm89twDzeWdXve15HwhriuijtxzNhkaRu/b/nH8dhorZrPNk70EWMLqWqST1zMR6n7c0/lny86X5R3NCfz7Si+4PwmvL/m2JGGehsPKkkn+ao0OyN8obWJkuzC25rCUpJ9ut6L89WkbTXZm9OJfFu3JZm9ML9nm8SCTPRxDLwg//y8jnb7//9k3oxprNvY1sqyheO1fZcQ5P9xpqUfveWBT7YT4PfBhhs1bL0gvzgdGTbMXVJ4w9x3ZpAOrp9tbXl/jUPhUUfAG6fVH2coBDl2ZLTaYfBob3ivBl0ssbZ2rPAWzD5XyGtIqbndadVljfGWCN6yxcyTTJgPvCxlkR9eYnxrC2sR7ratXCYFvPHaswW2oLDAiwq/ZuCLrqe6u7JtVVckeLuz+a1oY8MLk58OeB5unx3kWQyyOdnR8OJibpv4jDG2dHg9XyQY3cN2s2HNCgfC03iVl/FfVZNxVqDy4Wm8+Izr7aG3I92R8LYk2//+ucAb4mquv0joHm35pRLL+z3B8EZ5VRuErdttE7c3ScgHT+PFod+znQJsSXYUPG4TktuH99yI/1ZQB7Tampf8RYenHmyoEr5q16u5XAfJBS+UVory24+OcAS891Zz20fZg7c8lsOVOs92r31FrLjwaIFIq/bpHuXC+1akbTQZ7d9CYoXnq7nHkYtteB8miXyI7fOzW7tSRHhirtgrM5QKT7x2Mk9kePRrzn9rCx7fS0O2CkeEKhEeNZ+893t4lLwcICa8bQx/ax3eH3MlYPfgXP7xKUUUA4+StyL6PTxaVCAmvLsiwMtKl4ZdV7tm6Hlarxx49J8X+j88Sl7yFw8eFQwvJUk6dl3tyCEFwqPE9iixfgGP/nm/cuAtWywtu64aPxp+qiR4NCu9/8NrbRnsqgx4o9X/q5d++6+Wuw9QHLymxv4Pj9I5wcqAZz61kaV139NTFDxKAqf2f3h7cpQALy5G8sPsw1Zfpzx4NH51/4dXUy0/PI2XeS1k2738Zp7i4B0+2P/hUfLjwXLD27ZZzi+gQK84eLU1TgCPLpwrLzzPgTdq5Nt6k7Grw4SY8Mid1qvlF0ssjrbgvIxBLoqGR0hHbU1Z6dVy0sF/K1fHyQsvNpr/9ldWpG2NjY4KjwpfujgjtaKcrWP8V6VLoruv6sWBR6oNifEjPXvGly2K5NuH1W+CUuF1tO9If/z2b5A/34dN1i8vpIHHryNbJ8nO6DuGbqxmn47Lm4Q7if7449+eGPDIexYvCT7YwKcsC2YrEh4pKbY0ps5vwjUeRey5f+8geISS+rqLJecKzxacKyy90Gg+BvXAe2Eyn7qUl022OqptrMbmt0CamzYl9H6rnGB4neTNcGsrtDGBfROtL01OeEcPWx9Zy07vXKGD4JlLnKv7XZilgY89D+h5XFiQ80W2x0QPc6+03ImUfHHackWFwiNmXDZWyHwwYmxLFysPXrXB1tOGqZNYu1BeLXcAPPJlceg8Lr2cy8tYF32xhMtw794/wO9bdmb8YppDxlx0lcT26vxoIOu4rPXrFAeP/Po121tpPmdjanW1YsO729a7o6V1IKxHoevV3MYCTp/yw7keaahPjB/i6rDhjZS+u8Le6mSksi3R+h5ULnhfV3KYFIOpmNYfDfKDd716IueJM345k/Vnt2wx12U/+AGS0/mvcJhtRhg8i2PZn8zLAWxFUR48e7PId+VSCdudLDHh1dfZGzz9eNatZFv6NQP3ZU/y2ZLMde4YQfBaTFz+BdsZkPLgzZ9tfxuz0mWDR94IZZkhIFfHtviUJElmi2KDd7aAy79gu+pTHjwucyHFr5YLHpdhUo+nQM/G+meTFAivQM/lX/zn8tMNj8v0Qosi5YHXSZ71Ziv4lcvirOlTAO/ypf4P781weeD9/ShrwW8ZWZZfUgx4gGehhS9kLjnTpd5nBwEP8CycgXkOdCy8vjMgAh7g0apKHiVngveXA4AHeH3aiWPsBW8xsfwHQxXgAV6fpstiLzhbl/c7rdb7RwKe08Ljc3P3QhHb1gf4AR7g9WrWezJbz8H9bFv/h62AB3i92vJY9oKbv1+m1txku5fJk32RdmXPDgY8wLOQ6AjWh3KJ8UyoyTXDkujhHoAHeL0mnGXtj2cycuuP99yInpdNtLftzbH1AhjAczp4VGUysu7zqirtTxU80rNPZxDyr0u/XQh4gPcwBz6hzK28zPa3oB580XKPRPOB98MkS3tMwHM6eG9FUB7tmsH6ayECp1bani+eHD3c+8VcgOd08Ia43u/gQ4+Svx7u+0LBn0/9/BCns0byTVV0xDMugOe08KjqT59Qvo0Ym07l78zYmJAUvzPj0IFGxlkjbhlzdb4awHNSeKzjYERuRH98vBbwnBAeVRWelhEebW/TeAGeU8J7NUjOfV5XLz/Ac0p4VHVGLxe7TuIzAvCcFt6UcXfb5IGXq8PFhRPDo6rNyXIcbr9r7L6dDHhOC4+qzhVKf0X7qCsX4DkxvNHqmw3SurtQhBvIgGfOazOlPNN7fN4pwHNqeA/mQJDqTI9MnYRntYD3Q1bESkKv13RngOf08KhqSbTDD7ik97oCHuCZ86JfrQPffEE6+r6LGPAA7+G3Yq6TQw65dbXTJqMjKODZHKzDOo24/Z3dGb23B7q+A56d+GpKisXb7xmbVsVhzAXgcczr86sqheNra92UMNQNo8wAjylh88tK+eNrbtqSbP0NlYDH8SzFGeF1Zbx2R/r1ajZ+9zvO6GOiul/+zgRvrGZWIPdwm5g5wI9lmdbn9BUL3hBXlvWxPrbqScwsS7T+HnK2NfP2cCS87kybHBeTn9fcZAcgMVTl6iJCuU93oaJPTcSCh/DJKK9ZgaviNifrsg7uP3o4P+/EscMH9+lyMlOSFkW+6MdlHwd4iALyFK0q27skKJ0wBuUFPBGSvIEN3hhvlBfwRMine9iuRnnMiI4AXt+UlbLBQ3EBT4RoGV/Nea8dxQU8EZKSxHaGd6kExQU8ETrtfNfIBk9/HMUFPIEZ4WmoYn1euCsbxQU8QQkOZHvjbXdbuhjFBTyO+cmYOcHTpzyavE+rnhO8ft3FEl69JIilXq8I4FlMZFg3mk5zKBHSJ+x+B0oLeKzwRGin8lFawJMBXmw0Sgt40sMjIz1RWsCTHN4ZPQoLeNLDIwtmo7CAJzk8Xi9MRwBP6P7O+vuzEMBzGLzPD6GogCc5vLparRpFBTyJ4XWS0HkoKeBJDY+sXYmCAp7U8Mj6dSgn4EkM77bp7SgUE/AkhldZ4T8FpQQ8SeGZjBsTBrmgkIAnIby7bambh3ugiIAnHTxytuCdZdznJkIAz0ZCZlSU2+x3TDrJlcsZqVHhmCUA8ETOIJfpU8Lmv7MsdXNO5u7svTl7cnZlZ6UnrIkKnxuC2VAAD0EADwE8BAE8BPAQBPAQwEMAD0EADwE8BAE8BPAQhH/+D4e45aZJvpSWAAAAAElFTkSuQmCC"}),s.createElement("div",{className:"logoBlurb",style:e},"sponsored by New Jersey ",s.createElement("br",null),"Harm Reduction Coalition"))},e}(s.Component)},8118:function(t,e,a){var i=a(3552),s=a(7294),n={paddingLeft:"40px",fontSize:"82pt",position:"fixed",fontWeight:"300",color:"white",display:"block"},o={fontSize:"82pt",top:"20vh"},l={fontSize:"35pt",bottom:"16vh"},r={fontWeight:"700"},c=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={size:"large"===a.props.size?o:l,class:"tagline"},a}(0,i.Z)(e,t);var a=e.prototype;return a.componentDidMount=function(){"extra-low"===this.props.position&&this.setState({class:"tagline-low"})},a.render=function(){return s.createElement("h1",{className:this.state.class,style:Object.assign({},n,this.state.size)},"Essential. ",s.createElement("br",null),"Effective. ",s.createElement("br",null),s.createElement("span",{style:r},"Human."))},e}(s.Component);e.Z=c},6316:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=a(3552),s=a(7294),n=a(5444),o=(a.p,a(6695)),l=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={socialStyle:a.props.social?{display:"block"}:{display:"none"}},a}return(0,i.Z)(e,t),e.prototype.render=function(){return s.createElement("div",{className:"actions-container"},s.createElement("div",{className:"donate-container",style:this.state.socialStyle}," >> Donate "),s.createElement("div",{className:"social-container",style:this.state.socialStyle}," SOCIAL LINKS "))},e}(s.Component),r=(a(8267),a(3935)),c=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={clickFunction:a.props.onClick},a}(0,i.Z)(e,t);var a=e.prototype;return a.componentDidUpdate=function(t){},a.componentDidMount=function(){},a.render=function(){var t,e=this;function a(t){console.log(r.findDOMNode(t));for(var e=Array.prototype.slice.call(document.getElementsByClassName("nav-item-container")),a=e.length-1;a>=0;a--)e[a]!==t&&e[a].classList.remove("selected");r.findDOMNode(t).classList.add("selected")}return"image"==this.props.type?t=s.createElement("div",{className:"nav-item image-nav",style:{backgroundImage:"url("+this.props.data+")"},onClick:function(){e.state.clickFunction(),a(e)}},s.createElement("span",null,">>  "),this.props.title):"link"==this.props.type?t=s.createElement("div",{className:"nav-item link-nav",onClick:function(){e.state.clickFunction(),a(e)}},s.createElement("span",null,">>  "),this.props.title):"video"==this.props.type&&(t=s.createElement("div",{className:"nav-item video-nav",style:{backgroundImage:"url("+this.props.metadata2+")"},onClick:function(){e.state.clickFunction(),a(e)}})),s.createElement("div",{className:"nav-item-container"},t)},e}(s.Component),d=a(8118),m=[{type:"link",data:"/img/HOW+WE+GOT+HERE+STAT.JPG",title:"Cost of the Drug War",metadata:'<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},{type:"link",data:"/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG",title:"Testimonial",metadata:"“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"https://www.youtube.com/embed/_44LjDGKJWs",title:"Share the campaign",metadata:"",metadata2:"/img/how+we+got+here.jpg"},{type:"image",data:"/img/how-we-got-here_icon.png",title:"Rates of HIV where you live",metadata:"",metadata2:"/img/harm_reduction_test.png"},{type:"link",data:"/img/HOW+WE+GOT+HERE+STAT.JPG",title:"Cost of the Drug War",metadata:'<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},{type:"link",data:"/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG",title:"Testimonial",metadata:"“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"https://www.youtube.com/embed/_44LjDGKJWs",title:"Share the campaign",metadata:"",metadata2:"/img/how+we+got+here.jpg"},{type:"image",data:"/img/how-we-got-here_icon.png",title:"Rates of HIV where you live",metadata:"",metadata2:"/img/harm_reduction_test.png"},{type:"link",data:"/img/HOW+WE+GOT+HERE+STAT.JPG",title:"Cost of the Drug War",metadata:'<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},{type:"link",data:"/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG",title:"Testimonial",metadata:"“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"https://www.youtube.com/embed/_44LjDGKJWs",title:"Share the campaign",metadata:"",metadata2:"/img/how+we+got+here.jpg"},{type:"image",data:"/img/how-we-got-here_icon.png",title:"Rates of HIV where you live",metadata:"",metadata2:"/img/harm_reduction_test.png"},{type:"link",data:"/img/HOW+WE+GOT+HERE+STAT.JPG",title:"Cost of the Drug War",metadata:'<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},{type:"link",data:"/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG",title:"Testimonial",metadata:"“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"https://www.youtube.com/embed/_44LjDGKJWs",title:"Share the campaign",metadata:"",metadata2:"/img/how+we+got+here.jpg"},{type:"image",data:"/img/how-we-got-here_icon.png",title:"Rates of HIV where you live",metadata:"",metadata2:"/img/harm_reduction_test.png"},{type:"link",data:"/img/HOW+WE+GOT+HERE+STAT.JPG",title:"Cost of the Drug War",metadata:'<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},{type:"link",data:"/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG",title:"Testimonial",metadata:"“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"https://www.youtube.com/embed/_44LjDGKJWs",title:"Share the campaign",metadata:"",metadata2:"/img/how+we+got+here.jpg"},{type:"image",data:"/img/how-we-got-here_icon.png",title:"Rates of HIV where you live",metadata:"",metadata2:"/img/harm_reduction_test.png"}],h="https://d2ycth98mhglth.cloudfront.net/media",p=function(t){function e(e){var a;return(a=t.call(this,e)||this).selectItem=function(t){a.setState({selectedItem:a.state.contentItems[t]}),console.log(a.state.selectedItem.metadata2),void 0!==a.state.contentItems[t].metadata2?a.setState({source:a.state.contentItems[t].metadata2}):a.setState({source:""})},a.state={title:"Placeholder",contentItems:[],selectedItem:"",id:0,blurb:"Placeholder content",description:"",source:"",contentClass:"story-content",gradient:{background:"linear-gradient(115.66deg, "+a.props.location.state.data.color+" -2%, rgba(196, 196, 196, 0) 50%"}},a}(0,i.Z)(e,t);var a=e.prototype;return a.componentDidMount=function(){console.log(this.state.contentItems),this.props.location.state?(this.setState({title:this.props.location.state.data.title}),this.setState({id:this.props.location.state.data.id}),this.setState({blurb:this.props.location.state.data.blurb}),console.log(this.props.location.state.data),this.setState({gradient:{background:"linear-gradient(115.66deg, "+this.props.location.state.data.color+" -2%, rgba(196, 196, 196, 0) 50%"}})):(0,n.c4)("/stories-hub"),"undefined"==this.state.title&&this.setState({title:this.props.location.state.title}),this.state.contentItems!==m&&this.setState({contentItems:m}),console.log(this.state.gradient)},a.componentDidUpdate=function(t,e){if(this.props.location.state&&this.state.title!==this.props.location.state.data.title&&(this.setState({title:this.props.location.state.data.title}),this.setState({id:this.props.location.state.data.id}),this.setState({blurb:this.props.location.state.data.blurb})),this.state.selectedItem!==e.selectedItem){var a=document.createElement("div");a.innerHTML=this.state.selectedItem.metadata,this.setState({description:a.innerHTML+"<div class = 'story-source'>"+this.state.source+"</div>"}),console.log(this.state.selectedItem),"video"!==this.state.selectedItem.type?this.setState({contentClass:"story-content image-content"}):this.setState({contentClass:"story-content"})}},a.render=function(){var t=this;if(this.props.location.state){this.state.selectedItem;return s.createElement("div",{className:"story-parent-container"},s.createElement("div",{className:"selected-topic-container",style:this.state.gradient},s.createElement("div",{className:"story-title"},this.state.title),s.createElement("div",{className:this.state.contentClass,style:{backgroundImage:"url("+h+this.state.selectedItem.data+")"}},"video"!==this.state.selectedItem.type?s.createElement("div",{className:"story-copy",dangerouslySetInnerHTML:{__html:this.state.description}}):console.log("this is a video"),"video"==this.state.selectedItem.type?s.createElement("iframe",{className:"video-player",width:"1280",height:"560",src:this.state.selectedItem.data,title:"YouTube video player",frameborder:"0",autoplay:"1",mute:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):console.log("not a video")),s.createElement("div",{className:"contentBlurb"},this.state.blurb)),s.createElement("div",{className:"side-nav-container"},s.createElement(n.rU,{to:"/stories-hub",className:"back-link"},"Home"),s.createElement(c,{type:m[4*this.state.id].type,data:h+m[4*this.state.id].data,title:m[4*this.state.id].title,metadata2:h+m[4*this.state.id+3].metadata2,onClick:function(){return t.selectItem(4*t.state.id)}}),s.createElement(c,{type:m[4*this.state.id+1].type,data:h+m[4*this.state.id+1].data,title:m[4*this.state.id+1].title,metadata2:h+m[4*this.state.id+1].metadata2,onClick:function(){return t.selectItem(4*t.state.id+1)}}),s.createElement(c,{type:m[4*this.state.id+2].type,data:h+m[4*this.state.id+2].data,title:m[4*this.state.id+2].title,metadata2:h+m[4*this.state.id+2].metadata2,onClick:function(){return t.selectItem(4*t.state.id+2)}}),s.createElement(c,{type:m[4*this.state.id+3].type,data:h+m[4*this.state.id+3].data,title:m[4*this.state.id+3].title,metadata2:h+m[4*this.state.id+3].metadata2,onClick:function(){return t.selectItem(4*t.state.id+3)}}),s.createElement(l,{social:!0,donate:!0})),s.createElement(d.Z,{size:"small",position:"extra-low"}),s.createElement(o.Z,{wordmark:!1,sideCopy:!0,size:"small"}))}return null},e}(s.Component)}}]);
//# sourceMappingURL=a75fbb4a0587f734ecb7f88de53e31cacbffc86a-db0f5e3d41956775f366.js.map