import React from "react";

function ProjectCard(props) {
  return (
    <div class="col-12 col-sm-4 equal">
      <div class="card mb-3 border-secondary box">
        <div class="card-header portfolio-header">
          <h5 class="card-title">{props.title}</h5>
        </div>
        <div class="card-body pb-0 text-white bg-success ">
          <p class="card-text">{props.summary}</p>
          <ul class="project-skills">
            {props.skills.map(skill => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
        <div class="card-text mt-auto p-3 text-white bg-success ">
          <button
            type="button"
            class="btn portfolio-button"
            onclick="window.location='{props.github}'"
          >
            See the code
          </button>
          <button
            type="button"
            class="btn portfolio-button"
            onclick="window.location='{props.heroku}'"
          >
            View live demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
