import * as React from "react";
import wordmark from "../media/img/njhrc-wordmark.png";


class BackgroundMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			video: this.props.video,
			isLiveStyle: {
				display: this.props.live ? "block" : "none"
			}
		};
	}



	componentDidMount() {
		console.log(this.state.isLiveStyle)
  		document.getElementsByClassName('bg-video')[0].play();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.video !== this.props.video) {
	  		this.setState({ video: this.props.video });
	  		console.log("new video")
	  	}
	}

	videoPlayed = () => {
		console.log("playing!");
	}

	render() {
		return (
			<div className = "bg-video-container">
				<video autoPlay = {this.props.autoplay} muted onPlay = {this.videoPlayed()} className = "bg-video" key={this.state.video}>
		      		<source src = {this.state.video} type="video/mp4" />
		  		</video>
	  		</div>
		)
	}
}

export default BackgroundMovie;