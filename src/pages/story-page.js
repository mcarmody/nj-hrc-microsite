import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../media/vid/rain-test.mp4"
import Logo from "../components/njhrc-logo";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"
import "../styles/individual-page-styles.css";

const mediaLinkUrl = "https://d2ycth98mhglth.cloudfront.net/media"


// markup
class IndividualStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "test",
      //this.props.location.state.title
      contentItems: [
        {type: "link", data: "http://www.mikecarmody.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test"}
      ],
      selectedItem: ""
    };
  }

  selectItem = (id) => {
    this.setState({selectedItem: this.state.contentItems[id]});
    console.log(this.state.selectedItem)
  }

  render() {

    var selectedItem = this.state.selectedItem;

    return (
      <div className = "story-parent-container">
        <div className = "selected-topic-container">
          <div className = "story-title">{this.state.title}</div>
          <div className = "story-content" style = {{backgroundImage: "url("+mediaLinkUrl+this.state.selectedItem.data+")"}}>
            <div className = "story-copy">{this.state.selectedItem.metadata}</div>
            {this.state.selectedItem.type=="video" ? (
              <video autoplay="autoPlay" muted loop id="story-clip" className = "story-video-container">
                <source src = {mediaLinkUrl+this.state.selectedItem.data} type="video/mp4" className = "story-video"/>
              </video>
            ) : console.log("not a video")}
          </div>
          
        </div>
        <div className = "side-nav-container">
          < SideNavItem type = {this.state.contentItems[0].type} data = {this.state.contentItems[0].data} onClick={() => this.selectItem(0)} />
          < SideNavItem type = {this.state.contentItems[1].type} data = {this.state.contentItems[1].data} onClick={() => this.selectItem(1)} />
          < SideNavItem type = {this.state.contentItems[2].type} data = {this.state.contentItems[2].data} onClick={() => this.selectItem(2)} />
          < SideNavItem type = {this.state.contentItems[3].type} data = {this.state.contentItems[3].data} onClick={() => this.selectItem(3)} />
        </div>
        < Logo wordmark = {false} sideCopy = {true} size = {"small"}/>
      </div>
    )
  }
}

export default IndividualStory
