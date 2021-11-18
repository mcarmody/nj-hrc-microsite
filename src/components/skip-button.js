import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"


const skipStyles = {
	fontFamily: "Roboto",
	position: "fixed",
	bottom: 0,
	right: 0,
	margin: "70px",
	display: "inline-block",
	color: "white",
	textTransform: "uppercase",
	fontSize: "24px",
	fontWeight: "bold",
	letterSpacing: "3px",
	lineHeight: "24px",
	width: "325px",
	cursor: "pointer"
}

const arrowStyles = {
	float: "left",
	width: 0, 
	height: 0, 
	borderTop: "11px solid transparent",
	borderBottom: "11px solid transparent",  
	borderLeft: "14px solid #FD7D06",
	marginRight: "12px"	
}

const skipTextStyles = {
}

class SkipButton extends React.Component {


	render() {
		return (
			<div className="skipBlock" style={skipStyles}>
				<div className="arrow" style={arrowStyles} />
				<div className="skipText" style={skipTextStyles}>
					Skip to main site
				</div>
			</div>
		)
	}
}

export default SkipButton;