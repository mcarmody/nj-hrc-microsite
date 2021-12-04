import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import landingVid from "../media/vid/rain-test.mp4"
import Logo from "../components/njhrc-logo";
import ActionLinks from "../components/action-links";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"
import "../styles/individual-page-styles.css";
import Tagline from "../components/tagline";

const rawContent = [
        //How We Got Here
        {type: "link", data: "/img/HOW+WE+GOT+HERE+STAT.JPG", title: "Cost of the Drug War", metadata: '<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},
        {type: "link", data: "/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG", title: "Testimonial", metadata: "“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”", metadata2: "—Georgett Watson, South Jersey AIDS Alliance"},
        {type: "video", data: "/vid/godrays-test.mp4", title: "Share the campaign", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "image", data: "/img/how-we-got-here_icon.png", title: "Rates of HIV where you live", metadata: "", metadata2: "/img/harm_reduction_test.png"},
        //second group
        {type: "link", data: "http://www.mikecarmody2.net", title: "", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody2.net", title: "", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", title: "", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", title: "", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //third group
        {type: "link", data: "http://www.mikecarmody3.net", title: "", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody3.net", title: "", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", title: "", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", title: "", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //fourth group
        {type: "link", data: "http://www.mikecarmody4.net", title: "", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody4.net", title: "", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", title: "", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", title: "", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"},
        //fifth group
        {type: "link", data: "http://www.mikecarmody5.net", title: "", metadata: "a test link"},
        {type: "link", data: "http://www.mikecarmody5.net", title: "", metadata: "another test link"},
        {type: "image", data: "/img/harm_reduction_test.png", title: "", metadata: "harm reduction image test"},
        {type: "video", data: "/vid/godrays-test.mp4", title: "", metadata: "godrays video test", metadata2: "/img/harm_reduction_test.png"}
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
      id: 0,
      blurb: "Placeholder content",
      description: "",
      source: ""
    };
  }


  componentDidMount() {
    console.log(this.state.contentItems);
    if(this.props.location.state) {
      this.setState({title: this.props.location.state.data.title})
      this.setState({id: this.props.location.state.data.id});
      this.setState({blurb: this.props.location.state.data.blurb});
      console.log(this.props.location.state.data)
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

  componentDidUpdate(prevProps, prevState) {

   
    if(this.props.location.state && this.state.title!==this.props.location.state.data.title) {
      this.setState({title: this.props.location.state.data.title});
      this.setState({id: this.props.location.state.data.id});
      this.setState({blurb: this.props.location.state.data.blurb});
    }
    
    if(this.state.selectedItem !== prevState.selectedItem) {
      var dom = document.createElement('div');
      dom.innerHTML = this.state.selectedItem.metadata;
      this.setState({description: dom.innerHTML+"<div class = 'story-source'>"+this.state.source+"</div>"});
      console.log(dom)
    }
  }

  selectItem = (id) => {
    this.setState({selectedItem: this.state.contentItems[id]});
    console.log(this.state.selectedItem.metadata2)

    if(this.state.contentItems[id].metadata2 !== undefined) {
      this.setState({source: this.state.contentItems[id].metadata2})
    } else {
      this.setState({source: ""})
    }
  }


  render() {

    if(this.props.location.state) {
      var selectedItem = this.state.selectedItem;

      return (
        <div className = "story-parent-container">
          <div className = "selected-topic-container">
            <div className = "story-title">{this.state.title}</div>
            <div className = "story-content" style = {{backgroundImage: "url("+mediaLinkUrl+this.state.selectedItem.data+")"}}>
              <div className = "story-copy" dangerouslySetInnerHTML={{ __html: this.state.description}} />
              {this.state.selectedItem.type=="video" ? (
                <video autoPlay="autoplay" muted loop id="story-clip" className = "story-video-container">
                  <source src = {mediaLinkUrl+this.state.selectedItem.data} type="video/mp4" className = "story-video"/>
                </video>
              ) : console.log("not a video")}
            </div>
            <div className = "contentBlurb">{this.state.blurb}</div>
          </div>
          <div className = "side-nav-container">
            <Link to="/stories-hub" className = "back-link">Home</Link>           
            < SideNavItem type = {rawContent[(this.state.id*4)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4)].data} title = {rawContent[(this.state.id*4)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*4+3)].metadata2} onClick={() => this.selectItem((this.state.id*4))} />
            < SideNavItem type = {rawContent[(this.state.id*4+1)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+1)].data} title = {rawContent[(this.state.id*4+1)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*4+1)].metadata2} onClick={() => this.selectItem((this.state.id*4+1))} />
            < SideNavItem type = {rawContent[(this.state.id*4+2)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+2)].data} title = {rawContent[(this.state.id*4+2)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*4+2)].metadata2} onClick={() => this.selectItem((this.state.id*4+2))} />
            < SideNavItem type = {rawContent[(this.state.id*4+3)].type} data = {mediaLinkUrl+rawContent[(this.state.id*4+3)].data} title = {rawContent[(this.state.id*4+3)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*4+3)].metadata2} onClick={() => this.selectItem((this.state.id*4+3))} />
           
            < ActionLinks social = {true} donate = {true}/>
          </div>
          < Tagline size = "small" position = "extra-low"/>
          < Logo wordmark = {false} sideCopy = {true} size = {"small"}/>
        </div>
      )
    } else {
      return ( null )
    }
  }
}

export default IndividualStory
