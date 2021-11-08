import * as React from "react"
import WebFont from 'webfontloader';
import "../styles/video-page-styles.css";

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
var firstVideoDuration = 4000; //length of first video in milliseconds
var secondVideoDuration; //length of second video in milliseconds
var thirdVideoDuration; //length of third video in milliseconds
var betweenCopyDelay = 6000;

const secondTextUpdate = "Do you think what we</br> are doing is working?";

class QuestionOverlay extends React.Component {

	componentDidMount() {
		setTimeout(function() {
			document.getElementsByClassName("video-overlay-copy")[0].classList.remove("hidden");
			document.getElementsByClassName("overlay-background")[0].classList.remove("hidden");
			document.getElementsByClassName("overlay-buttons-container")[0].classList.remove("hidden");
		}, firstVideoDuration);

		setTimeout(function() {
			document.getElementsByClassName("video-overlay-copy")[0].innerHTML = secondTextUpdate;
		}, firstVideoDuration + betweenCopyDelay);
	}

	render() {
		return (
			<div className = "overlay-background hidden">
				<div className = "overlay-content-container">
					<h1 className = "video-overlay-copy hidden">
				        <span style={headingBoldStyles}>Here in New Jersey,</span><br />
				        when it comes to<br />
				        opioids and overdoses...
					</h1>
					<div className = "overlay-buttons-container hidden">
						<div className = "yes-button">Yes</div>
						<div className = "no-button">No</div>
					</div>
				</div>
			</div>
		)
	}
}

export default QuestionOverlay;