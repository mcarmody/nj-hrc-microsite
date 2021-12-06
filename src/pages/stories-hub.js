import * as React from "react";
import Logo from "../components/njhrc-logo";
import Tagline from "../components/tagline";
import NavMovie from "../components/nav-movie";

const imageList = [
  "https://d2ycth98mhglth.cloudfront.net/media/img/story-bg-1.jpg",
  "https://d2ycth98mhglth.cloudfront.net/media/img/story-bg-2.jpg",
  "https://d2ycth98mhglth.cloudfront.net/media/img/story-bg-3.jpg",
  "https://d2ycth98mhglth.cloudfront.net/media/img/story-bg-4.jpg",
  "https://d2ycth98mhglth.cloudfront.net/media/img/story-bg-5.jpg",
  ]

// styles
const pageStyles = {
  padding: 0,
}

const titlesList = [
  "How We<br />Got Here",
  "Harm Reduction<br />101",
  "Viral Hepatitis and HIV",
  "Overdose and Prevention",
  "Connection To Services"
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
    		< NavMovie source= {imageList[0]} id = "0" videoName = "first" title = {titlesList[0]} />
        < NavMovie source= {imageList[1]} id = "1" videoName = "second" title = {titlesList[1]}/>
        < NavMovie source= {imageList[2]} id = "2" videoName = "third" title = {titlesList[2]}/>
        < NavMovie source= {imageList[3]} id = "3" videoName = "fourth" title = {titlesList[3]}/>
        < NavMovie source= {imageList[4]} id = "4" videoName = "fifth" title = {titlesList[4]}/>
        < Tagline size = "small" />
        < Logo wordmark = {true} sideCopy = {false}/>
        <div className = "mobile-modal">This site works best if you hold your device in landscape orientation.</div>
      </main>
    )
  }
}

export default StoriesHub
