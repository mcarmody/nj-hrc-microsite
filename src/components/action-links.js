import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"

class ActionLinks extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      socialStyle: this.props.social ? {display: "block"} : {display: "none"}
    };
  }

	render() {
		return (
			<div className="actions-container">
				<div className = "donate-container" style = {this.state.socialStyle}> >> Donate </div>
				<div className = "social-container" style = {this.state.socialStyle}> SOCIAL LINKS </div>
			</div>
		)
	}
}

export default ActionLinks;