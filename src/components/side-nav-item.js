import * as React from "react"
import { Link } from "gatsby"
import wordmark from "../media/img/njhrc-wordmark.png"
import ReactDOM from "react-dom";


class SideNavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickFunction: this.props.onClick
		};
	}

	componentDidUpdate(prevProps) {
	}

	componentDidMount() {
	}

	render() {
		let navContent;

		function selectNav(self) {
			console.log(ReactDOM.findDOMNode(self));

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

		this.props.type == "link" && this.state.clickFunction !== null ? this.setState({clickFunction: null}) : console.log("not a link")


		if(this.props.type == "image") {
			navContent = <div className = "nav-item image-nav" style = {{backgroundImage: "url("+this.props.data+")"}}  onClick={() => {this.state.clickFunction(); selectNav(this)}}></div>
			console.log(this.props.type)
		} else if(this.props.type == "link") {
			navContent = <Link to = {this.props.data} className = "nav-item link-nav">{this.props.metadata} </Link>
		} else if(this.props.type == "video") {
			navContent = <div className = "nav-item video-nav" style = {{backgroundImage: "url("+this.props.metadata2+")"}}  onClick={() => {this.state.clickFunction(); selectNav(this)}}></div>
		}

		return (
			<div className = "nav-item-container">
				{ navContent }
			</div>
		)
	}
}

export default SideNavItem;