import * as React from "react"
import { Link } from "gatsby"
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
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
	    	<title>NJ HRC Site</title>
	      	< QuestionOverlay />
	      < Logo />
	      <Link to="/stories-hub">< SkipButton /></Link>
	    </main>
	  )

	}
}

export default overlayText
