import * as React from "react"
import {useState} from "react"
import wordmark from "../images/njhrc-wordmark.png"
import WebFont from 'webfontloader';
import BackgroundMovie from './background-movie'

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
			highlighted: false
		};
	}

	render() {

		const vidContainerStyles = {
			maxWidth: this.state.highlighted ? "32vw" : "16vw",
			height: "100vh",
			overflow: "hidden",
			top: 0,
			position: "relative",
			display: "inline-block",
			cursor: "pointer"
		}

		var allNavVideos = [];

		function getNavVideos(self) {
			allNavVideos = Array.prototype.slice.call(document.getElementsByClassName("videoContainer"));
			console.log(allNavVideos);
			for (var i = allNavVideos.length - 1; i >= 0; i--) {
				allNavVideos[i].firstChild.pause();
			}
		}

		function toggle(self) {
			getNavVideos(self);
			self.setState(prevState => ({highlighted: !prevState.highlighted}));
			self.state.highlighted ? document.getElementById(self.props.videoName).pause() : document.getElementById(self.props.videoName).play();
		}

		return (
			<div className = "videoContainer" style = {vidContainerStyles} onClick={() => toggle(this)}>
				<video muted loop style={vidStyles} id={this.props.videoName}>
		      		<source src = {this.props.source} type="video/mp4" />
		  		</video>
		  		<span style = {testStyle} >{this.state.highlighted ? "true" : "false"}</span>
	  		</div>
		)
	}
}

export default NavMovie;