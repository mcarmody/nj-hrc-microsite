import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"

const logoStyles = {
	position: "fixed",
	left: 0,
	margin: "40px",
	maxHeight: "78px",
	display: "inline-block",
	color: "white",
	lineHeight: "24px",
	textTransform: "uppercase",
	width: "440px",
	fontSize: "14px"
}

class Logo extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      
    };
  }

	render() {


		const wordmarkStyles = {
			display: this.props.wordmark ? "block" : "none",
		}

		const sideTextStyles = {
			display: this.props.sideCopy ? "block" : "none",
			color: this.props.size == "small" ? "#ACACAC" : "white",
			fontSize: this.props.size == "small" ? "12pt" : "14pt",
		}

		return (
			<div className="logoBlock" style={logoStyles}>
				<img className="wordmark" style={wordmarkStyles} src = {wordmark} />
				<div className="logoBlurb" style={sideTextStyles}>
					sponsored by New Jersey < br />
					Harm Reduction Coalition
				</div>
			</div>
		)
	}
}

export default Logo;