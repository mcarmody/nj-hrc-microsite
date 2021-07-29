import * as React from "react"
import wordmark from "../images/njhrc-wordmark.png"
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: ['Roboto:wght@0,400;0,700;1,400;1,700', 'sans-serif']
  }
});

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

const wordmarkStyles = {
	maxWidth: "158px",
	float: "left",
	paddingRight: "36px"
}

const sideTextStyles = {
	paddingTop: "16px"
}

class Logo extends React.Component {


	render() {
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