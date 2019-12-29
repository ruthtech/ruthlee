import React from "react";
import "../assets/css/style.css";
import PrjImg0 from '../assets/media/trusael-min.jpg';
import PrjImg1 from '../assets/media/torontoarearesources-min.jpg';
import PrjImg2 from '../assets/media/employee-tracker-min.jpg';

function Portfolio() {
  const projects = [
    {
      title: "TrusÆL Online Marketplace", 
      summary: "Real estate agents compete by bidding to represent sellers in transactions. Sellers compare bids and look at agent reviews when deciding who will get their business.", 
      skills: ['Server (Node, Express)', 'Heroku', 'dotenv', 'MySQL', 'Crypto-JS', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery', 'HTML', 'CSS'  ], 
      github: "https://github.com/BCButcher/TRUS-L", 
      heroku: "https://murmuring-cove-22350.herokuapp.com/",
      colour: "bg-lightBlue",
      image: {PrjImg0},
      logins: [
        {title: "Agent", userid: "abbybanksy@broker.ca", password: "password"},
        {title: "Seller", userid: "louiekritski@fake.com", password: "password"}
      ],
      index: 0
    },
    {
      title: "Toronto Area Resources", 
      summary: "Query the City of Toronto data to find out what resources exist and plot them on an interactive map.", 
      skills: ['MapBox', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'City of Toronto Open Data API'], 
      github: "https://github.com/ruthtech/torontoAreaResources", 
      heroku: "https://ruthtech.github.io/torontoAreaResources",
      colour: "bg-mediumBlue",
      image: {PrjImg1},
      index: 1
    },
    {
      title: "Employee Tracker", 
      summary: "Command line tool that manages a company's employees: add employee, view departments, remove employee etc.", 
      skills: ['Node', 'Inquirer', 'JavaScript', 'MySQL' ], 
      github: "https://github.com/ruthtech/employee-tracker", 
      heroku: "https://github.com/ruthtech/employee-tracker/blob/master/employee-tracker.gif",
      colour: "bg-darkBlue",
      image: {PrjImg2},
      index: 2
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h6 className="mt-3">The projects on this page demonstrate a variety of roles: full stack, working with maps, and a command line application.</h6>
        </div>
      </div>
      <div className="row">
        {
        projects.map( (aProject, index) => {
          return <ProjectDetails key={'projectdetails'+index} project={aProject} />
        })
        }
      </div>
    </div>
  );
}

function ListLogins(props) {
  const loginDiv = () => {
    if(props.project.logins !== undefined) {
      return (
      <div>
        <span>Logins to use in the demo:</span>
        <ul className="login">{props.project.logins.map( (login, index) => {
          return <li key={'login'+index}>{login.title}: <span className="loginliteral">{login.userid}</span>, password: <span className="loginliteral">{login.password}</span></li>
        })}</ul>
      </div>
      );
    }
  };

  return (
    <div>{loginDiv()}</div>
  );
}

function ProjectDetails(props) {
  let imageName = "PrjImg" + props.project.index;

  return (
    <div className="details definition details-flex">
      <div className="col-12 col-sm-7 details-image-col">
        <img src={props.project.image[imageName]} alt={props.project.title} className="details-image"/>
      </div>
      <div className="col-12 col-sm-5 details-text">
        <h2>{props.project.title}</h2>
        <p>{props.project.summary}</p>
        <ul className="project-skills">{props.project.skills.map( (skill, index) => {
          return <li key={'detail'+index}>{skill}</li>
        })}</ul>
        <ListLogins project={props.project}/>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn portfolio-button"
              onClick={() => {window.location=props.project.github}}>
                See the code
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn portfolio-button"
              onClick={() => {window.location=props.project.heroku}}>
                View demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
