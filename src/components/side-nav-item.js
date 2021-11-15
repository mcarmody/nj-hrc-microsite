import * as React from "react"
import wordmark from "../images/njhrc-wordmark.png"
import WebFont from 'webfontloader';


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
			console.log(self)
		}

		return (
			<div className = "nav-item-container" onClick={() => open(this)}>
				This is fake side nav content.
			</div>
		)
	}
}

export default SideNavItem;