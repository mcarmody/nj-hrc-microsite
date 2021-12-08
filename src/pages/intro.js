import * as React from "react"
import { Link } from "gatsby"
import Logo from "../components/njhrc-logo";
import LinkButton from "../components/link-button";
import QuestionOverlay from "../components/question-overlay";
import "../styles/video-page-styles.css";
import "../styles/clear.css";


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
	    	<title>Essential. Effective. Human.</title>
	      	< QuestionOverlay />
      	< Logo wordmark = {true} sideCopy = {true} size = {"small"}/>
	      <div className = "link-container">
	      	<Link to="/stories-hub">< LinkButton title = "Main Site" /></Link>
      	</div>
        <div className = "mobile-modal">This site works best if you hold your device in landscape orientation.</div>
	    </main>
	  )

	}
}

export default overlayText
