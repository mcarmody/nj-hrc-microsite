import * as React from "react"
import wordmark from "../media/img/njhrc-wordmark.png"


class SideNavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: this.props.data
		};
	}

	componentDidUpdate(prevProps) {
	}


	render() {
		function open(self) {
			console.log(self.props.data)
		}

		return (
			<div className = "nav-item"  onClick={this.props.onClick} style = {{backgroundImage: "url("+this.state.source+")"}}>
				{this.props.data}
			</div>
		)
	}
}

export default SideNavItem;