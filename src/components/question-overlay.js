import * as React from "react"
import { navigate } from "gatsby"
import "../styles/video-page-styles.css";
import BackgroundMovie from "./background-movie";
const videoList = [
  "https://nj-hrc-project-media.s3.amazonaws.com/media/vid/NJHRC+Explainer+I.mp4",
  "https://nj-hrc-project-media.s3.amazonaws.com/media/vid/NJHRC+EXPLAINER+II.mp4",
  "https://nj-hrc-project-media.s3.amazonaws.com/media/vid/NJHRC+HR+EXPLAINER+3.mp4",
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
var secondVideoDuration = 20000; //length of second video in milliseconds
var thirdVideoDuration = 2000; //length of third video in milliseconds
var betweenCopyDelay = 2000;
var videoOverlay;
var overlayBG;
var buttonsContainer;
var videoPlayer;
var videoCopy;

const copyUpdates = [
	"<span style={headingBoldStyles}>Here in New Jersey,</span><br />when it comes to<br />opioids and overdoses...", //1
	"...do you think what we</br> are doing is working?", //1B
	"Given those facts...", //2A
	"...do you think continuing to do more of the same will work?", //2B
	"Would you at least be willing to learn about how harm reduction works to address these critical issues facing New Jerseyans?", //3A
	"Would you be willing to try something new?", //3B
	""
];

class QuestionOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 0,
			video: videoList[0],
			copy: copyUpdates[0],
			yesVal: 2,
			noVal: 6
		};
	}
	componentDidMount() {
		//assign all the variables so we don't keep calling getElements
		videoCopy = document.getElementsByClassName("video-overlay-copy")[0];
		videoOverlay = document.getElementsByClassName("overlay-content-container")[0];
		overlayBG = document.getElementsByClassName("overlay-background")[0];
		buttonsContainer = document.getElementsByClassName("overlay-buttons-container")[0];
		videoPlayer = document.getElementById("landing-clip");
		this.showCopy();
		this.updateCopy(0);
		this.stateSwitch();
		videoPlayer.muted = false;
	}

	nextQuestion = (stateNumber) => {
		this.setState({stage: stateNumber})
	}

	updateCopy = (lookup) => {
		console.log("lookup: "+lookup)
		this.setState({copy: copyUpdates[lookup]});
		videoCopy.innerHTML = copyUpdates[lookup];
		console.log("updating copy: "+this.state.copy);
	}

	hideCopy = () => {
		videoOverlay.classList.add("hidden");
		videoPlayer.classList.remove("hidden");
		buttonsContainer.classList.add("hidden");
		console.log("show the video");
		this.toggleVideo(true);
	}

	showCopy = () => {
		videoOverlay.classList.remove("hidden");
		//videoPlayer.classList.add("hidden");
		document.getElementById("landing-clip").classList.add("hidden");
		console.log("hide the video");
		this.toggleVideo(false);
	}

	showButtons = () => {
		buttonsContainer.classList.remove("hidden");
	}

	stateSwitch = () => {
		console.log("stage: "+this.state.stage)
		switch(this.state.stage) {
			case 0: //this is the question
				//this.showCopy()
				setTimeout(function() {
					this.updateCopy(1)
					this.showButtons()
				}.bind(this), betweenCopyDelay)
				break;

			case 2: //this is the first video page
				this.setState({video: videoList[0]})
				this.hideCopy()

				setTimeout(function() {
					this.setState({stage: 3});
				}.bind(this), firstVideoDuration)
				break;

			case 3: //this is the second questions
				this.setState({yesVal: 4})
				this.updateCopy(2)
				this.showCopy()
				setTimeout(function() {
					this.updateCopy(3)
					this.showButtons()
				}.bind(this), betweenCopyDelay)
				break;

			case 4: //this is the second video
				this.setState({video: videoList[1]})
				this.hideCopy()
				setTimeout(function() {
					this.setState({stage: 5});
				}.bind(this), secondVideoDuration)
				break;

			case 5: //this is the third questions
				this.setState({yesVal: 7, noVal: 7})
				this.showButtons()
				this.updateCopy(4)
				this.showCopy()
				break;

			case 6: //this is the last question
				this.setState({yesVal: 7, noVal: 7})
				this.showButtons()
				this.updateCopy(5)
				this.showCopy()
				break;

				case 7: //last video
				this.setState({video: videoList[2]})
				this.hideCopy();
				setTimeout(function() {
					navigate("/stories-hub");
				}.bind(this), thirdVideoDuration)
		}
		
	};

	toggleVideo = (doPlay) => {
		document.getElementById('landing-clip').load()
		setTimeout(function() {
			if(doPlay) {
				document.getElementById('landing-clip').play()
			} else {
				document.getElementById('landing-clip').pause();
			}
		}, 200)
	}


	componentDidUpdate(prevProps, prevState) {
		if(this.state.stage !== prevState.stage) {
			console.log("New stage! "+prevState.stage+", "+this.state.stage)
			this.stateSwitch();
		}
		if(this.state.copy !== prevState.copy) {
			//this.updateCopy();
		}
	}


	render() {

		return (
			<div className = "overlay-background">
				< BackgroundMovie video= {this.state.video} />
				<div className = "overlay-content-container">
					<h1 className = "video-overlay-copy">
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