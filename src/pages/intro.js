import * as React from "react"
import { Link } from "gatsby"
import rainVid from "../videos/rain-test.mp4"
import godraysVid from "../videos/godrays-test.mp4"
import mountainsVid from "../videos/mountains-test.mp4"
import WebFont from 'webfontloader';
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import BackgroundMovie from "../components/background-movie";
import "../styles/video-page-styles.css";

WebFont.load({
  google: {
    families: ['Lora:ital,wght@0,400;0,700;1,400;1,700', 'sans-serif']
  }
});

// styles
const pageStyles = {
  padding: 0,
}

const headingBoldStyles = {
	fontWeight: 700,
}

var timerCount = 0; //duration of current video in milliseconds
var firstVideoDuration = 4000; //length of first video in milliseconds
var secondVideoDuration; //length of second video in milliseconds
var thirdVideoDuration; //length of third video in milliseconds

class overlayText extends React.Component {

	componentDidMount() {
		setTimeout(function() {
			document.getElementsByClassName("video-overlay-copy")[0].classList.remove("hidden");
		}, firstVideoDuration);
		
	}


	render() {
	  return (
	    <main style={pageStyles}>
	    	<title>NJ HRC Site</title>
	  		< BackgroundMovie video= {mountainsVid} />
	      <h1 className = "video-overlay-copy hidden">
	        <span style={headingBoldStyles}>Here in New Jersey,</span><br />
	        when it comes to<br />
	        opioids and overdoses
	      </h1>
	      < Logo />
	      <Link to="/stories-hub">< SkipButton /></Link>
	    </main>
	  )

	}
}

export default overlayText
