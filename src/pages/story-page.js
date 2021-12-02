import * as React from "react"
import { Link } from "gatsby"
import landingVid from "../media/vid/rain-test.mp4"
import Logo from "../components/njhrc-logo";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"
import "../styles/individual-page-styles.css";

const rawContent = [
        //first group
        {type: "link", data: "http://www.mikecarmody.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test"},
        //second group
        {type: "link", data: "http://www.mikecarmody2.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody2.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test"},
        //third group
        {type: "link", data: "http://www.mikecarmody3.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody3.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test"},
        //fourth group
        {type: "link", data: "http://www.mikecarmody4.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody4.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test"},
        //fifth group
        {type: "link", data: "http://www.mikecarmody5.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody5.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test"}
      ];

const mediaLinkUrl = "https://d2ycth98mhglth.cloudfront.net/media";

// markup
class IndividualStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      title: "Placeholder",
      contentItems: [],
      selectedItem: "",
      id: 10
    };
  }


  componentDidMount() {
    console.log(this.state.contentItems);
    if(this.props.location.state) {
      this.setState({title: this.props.location.state.data.title})
      this.setState({id: this.props.location.state.data.id});
    }
    if(this.state.title=="undefined") {
      this.setState({title: this.props.location.state.title});
    }
    if(this.state.contentItems !== rawContent) {
      this.setState({contentItems: rawContent})
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem('state', JSON.stringify(this.state))
    if(this.props.location.state && this.state.title!==this.props.location.state.data.title) {
      this.setState({title: this.props.location.state.data.title});
      this.setState({id: this.props.location.state.data.id});
    }
    if(this.state !== JSON.parse(window.localStorage.getItem('state'))) {
      window.localStorage.setItem('state', JSON.stringify(this.state))
    }
    console.log(this.state)
  }

  selectItem = (id) => {
    this.setState({selectedItem: this.state.contentItems[id]});
    console.log(this.state.title+" "+this.state.id)
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
              <video autoPlay="autoplay" muted loop id="story-clip" className = "story-video-container">
                <source src = {mediaLinkUrl+this.state.selectedItem.data} type="video/mp4" className = "story-video"/>
              </video>
            ) : console.log("not a video")}
          </div>
          
        </div>
        <div className = "side-nav-container">
          < SideNavItem type = {this.state.contentItems[(this.state.id*4)].type} data = {this.state.contentItems[(this.state.id*4)].data} onClick={() => this.selectItem((this.state.id*4))} />
          < SideNavItem type = {this.state.contentItems[(this.state.id*4+1)].type} data = {this.state.contentItems[(this.state.id*4+1)].data} onClick={() => this.selectItem((this.state.id*4+1))} />
          < SideNavItem type = {this.state.contentItems[(this.state.id*4+2)].type} data = {this.state.contentItems[(this.state.id*4+2)].data} onClick={() => this.selectItem((this.state.id*4+2))} />
          < SideNavItem type = {this.state.contentItems[(this.state.id*4+3)].type} data = {this.state.contentItems[(this.state.id*4+3)].data} onClick={() => this.selectItem((this.state.id*4+3))} />
        </div>
        < Logo wordmark = {false} sideCopy = {true} size = {"small"}/>
      </div>
    )
  }
}

export default IndividualStory
