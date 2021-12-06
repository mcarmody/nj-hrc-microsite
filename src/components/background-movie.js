import * as React from "react";
import wordmark from "../media/img/njhrc-wordmark.png";


const vidStyles = {
	position: "fixed",
	top: 0,
	left: 0,
	minWidth: "100vw",
	minHeight: "100vh",
	zIndex: -1,
};

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
	}

	componentDidUpdate(prevProps) {
		if(prevProps.video !== this.props.video) {
	  		this.setState({ video: this.props.video });
	  		console.log("new video")
	  		//document.getElementsByClassName('bg-video')[0].play();
	  	}
	}

	videoPlayed = () => {
		console.log("playing!");
	}

	render() {
		return (
			<video style={vidStyles}  autoplay onplay = {this.videoPlayed()} className = "bg-video" key={this.state.video}>
	      		<source src = {this.state.video} type="video/mp4" />
	  		</video>
		)
	}
}

export default BackgroundMovie;