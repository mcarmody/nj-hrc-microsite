import * as React from "react"
import { Link } from "gatsby"
import wordmark from "../media/img/njhrc-wordmark.png"


class SideNavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickFunction: this.props.onClick
		};
	}

	componentDidUpdate(prevProps) {
	}


	render() {
		let navContent;

		function open(self) {
			console.log(self.props.data)
		}

		this.props.type == "link" && this.state.clickFunction !== null ? this.setState({clickFunction: null}) : console.log("not a link")


		if(this.props.type == "image") {
			navContent = <div className = "nav-item image-nav" style = {{backgroundImage: "url("+this.props.data+")"}}  onClick={this.state.clickFunction}></div>
			console.log(this.props.type)
		} else if(this.props.type == "link") {
			navContent = <Link to = {this.props.data} className = "nav-item link-nav">{this.props.metadata} </Link>
		} else if(this.props.type == "video") {
			navContent = <div className = "nav-item video-nav" style = {{backgroundImage: "url("+this.props.metadata2+")"}}  onClick={this.state.clickFunction}></div>
		}

		return (
			<div className = "nav-item-container">
				{ navContent }
			</div>
		)
	}
}

export default SideNavItem;