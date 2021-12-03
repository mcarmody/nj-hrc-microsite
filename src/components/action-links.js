import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"

const actionStyles = {
	fontFamily: "Roboto",
	position: "fixed",
	bottom: 0,
	right: 0,
	margin: "70px",
	maxHeight: "78px",
	display: "inline-block",
	color: "white",
	lineHeight: "24px",
	textTransform: "uppercase",
	width: "440px",
	fontSize: "14px"
}

class ActionLinks extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      
    };
  }

	render() {
		return (
			<div className="actions-container">
			</div>
		)
	}
}

export default ActionLinks;