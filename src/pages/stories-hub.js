import * as React from "react";
import landingVid from "../videos/rain-test.mp4"
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import NavMovie from "../components/nav-movie";

// styles
const pageStyles = {
  padding: 0,
}

const titlesList = [
  "How We Got Here",
  "Harm Reduction 101",
  "Viral Hepatitis & HIV",
  "Overdose and Prevention",
  "Connect To Services"
]
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

// markup
class StoriesHub extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    
    return (
      <main style={pageStyles}>
      	<title>Stories Hub</title>
    		< NavMovie source= {landingVid} videoName = "first" title = {titlesList[0]}/>
        < NavMovie source= {landingVid} videoName = "second" title = {titlesList[1]}/>
        < NavMovie source= {landingVid} videoName = "third" title = {titlesList[2]}/>
        < NavMovie source= {landingVid} videoName = "fourth" title = {titlesList[3]}/>
        < NavMovie source= {landingVid} videoName = "fifth" title = {titlesList[4]}/>
        < Logo wordmark = {true} sideCopy = {false}/>
      </main>
    )
  }
}

export default StoriesHub
