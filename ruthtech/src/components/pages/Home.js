import React, { useState } from "react";
import "../assets/css/style.css";
import PrjImg0 from '../assets/images/trusael-min.jpg';
import PrjImg1 from '../assets/images/toronto-min.jpg';
import PrjImg2 from '../assets/images/employee-tracker.mp4';

function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0); // Default to projects[0]

  const projects = [
    {
      title: "TrusÆL Online Marketplace", 
      summary: "Real estate agents compete by bidding to represent sellers in transactions. Sellers compare bids and look at agent reviews when deciding who will get their business.", 
      skills: ['Server (Node, Express)', 'Heroku', 'dotenv', 'MySQL', 'Crypto-JS', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery', 'HTML', 'CSS'  ], 
      github: "https://github.com/BCButcher/TRUS-L", 
      heroku: "https://murmuring-cove-22350.herokuapp.com/",
      key: 1,
      colour: "bg-lightBlue",
      image: {PrjImg0},
      imageName: "PrjImg0",
      logins: [
        {title: "Agent", userid: "abbybanksy@broker.ca", password: "password"},
        {title: "Seller", userid: "louiekritski@fake.com", password: "password"}
      ]
    },
    {
      title: "Toronto Area Resources", 
      summary: "Query the City of Toronto data to find out what resources exist and plot them on an interactive map.", 
      skills: ['MapBox', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'City of Toronto Open Data API'], 
      github: "https://github.com/ruthtech/torontoAreaResources", 
      heroku: "https://ruthtech.github.io/torontoAreaResources",
      key: 2,
      colour: "bg-mediumBlue",
      image: {PrjImg1}
    },
    {
      title: "Employee Tracker", 
      summary: "Command line tool that manages a company's employees using node, inquirer, and MySQL.", 
      skills: ['Node', 'Inquirer', 'JavaScript', 'MySQL' ], 
      github: "https://github.com/ruthtech/employee-tracker", 
      heroku: "https://github.com/ruthtech/employee-tracker/blob/master/employee-tracker.gif",
      key: 3,
      colour: "bg-darkBlue",
      image: {PrjImg2}
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row display-flex">
        <ProjectDetails project={projects[activeProjectIndex]} />
      </div>
      <div className="row display-flex bottom-row">
        <ProjectCard projects={projects}/>
      </div>
    </div>
  );
}

function ProjectDetails(props) {
  console.log(props);
  console.log(props.project.image);
  console.log(props.project.image.refs);
  console.log(props.refs);

  return (
    <div className="details definition d-flex">
      <div className="col-12 col-sm-5 details-text">
        <h2>{props.project.title}</h2>
        <p>{props.project.summary}</p>
        <ul className="project-skills">{props.project.skills.map( (skill, index) => {
          return <li key={'detail'+index}>{skill}</li>
        })}</ul>
        Logins to use in the demo:
        <ul className="login">{props.project.logins.map( (login, index) => {
          return <li key={'login'+index}>{login.title}: <span className="loginliteral">{login.userid}</span>, password: <span className="loginliteral">{login.password}</span></li>
        })}</ul>
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
      <div className="col-12 col-sm-7 details-image">
        {/* <img src={require(props.project.image)} alt={props.project.title} /> */}
        <img src={props.project.image.PrjImg0} alt={props.project.title} />
      </div>
    </div>
  );
}

function ProjectCard(props) {
  return (
    props.projects.map( (project, index) => {
    return (
      <div className="col-12 col-sm-4 mt-3" key={'project'+index}>
        <div className="card card-portfolio box">
          <div className="card-header portfolio-header">
            <h5 className="card-title">{project.title}</h5>
          </div>
          <div className={"card-body " + project.colour}>
            <p className="card-text">{project.summary}</p>
          </div>
          <div className={"card-buttons " + project.colour}>
            <button
              type="button"
              className="btn portfolio-button"
              onClick={() => {window.location=project.github}}
            >
              See the code
            </button>
            <button
              type="button"
              className="btn portfolio-button"
              onClick={() => {window.location=project.heroku}}
            >
              View demo
            </button>
          </div>
        </div>
      </div>
    )}));
}

export default Home;
