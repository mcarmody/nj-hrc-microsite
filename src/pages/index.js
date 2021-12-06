import * as React from "react"
import { Link } from "gatsby"
import Logo from "../components/njhrc-logo";
import Tagline from "../components/tagline";
import LinkButton from "../components/link-button";
import BackgroundMovie from "../components/background-movie";
import "../styles/index-styles.css";


const landingVid = "https://d2ycth98mhglth.cloudfront.net/media/vid/NJHRC+SITE+LANDING+PAGE.mp4"


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
  lineHeight: 1
}


// markup
const LandingPage = () => {

  return (
    <main style={pageStyles}>
      <title>NJ HRC Site</title>
      < BackgroundMovie video= {landingVid} autoplay = {"autoplay"}/>
      <div className = "intro-copy">See how<br />Harm Reduction
services help<br />make <span>New Jersey</span><br />healthier and safer</div>
      < Logo wordmark = {true} sideCopy = {true} size = {"small"}/>
      <div className = "link-container">
        <Link to="/intro">< LinkButton title = "Enter Experience"/></Link>
        <Link to="/stories-hub">< LinkButton title = "Main Site" /></Link>
        <div className = "mobile-modal">This site works best if you hold your device in landscape orientation.</div>
      </div>
    </main>
  )
}

export default LandingPage
