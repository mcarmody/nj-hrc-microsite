import * as React from "react"
import { navigate } from "gatsby"
import "../styles/video-page-styles.css";
import BackgroundMovie from "./background-movie";
const videoList = [
  "https://d2ycth98mhglth.cloudfront.net/media/vid/rain-test.mp4",
  "https://d2ycth98mhglth.cloudfront.net/media/vid/godrays-test.mp4",
  "https://d2ycth98mhglth.cloudfront.net/media/vid/mountains-test.mp4",
  ]

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
var firstVideoDuration = 2000; //length of first video in milliseconds
var secondVideoDuration = 2000; //length of second video in milliseconds
var thirdVideoDuration = 2000; //length of third video in milliseconds
var betweenCopyDelay = 2000;
var videoOverlay;
var overlayBG;
var buttonsContainer;

const copyUpdates = [
	"<span style={headingBoldStyles}>Here in New Jersey,</span><br />when it comes to<br />opioids and overdoses...", //1
	"...do you think what we</br> are doing is working?", //1B
	"Given those facts...", //2A
	"...do you think continuing to do more of the same will work?", //2B
	"Would you at least be willing to learn about how harm reductionworks to address these critical issues facing New Jerseyans?", //3A
	"Would you be willing to try something new?", //3B
	"Placeholder text, this is where we go to the main site"
];

class QuestionOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 0,
			video: videoList[0],
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

			if(stage==6) {
				setTimeout(function(){
					navigate('/stories-hub');
				}, thirdVideoDuration);
			}

			setTimeout(function() { //the first round of copy appearing
				document.getElementById("landing-clip").classList.add("hidden");
				videoOverlay.innerHTML = copyUpdates[stage];
				videoOverlay.classList.remove("hidden");
				console.log("hide the video");
				console.log(document.getElementById("landing-clip"));
			}, firstTimer);

			
			setTimeout(function() { //second part of the question
				if(stage!==4) {
					videoOverlay.innerHTML = copyUpdates[stage+1];
				}
				buttonsContainer.classList.remove("hidden");
				}, firstTimer + secondTimer);

		} else {
			console.log("Straight to the question");

			//the first round of copy appearing
			videoOverlay.innerHTML = copyUpdates[stage-1];
			videoOverlay.classList.remove("hidden");
			document.getElementById("landing-clip").classList.add("hidden");

			setTimeout(function() { //second part of the question
				videoOverlay.innerHTML = copyUpdates[stage];
				buttonsContainer.classList.remove("hidden");
			}, secondTimer);
		}
	}

	stateSwitch = () => {
		switch(this.state.stage) {
			case 0: //this is the landing video
				this.setState({video: videoList[0], videoReset: true})
				break;
			case 1: //this is the first questions
				this.setState({yesVal: 2, noVal: 3})
				break;
			case 2: //this is the second video page
				this.setState({video: videoList[1], videoReset: true})
				this.setState({yesVal: 4, noVal: 5})
				break;
			case 3: //this is the second questions
				this.setState({yesVal: 4, noVal: 5})
				break;
			case 4: //this is the third video
				this.setState({video: videoList[0], videoReset: true})
				this.setState({yesVal: 6, noVal: 6})
				break;
			case 5: //this is the third questions
				this.setState({yesVal: 6, noVal: 6})
				break;
			case 6: //this is the last video
				this.setState({video: videoList[2], videoReset: true})
				break;
		}
		
	};


	componentDidUpdate(prevProps, prevState) {
		if(this.state.stage !== prevState.stage) {
			console.log("New stage! "+prevState.stage+", "+this.state.stage)
			this.stateSwitch();
		}
		if(this.state.copy !== prevState.copy) {
			//this.updateCopy();
		}
		if(this.state.videoReset) {
			this.playNewVideo(firstVideoDuration, betweenCopyDelay, this.state.stage);
			this.setState({videoReset: false});
		} else if(this.state.stage==5) {
			console.log("Straight to the question");

			//the first round of copy appearing
			videoOverlay.innerHTML = copyUpdates[5];
			videoOverlay.classList.remove("hidden");
			document.getElementById("landing-clip").classList.add("hidden");

			// setTimeout(function() { //second part of the question
			// 	videoOverlay.innerHTML = copyUpdates[5];
			// 	buttonsContainer.classList.remove("hidden");
			// }, betweenCopyDelay);
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