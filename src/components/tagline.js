import * as React from "react"

var taglineStyles = {
	paddingLeft: "40px",
	fontSize: "82pt",
	position: "fixed",
	fontWeight: "300",
	color: "white",
	display: "block"
}

const largeStyle = {
	fontSize: "82pt",
	top: "20vh"
}

const smallStyle = {
	fontSize: "35pt",
	bottom: "16vh"
}

const taglineBold = {
	fontWeight: "700"
}


class Tagline extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	size: this.props.size === "large" ? largeStyle : smallStyle,
	    	class: "tagline"
	    };
	  }

	  componentDidMount() {
	  	if(this.props.position === "extra-low") {
		  	this.setState({class: "tagline-low"})
	  	}
	  }

	render() {

		return (
			<h1 className = {this.state.class} style = {{...taglineStyles,...this.state.size}}>
		        Essential. <br />
		        Effective. <br />
		        <span style = {taglineBold}>Human.</span>
		    </h1>
		)
	}
}

export default Tagline;