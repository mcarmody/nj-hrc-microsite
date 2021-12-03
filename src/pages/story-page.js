import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
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
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //second group
        {type: "link", data: "http://www.mikecarmody2.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody2.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //third group
        {type: "link", data: "http://www.mikecarmody3.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody3.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //fourth group
        {type: "link", data: "http://www.mikecarmody4.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody4.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //fifth group
        {type: "link", data: "http://www.mikecarmody5.net", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody5.net", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"}
      ];

const mediaLinkUrl = "https://d2ycth98mhglth.cloudfront.net/media";

// markup
class IndividualStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Placeholder",
      contentItems: [],
      selectedItem: "",
      id: 0
    };
  }


  componentDidMount() {
    console.log(this.state.contentItems);
    if(this.props.location.state) {
      this.setState({title: this.props.location.state.data.title})
      this.setState({id: this.props.location.state.data.id});
    } else {
       navigate("/stories-hub");
    }
    if(this.state.title=="undefined") {
      this.setState({title: this.props.location.state.title});
    }
    if(this.state.contentItems !== rawContent) {
      this.setState({contentItems: rawContent})
    }
  }

  componentDidUpdate() {
    if(this.props.location.state && this.state.title!==this.props.location.state.data.title) {
      this.setState({title: this.props.location.state.data.title});
      this.setState({id: this.props.location.state.data.id});
    }
  }

  selectItem = (id) => {
    this.setState({selectedItem: this.state.contentItems[id]});
    console.log(this.state.title+" "+this.state.id)
  }

  render() {

    if(this.props.location.state) {
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
            <Link to="/stories-hub" className = "back-link">Home</Link>
            
            < SideNavItem type = {rawContent[(this.state.id*4)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4)].data} metadata = {rawContent[(this.state.id*4)].metadata} onClick={() => this.selectItem((this.state.id*4))} />
            < SideNavItem type = {rawContent[(this.state.id*4+1)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+1)].data} metadata = {rawContent[(this.state.id*4+1)].metadata} onClick={() => this.selectItem((this.state.id*4+1))} />
            < SideNavItem type = {rawContent[(this.state.id*4+2)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+2)].data} metadata = {rawContent[(this.state.id*4+2)].metadata} onClick={() => this.selectItem((this.state.id*4+2))} />
            < SideNavItem type = {rawContent[(this.state.id*4+3)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+3)].data} metadata = {rawContent[(this.state.id*4+3)].metadata} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*4+3)].metadata2} onClick={() => this.selectItem((this.state.id*4+3))} />
            < SideNavItem type = {rawContent[(this.state.id*4+3)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+3)].data} metadata = {rawContent[(this.state.id*4+3)].metadata} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*4+3)].metadata2} onClick={() => this.selectItem((this.state.id*4+3))} />
          </div>
          < Logo wordmark = {false} sideCopy = {true} size = {"small"}/>
        </div>
      )
    } else {
      return ( null )
    }
  }
}

export default IndividualStory
