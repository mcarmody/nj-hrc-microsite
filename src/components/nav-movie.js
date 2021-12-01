import * as React from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "gatsby";
import ReactDOM from "react-dom";
import {useState} from "react"
import wordmark from "../media/img/njhrc-wordmark.png"
import BackgroundMovie from './background-movie';
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

class NavMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			highlighted: false,
			data: {
				title: this.props.title
			},
		};
	}

	componentDidMount() {
		if(this.props.videoName == "first") {
			ReactDOM.findDOMNode(this).click();
		}
	}

	render() {

		const vidContainerStyles = {
			maxWidth: "16vw",
			height: "100vh",
			overflow: "hidden",
			top: 0,
			position: "relative",
			display: "inline-block",
			cursor: "pointer"
		}

		const passThroughData  = this.state.data;

		var allNavVideos = [];

		function getNavVideos(self) {
			allNavVideos = Array.prototype.slice.call(document.getElementsByClassName("video-container"));
			for (var i = allNavVideos.length - 1; i >= 0; i--) {
				if(allNavVideos[i] !== self) {
					allNavVideos[i].classList.remove("column-highlighted");
					allNavVideos[i].firstChild.pause();
				}
			}
		}

		function toggle(self) {
			getNavVideos(ReactDOM.findDOMNode(self));
			if(!ReactDOM.findDOMNode(self).classList.contains("column-highlighted")) {
				ReactDOM.findDOMNode(self).classList.add("column-highlighted");
				document.getElementById(self.props.videoName).play();
			} else {
				ReactDOM.findDOMNode(self).classList.remove("column-highlighted");
				document.getElementById(self.props.videoName).pause();
			}
		}

		return (
			<div className = "video-container" onClick={() => toggle(this)}>
				<video muted loop style={vidStyles} id={this.props.videoName}>
		      		<source src = {this.props.source} type="video/mp4" />
		  		</video>
		  		<div className = "video-title">{this.props.title}</div>
		  		<Link className = "story-link" to="/story-page" state = {passThroughData}>>></Link>
	  		</div>
		)
	}
}

export default NavMovie;