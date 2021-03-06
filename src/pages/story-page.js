import * as React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby";
import Logo from "../components/njhrc-logo";
import InteractionLinks from "../components/interaction-links";
import SocialLinks from "../components/social-links";
import NavMovie from "../components/nav-movie";
import SideNavItem from "../components/side-nav-item.js";
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
  {
    type: "video",
    data: "/vid/HOW+WE+GOT+HERE.mp4",
    title: "How We Got here",
    metadata: "",
    metadata2: "/img/how+we+got+here+main+photo.jpg",
  },
  {
    type: "link",
    data: "/img/HOW+WE+GOT+HERE+STAT.jpg",
    title: "Cost of the Drug War",
    metadata:
      '<span className = "stat-highlight">$11.6 billion</span>spent on drug war arrests <span className = "stat-highlight">544.6 times</span>more than investment in harm reduction services',
    metadata2:
      `<span>>></span> SOURCE: 
        <a 
          target="_blank" 
          rel="noopener"
          href="https://www.njpp.org/publications/report/a-war-on-us-how-much-new-jersey-spends-enforcing-the-war-on-drugs/"
        >
          A War on Us: How Much New Jersey Spends Enforcing the War on Drugs [New Jersey Policy Perspective]
        </a>`,
  },
  {
    type: "link",
    data: "/img/HOW+WE+GOT+HERE+TESTIMONIAL.jpg",
    title: "Testimonial",
    metadata:
    `“Just because you take away syringe access and needle exchange does not mean that the problem of drug use and overdose deaths is going to go away.”`,
    metadata2: "—Georgett, South Jersey AIDS Alliance",
  },
  {
    type: "external-link",
    data: "https://drive.google.com/drive/folders/1CAvK5MB2LCwfLXmtXk2Gx5E1ymq0i6ix?usp=sharing",
    title: "Share the campaign",
    metadata: "",
    metadata2: "/img/how+we+got+here.jpg",
  },
  {
    type: "image",
    icon: "/img/hwgh-icon.png",
    data: "/img/how-we-got-here-info.png",
    title: "Drug War by the Numbers",
    metadata:
      "70 to 90% of people who use a criminalized drug (including heroin, cocaine, and methamphetamine) do not experience a substance use disorder.",
    metadata2:
      "<div className = 'source-1'><span>>></span> Source: the Global Commission on Drug Policy reports</div><div className = 'source-2'><span>>></span> Source: New Jersey Policy Perspective—A War on Us: How Much New Jersey Spends Enforcing the War on Drugs</div>",
  },
  //HR 101
  {
    type: "video",
    data: "/vid/HARM+REDUCTION+101.mp4",
    title: "Harm Reduction 101",
    metadata: "",
    metadata2: "/img/harm+reduction+101+main+photo.jpg",
  },
  {
    type: "link",
    data: "/img/HR101+STAT.jpg",
    title: "Reducing Transmission",
    metadata:
      'People who access harm reduction programs are <span className = "stat-highlight">50% less likely</span>to contract HIV or Hepatitis C.',
    metadata2:
      `<span>>></span> SOURCE: 
          <a 
            target="_blank" 
            rel="noopener"
            href="https://www.cdc.gov/ssp/syringe-services-programs-factsheet.html"
          >
            Syringe Services Programs (SSPs) Fact Sheet [CDC]
          </a>`,
    },
  {
    type: "link",
    data: "/img/HR101+TESTIMONIAL.jpg",
    title: "Testimonial",
    metadata:
      `"I'm taking care of my health. I'm going to doctor's appointments. I'm eating better. I'm living better. I feel better."`,
    metadata2: "-Tina, Harm Reduction Participant",
  },
  {
    type: "external-link",
    data: "https://drive.google.com/drive/folders/1CAvK5MB2LCwfLXmtXk2Gx5E1ymq0i6ix?usp=sharing",
    title: "Share the campaign",
    metadata: "",
    metadata2: "/img/harm+reduction+101.jpg",
  },
  {
    type: "image",
    icon: "/img/hr-icon.png",
    data: "/img/hr101-info.png",
    title: "Examples of Harm Reduction",
    metadata:
      "A nationwide study showed that more than 80% of naloxone reversals were actually carried out by PWUD.",
    metadata2:
      "<div className = 'source-1'><span>>></span> Source: www.cdc.gov/ssp/syringe-services-programs-factsheet.html</div>",
  },
  //HEP&HIV
  {
    type: "video",
    data: "/vid/HIV+_+HEP+C.mp4",
    title: "Viral Hepatitis and HIV",
    metadata: "",
    metadata2: "/img/hiv+hepc+main+photo.jpg",
  },
  {
    type: "link",
    data: "/img/HIV+STAT.jpg",
    title: "Reducing rates",
    metadata:
      "As syringe access has become available, rates of HIV transmission among people who inject drugs have declined by one-third.",
    metadata2:
      `<span>>></span> SOURCE: 
      <a 
        target="_blank" 
        rel="noopener"
        href="https://www.state.nj.us/health/populationhealth/opioid/"
      >
        Overdose Data Dashboard [New Jersey Department of Health]
      </a>`,
  },
  {
    type: "link",
    data: "/img/HIV+TESTIMONIAL.jpg",
    title: "Testimonial",
    metadata:
      `"Going to a syringe access program was probably the smartest thing that I did. They saved me from infectious disease.”`,
    metadata2: "-Domenick, Person in Recovery"
  },
  {
    type: "external-link",
    data: "https://drive.google.com/drive/folders/1CAvK5MB2LCwfLXmtXk2Gx5E1ymq0i6ix?usp=sharing",
    title: "Share the campaign",
    metadata: "",
    metadata2: "/img/hiv+hep+c.jpg",
  },
  {
    type: "image",
    icon: "/img/hiv-icon.png",
    data: "/img/hiv-info.png",
    title: "Rates in New Jersey",
    metadata:
      "SSPs are associated with approximately 50% reduction in HIV & Hepatitis C incidence. ",
    metadata2:
      "When combined with medications that treat opioid dependence (also known as medication-assisted treatment) HIV and HCV transmission is reduced by more than two-thirds.<div className = 'source-1'><span>>></span> Source: CDC Summary of Information on The Safety and Effectiveness of Syringe Services Programs (SSPs)</div><div className = 'source-2'><span>>></span> Source: all above stats retrieved/calculated from State of New Jersey Department of Health/State of New Jersey Department of Health Overdose Data Dashboard </div>",
  },
  //Overdose
  {
    type: "video",
    data: "/vid/OVERDOSE.m4v",
    title: "Overdose and Prevention",
    metadata: "",
    metadata2: "/img/overdose_main_photo.jpg",
  },
  {
    type: "link",
    data: "/img/OVERDOSE+STAT.jpg",
    title: "Overdoses in New Jersey",
    metadata:
      'There were <span className = "stat-highlight">18,492</span>overdose deaths in the state of New Jersey between 2010 and 2019',
    metadata2: 
      `<span>>></span> SOURCE: 
        <a 
          target="_blank" 
          rel="noopener"
          href="https://ocsme.nj.gov/dashboard"
        >
          Suspected Drug Death Statistics Data Dashboard [New Jersey Office of the Chief State Medical Examiner]
        </a>`,
  },
  {
    type: "link",
    data: "/img/OVERDOSE+TESTIMONIAL.jpg",
    title: "Testimonial",
    metadata:
      `"The numbers don’t lie. Individuals who come to our syringe access program have less of a chance of overdosing.”`,
    metadata2: "—Eddie, Hyacinth AIDS Foundation",
  },
  {
    type: "external-link",
    data: "https://drive.google.com/drive/folders/1CAvK5MB2LCwfLXmtXk2Gx5E1ymq0i6ix?usp=sharing",
    title: "Share the campaign",
    metadata: "",
    metadata2: "/img/overdose+prevention.jpg",
  },
  {
    type: "image",
    icon: "/img/overdose-icon.png",
    data: "/img/overdose-info.png",
    title: "Rates in New Jersey",
    metadata: "More than 80% of naloxone reversals were carried out by PWUD",
    metadata2:
      "<div className = 'source-1'><span>>></span> Source: Office of the Chief State Medical Examiner (NJ) https://ocsme.nj.gov/dashboard</div>",
  },
  //Services
  {
    type: "video",
    data: "/vid/CONNECTION+TO+SERVICES.mp4",
    title: "Connection to Services",
    metadata: "",
    metadata2: "/img/connection+to+services+main+photo.jpg",
  },
  {
    type: "link",
    data: "/img/CONNECTION+STAT.jpg",
    title: "Access to Harm Reduction",
    metadata:
      `"People who access harm reduction programs are five times more likely to enter treatment for drug use and three times more likely to stop drug use impeding quality of life than those without access."`,
    metadata2:
    `<span>>></span> SOURCE: 
        <a 
          target="_blank" 
          rel="noopener"
          href="https://www.cdc.gov/ssp/syringe-services-programs-factsheet.html"
        >
          Syringe Services Programs (SSPs) Fact Sheet [CDC]
        </a>`,
  },
  {
    type: "link",
    data: "/img/CONNECTION+TESTIMONIAL.jpg",
    title: "Testimonial",
    metadata:
      "“We have great evidence that shows that somebody who participates in a syringe access program is actually more likely to enter into drug treatment.”",
    metadata2: "—Dr. Amesika Nyaku, Rutgers Institute for Health",
  },
  {
    type: "external-link",
    data: "https://drive.google.com/drive/folders/1CAvK5MB2LCwfLXmtXk2Gx5E1ymq0i6ix?usp=sharing",
    title: "Share the campaign",
    metadata: "",
    metadata2: "/img/connection+to+services.jpg",
  },
  {
    type: "image",
    icon: "/img/connections-icon.png",
    data: "/img/connection-info.png",
    title: "Harm Reduction by the Numbers",
    metadata:
      "Studies in Baltimore and New York City found no difference in crime rates between areas with and without syringe services programs.",
    metadata2:
      "<div className = 'source-1'><span>>></span> Source: 2018 CDC publication, Evidence-Based Strategies for Preventing Opioid Overdose: What’s Working in the United States</div><div className = 'source-2'><span>>></span> Source: CDC Syringe Services Programs Fact Sheet  </div>",
  },
  {
    type: "external-link",
    title: "Harm Reduction Centers",
    data: "https://www.nj.gov/health/hivstdtb/sap.shtml"
  },
  {
    type: "external-link",
    title: "Social Toolkit",
    data: "https://docs.google.com/document/d/1Wu756L4xff2PelOYXyPbTOLOa6fl0qR10qkXr9Blp7Y/edit"
  },
];

