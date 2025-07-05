import React from "react";
import "../assets/css/style.css";
import PrjImg1 from '../assets/media/voting-application.png';

function Portfolio() {
  const projects = [
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
        })}
        </ul>
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