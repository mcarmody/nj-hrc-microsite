import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"

const logoStyles = {
	fontFamily: "Roboto",
	position: "fixed",
	bottom: 0,
	left: 0,
	margin: "70px",
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
			maxWidth: "158px",
			float: "left",
			paddingRight: "36px",
			display: this.props.wordmark ? "block" : "none",
		}

		const sideTextStyles = {
			paddingTop: "16px",
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