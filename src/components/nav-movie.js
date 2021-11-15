import * as React from "react"
import ReactDOM from "react-dom";
import {useState} from "react"
import wordmark from "../images/njhrc-wordmark.png"
import WebFont from 'webfontloader';
import BackgroundMovie from './background-movie'
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
			highlighted: false
		};
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

		var allNavVideos = [];

		function getNavVideos() {
			allNavVideos = Array.prototype.slice.call(document.getElementsByClassName("videoContainer"));
			for (var i = allNavVideos.length - 1; i >= 0; i--) {
				allNavVideos[i].classList.remove("column-highlighted");
				allNavVideos[i].classList.add("column-unhighlighted");
				allNavVideos[i].firstChild.pause();
			}
		}

		function toggle(self) {
			getNavVideos();
			self.setState(prevState => ({highlighted: !prevState.highlighted}));
			if(!self.state.highlighted) {
				ReactDOM.findDOMNode(self).classList.remove("column-unhighlighted");
				ReactDOM.findDOMNode(self).classList.add("column-highlighted");
				document.getElementById(self.props.videoName).play();
			} else {
				ReactDOM.findDOMNode(self).classList.remove("column-highlighted");
				ReactDOM.findDOMNode(self).classList.add("column-unhighlighted");
				document.getElementById(self.props.videoName).pause();
			}
		}

		return (
			<div className = "videoContainer column-unhighlighted" style = {vidContainerStyles} onClick={() => toggle(this)}>
				<video muted loop style={vidStyles} id={this.props.videoName}>
		      		<source src = {this.props.source} type="video/mp4" />
		  		</video>
	  		</div>
		)
	}
}

export default NavMovie;