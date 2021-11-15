import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../videos/rain-test.mp4"
import WebFont from 'webfontloader';
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"

WebFont.load({
  google: {
    families: ['Roboto:wght@0,400;0,700;1,400;1,700', 'sans-serif']
  }
});

// styles

document.body.style.margin = "0px"; //remove any margins


// markup
const IndividualStory = () => {

  return (
    <div className = "individual-story-container">
      <div className = "selected-topic-container">
        This is where the selected stuff will show up.
      </div>
      < SideNavItem />
    </div>
  )
}

export default IndividualStory
