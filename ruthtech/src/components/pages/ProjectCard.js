import React from "react";

function ProjectCard(props) {
  console.log(props);

  return (
    props.projects.map( (project) => {
    return (
      <div className="col-12 col-sm-4 ">
        <div className="card mb-3 border-secondary box">
          <div className="card-header portfolio-header">
            <h5 className="card-title">{project.title}</h5>
          </div>
          <div className="card-body pb-0 text-white bg-medium ">
            <p className="card-text">{project.summary}</p>
            <ul className="project-skills">
              {project.skills.map(skill => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="card-text mt-auto p-3 text-white bg-medium ">
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
              View live demo
            </button>
          </div>
        </div>
      </div>
    )}));
}

export default ProjectCard;
