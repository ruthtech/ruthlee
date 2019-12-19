import React from "react";
import ProjectCard from "./ProjectCard";


function Portfolio() {
  const projects = [
    {
      title: "TrusÆL", 
      summary: "TrusÆL is an online marketplace where real estate agents compete against each other bidding to represent sellers in transactions. Users can compare bids and look at agent reviews when deciding who will get their business.", 
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery', 'Created a server (Node, Express)', 'Deployment to Heroku', 'dotenv', 'MySQL', 'Crypto-JS'], 
      github: "https://github.com/BCButcher/TRUS-L", 
      heroku: "https://murmuring-cove-22350.herokuapp.com/"},
    {
      title: "TORONTO AREA RESOURCES", 
      summary: "Query the City of Toronto data to find out what resources exist and plot them on an interactive map.", 
      skills: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'MapBox', 'City of Toronto Open Data API'], 
      github: "https://github.com/ruthtech/torontoAreaResources", 
      heroku: "https://ruthtech.github.io/torontoAreaResources"
    },
    {
      title: "EMPLOYEE TRACKER", 
      summary: "Command line tool that manages a company's employees using node, inquirer, and MySQL.", 
      skills: ['Node', 'Inquirer', 'JavaScript', 'MySQL' ], 
      github: "https://github.com/ruthtech/employee-tracker", 
      heroku: "https://github.com/ruthtech/employee-tracker/blob/master/employee-tracker.gif"
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <ProjectCard projects={projects}/>
      </div>
    </div>
  );
}

export default Portfolio;
