import * as React from "react"
import { Link } from "gatsby"
import wordmark from "../media/img/njhrc-wordmark.png"
import ReactDOM from "react-dom";


class SideNavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickFunction: this.props.onClick,
			type: this.props.type
		};
		console.log(this.props.onClick)
	}

	componentDidUpdate(prevProps) {
	}

	componentDidMount() {
	}

	render() {

		let navContent;

		//toggle nav item selected state 
		function selectNav(self) {
			console.log(ReactDOM.findDOMNode(self));

			if(document.getElementById('story-clip')) {
				if(!document.getElementById('story-clip').paused) {
					document.getElementById('play-link').click()
				}
			}

			if(document.getElementById('story-clip')) {
				document.getElementById('story-clip').load()
			}

			var allNavItems = Array.prototype.slice.call(document.getElementsByClassName("nav-item-container"));
			for (var i = allNavItems.length - 1; i >= 0; i--) {
				if(allNavItems[i] !== self) {
					allNavItems[i].classList.remove("selected");
				}
			}
			
			ReactDOM.findDOMNode(self).classList.add("selected");
		}

		function open(self) {
			console.log(self.props.data)
		}

		//this.props.type == "link" && this.state.clickFunction !== null ? this.setState({clickFunction: null}) : console.log("not a link")


		if(this.state.type == "image") {
			navContent = <div className = "nav-item image-nav" style = {{backgroundImage: "url("+this.props.icon+")"}}  onClick={() => {this.state.clickFunction(); selectNav(this)}}><span>>>  </span>{this.props.title}</div>
		} else if(this.state.type == "link") {
			navContent = <div className = "nav-item link-nav" onClick={() => {this.state.clickFunction(); selectNav(this)}}><span>>>  </span>{this.props.title}</div>
		} else if(this.state.type == "video") {
			navContent = <div className = "nav-item video-nav" style = {{backgroundImage: "url("+this.props.metadata2+")"}}  onClick={() => {this.state.clickFunction(); selectNav(this)}}><span>>>  </span>{this.props.title}</div>
		} else if(this.state.type == "external-link") {
			navContent = <a className = {this.props.metadata2 ? "external-link-bg" : "external-link"} href = {this.props.data} target="_blank" rel="noopener"><div className = "nav-item link-nav" style = {{backgroundImage: "url("+this.props.metadata2+")"}}><span>>>  </span>{this.props.title}</div></a>
		}

		return (
			<div className = "nav-item-container">
				{ navContent }
			</div>
		)
	}
}

export default SideNavItem;