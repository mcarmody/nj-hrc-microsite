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
var firstVideoDuration = 2000; //length of first video in milliseconds
var secondVideoDuration; //length of second video in milliseconds
var thirdVideoDuration; //length of third video in milliseconds
var betweenCopyDelay = 2000;

const secondTextUpdate = "Do you think what we</br> are doing is working?";

class QuestionOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 1,
			video: mountainsVid,
			copy: "<span style={headingBoldStyles}>Here in New Jersey,</span><br />when it comes to<br />opioids and overdoses...",
			yesVal: 2,
			noVal: 3
		};
	}

	nextQuestion = (stateNumber) => {
		this.setState({stage: stateNumber})
	}

	updateCopy = () => {
		console.log("updating copy: "+this.state.copy);
		document.getElementsByClassName("video-overlay-copy")[0].innerHTML = this.state.copy;
	}

	stateSwitch = () => {
		switch(this.state.stage) {
			case 1: //this is the landing page
				this.setState({video: mountainsVid})
				console.log(this.state.video)
				break;
			case 2: //this is the second video
				this.setState({video: rainVid, copy: "Wrong! New video!", yesVal: 4, noVal: 5})
				console.log(this.state.video)
				break;
			case 3: //this is the second question page
				this.setState({video: godraysVid, copy: "Good answer. New question!", yesVal: 4, noVal: 5})
				console.log(this.state.video)
				break;
			case 4: //this is the third video
				this.setState({video: mountainsVid, copy: "Wrong! New video!", yesVal: 6, noVal: 6})
				console.log(this.state.video)
				break;
			case 5: //this is the third question page
				this.setState({video: rainVid, copy: "Good answer. New question!", yesVal: 6, noVal: 6})
				console.log(this.state.video)
				break;
			case 6: //this is the last video
				this.setState({video: godraysVid, copy: "You're done!"})
				console.log(this.state.video)
				break;
		}
		
	}

	componentDidMount() {
		this.updateCopy();
		setTimeout(function() { //the first round of copy appearing
			document.getElementsByClassName("video-overlay-copy")[0].classList.remove("hidden");
			document.getElementsByClassName("overlay-background")[0].classList.remove("hidden");
			document.getElementById("landing-clip").classList.add("hidden");
		}, firstVideoDuration);

		setTimeout(function() { //second part of initial question
			document.getElementsByClassName("video-overlay-copy")[0].innerHTML = secondTextUpdate;
			document.getElementsByClassName("overlay-buttons-container")[0].classList.remove("hidden");
		}, firstVideoDuration + betweenCopyDelay);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.stage !== prevState.stage || this.state.video !== prevState.video || this.state.copy !== prevState.copy) {
			console.log("New stage! "+prevState.stage+", "+this.state.stage)
			this.stateSwitch();
			this.updateCopy();
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