import React from "react";
import "../assets/css/style.css";
import PrjImg1 from '../assets/media/voting-application.png';
import PrjImg0 from '../assets/media/dataengineering.png';

function Portfolio() {
  const projects = [
    {
      title: "PCDE-Activity-9.1",
      summary: "Jupyter Notebook project",
      skills: ['Markdown'],
      github: "https://github.com/ruthtech/PCDE-Activity-9.1",
      external_url: "https://ruthtech.github.io/PCDE-Activity-9.1/",
      colour: "bg-darkBlue",
      image: {PrjImg0},
      index: 0
    },
    {
      title: "Canada Votes Online", 
      summary: "Enable eligible voters to vote online. Simulate and view election results.", 
      skills: ['MongoDB', 'Mongoose', 'React', 'mapbox', 'Server (Node, Express)', 'Heroku', 'dotenv', 'loglevel', 'loglevel-plugin-remote', 'axios', 'Bootstrap', 'HTML', 'CSS'  ], 
      github: "https://github.com/ruthtech/voting-app", 
      external_url: "https://ruthtech.github.io/voting-app/",
      colour: "bg-darkBlue",
      image: {PrjImg1},
      index: 1
    }
  ];

  return (
    <div className="container-fluid">
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
        <span className="small">Logins to use in the demo:</span>
        <ul className="login">{props.project.logins.map( (login, index) => {
          return <li key={'login'+index}>{login.title}: <span className="login-literal">{login.userid}</span>, password: <span className="login-literal">{login.password}</span></li>
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
        <h5>{props.project.title}</h5>
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
                View code
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn portfolio-button"
              onClick={() => {window.location=props.project.external_url}}>
                View GitHub Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;