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

const linkStyles = {
	textDecoration: "none",
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
				<a href = "https://njharmreduction.org" target="_blank" rel="noopener" style={linkStyles}>
					<img className="wordmark" style={wordmarkStyles} src = {wordmark} />
					<div className="logoBlurb" style={sideTextStyles}>
						SPONSORED BY NEW JERSEY < br />
						HARM REDUCTION COALITION < br />
						AND VITAL STRATEGIES
					</div>
				</a>
			</div>
		)
	}
}

export default Logo;