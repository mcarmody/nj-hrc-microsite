import * as React from "react"
import "../styles/index-styles.css";
import twitterIcon from "../media/img/twitter-icon.png";
import fbIcon from "../media/img/fb-icon.png";

const preTweet = "Syringe Access is Essential, Effective, and Human. Harm reduction is an essential health service in New Jersey. Communities that have syringe access are healthier and more stable. Learn more at www.keepNJhealthy.org"


class InteractionLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			video: this.props.video
		}
	}

	share = () => {
		console.log("tweet this or something")
		console.log(preTweet)
	}

	toggleVideo = () => {
		console.log("play "+this.state.video)
	}


	render() {
		return (
			<div className = "interaction-container">
                <div id = "share-link" onClick={() => this.share() }><span>>></span> Share
                	<a href = {"http://twitter.com/intent/tweet?text=" + preTweet} target="_blank" rel="noopener"><img id = "twitter-link" src={twitterIcon} /></a>
                	<a href = "https://www.facebook.com/sharer/sharer.php?u=test.com" target="_blank" rel="noopener"><img id = "fb-link" src={fbIcon} /></a>
            	</div>
                <div id = "play-link" onClick={() => this.toggleVideo() }><span>>></span> Play Video</div>
              </div>
		)
	}
}

export default InteractionLinks;