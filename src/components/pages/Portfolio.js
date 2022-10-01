import React from "react";
import "../assets/css/style.css";
import PrjImg0 from '../assets/media/voting-application.png';
import PrjImg1 from '../assets/media/trusael-min.jpg';
import PrjImg2 from '../assets/media/employee-tracker-min.jpg';

function Portfolio() {
  const projects = [
    {
      title: "Canada Votes Online", 
      summary: "Enable eligible voters to vote online. Simulate and view election results.", 
      skills: ['MongoDB', 'Mongoose', 'React', 'mapbox', 'Server (Node, Express)', 'Heroku', 'dotenv', 'loglevel', 'loglevel-plugin-remote', 'axios', 'Bootstrap', 'HTML', 'CSS'  ], 
      github: "https://github.com/ruthtech/voting-app", 
      heroku: "https://arcane-mountain-21933.herokuapp.com/",
      colour: "bg-darkBlue",
      image: {PrjImg0},
      logins: [
        {title: "Admin", userid: "admin", password: "admin"},
        {title: "Voter", userid: "happyfrog374", password: "technics"}
      ],
      index: 0
    },
    {
      title: "TrusÆL Online Marketplace", 
      summary: "Real estate agents compete by bidding to represent sellers in transactions. Sellers compare bids and look at agent reviews when deciding who will get their business.", 
      skills: ['Server (Node, Express)', 'Heroku', 'dotenv', 'MySQL', 'Crypto-JS', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery', 'HTML', 'CSS'  ], 
      github: "https://github.com/BCButcher/TRUS-L", 
      heroku: "https://murmuring-cove-22350.herokuapp.com/",
      colour: "bg-lightBlue",
      image: {PrjImg1},
      logins: [
        {title: "Agent", userid: "abbybanksy@broker.ca", password: "password"},
        {title: "Seller", userid: "louiekritski@fake.com", password: "password"}
      ],
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
