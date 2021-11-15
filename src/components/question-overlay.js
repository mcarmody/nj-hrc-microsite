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
var betweenCopyDelay = 2000;
var videoOverlay;
var overlayBG;
var bgVideo;
var buttonsContainer;

const copyUpdates = [
	"<span style={headingBoldStyles}>Here in New Jersey,</span><br />when it comes to<br />opioids and overdoses...",
	"Do you think what we</br> are doing is working?",
	"What about now...",
	"How do you feel?",
	"This is ridiculous...",
	"Are you convinced yet?"
];

const secondTextUpdate = "Do you think what we</br> are doing is working?";

class QuestionOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 0,
			video: mountainsVid,
			copy: copyUpdates[0],
			yesVal: 2,
			noVal: 3,
			videoReset: true
		};
	}
	componentDidMount() {
		//assign all the variables so we don't keep calling getElements
		videoOverlay = document.getElementsByClassName("video-overlay-copy")[0];
		overlayBG = document.getElementsByClassName("overlay-background")[0];
		bgVideo = document.getElementById("landing-clip");
		buttonsContainer = document.getElementsByClassName("overlay-buttons-container")[0];
		this.updateCopy();
		this.playNewVideo(firstVideoDuration, betweenCopyDelay, this.state.stage);
	}

	nextQuestion = (stateNumber) => {
		this.setState({stage: stateNumber})
	}

	updateCopy = () => {
		console.log("updating copy: "+this.state.copy);
		videoOverlay.innerHTML = this.state.copy;
	}

	playNewVideo = (firstTimer, secondTimer, stage) => {
		
		console.log("Stage: "+stage);

		if((stage%2)==0) {
			console.log("Video stage");

			//first, hide the existing copy
			videoOverlay.classList.add("hidden");
			buttonsContainer.classList.add("hidden");

			setTimeout(function() { //the first round of copy appearing
				videoOverlay.innerHTML = copyUpdates[stage];
				videoOverlay.classList.remove("hidden");
				bgVideo.classList.add("hidden");
				console.log("hide the video");
			}, firstTimer);

			setTimeout(function() { //second part of the question
				videoOverlay.innerHTML = copyUpdates[stage+1];
				buttonsContainer.classList.remove("hidden");
			}, firstTimer + secondTimer);

		} else {
			console.log("Straight to the question");

			//the first round of copy appearing
			videoOverlay.innerHTML = copyUpdates[stage];
			videoOverlay.classList.remove("hidden");
			bgVideo.classList.add("hidden");

			setTimeout(function() { //second part of the question
				videoOverlay.innerHTML = copyUpdates[stage+1];
				buttonsContainer.classList.remove("hidden");
			}, secondTimer);
		}
	}

	stateSwitch = () => {
		switch(this.state.stage) {
			case 0: //this is the landing video
				this.setState({video: mountainsVid, videoReset: true})
				break;
			case 1: //this is the first questions
				this.setState({yesVal: 2, noVal: 3})
				break;
			case 2: //this is the second video page
				this.setState({video: rainVid, videoReset: true})
				break;
			case 3: //this is the second questions
				this.setState({yesVal: 4, noVal: 5})
				break;
			case 4: //this is the third video
				this.setState({video: mountainsVid, videoReset: true})
				break;
			case 5: //this is the third questions
				this.setState({yesVal: 6, noVal: 6})
				break;
			case 6: //this is the last video
				this.setState({video: godraysVid, videoReset: true})
				break;
		}
		
	};


	componentDidUpdate(prevProps, prevState) {
		if(this.state.stage !== prevState.stage) {
			console.log("New stage! "+prevState.stage+", "+this.state.stage)
			this.stateSwitch();
		}
		if(this.state.copy !== prevState.copy) {
			this.updateCopy();
		}
		if(this.state.videoReset) {
			this.playNewVideo(firstVideoDuration, betweenCopyDelay, this.state.stage);
		}
	}


	render() {

		return (
			<div className = "overlay-background">
				< BackgroundMovie video= {this.state.video} />
				<div className = "overlay-content-container">
					<h1 className = "video-overlay-copy hidden">
					</h1>
					<div className = "overlay-buttons-container hidden">
						<div className = "yes-button" onClick={() => this.nextQuestion(this.state.yesVal)}>Yes</div>
						<div className = "no-button" onClick={() => this.nextQuestion(this.state.noVal)}>No</div>
					</div>
				</div>
			</div>
		)
	}
}

export default QuestionOverlay;