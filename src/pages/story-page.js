import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import landingVid from "../media/vid/rain-test.mp4"
import Logo from "../components/njhrc-logo";
import ActionLinks from "../components/action-links";
import InteractionLinks from "../components/interaction-links";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js"
import "../styles/individual-page-styles.css";
import Tagline from "../components/tagline";

const rawContent = [
        //in order:
        //  landing video
        //  stat 1
        //  testimonial & stat 2
        //  side-nav video
        //  infographic

        //How We Got Here
        {type: "video", data: "/vid/HOW+WE+GOT+HERE.mp4", title: "How We Got Here", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "link", data: "/img/HOW+WE+GOT+HERE+STAT.JPG", title: "Cost of the Drug War", metadata: '<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services'},
        {type: "link", data: "/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG", title: "Testimonial", metadata: "“New Jersey law states you need local municipal ordinance to have a syringe access program. A lot of municipal leaders don’t have a public health background and don’t understand that syringe access saves lives, saves money, and can help clean up the city.”", metadata2: "—Georgett Watson, South Jersey AIDS Alliance"},
        {type: "video", data: "/vid/SIDE+VIDEO-HOW+WE+GOT+HERE.mp4", title: "Share the campaign", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "image", data: "/img/how-we-got-here_icon.png", title: "Rates of HIV where you live", metadata: "", metadata2: "/img/harm_reduction_test.png"},
        //HR 101
        {type: "video", data: "/vid/HARM+REDUCTION+101.mp4", title: "How We Got Here", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "link", data: "/img/HR101+STAT.JPG", title: "Reducing Transmission", metadata: 'People who access harm reduction programs are <span className = "stat-highlight">50% less likely</span>to contract HIV or Hepatitis C.'},
        {type: "link", data: "/img/HR101+TESTIMONIAL.JPG", title: "Testimonial", metadata: "Going to a syringe access program was probably the smartest thing that I did.  They saved me from infectious disease.”", metadata2: "—Domenick"},
        {type: "video", data: "https://www.youtube.com/embed/CPouAV7J18g", title: "Share the campaign", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "image", data: "/img/how-we-got-here_icon.png", title: "Rates of HIV where you live", metadata: "", metadata2: "/img/harm_reduction_test.png"},
        //HEP&HIV
        {type: "video", data: "/vid/HIV+_+HEP+C.mp4", title: "How We Got Here", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "link", data: "/img/HIV+STAT.JPG", title: "Reducing rates", metadata: 'As syringe access has become available, rates of HIV transmission among people who inject drugs have declined by one-third.'},
        {type: "link", data: "/img/HIV+TESTIMONIAL.JPG", title: "Testimonial", metadata: "HIV Treatment for one person in their lifetime is about $600,000. The current cost of one syringe is 10 cents.”", metadata2: "—Georgett Watson, South Jersey AIDS Alliance"},
        {type: "video", data: "https://www.youtube.com/embed/_44LjDGKJWs", title: "Share the campaign", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "image", data: "/img/how-we-got-here_icon.png", title: "Rates of HIV where you live", metadata: "", metadata2: "/img/harm_reduction_test.png"},
        //Overdose
        {type: "video", data: "/vid/OVERDOSE.m4v", title: "How We Got Here", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "link", data: "/img/OVERDOSE+STAT.JPG", title: "Overdoses in New Jersey", metadata: 'There were <span className = "stat-highlight">18,492</span>overdose deaths in the state of New Jersey between 2010 and 2019'},
        {type: "link", data: "/img/OVERDOSE+TESTIMONIAL.JPG", title: "Testimonial", metadata: "The numbers don’t lie. Individuals who come to our syringe access program have less of a chance of overdosing.”", metadata2: "—Eddie - Hyacinth AIDS Foundation"},
        {type: "video", data: "https://www.youtube.com/embed/nn8TPbdZjGY", title: "Share the campaign", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "image", data: "/img/how-we-got-here_icon.png", title: "Rates of HIV where you live", metadata: "", metadata2: "/img/harm_reduction_test.png"},
        //Services
        {type: "video", data: "/vid/CONNECTION+TO+SERVICES.mp4", title: "How We Got Here", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "link", data: "/img/HOW+WE+GOT+HERE+STAT.JPG", title: "Access to Harm Reduction", metadata: 'People who access harm reduction programs are 5 times more likely to enter treatment for drug use and 3 times more likely to stop drug use impeding quality of life than those without access.'},
        {type: "link", data: "/img/HOW+WE+GOT+HERE+TESTIMONIAL.JPG", title: "Testimonial", metadata: "“We have great evidence that shows that somebody who participates in a syringe access program is actually more likely to enter into drug treatment.”", metadata2: "—Dr. Amesika Nyaku, Rutgers Institute for Health"},
        {type: "video", data: "https://www.youtube.com/embed/_44LjDGKJWs", title: "Share the campaign", metadata: "", metadata2: "/img/how+we+got+here.jpg"},
        {type: "image", data: "/img/how-we-got-here_icon.png", title: "Rates of HIV where you live", metadata: "", metadata2: "/img/harm_reduction_test.png"},
      ];

