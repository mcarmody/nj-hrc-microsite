import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../videos/rain-test.mp4"
import WebFont from 'webfontloader';
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import NavMovie from "../components/nav-movie";

WebFont.load({
  google: {
    families: ['Roboto:wght@0,400;0,700;1,400;1,700', 'sans-serif']
  }
});

// styles
const pageStyles = {
  padding: 0,
}
const navHeadingStyles = {
	fontFamily: "Roboto",
	paddingLeft: "70px",
	fontSize: "48pt",
	position: "relative",
	fontWeight: 700,
	color: "white",
	top: "70px",
  maxWidth: "16vw",
	display: "block",
	lineHeight: 1,
  textTransform: "uppercase",
}

const headingBoldStyles = {
	fontWeight: 700,
}

document.body.style.margin = "0px"; //remove any margins


// markup
const StoriesHub = () => {

  return (
    <main style={pageStyles}>
    	<title>Stories Hub</title>
  		< NavMovie video= {landingVid} />
      <h1 style={navHeadingStyles}>
        How we got here
      </h1>
      < Logo />
    </main>
  )
}

export default StoriesHub
