import * as React from "react"
import wordmark from "../images/njhrc-wordmark.png"
import WebFont from 'webfontloader';


const vidStyles = {
	position: "fixed",
	top: 0,
	left: 0,
	minWidth: "100vw",
	minHeight: "100vh",
	zIndex: -1,
}

class BackgroundMovie extends React.Component {


	render() {
		return (
			<video autoplay="autoplay" muted loop style={vidStyles} id="landingClip">
	      		<source src = {this.props.video} type="video/mp4" />
	  		</video>
		)
	}
}

export default BackgroundMovie;