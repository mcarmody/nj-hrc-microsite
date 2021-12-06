"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[66],{8267:function(e,t,a){var i=a(3552),s=a(7294),n=a(5444),o=a(3935),r=(a(8797),{top:0,left:0,minHeight:"100vh",zIndex:-1,background:"black"}),c=["Harm reduction works where criminalization of drug use fails.","Harm reduction works because it helps people make realistic, incremental changes.","Syringe access leads the way in preventing the spread of HIV and viral hepatitis..","People who use drugs are on the frontline of overdose prevention.","Syringe Access connects people to other stabilizing services."],l=["#CC4400","#70EBCA","#B999FF","#FF925C","#FFE4D6"],d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={highlighted:!1,data:{title:a.props.title,id:a.props.id,blurb:c[a.props.id],color:l[a.props.id]}},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){"first"==this.props.videoName&&o.findDOMNode(this).click(),"undefined"==this.state.title?(this.setState({title:this.props.title}),document.getElementsByClassName("video-title")[this.props.id].innerHTML=this.props.title):document.getElementsByClassName("video-title")[this.props.id].innerHTML=this.props.title,this.setState({beforeStyle:{"::before":{background:"linear-gradient(147.23deg, rgba(255, 84, 0, 0.54) 10.03%, "+l[this.state.data.id]+" 45.96%)"}}}),console.log(this.state.beforeStyle),console.log(r)},a.render=function(){var e=this,t={top:0,left:0,minHeight:"100vh",backgroundImage:"url("+this.props.source+")"},a=[];function i(e){!function(e){for(var t=(a=Array.prototype.slice.call(document.getElementsByClassName("video-container"))).length-1;t>=0;t--)a[t]!==e&&a[t].classList.remove("column-highlighted")}(o.findDOMNode(e)),o.findDOMNode(e).classList.contains("column-highlighted")?o.findDOMNode(e).classList.remove("column-highlighted"):o.findDOMNode(e).classList.add("column-highlighted")}return console.log(this.state.id),s.createElement("div",{className:"video-container",onClick:function(){return i(e)},style:t},s.createElement("div",{className:"background-image"}),s.createElement("div",{className:"video-title"}),s.createElement(n.rU,{className:"story-link",to:"/story-page",id:"story-link-"+this.props.id,state:{data:this.state.data}},">>"))},t}(s.Component);t.Z=d},6695:function(e,t,a){a.d(t,{Z:function(){return o}});var i=a(3552),s=a(7294),n={position:"fixed",left:0,margin:"40px",maxHeight:"78px",display:"inline-block",color:"white",lineHeight:"24px",textTransform:"uppercase",width:"440px",fontSize:"14px"},o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a}return(0,i.Z)(t,e),t.prototype.render=function(){var e={display:this.props.wordmark?"block":"none"},t={display:this.props.sideCopy?"block":"none",color:"small"==this.props.size?"#ACACAC":"white",fontSize:"small"==this.props.size?"12pt":"14pt"};return s.createElement("div",{className:"logoBlock",style:n},s.createElement("img",{className:"wordmark",style:e,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAACaCAQAAACePjzKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0yOVQxMzo1NjoxNS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDctMjlUMTM6NTY6MTUtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0ZDNlNDU5LWQ2YjAtMTk0ZS05YjUwLWE4NDNiYzkxNTgzZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NGQzZTQ1OS1kNmIwLTE5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"}),s.createElement("div",{className:"logoBlurb",style:t},"sponsored by New Jersey ",s.createElement("br",null),"Harm Reduction Coalition"))},t}(s.Component)},8118:function(e,t,a){var i=a(3552),s=a(7294),n={fontWeight:"700"},o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={class:"large"===a.props.size?"tagline-large":"tagline-small"},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){"extra-low"===this.props.position&&this.setState({class:"tagline-low"})},a.render=function(){return s.createElement("h1",{className:"tagline "+this.state.class},"Essential. ",s.createElement("br",null),"Effective. ",s.createElement("br",null),s.createElement("span",{style:n},"Human."))},t}(s.Component);t.Z=o},8797:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=a(3552),s=a(7294),n=a(5444),o=(a.p,a(6695)),r=a.p+"static/twitter-icon-b7535a2158f3d67577392af7dd6d6c23.png",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAAFFCAYAAAB7dP9dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuN2E3YTIzNiwgMjAyMS8wOC8xMi0wMDoyNToyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMi0wNVQxMToyNToxOC0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0wNVQxMToyNToxOC0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTItMDVUMTE6MjU6MTgtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQxM2I3MjJjLTliMzYtZTA0MC1iM2QyLWQxYWYyYWYwYjhiZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpkMTNiNzIyYy05YjM2LWUw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",l="Syringe Access is Essential, Effective, and Human. Harm reduction is an essential health service in New Jersey. Communities that have syringe access are healthier and more stable. Learn more at www.keepNJhealthy.org",d=function(e){function t(t){var a;return(a=e.call(this,t)||this).share=function(){console.log("tweet this or something"),console.log(l)},a.toggleVideo=function(){var e=document.getElementById("story-clip"),t=document.getElementsByClassName("story-content")[0];null==e?a.setState({video:e}):console.log("we have a video"),e.paused?(e.classList.remove("hidden"),t.classList.add("no-bg"),e.play()):(e.classList.add("hidden"),t.classList.remove("no-bg"),e.pause()),e.paused?a.setState({videoButtonText:"Play"}):a.setState({videoButtonText:"Pause"})},a.state={videoButtonText:"Play"},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentDidUpdate=function(e,t){},a.render=function(){var e=this;return s.createElement("div",{className:"interaction-container"},s.createElement("div",{id:"share-link",onClick:function(){return e.share()}},s.createElement("span",null,">>")," Share",s.createElement("a",{href:"http://twitter.com/intent/tweet?text="+l,target:"_blank",rel:"noopener"},s.createElement("img",{id:"twitter-link",src:r})),s.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=test.com",target:"_blank",rel:"noopener"},s.createElement("img",{id:"fb-link",src:c}))),"video"==this.props.type?s.createElement("div",{id:"play-link",onClick:function(){return e.toggleVideo()}},s.createElement("span",null,">>")," ",this.state.videoButtonText," Video"):console.log("no play button"))},t}(s.Component),m=a.p+"static/insta-icon-24821b3955e5d46518a1e0a27bdb7365.png",p=function(e){function t(t){var a;return(a=e.call(this,t)||this).share=function(){console.log("tweet this or something"),console.log("Syringe Access is Essential, Effective, and Human. Harm reduction is an essential health service in New Jersey. Communities that have syringe access are healthier and more stable. Learn more at www.keepNJhealthy.org")},a.toggleVideo=function(){var e=document.getElementById("story-clip"),t=document.getElementsByClassName("story-content")[0];null==e?a.setState({video:e}):console.log("we have a video"),e.paused?(e.classList.remove("hidden"),t.classList.add("no-bg"),e.play()):(e.classList.add("hidden"),t.classList.remove("no-bg"),e.pause()),e.paused?a.setState({videoButtonText:"Play"}):a.setState({videoButtonText:"Pause"})},a.state={videoButtonText:"Play"},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentDidUpdate=function(e,t){},a.render=function(){return s.createElement("div",{className:"social-container"},s.createElement("a",{href:"https://www.twitter.com/njharmreduction",target:"_blank",rel:"noopener"},s.createElement("img",{id:"twitter-link",src:r})),s.createElement("a",{href:"https://www.facebook.com/njharmreduction",target:"_blank",rel:"noopener"},s.createElement("img",{id:"fb-link",src:c})),s.createElement("a",{href:"https://www.instagram.com/njharmreduction",target:"_blank",rel:"noopener"},s.createElement("img",{id:"insta-link",src:m})),s.createElement("div",null,s.createElement("span",null,">>")," ",s.createElement("a",{href:"https://njharmreduction.org/donate",target:"_blank",rel:"noopener"},"Donate to the cause")))},t}(s.Component),h=(a(8267),a(3935)),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={clickFunction:a.props.onClick},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e){},a.componentDidMount=function(){},a.render=function(){var e,t=this;function a(e){console.log(h.findDOMNode(e)),document.getElementById("story-clip")&&(document.getElementById("story-clip").paused||document.getElementById("play-link").click()),document.getElementById("story-clip")&&document.getElementById("story-clip").load();for(var t=Array.prototype.slice.call(document.getElementsByClassName("nav-item-container")),a=t.length-1;a>=0;a--)t[a]!==e&&t[a].classList.remove("selected");h.findDOMNode(e).classList.add("selected")}return"image"==this.props.type?e=s.createElement("div",{className:"nav-item image-nav",style:{backgroundImage:"url("+this.props.icon+")"},onClick:function(){t.state.clickFunction(),a(t)}},s.createElement("span",null,">>  "),this.props.title):"link"==this.props.type?e=s.createElement("div",{className:"nav-item link-nav",onClick:function(){t.state.clickFunction(),a(t)}},s.createElement("span",null,">>  "),this.props.title):"video"==this.props.type&&(e=s.createElement("div",{className:"nav-item video-nav",style:{backgroundImage:"url("+this.props.metadata2+")"},onClick:function(){t.state.clickFunction(),a(t)}},s.createElement("span",null,">>  "),this.props.title)),s.createElement("div",{className:"nav-item-container"},e)},t}(s.Component),g=a(8118),E=[{type:"video",data:"/vid/HOW+WE+GOT+HERE.mp4",title:"How We Got Here",metadata:"",metadata2:"/img/how+we+got+here+main+photo.jpg"},{type:"link",data:"/img/HOW+WE+GOT+HERE+STAT.jpg",title:"Cost of the Drug War",metadata:'<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},{type:"link",data:"/img/HOW+WE+GOT+HERE+TESTIMONIAL.jpg",title:"Testimonial",metadata:"“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"/vid/SIDE+VIDEO-HOW+WE+GOT+HERE.mp4",title:"Share the campaign",metadata:"",metadata2:"/img/how+we+got+here.jpg"},{type:"image",icon:"/img/hwgh-icon.png",data:"/img/how-we-got-here-info.png",title:"Drug War by the Numbers",metadata:"70 to 90% of people who use a criminalized drug (including heroin, cocaine, and methamphetamine) do not experience a substance use disorder.",metadata2:"<div className = 'source-1'><span>>></span> Source: the Global Commission on Drug Policy reports</div><div className = 'source-2'><span>>></span> Source: New Jersey Policy Perspective—A War on Us: How Much New Jersey Spends Enforcing the War on Drugs</div>"},{type:"video",data:"/vid/HARM+REDUCTION+101.mp4",title:"How We Got Here",metadata:"",metadata2:"/img/harm+reduction+101+main+photo.jpg"},{type:"link",data:"/img/HR101+STAT.jpg",title:"Reducing Transmission",metadata:'People who access harm reduction programs are <span className = "stat-highlight">50% less likely</span>to contract HIV or Hepatitis C.'},{type:"link",data:"/img/HR101+TESTIMONIAL.jpg",title:"Testimonial",metadata:"Going to a syringe access program was probably the smartest thing that I did.  They saved me from infectious disease.”",metadata2:"—Domenick"},{type:"video",data:"/vid/SIDE+VIDEO-HR101.mp4",title:"Share the campaign",metadata:"",metadata2:"/img/harm+reduction+101.jpg"},{type:"image",icon:"/img/hr-icon.png",data:"/img/hr101-info.png",title:"Examples of Harm Reduction",metadata:"A nationwide study showed that more than 80% of naloxone reversals were actually carried out by PWUD.",metadata2:"<div className = 'source-1'><span>>></span> Source: www.cdc.gov/ssp/syringe-services-programs-factsheet.html</div>"},{type:"video",data:"/vid/HIV+_+HEP+C.mp4",title:"How We Got Here",metadata:"",metadata2:"/img/hiv+hepc+main+photo.jpg"},{type:"link",data:"/img/HIV+STAT.jpg",title:"Reducing rates",metadata:"As syringe access has become available, rates of HIV transmission among people who inject drugs have declined by one-third."},{type:"link",data:"/img/HIV+TESTIMONIAL.jpg",title:"Testimonial",metadata:"HIV Treatment for one person in their lifetime is about $600,000. The current cost of one syringe is 10 cents.”",metadata2:"—Georgett Watson, South Jersey AIDS Alliance"},{type:"video",data:"/vid/SIDE+VIDEO-HOW+WE+GOT+HERE.mp4",title:"Share the campaign",metadata:"",metadata2:"/img/hiv+hep+c.jpg"},{type:"image",icon:"/img/hiv-icon.png",data:"/img/hiv-info.png",title:"Rates in New Jersey",metadata:"SSPs are associated with approximately 50% reduction in HIV & Hepatitis C incidence. ",metadata2:"When combined with medications that treat opioid dependence (also known as medication-assisted treatment) HIV and HCV transmission is reduced by more than two-thirds.<div className = 'source-1'><span>>></span> Source: CDC Summary of Information on The Safety and Effectiveness of Syringe Services Programs (SSPs)</div><div className = 'source-2'><span>>></span> Source: all above stats retrieved/calculated from State of New Jersey Department of Health/State of New Jersey Department of Health Overdose Data Dashboard </div>"},{type:"video",data:"/vid/OVERDOSE.m4v",title:"How We Got Here",metadata:"",metadata2:"/img/overdose_main_photo.jpg"},{type:"link",data:"/img/OVERDOSE+STAT.jpg",title:"Overdoses in New Jersey",metadata:'There were <span className = "stat-highlight">18,492</span>overdose deaths in the state of New Jersey between 2010 and 2019'},{type:"link",data:"/img/OVERDOSE+TESTIMONIAL.jpg",title:"Testimonial",metadata:"The numbers don’t lie. Individuals who come to our syringe access program have less of a chance of overdosing.”",metadata2:"—Eddie - Hyacinth AIDS Foundation"},{type:"video",data:"/vid/SIDE+VIDEO-OVERDOSE.mp4",title:"Share the campaign",metadata:"",metadata2:"/img/overdose+prevention.jpg"},{type:"image",icon:"/img/overdose-icon.png",data:"/img/overdose-info.png",title:"Rates in New Jersey",metadata:"More than 80% of naloxone reversals were carried out by PWUD",metadata2:"<div className = 'source-1'><span>>></span> Source: Office of the Chief State Medical Examiner (NJ) https://ocsme.nj.gov/dashboard</div>"},{type:"video",data:"/vid/CONNECTION+TO+SERVICES.mp4",title:"How We Got Here",metadata:"",metadata2:"/img/connection+to+services+main+photo.jpg"},{type:"link",data:"/img/CONNECTION+STAT.jpg",title:"Access to Harm Reduction",metadata:"People who access harm reduction programs are 5 times more likely to enter treatment for drug use and 3 times more likely to stop drug use impeding quality of life than those without access."},{type:"link",data:"/img/CONNECTION+TESTIMONIAL.jpg",title:"Testimonial",metadata:"“We have great evidence that shows that somebody who participates in a syringe access program is actually more likely to enter into drug treatment.”",metadata2:"—Dr. Amesika Nyaku, Rutgers Institute for Health"},{type:"video",data:"/vid/SIDE+VIDEO-CONNECTION+TO+SERVICES+AND+HIV.mp4",title:"Share the campaign",metadata:"",metadata2:"/img/connection+to+services.jpg"},{type:"image",icon:"/img/connections-icon.png",data:"/img/connection-info.png",title:"Harm Reduction by the Numbers",metadata:"Studies in Baltimore and New York City found no difference in crime rates between areas with and without syringe services programs.",metadata2:"<div className = 'source-1'><span>>></span> Source: 2018 CDC publication, Evidence-Based Strategies for Preventing Opioid Overdose: What’s Working in the United States</div><div className = 'source-2'><span>>></span> Source: CDC Syringe Services Programs Fact Sheet  </div>"}],u="https://nj-hrc-project-media.s3.amazonaws.com/media",v=function(e){function t(t){var a;return(a=e.call(this,t)||this).selectItem=function(e){a.setState({selectedItem:a.state.contentItems[e]}),a.setState({video:document.getElementById("story-clip")}),console.log(a.state.selectedItem.metadata2),void 0!==a.state.contentItems[e].metadata2?a.setState({source:a.state.contentItems[e].metadata2}):a.setState({source:""}),console.log("link: "+u+a.state.selectedItem.data)},a.state={title:"Placeholder",contentItems:[],selectedItem:{},id:0,blurb:"Placeholder content",description:"",source:"",contentClass:"story-content",gradient:{background:"linear-gradient(115.66deg, #CC4400 -2%, rgba(196, 196, 196, 0) 50%"},video:""},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){console.log(this.state.selectedItem),this.props.location.state?(this.setState({selectedItem:E[5*this.props.location.state.data.id]}),this.setState({title:this.props.location.state.data.title}),this.setState({id:this.props.location.state.data.id}),this.setState({blurb:this.props.location.state.data.blurb}),this.setState({video:document.getElementById("story-clip")}),document.getElementsByClassName("story-title")[0].innerHTML=this.props.location.state.data.title,console.log(this.state.video),this.setState({gradient:{background:"linear-gradient(115.66deg, "+this.props.location.state.data.color+" -2%, rgba(196, 196, 196, 0) 50%"}})):(0,n.c4)("/stories-hub"),this.state.contentItems!==E&&this.setState({contentItems:E}),this.setState({source:this.state.selectedItem.metadata2}),console.log(this.state.source)},a.componentDidUpdate=function(e,t){if(this.props.location.state&&this.state.title!==this.props.location.state.data.title&&(this.setState({title:this.props.location.state.data.title}),this.setState({id:this.props.location.state.data.id}),this.setState({blurb:this.props.location.state.data.blurb})),this.state.selectedItem!==t.selectedItem){var a=document.createElement("div");a.innerHTML=this.state.selectedItem.metadata,this.setState({description:a.innerHTML+"<div class = 'story-source'>"+this.state.source+"</div>"}),console.log(this.state.selectedItem),"video"!==this.state.selectedItem.type?this.setState({contentClass:"story-content image-content"}):this.setState({contentClass:"story-content video-content"})}},a.render=function(){var e=this;if(this.props.location.state){this.state.selectedItem;return s.createElement("div",{className:"story-parent-container"},s.createElement("div",{className:"selected-topic-container",style:this.state.gradient},s.createElement("div",{className:"story-title"}),"video"!==this.state.selectedItem.type?s.createElement("div",{className:this.state.contentClass,style:{backgroundImage:"url("+u+this.state.selectedItem.data+")"}},"image"!==this.state.selectedItem.type?s.createElement("div",{className:"story-copy",dangerouslySetInnerHTML:{__html:this.state.description}}):console.log("this is a video"),"video"==this.state.selectedItem.type?s.createElement("video",{id:"story-clip",className:"story-video-container"},s.createElement("source",{src:u+this.state.selectedItem.data,type:"video/mp4",className:"story-video"})):console.log("not a video"),"image"!==this.state.selectedItem.type?s.createElement(d,null):console.log("no share links for this one")):s.createElement("div",{className:this.state.contentClass,style:{backgroundImage:"url("+u+this.state.selectedItem.metadata2+")"}},"video"!==this.state.selectedItem.type?s.createElement("div",{className:"story-copy",dangerouslySetInnerHTML:{__html:this.state.description}}):console.log("this is a video"),"video"==this.state.selectedItem.type?s.createElement("video",{id:"story-clip",className:"story-video-container hidden"},s.createElement("source",{src:u+this.state.selectedItem.data,type:"video/mp4",className:"story-video"})):console.log("not a video"),s.createElement(d,{type:this.state.selectedItem.type,share:!0})),s.createElement("div",{className:"contentBlurb"},this.state.blurb)),s.createElement("div",{className:"side-nav-container"},s.createElement(n.rU,{to:"/stories-hub",className:"back-link"},"Home"),s.createElement(R,{type:E[5*this.state.id+1].type,data:u+E[5*this.state.id+1].data,title:E[5*this.state.id+1].title,metadata2:u+E[5*this.state.id+1].metadata2,onClick:function(){return e.selectItem(5*e.state.id+1)}}),s.createElement(R,{type:E[5*this.state.id+2].type,data:u+E[5*this.state.id+2].data,title:E[5*this.state.id+2].title,metadata2:u+E[5*this.state.id+2].metadata2,onClick:function(){return e.selectItem(5*e.state.id+2)}}),s.createElement(R,{type:E[5*this.state.id+3].type,data:u+E[5*this.state.id+3].data,title:E[5*this.state.id+3].title,metadata2:u+E[5*this.state.id+3].metadata2,onClick:function(){return e.selectItem(5*e.state.id+3)}}),s.createElement(R,{type:E[5*this.state.id+4].type,icon:u+E[5*this.state.id+4].data,data:u+E[5*this.state.id+4].data,title:E[5*this.state.id+4].title,metadata2:u+E[5*this.state.id+4].metadata2,onClick:function(){return e.selectItem(5*e.state.id+4)}}),s.createElement(R,{type:E[5*this.state.id].type,data:u+E[5*this.state.id].data,title:E[5*this.state.id].title,metadata2:u+E[5*this.state.id].metadata2,onClick:function(){return e.selectItem(5*e.state.id)}}),s.createElement(p,null)),s.createElement(g.Z,{size:"small",position:"extra-low"}),s.createElement(o.Z,{wordmark:!1,sideCopy:!0,size:"small"}))}return null},t}(s.Component)}}]);
//# sourceMappingURL=a75fbb4a0587f734ecb7f88de53e31cacbffc86a-930c91b932e87a15b422.js.map