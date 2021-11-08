import * as React from "react"
import { Link } from "gatsby"
import rainVid from "../videos/rain-test.mp4"
import godraysVid from "../videos/godrays-test.mp4"
import mountainsVid from "../videos/mountains-test.mp4"
import WebFont from 'webfontloader';
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import BackgroundMovie from "../components/background-movie";
import QuestionOverlay from "../components/question-overlay";
import "../styles/video-page-styles.css";
import "../styles/clear.css";

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

class overlayText extends React.Component {



	render() {
	  return (
	    <main style={pageStyles}>
	    	<title>NJ HRC Site</title>
	  		< BackgroundMovie video= {mountainsVid} />
	      	< QuestionOverlay />
	      < Logo />
	      <Link to="/stories-hub">< SkipButton /></Link>
	    </main>
	  )

	}
}

export default overlayText
