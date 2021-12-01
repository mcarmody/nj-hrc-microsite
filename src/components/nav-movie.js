import * as React from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "gatsby";
import ReactDOM from "react-dom";
import {useState} from "react"
import wordmark from "../media/img/njhrc-wordmark.png";
import IndividualStory from '../pages/story-page'
import "../styles/hub-page-styles.css";

const vidStyles = {
	top: 0,
	left: 0,
	minHeight: "100vh",
	zIndex: -1,
}

const testStyle = {
	float: "left",
    zIndex: 100,
    fontSize: "24pt",
    color: "white",
    top: 0,
    position: "fixed",
}

const imgStyle = {
	top: 0,
	left: 0,
	minHeight: "100vh",
	zIndex: -1,
	background: "black"
}

class NavMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			highlighted: false,
			data: {
				title: this.props.title,
				source: this.props.source
			},
		};
	}

	componentDidMount() {
		if(this.props.videoName == "first") {
			ReactDOM.findDOMNode(this).click();
		}
	}

	render() {

		const imgStyle = {
			top: 0,
			left: 0,
			minHeight: "100vh",
			backgroundImage: "url("+this.props.source+")"
		}

		var allNavVideos = [];

		function getNavVideos(self) {
			allNavVideos = Array.prototype.slice.call(document.getElementsByClassName("video-container"));
			for (var i = allNavVideos.length - 1; i >= 0; i--) {
				if(allNavVideos[i] !== self) {
					allNavVideos[i].classList.remove("column-highlighted");
					// allNavVideos[i].firstChild.pause();
				}
			}
		}

		function toggle(self) {
			getNavVideos(ReactDOM.findDOMNode(self));
			if(!ReactDOM.findDOMNode(self).classList.contains("column-highlighted")) {
				ReactDOM.findDOMNode(self).classList.add("column-highlighted");
				// document.getElementById(self.props.videoName).play();
			} else {
				ReactDOM.findDOMNode(self).classList.remove("column-highlighted");
				// document.getElementById(self.props.videoName).pause();
			}
		}

		return (
			<div className = "video-container" onClick={() => toggle(this)} style = {imgStyle}>
				<div className = "background-image" />

		  		<div className = "video-title">{this.props.title}</div>
		  		<Link className = "story-link" to="/story-page" state = {{data: this.state.data.title}}>>></Link>
	  		</div>
		)
	}
}

export default NavMovie;