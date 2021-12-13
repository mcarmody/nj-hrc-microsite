import * as React from "react"
import "../styles/index-styles.css";
import twitterIcon from "../media/img/twitter-icon.png";
import fbIcon from "../media/img/fb-icon.png";
import instaIcon from "../media/img/insta-icon.png";

const preTweet = "Syringe Access is Essential, Effective, and Human. Harm reduction is an essential health service in New Jersey. Communities that have syringe access are healthier and more stable. Learn more at www.keepNJhealthy.org"


class SocialLinks extends React.Component {
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
		var storyContainer = document.getElementsByClassName('story-content')[0];
		video==undefined ? this.setState({video: video}) : console.log("we have a video")
		if(video.paused) {
			video.classList.remove('hidden');
			storyContainer.classList.add('no-bg');
			video.play()
		} else {
			video.classList.add('hidden')
			storyContainer.classList.remove('no-bg');
			video.pause()
		}
		video.paused ? this.setState({videoButtonText: "Play"}) : this.setState({videoButtonText: "Pause"})
	}


	render() {
		return (
			<div className = "social-container">
				<div className = "nav-item social-nav">Follow NJHRC social media:</div>
            	<a href = "https://www.twitter.com/njharmreduction" target="_blank" rel="noopener"><img id = "twitter-link" src={twitterIcon} /></a>
            	<a href = "https://www.facebook.com/njharmreduction" target="_blank" rel="noopener"><img id = "fb-link" src={fbIcon} /></a>
                <a href = "https://www.instagram.com/njharmreduction" target="_blank" rel="noopener"><img id = "insta-link" src={instaIcon} /></a>
            </div>
		)
	}
}

export default SocialLinks;