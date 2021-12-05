import * as React from "react"
import "../styles/index-styles.css";
import twitterIcon from "../media/img/twitter-icon.png";
import fbIcon from "../media/img/fb-icon.png";

const preTweet = "Syringe Access is Essential, Effective, and Human. Harm reduction is an essential health service in New Jersey. Communities that have syringe access are healthier and more stable. Learn more at www.keepNJhealthy.org"


class InteractionLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoButtonText: "Play"
		}
	}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState) {
	}

	share = () => {
		console.log("tweet this or something")
		console.log(preTweet)
	}

	toggleVideo = () => {
		var video = document.getElementById('story-clip');
		video==undefined ? this.setState({video: video}) : console.log("we have a video")
		if(video.paused) {
			video.classList.remove('hidden')
			video.play()
		} else {
			video.classList.add('hidden')
			video.pause()
		}
		video.paused ? this.setState({videoButtonText: "Play"}) : this.setState({videoButtonText: "Pause"})
	}


	render() {
		return (
			<div className = "interaction-container">
                <div id = "share-link" onClick={() => this.share() }><span>>></span> Share
                	<a href = {"http://twitter.com/intent/tweet?text=" + preTweet} target="_blank" rel="noopener"><img id = "twitter-link" src={twitterIcon} /></a>
                	<a href = "https://www.facebook.com/sharer/sharer.php?u=test.com" target="_blank" rel="noopener"><img id = "fb-link" src={fbIcon} /></a>
            	</div>
                <div id = "play-link" onClick={() => this.toggleVideo() }><span>>></span> {this.state.videoButtonText} Video</div>
              </div>
		)
	}
}

export default InteractionLinks;