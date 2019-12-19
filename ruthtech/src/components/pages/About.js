import React from "react";
import "../assets/css/style.css";

function About() {
  return (
    <div className="container-fluid">
      <div className="row main">
        <div className="col-12 col-sm-4">
          <div className="colour-box first">Write</div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="colour-box second">Clear</div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="colour-box third">Code</div>
        </div>
      </div>
    <div className="row justify-content-center d-flex">
        <div className="col-12 col-sm-8">
          <div className="definition box bottom-row">
            <h5 className="text-center mb-3">I get things done.</h5>
            <p>
              While I stayed home to raise my children I volunteered at their
              school regularly. We submitted grant applications, 
              wrote social media for Council,
              served pizza lunch to over 730 kids, and worked with the TDSB to get
              Kindergarten yards repaired or replaced.
            </p>
            <p>
              I've coded, tested, built, liaisoned, managed, project managed, and worked
              on teams that spanned companies and continents. Having just completed a bootcamp
              that taught me Full Stack Web Development, I am interested in learning new technologies
              and solving problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
