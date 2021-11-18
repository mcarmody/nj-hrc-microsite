import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../videos/rain-test.mp4"
import WebFont from 'webfontloader';
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import BackgroundMovie from "../components/background-movie";

WebFont.load({
  google: {
    families: ['Lora:ital,wght@0,400;0,700;1,400;1,700', 'sans-serif']
  }
});

// styles
const pageStyles = {
  padding: 0,
}
const headingStyles = {
  fontFamily: "Lora",
  paddingLeft: "70px",
  fontSize: "82pt",
  position: "relative",
  fontWeight: 300,
  color: "white",
  top: "20vh",
  display: "block",
  lineHeight: 1,
}

const headingBoldStyles = {
  fontWeight: 700,
}


// markup
const LandingPage = () => {

  return (
    <main style={pageStyles}>
      <title>NJ HRC Site</title>
      < BackgroundMovie video= {landingVid} />
      <h1 style={headingStyles}>
        Essential. <br />
        Effective. <br />
        <span style={headingBoldStyles}>Human.</span>
      </h1>
      < Logo />
      <Link to="/stories-hub">< SkipButton /></Link>
    </main>
  )
}

export default LandingPage
