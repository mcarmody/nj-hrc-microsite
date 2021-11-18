import * as React from "react"
import wordmark from "../images/njhrc-wordmark.png"


class SideNavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	componentDidUpdate(prevProps) {
	}


	render() {
		function open(self) {
			console.log(self.props.data)
		}

		return (
			<div className = "nav-item"  onClick={this.props.onClick}>
				{this.props.data}
			</div>
		)
	}
}

export default SideNavItem;