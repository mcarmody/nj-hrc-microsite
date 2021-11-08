import * as React from "react"
import WebFont from 'webfontloader';
import "../styles/video-page-styles.css";
import BackgroundMovie from "./background-movie";
import rainVid from "../videos/rain-test.mp4"
import godraysVid from "../videos/godrays-test.mp4"
import mountainsVid from "../videos/mountains-test.mp4"

const headingBoldStyles = {
	fontWeight: 700,
}


const vidStyles = {
	position: "fixed",
	top: 0,
	left: 0,
	minWidth: "100vw",
	minHeight: "100vh",
	zIndex: -1,
}

var timerCount = 0; //duration of current video in milliseconds
var firstVideoDuration = 6000; //length of first video in milliseconds
var secondVideoDuration; //length of second video in milliseconds
var thirdVideoDuration; //length of third video in milliseconds
var betweenCopyDelay = 6000;

const secondTextUpdate = "Do you think what we</br> are doing is working?";

class QuestionOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 1,
			video: mountainsVid
		};
	}

	nextQuestion = (stateNumber) => {
		this.setState({stage: stateNumber})
	}

	loadNewVideo = () => {
		switch(this.state.stage) {
			case 1:
				this.setState({video: mountainsVid})
				console.log(this.state.video)
				break;
			case 2:
				this.setState({video: godraysVid})
				console.log(this.state.video)
				break;
			case 3:
				this.setState({video: rainVid})
				console.log(this.state.video)
				break
		}
	}

	componentDidMount() {
		setTimeout(function() {
			document.getElementsByClassName("video-overlay-copy")[0].classList.remove("hidden");
			document.getElementsByClassName("overlay-background")[0].classList.remove("hidden");
			document.getElementById("landing-clip").classList.add("hidden");
		}, firstVideoDuration);

		setTimeout(function() {
			document.getElementsByClassName("video-overlay-copy")[0].innerHTML = secondTextUpdate;
			document.getElementsByClassName("overlay-buttons-container")[0].classList.remove("hidden");
		}, firstVideoDuration + betweenCopyDelay);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.stage !== prevState.stage) {
			console.log("New video! "+prevState.stage+", "+this.state.stage)
			this.loadNewVideo();
		}
	}


	render() {

		return (
			<div className = "overlay-background">
				< BackgroundMovie video= {this.state.video} />
				<div className = "overlay-content-container">
					<h1 className = "video-overlay-copy hidden">
				        <span style={headingBoldStyles}>Here in New Jersey,</span><br />
				        when it comes to<br />
				        opioids and overdoses...
					</h1>
					<div className = "overlay-buttons-container hidden">
						<div className = "yes-button" onClick={() => this.nextQuestion(2)}>Yes</div>
						<div className = "no-button" onClick={() => this.nextQuestion(3)}>No</div>
					</div>
				</div>
			</div>
		)
	}
}

export default QuestionOverlay;