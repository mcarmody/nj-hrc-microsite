import * as React from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "gatsby";
import ReactDOM from "react-dom";
import {useState} from "react"
import wordmark from "../media/img/njhrc-wordmark.png";
import IndividualStory from '../pages/story-page'
import "../styles/hub-page-styles.css";

const vidStyles = {
	top: 0,
	left: 0,
	minHeight: "100vh",
	zIndex: -1,
}

const testStyle = {
	float: "left",
    zIndex: 100,
    fontSize: "24pt",
    color: "white",
    top: 0,
    position: "fixed",
}

const imgStyle = {
	top: 0,
	left: 0,
	minHeight: "100vh",
	zIndex: -1,
	background: "black"
}

const blurbsList = [
	"Harm reduction works where the criminalization of drug use fails.",
	"Harm reduction works because it helps people make realistic, incremental changes.",
	"Syringe access prevents the spread of HIV and viral hepatitis.",
	"People who use drugs are on the frontline of overdose prevention.",
	"Syringe Access connects people to other stabilizing services.",
]

const colorsList = [
	"#CC4400",
	"#70EBCA",
	"#B999FF",
	"#FF925C",
	"#FFE4D6"
]

class NavMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			highlighted: false,
			data: {
				title: this.props.title,
				id: this.props.id,
				blurb: blurbsList[this.props.id],
				color: colorsList[this.props.id]
			},
		}
	}

	componentDidMount() {
		if(this.props.videoName == "first") {
			ReactDOM.findDOMNode(this).click();
		}

		if(this.state.title=="undefined") {
	      this.setState({title: this.props.title});
	      document.getElementsByClassName('video-title')[this.props.id].innerHTML = this.props.title;
	    } else {
	      document.getElementsByClassName('video-title')[this.props.id].innerHTML = this.props.title;
	    }

		this.setState({beforeStyle: {
				'::before': {
					background: 'linear-gradient(147.23deg, rgba(255, 84, 0, 0.54) 10.03%, '+colorsList[this.state.data.id]+' 45.96%)',
				}
			}
		})
		console.log(this.state.beforeStyle)
		console.log(imgStyle)
	}

	render() {

		const imgStyle = {
			top: 0,
			left: 0,
			minHeight: "100vh",
			backgroundImage: "url("+this.props.source+")"
		}

		var allNavVideos = [];

		function getNavVideos(self) {
			allNavVideos = Array.prototype.slice.call(document.getElementsByClassName("video-container"));
			for (var i = allNavVideos.length - 1; i >= 0; i--) {
				if(allNavVideos[i] !== self) {
					allNavVideos[i].classList.remove("column-highlighted");
					// allNavVideos[i].firstChild.pause();
				}
			}
		}

		function toggle(self) {
			getNavVideos(ReactDOM.findDOMNode(self));
			if(!ReactDOM.findDOMNode(self).classList.contains("column-highlighted")) {
				ReactDOM.findDOMNode(self).classList.add("column-highlighted");
				// document.getElementById(self.props.videoName).play();
			} else {
				ReactDOM.findDOMNode(self).classList.remove("column-highlighted");
				// document.getElementById(self.props.videoName).pause();
			}
		}

		console.log(this.state.id)

		return (
			<div className = "video-container" onClick={() => toggle(this)} style = {imgStyle}>
				<div className = "background-image" />

		  		<div className = "video-title"></div>
		  		<Link className = "story-link" to="/story-page" id={"story-link-"+this.props.id} state = {{data: this.state.data}}>>></Link>
	  		</div>
		)
	}
}

export default NavMovie;