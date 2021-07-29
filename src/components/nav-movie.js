import * as React from "react"
import wordmark from "../images/njhrc-wordmark.png"
import WebFont from 'webfontloader';
import BackgroundMovie from './background-movie'


const vidStyles = {
	top: 0,
	left: 0,
	minHeight: "100vh",
	zIndex: -1,
}

const vidContainerStyles = {
	maxWidth: "32vw",
	height: "100vh",
	overflow: "hidden",
	top: 0,
	position: "fixed"
}

class NavMovie extends BackgroundMovie {


	render() {
		return (
			<div className = "videoContainer" style = {vidContainerStyles} >
				<video autoplay="autoplay" muted loop style={vidStyles} id="landingClip">
		      		<source src = {this.props.video} type="video/mp4" />
		  		</video>
	  		</div>
		)
	}
}

export default NavMovie;