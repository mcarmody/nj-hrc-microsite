import * as React from "react";
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import NavMovie from "../components/nav-movie";

const video1 = "https://d2ycth98mhglth.cloudfront.net/media/vid/rain-test.mp4";
const video2 = "https://d2ycth98mhglth.cloudfront.net/media/vid/godrays-test.mp4";

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
    		< NavMovie source= {video1} videoName = "first" title = {titlesList[0]}/>
        < NavMovie source= {video2} videoName = "second" title = {titlesList[1]}/>
        < NavMovie source= {video1} videoName = "third" title = {titlesList[2]}/>
        < NavMovie source= {video2} videoName = "fourth" title = {titlesList[3]}/>
        < NavMovie source= {video1} videoName = "fifth" title = {titlesList[4]}/>
        < Logo wordmark = {true} sideCopy = {false}/>
      </main>
    )
  }
}

export default StoriesHub
