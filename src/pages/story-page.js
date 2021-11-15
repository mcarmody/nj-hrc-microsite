import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../videos/rain-test.mp4"
import WebFont from 'webfontloader';
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"
import "../styles/individual-page-styles.css";

WebFont.load({
  google: {
    families: ['Roboto:wght@0,400;0,700;1,400;1,700', 'sans-serif']
  }
});

// styles

document.body.style.margin = "0px"; //remove any margins


// markup
class IndividualStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.location.state.title,
    };
  }

  render() {
    console.log(this.props.location)

    return (
      <div className = "story-parent-container">
        <div className = "selected-topic-container">
          <div className = "story-title">{this.state.title}</div>
          This is where the selected stuff will show up.
        </div>
        < SideNavItem />
      </div>
    )
  }
}

export default IndividualStory