const mediaLinkUrl = "https://nj-hrc-project-media.s3.amazonaws.com/media";

// markup
class IndividualStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Placeholder",
      contentItems: [],
      selectedItem: {},
      id: 0,
      blurb: "Placeholder content",
      description: "",
      source: "",
      contentClass: "story-content",
      gradient: {
          background: "linear-gradient(115.66deg, #CC4400 -2%, rgba(196, 196, 196, 0) 50%"
      },
      video: ""
    };
  }


  componentDidMount() {
    console.log(this.state.selectedItem)
    if(this.props.location.state) {
      this.setState({selectedItem: rawContent[this.props.location.state.data.id*5]})
      this.setState({title: this.props.location.state.data.title})
      this.setState({id: this.props.location.state.data.id});
      this.setState({blurb: this.props.location.state.data.blurb});
      this.setState({video: document.getElementById('story-clip')});
      console.log(this.state.video)
      this.setState({
        gradient: {
          background: "linear-gradient(115.66deg, "+this.props.location.state.data.color+" -2%, rgba(196, 196, 196, 0) 50%"
        }
      })
    } else {
       navigate("/stories-hub");
    }
    if(this.state.title=="undefined") {
      this.setState({title: this.props.location.state.title});
    }
    if(this.state.contentItems !== rawContent) {
      this.setState({contentItems: rawContent})
    }
    this.setState({source: this.state.selectedItem.metadata2})
    console.log(this.state.source)
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
      console.log(this.state.selectedItem)
      this.state.selectedItem.type !== "video" ? this.setState({contentClass: "story-content image-content"}) : this.setState({contentClass: "story-content"});
    }
  }

  selectItem = (id) => {
    this.setState({selectedItem: this.state.contentItems[id]});
    this.setState({video: document.getElementById('story-clip')});
    console.log(this.state.selectedItem.metadata2)

    if(this.state.contentItems[id].metadata2 !== undefined) {
      this.setState({source: this.state.contentItems[id].metadata2})
    } else {
      this.setState({source: ""})
    }
    console.log("link: "+ mediaLinkUrl + this.state.selectedItem.data);
  }

  render() {

    if(this.props.location.state) {
      var selectedItem = this.state.selectedItem;

      return (
        <div className = "story-parent-container">
          <div className = "selected-topic-container" style = {this.state.gradient} >
            <div className = "story-title">{this.state.title}</div>
            <div className = {this.state.contentClass} style = {{backgroundImage: "url("+mediaLinkUrl+this.state.selectedItem.data+")"}}>
              {this.state.selectedItem.type !== "video" ? (
                <div className = "story-copy" dangerouslySetInnerHTML={{ __html: this.state.description}} />
              ) : console.log("this is a video")}
              {this.state.selectedItem.type=="video" ? (
                <video id="story-clip" className = "story-video-container">
                  <source src = {mediaLinkUrl+this.state.selectedItem.data} type="video/mp4" className = "story-video"/>
                </video>
              ) : console.log("not a video")}
              < InteractionLinks />
            </div>
            <div className = "contentBlurb">{this.state.blurb}</div>
          </div>
          <div className = "side-nav-container">
            <Link to="/stories-hub" className = "back-link">Home</Link>           
            < SideNavItem type = {rawContent[(this.state.id*5+1)].type} data = {mediaLinkUrl+rawContent[(this.state.id*5+1)].data} title = {rawContent[(this.state.id*5+1)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*5+1)].metadata2} onClick={() => this.selectItem((this.state.id*5+1))} />
            < SideNavItem type = {rawContent[(this.state.id*5+2)].type} data = {mediaLinkUrl+rawContent[(this.state.id*5+2)].data} title = {rawContent[(this.state.id*5+2)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*5+2)].metadata2} onClick={() => this.selectItem((this.state.id*5+2))} />
            < SideNavItem type = {rawContent[(this.state.id*5+3)].type} data = {mediaLinkUrl+rawContent[(this.state.id*5+3)].data} title = {rawContent[(this.state.id*5+3)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*5+3)].metadata2} onClick={() => this.selectItem((this.state.id*5+3))} />
            < SideNavItem type = {rawContent[(this.state.id*5+4)].type} data = {mediaLinkUrl+rawContent[(this.state.id*5+4)].data} title = {rawContent[(this.state.id*5+4)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*5+4)].metadata2} onClick={() => this.selectItem((this.state.id*5+4))} />
           
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