const mediaLinkUrl = "https://nj-hrc-project-media.s3.amazonaws.com/media";

const titlesList = [
  "How We<br /> Got Here",
  "Harm Reduction<br /> 101",
  "Viral Hepatitis and HIV",
  "Overdose and Prevention",
  "Connection To Services"
]

const blurbsList = [
  "Harm reduction works where the criminalization of drug use fails.",
  "Harm reduction works because it helps people make realistic, incremental changes.",
  "Syringe access prevents the spread of HIV and viral hepatitis.",
  "People who use drugs are on the frontline of overdose prevention.",
  "Syringe Access connects people to other stabilizing services.",
]

const colorsList = [
  "#CC4400",
  "#70EBCA",
  "#B999FF",
  "#FF925C",
  "#FFE4D6"
]

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
        background:
          "linear-gradient(115.66deg, #CC4400 -2%, rgba(196, 196, 196, 0) 50%",
      },
      video: "",
      sidebarHidden: true,
      nextData : {
        title: titlesList[this.props.id+1],
        id: (this.props.id+1),
        blurb: blurbsList[this.props.id+1],
        color: colorsList[this.props.id+1]
      }
    };
  }

  componentDidMount() {
    console.log(this.state.selectedItem);
    if (this.props.location.state) {
      this.setState({
        selectedItem: rawContent[this.props.location.state.data.id * 5],
      });
      this.setState({ title: this.props.location.state.data.title });
      this.setState({ id: this.props.location.state.data.id });
      this.setState({ blurb: this.props.location.state.data.blurb });
      this.setState({ video: document.getElementById("story-clip") });
      document.getElementsByClassName("story-title")[0].innerHTML =
        this.props.location.state.data.title;
      console.log(this.state.video);
      this.setState({
        gradient: {
          background:
            "linear-gradient(115.66deg, " +
            this.props.location.state.data.color +
            " -2%, rgba(196, 196, 196, 0) 50%",
        },
      });
      this.setState({
        nextData: {
          title: titlesList[parseInt(this.props.location.state.data.id)+1],
          id: (parseInt(this.props.location.state.data.id)+1),
          blurb: blurbsList[parseInt(this.props.location.state.data.id)+1],
          color: colorsList[parseInt(this.props.location.state.data.id)+1]
        }
      })
    } else {
      navigate("/stories-hub");
    }
    if (this.state.contentItems !== rawContent) {
      this.setState({ contentItems: rawContent });
    }
    this.setState({ source: this.state.selectedItem.metadata2 });
    console.log(this.state.source);
  }

  //< SideNavItem type = {rawContent[(this.state.id*5+4)].type} icon = {mediaLinkUrl+rawContent[(this.state.id*5+4)].data} data = {mediaLinkUrl+rawContent[(this.state.id*5+4)].data} title = {rawContent[(this.state.id*5+4)].title} metadata2 = {mediaLinkUrl+rawContent[(this.state.id*5+4)].metadata2} onClick={() => this.selectItem((this.state.id*5+4))} />

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.location.state &&
      this.state.title !== this.props.location.state.data.title
    ) {
      this.setState({ title: this.props.location.state.data.title });
      this.setState({ id: this.props.location.state.data.id });
      this.setState({ blurb: this.props.location.state.data.blurb });
      this.setState({
        nextData: {
          title: titlesList[parseInt(this.props.location.state.data.id)+1],
          id: (parseInt(this.props.location.state.data.id)+1),
          blurb: blurbsList[parseInt(this.props.location.state.data.id)+1],
          color: colorsList[parseInt(this.props.location.state.data.id)+1]
        }
      })
      this.setState({
        gradient: {
          background:
            "linear-gradient(115.66deg, " +
            this.props.location.state.data.color +
            " -2%, rgba(196, 196, 196, 0) 50%",
        },
      });
      document.getElementsByClassName("story-title")[0].innerHTML = this.props.location.state.data.title;
    }

    if (this.state.selectedItem !== prevState.selectedItem) {
      var dom = document.createElement("div");
      dom.innerHTML = this.state.selectedItem.metadata;
      this.setState({
        description:
          dom.innerHTML +
          "<div class = 'story-source'>" +
          this.state.source +
          "</div>",
      });
      console.log(this.state.selectedItem);
      this.state.selectedItem.type !== "video"
        ? this.setState({ contentClass: "story-content image-content" })
        : this.setState({ contentClass: "story-content video-content" });
    }
  }

  newPage = () => {
    console.log("new page")
    setTimeout(function() {
      document.getElementsByClassName("video-nav")[0].click()
    }, 100);
  }

  toggleSidebar = () => {
    var sidebar = document.getElementsByClassName("side-nav-container")[0];
    console.log("toggle")
    if(this.state.sidebarHidden) {
      console.log("show")
      sidebar.classList.remove("hide-mobile");
    } else {
      console.log("hide");
      sidebar.classList.add("hide-mobile");
    }

    this.setState({sidebarHidden: !this.state.sidebarHidden})
  }

  selectItem = (id) => {
    this.setState({ selectedItem: this.state.contentItems[id] });
    this.setState({ video: document.getElementById("story-clip") });
    console.log(this.state.selectedItem.metadata2);

    if (this.state.contentItems[id].metadata2 !== undefined) {
      this.setState({ source: this.state.contentItems[id].metadata2 });
    } else {
      this.setState({ source: "" });
    }
    console.log("link: " + mediaLinkUrl + this.state.selectedItem.data);
    this.setState({sidebarHidden: true})

    console.log("hide");
    document.getElementsByClassName("side-nav-container")[0].classList.add("hide-mobile");
  };

  render() {
    console.log(this.state)
    if (this.props.location.state) {
      var selectedItem = this.state.selectedItem;

      return (
        <div className="story-parent-container">
          <div className="selected-topic-container" style={this.state.gradient}>
            <div className="story-title"></div>
            {this.state.selectedItem.type !== "video" ? (
              <div
                className={this.state.contentClass}
                style={{
                  backgroundImage:
                    "url(" + mediaLinkUrl + this.state.selectedItem.data + ")",
                }}
              >
                {this.state.selectedItem.type !== "image" ? (
                  <div
                    className="story-copy"
                    dangerouslySetInnerHTML={{ __html: this.state.description }}
                  />
                ) : (
                  console.log("this is a video")
                )}

                {this.state.selectedItem.type == "video" ? (
                  <video id="story-clip" className="story-video-container">
                    <source
                      src={mediaLinkUrl + this.state.selectedItem.data}
                      type="video/mp4"
                      className="story-video"
                    />
                  </video>
                ) : (
                  console.log("not a video")
                )}
                {this.state.selectedItem.type !== "image" ? (
                  <InteractionLinks />
                ) : (
                  console.log("no share links for this one")
                )}
              </div>
            ) : (
              <div
                className={this.state.contentClass}
                style={{
                  backgroundImage:
                    "url(" +
                    mediaLinkUrl +
                    this.state.selectedItem.metadata2 +
                    ")",
                }}
              >
                {this.state.selectedItem.type !== "video" ? (
                  <div
                    className="story-copy"
                    dangerouslySetInnerHTML={{ __html: this.state.description }}
                  />
                ) : (
                  console.log("this is a video")
                )}
                {this.state.selectedItem.type == "video" ? (
                  <video
                    id="story-clip"
                    className="story-video-container hidden"
                  >
                    <source
                      src={mediaLinkUrl + this.state.selectedItem.data}
                      type="video/mp4"
                      className="story-video"
                    />
                  </video>
                ) : (
                  console.log("not a video")
                )}
                <InteractionLinks
                  type={this.state.selectedItem.type}
                  share={true}
                />
              </div>
            )}
            <Tagline size="small" position="extra-low" />
            <div className="contentBlurb">{this.state.blurb}</div>
          </div>
          <div className = "hamburger-container">
            <div className = "hamburger" onClick={() => this.toggleSidebar()} />
          </div>
          <div className="side-nav-container hide-mobile">
            <Link to="/stories-hub" className="back-link">
              <span>&#60;&#60; </span>Home
            </Link>
            {this.state.id !== 4 ? (
              <Link to="/story-page" onClick={() => this.newPage()} state = {{data: this.state.nextData}} className = "next-page-link">
                Next Story <span>>></span>
              </Link>
              ) : ""
            }
            <SideNavItem
              type={rawContent[this.state.id * 5 + 1].type}
              data={mediaLinkUrl + rawContent[this.state.id * 5 + 1].data}
              title={rawContent[this.state.id * 5 + 1].title}
              metadata2={
                mediaLinkUrl + rawContent[this.state.id * 5 + 1].metadata2
              }
              onClick={() => this.selectItem(this.state.id * 5 + 1)}
            />
            <SideNavItem
              type={rawContent[this.state.id * 5 + 2].type}
              data={mediaLinkUrl + rawContent[this.state.id * 5 + 2].data}
              title={rawContent[this.state.id * 5 + 2].title}
              metadata2={
                mediaLinkUrl + rawContent[this.state.id * 5 + 2].metadata2
              }
              onClick={() => this.selectItem(this.state.id * 5 + 2)}
            />
            <SideNavItem
              type={rawContent[this.state.id * 5].type}
              data={mediaLinkUrl + rawContent[this.state.id * 5].data}
              title={rawContent[this.state.id * 5].title}
              metadata2={mediaLinkUrl + rawContent[this.state.id * 5].metadata2}
              onClick={() => this.selectItem(this.state.id * 5)}
            />
            <div className = "divider" />
            <SideNavItem
              type={rawContent[25].type}
              data={rawContent[25].data}
              title={rawContent[25].title}
            />
            <SideNavItem
              type={rawContent[26].type}
              data={rawContent[26].data}
              title={rawContent[26].title}
            />

            <SocialLinks />
            <a href = "https://njharmreduction.org">
              <div className="logoBlurb">
                SPONSORED BY NEW JERSEY < br />
                HARM REDUCTION COALITION < br />
                AND VITAL STRATEGIES
              </div>
            </a>
          </div>

          <div className = "mobile-footer">
            <SocialLinks />
            <a href = "https://njharmreduction.org">
              <div className="logoBlurb">
                SPONSORED BY NEW JERSEY < br />
                HARM REDUCTION COALITION < br />
                AND VITAL STRATEGIES
              </div>
            </a>
          </div>
          
          <div className="mobile-modal">
            This site works best if you hold your device in landscape
            orientation.
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default IndividualStory;
