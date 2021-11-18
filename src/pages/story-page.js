import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../videos/rain-test.mp4"
import Logo from "../components/njhrc-logo";
import SkipButton from "../components/skip-button";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"
import "../styles/individual-page-styles.css";


// markup
class IndividualStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "test",
      //this.props.location.state.title
      contentItems: [
        {type: "link", data: "http://www.mikecarmody.net", metadata: "a test link"},
        {type: "image", data: "../images/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "image", data: "../images/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "../videos/godrays-test.mp4", metadata: "godrays video test"}
      ],
      selectedItem: ""
    };
  }

  selectItem = (self) => {
    this.setState({selectedItem: self.props.location.state});
    console.log(this.state.selectedItem)
  }

  render() {

    var selectedItem = this.state.selectedItem;

    return (
      <div className = "story-parent-container">
        <div className = "selected-topic-container">
          <div className = "story-title">{this.state.title}</div>
          <div className = "story-content">{this.state.selectedItem.data}</div>
        </div>
        <div className = "side-nav-container">
          < SideNavItem type = {this.state.contentItems[0].type} data = {this.state.contentItems[0].data} onClick={() => this.selectItem(this)} />
          < SideNavItem type = {this.state.contentItems[0].type} data = {this.state.contentItems[1].data} onClick={() => this.selectItem(this)} />
          < SideNavItem type = {this.state.contentItems[0].type} data = {this.state.contentItems[2].data} onClick={() => this.selectItem(this)} />
          < SideNavItem type = {this.state.contentItems[0].type} data = {this.state.contentItems[3].data} onClick={() => this.selectItem(this)} />
        </div>
        < Logo wordmark = {false} sideCopy = {true} size = {"small"}/>
      </div>
    )
  }
}

export default IndividualStory
