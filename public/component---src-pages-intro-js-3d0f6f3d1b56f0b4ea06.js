"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[547],{3981:function(e,t,n){var o=n(3552),i=n(7294),s={position:"fixed",top:0,left:0,minWidth:"100vw",minHeight:"100vh",zIndex:-1},a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={video:n.props.video},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e){e.video!==this.props.video&&this.setState({video:this.props.video})},n.render=function(){return i.createElement("video",{style:s,autoplay:"autoplay",muted:!0,className:"bg-video",id:"landing-clip",key:this.state.video},i.createElement("source",{src:this.state.video,type:"video/mp4"}))},t}(i.Component);t.Z=a},9763:function(e,t,n){var o=n(3552),i=n(7294),s={float:"left",width:0,height:0,borderTop:"11px solid transparent",borderBottom:"11px solid transparent",borderLeft:"14px solid #FD7D06",marginRight:"12px"},a={},c=function(e){function t(t){return e.call(this,t)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return i.createElement("div",{className:"skipBlock"},i.createElement("div",{className:"arrow",style:s}),i.createElement("div",{className:"skipText",style:a},this.props.title))},t}(i.Component);t.Z=c},6695:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(3552),i=n(7294),s={fontFamily:"Roboto",position:"fixed",bottom:0,left:0,margin:"40px",maxHeight:"78px",display:"inline-block",color:"white",lineHeight:"24px",textTransform:"uppercase",width:"440px",fontSize:"14px"},a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return(0,o.Z)(t,e),t.prototype.render=function(){var e={maxWidth:"158px",float:"left",paddingRight:"36px",display:this.props.wordmark?"block":"none"},t={paddingTop:"16px",display:this.props.sideCopy?"block":"none",color:"small"==this.props.size?"#ACACAC":"white",fontSize:"small"==this.props.size?"12pt":"14pt"};return i.createElement("div",{className:"logoBlock",style:s},i.createElement("img",{className:"wordmark",style:e,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAACaCAQAAACePjzKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDctMjlUMTM6NTY6MTUtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0ZDNlNDU5LWQ2YjAtMTk0ZS05YjUwLWE4NDNiYzkxNTgzZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NGQzZTQ1OS1kNmIwLTE5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"}),i.createElement("div",{className:"logoBlurb",style:t},"sponsored by New Jersey ",i.createElement("br",null),"Harm Reduction Coalition"))},t}(i.Component)},6635:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(3552),i=n(7294),s=n(5444),a=n(6695),c=n(9763);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var r,d,p,u,m=n(3981),h=["https://nj-hrc-project-media.s3.amazonaws.com/media/vid/NJHRC+Explainer+I.mp4","https://nj-hrc-project-media.s3.amazonaws.com/media/vid/NJHRC+EXPLAINER+II.mp4","https://nj-hrc-project-media.s3.amazonaws.com/media/vid/NJHRC+HR+EXPLAINER+3.mp4"],y=["<span style={headingBoldStyles}>Here in New Jersey,</span><br />when it comes to<br />opioids and overdoses...","...do you think what we</br> are doing is working?","Given those facts...","...do you think continuing to do more of the same will work?","Would you at least be willing to learn about how harm reduction works to address these critical issues facing New Jerseyans?","Would you be willing to try something new?",""],A=function(e){function t(t){var n;return(n=e.call(this,t)||this).nextQuestion=function(e){n.setState({stage:e})},n.updateCopy=function(e){console.log("lookup: "+e),n.setState({copy:y[e]}),u.innerHTML=y[e],console.log("updating copy: "+n.state.copy)},n.hideCopy=function(){r.classList.add("hidden"),p.classList.remove("hidden"),d.classList.add("hidden"),console.log("show the video"),n.toggleVideo(!0)},n.showCopy=function(){r.classList.remove("hidden"),document.getElementById("landing-clip").classList.add("hidden"),console.log("hide the video"),n.toggleVideo(!1)},n.showButtons=function(){d.classList.remove("hidden")},n.stateSwitch=function(){switch(console.log("stage: "+n.state.stage),n.state.stage){case 0:setTimeout(function(){this.updateCopy(1),this.showButtons()}.bind(l(n)),2e3);break;case 2:n.setState({video:h[0]}),n.hideCopy(),setTimeout(function(){this.setState({stage:3})}.bind(l(n)),2e3);break;case 3:n.setState({yesVal:4}),n.updateCopy(2),n.showCopy(),setTimeout(function(){this.updateCopy(3),this.showButtons()}.bind(l(n)),2e3);break;case 4:n.setState({video:h[1]}),n.hideCopy(),setTimeout(function(){this.setState({stage:5})}.bind(l(n)),2e4);break;case 5:n.setState({yesVal:7,noVal:7}),n.showButtons(),n.updateCopy(4),n.showCopy();break;case 6:n.setState({yesVal:7,noVal:7}),n.showButtons(),n.updateCopy(5),n.showCopy();break;case 7:n.setState({video:h[2]}),n.hideCopy(),setTimeout(function(){(0,s.c4)("/stories-hub")}.bind(l(n)),2e3)}},n.toggleVideo=function(e){document.getElementById("landing-clip").load(),setTimeout((function(){e?document.getElementById("landing-clip").play():document.getElementById("landing-clip").pause()}),200)},n.state={stage:0,video:h[0],copy:y[0],yesVal:2,noVal:6},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){u=document.getElementsByClassName("video-overlay-copy")[0],r=document.getElementsByClassName("overlay-content-container")[0],document.getElementsByClassName("overlay-background")[0],d=document.getElementsByClassName("overlay-buttons-container")[0],p=document.getElementById("landing-clip"),this.showCopy(),this.updateCopy(0),this.stateSwitch(),p.muted=!1},n.componentDidUpdate=function(e,t){this.state.stage!==t.stage&&(console.log("New stage! "+t.stage+", "+this.state.stage),this.stateSwitch()),this.state.copy,t.copy},n.render=function(){var e=this;return i.createElement("div",{className:"overlay-background"},i.createElement(m.Z,{video:this.state.video}),i.createElement("div",{className:"overlay-content-container"},i.createElement("h1",{className:"video-overlay-copy"}),i.createElement("div",{className:"overlay-buttons-container hidden"},i.createElement("div",{className:"yes-button",onClick:function(){return e.nextQuestion(e.state.yesVal)}},"Yes"),i.createElement("div",{className:"no-button",onClick:function(){return e.nextQuestion(e.state.noVal)}},"No"))))},t}(i.Component),w={padding:0},g=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return i.createElement("main",{style:w},i.createElement("title",null,"NJ HRC Site"),i.createElement(A,null),i.createElement(a.Z,null),i.createElement("div",{className:"link-container"},i.createElement(s.rU,{to:"/stories-hub"},i.createElement(c.Z,{title:"Main Site"}))))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-intro-js-3d0f6f3d1b56f0b4ea06.js.map