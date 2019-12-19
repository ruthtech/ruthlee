import React from "react";
import "../assets/css/style.css";

function Home() {
  const projects = [
    {
      title: "TrusÆL", 
      summary: "Real estate agents compete by bidding to represent sellers in transactions. Sellers compare bids and look at agent reviews when deciding who will get their business.", 
      skills: ['Server (Node, Express)', 'Heroku', 'dotenv', 'MySQL', 'Crypto-JS', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery', 'HTML', 'CSS'  ], 
      github: "https://github.com/BCButcher/TRUS-L", 
      heroku: "https://murmuring-cove-22350.herokuapp.com/",
      key: 1,
      colour: "bg-first"
    },
    {
      title: "TORONTO AREA RESOURCES", 
      summary: "Query the City of Toronto data to find out what resources exist and plot them on an interactive map.", 
      skills: ['MapBox', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'City of Toronto Open Data API'], 
      github: "https://github.com/ruthtech/torontoAreaResources", 
      heroku: "https://ruthtech.github.io/torontoAreaResources",
      key: 2,
      colour: "bg-medium"
    },
    {
      title: "EMPLOYEE TRACKER", 
      summary: "Command line tool that manages a company's employees using node, inquirer, and MySQL.", 
      skills: ['Node', 'Inquirer', 'JavaScript', 'MySQL' ], 
      github: "https://github.com/ruthtech/employee-tracker", 
      heroku: "https://github.com/ruthtech/employee-tracker/blob/master/employee-tracker.gif",
      key: 3,
      colour: "bg-dark"
    }
  ];

  const skillSets = [
    {
      title: "Programming",
      skills: ["JavaScript", "Java", "SQL", "React", "Node"]
    },
    {
      title: "Tests and Tools",
      skills: ["Git", "JUnit", "JEST", "Visual Code", "Eclipse"]
    },
    {
      title: "Soft skills",
      skills: ["Organized", "Reliable", "Problem solver", "Strong work ethic", "Thorough"]
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row display-flex">
        <ProjectCard projects={projects}/>
      </div>
      <div className="row bottom-row">
        <SkillsCard skillSets={skillSets} />
      </div>
    </div>
  );
}

function ProjectCard(props) {
  return (
    props.projects.map( (project, index) => {
    return (
      <div className="col-12 col-sm-4 mt-3" key={'project'+index}>
        <div className="card card-portfolio box h-100">
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

function SkillsCard(props) {
  return (
    props.skillSets.map( (skillSet, index) => {
      return (
          <div className="col-12 col-sm-4" key={'skillSet'+index}>		
            <div className="card skills-card">
              <h5 className="card-header">{skillSet.title}</h5>
              <div className="card-body">
                <ul className="card-text pl-3">
                  {skillSet.skills.map((skill, index2) => {
                    return <li key={'skill'+index2}>{skill}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
      )})
  );
}

export default Home;
