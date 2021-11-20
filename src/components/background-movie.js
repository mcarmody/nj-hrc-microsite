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
		};
	}

	componentDidUpdate(prevProps) {
		if(prevProps.video !== this.props.video) {
			console.log("test: "+this.props.video)
	  		this.setState({ video: this.props.video });
	  	}
	}

	render() {
		return (
			<video autoplay="autoplay" muted loop style={vidStyles} id="landing-clip" key={this.state.video}>
	      		<source src = {this.state.video} type="video/mp4" />
	  		</video>
		)
	}
}

export default BackgroundMovie;