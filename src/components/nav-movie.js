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
			highlighted: true
		};
	}

	render() {
		const vidContainerStyles = {
			maxWidth: this.state.highlighted ? "32vw" : "16vw",
			height: "100vh",
			overflow: "hidden",
			top: 0,
			position: "fixed",
			cursor: "pointer"
		}
		return (
			<div className = "videoContainer" style = {vidContainerStyles} onClick={() => this.setState(prevState => ({highlighted: !prevState.highlighted}))}>
				<video autoplay="autoplay" muted loop style={vidStyles} id="landingClip">
		      		<source src = {this.props.video} type="video/mp4" />
		  		</video>
		  		<span style = {testStyle} >{this.state.highlighted ? "true" : "false"}</span>
	  		</div>
		)
	}
}

export default NavMovie;