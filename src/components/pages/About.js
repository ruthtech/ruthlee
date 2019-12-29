import React from "react";
import "../assets/css/style.css";
import "../assets/css/about.css";

function About() {
  return (
    <div className="container-fluid">
      <div className="row main">
        <div className="col-12 col-sm-4">
          <div className="colour-box bg-lightBlue">Write</div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="colour-box bg-mediumBlue">Organize</div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="colour-box bg-darkBlue">Code</div>
        </div>
      </div>
      <div className="row justify-content-center d-flex">
        <div className="col-12 col-sm-8">
          <div className="home box first">
            <h5 className="text-center mb-3">I get things done.</h5>
            <p>
              I've coded, tested, built, liaisoned, managed, project managed, and worked
              on teams that spanned companies and continents. Having just completed a bootcamp
              that taught me Full Stack Web Development, I will continue to learn new technologies
              and solve problems.
            </p>
            <p>
              I am returning to work after a 10 year career break. While on break I volunteered 
              at my children's school regularly. Some highlights include working on teams that 
              raised over $10K per school year and working with the TDSB to repair 
              and replace Kindergarten yards.
            </p>
          </div>
        </div>
      </div>
      <div className="row bottom-row">
        <SkillsCard skillSets={skillSets} />
      </div>
    </div>
  );
}


const skillSets = [
  {
    title: "Tests and Tools",
    skills: ["Git", "JUnit", "JEST", "Visual Code", "Eclipse"],
    skillColour: 'bg-lightBlue'
  },
  {
    title: "Soft skills",
    skills: ["Organized", "Reliable", "Problem solver", "Strong work ethic", "Thorough"],
    skillColour: 'bg-mediumBlue'
  },
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "SQL", "React", "Node"],
    skillColour: 'bg-darkBlue'
  }
];


function SkillsCard(props) {
  return (
    props.skillSets.map( (skillSet, index) => {
      return (
          <div className="col-12 col-sm-4" key={'skillSet'+index}>		
            <div className="card skills-card">
              <div className="card-header portfolio-header">
                <h6 className="skills-title">{skillSet.title}</h6>
              </div>
              <div className={"card-body skills-body " +  skillSet.skillColour}>
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



export default About;
