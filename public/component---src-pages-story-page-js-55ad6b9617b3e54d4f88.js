"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[400],{8267:function(t,e,a){var n=a(3552),s=a(7294),i=a(5444),o=a(3935),r=(a(8543),a(3981),a(8540),{top:0,left:0,minHeight:"100vh",zIndex:-1}),c=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={highlighted:!1,data:{title:a.props.title}},a}(0,n.Z)(e,t);var a=e.prototype;return a.componentDidMount=function(){"first"==this.props.videoName&&o.findDOMNode(this).click()},a.render=function(){var t=this,e=this.state.data,a=[];function n(t){!function(t){for(var e=(a=Array.prototype.slice.call(document.getElementsByClassName("video-container"))).length-1;e>=0;e--)a[e]!==t&&(a[e].classList.remove("column-highlighted"),a[e].firstChild.pause())}(o.findDOMNode(t)),o.findDOMNode(t).classList.contains("column-highlighted")?(o.findDOMNode(t).classList.remove("column-highlighted"),document.getElementById(t.props.videoName).pause()):(o.findDOMNode(t).classList.add("column-highlighted"),document.getElementById(t.props.videoName).play())}return s.createElement("div",{className:"video-container",onClick:function(){return n(t)}},s.createElement("video",{muted:!0,loop:!0,style:r,id:this.props.videoName},s.createElement("source",{src:this.props.source,type:"video/mp4"})),s.createElement("div",{className:"video-title"},this.props.title),s.createElement(i.rU,{className:"story-link",to:"/story-page",state:e},"Click here to explore"))},e}(s.Component);e.Z=c},8540:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var n=a(3552),s=a(7294),i=(a(5444),a(8140),a(8543)),o=a.n(i),r=a(5250),c=(a(9226),a(8267),function(t){function e(e){var a;return(a=t.call(this,e)||this).state={},a}(0,n.Z)(e,t);var a=e.prototype;return a.componentDidUpdate=function(t){},a.render=function(){return s.createElement("div",{className:"nav-item",onClick:this.props.onClick},this.props.data)},e}(s.Component));o().load({google:{families:["Roboto:wght@0,400;0,700;1,400;1,700","sans-serif"]}}),document.body.style.margin="0px";var l=function(t){function e(e){var a;return(a=t.call(this,e)||this).selectItem=function(t){a.setState({selectedItem:t.props.location.state}),console.log(a.state.selectedItem)},a.state={title:a.props.location.state.title,contentItems:[{type:"link",data:"http://www.mikecarmody.net",metadata:"a test link"},{type:"image",data:"../images/harm_reduction_test.png",metadata:"harm reduction image test"},{type:"image",data:"../images/harm_reduction_test.png",metadata:"harm reduction image test"},{type:"video",data:"../videos/godrays-test.mp4",metadata:"godrays video test"}],selectedItem:""},a}return(0,n.Z)(e,t),e.prototype.render=function(){var t=this;this.state.selectedItem;return s.createElement("div",{className:"story-parent-container"},s.createElement("div",{className:"selected-topic-container"},s.createElement("div",{className:"story-title"},this.state.title),s.createElement("div",{className:"story-content"},this.state.selectedItem.data)),s.createElement("div",{className:"side-nav-container"},s.createElement(c,{type:this.state.contentItems[0].type,data:this.state.contentItems[0].data,onClick:function(){return t.selectItem(t)}}),s.createElement(c,{type:this.state.contentItems[0].type,data:this.state.contentItems[1].data,onClick:function(){return t.selectItem(t)}}),s.createElement(c,{type:this.state.contentItems[0].type,data:this.state.contentItems[2].data,onClick:function(){return t.selectItem(t)}}),s.createElement(c,{type:this.state.contentItems[0].type,data:this.state.contentItems[3].data,onClick:function(){return t.selectItem(t)}})),s.createElement(r.Z,{wordmark:!1,sideCopy:!0,size:"small"}))},e}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-story-page-js-55ad6b9617b3e54d4f88.js.map