import * as React from "react"

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
	    	class: this.props.size === "large" ? "tagline-large" : "tagline-small"
	    };
	  }

	  componentDidMount() {
	  	if(this.props.position === "extra-low") {
		  	this.setState({class: "tagline-low"})
	  	}
	  }

	render() {

		return (
			<h1 className = {"tagline "+this.state.class}>
		        Essential. <br />
		        Effective. <br />
		        <span style = {taglineBold}>Human.</span>
		    </h1>
		)
	}
}

export default Tagline;