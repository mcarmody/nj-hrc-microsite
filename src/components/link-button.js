import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"
import "../styles/index-styles.css";


const skipStyles = {
	fontFamily: "Roboto",
	position: "relative",
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

class LinkButton extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="skipBlock">
				<div className="arrow" style={arrowStyles} />
				<div className="skipText" style={skipTextStyles}>
					{this.props.title}
				</div>
			</div>
		)
	}
}

export default LinkButton;