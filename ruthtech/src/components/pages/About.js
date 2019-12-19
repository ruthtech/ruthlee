import React from "react";
import "../assets/css/style.css";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col definition-header d-flex justify-content-center">
          <div className="definition">
            <h3>Code (definition)</h3>
            <h5>Caffeinated Organism Does Everything</h5>
          </div>
          <div className="definition border-left border-secondary">
            <h5>I get things done.</h5>
            <p>
              While I stayed home to raise my children I volunteered at their
              school regularly. Grant applications, social media for Council,
              pizza lunch for 730+ kids, and Kindergarten yards were
              repaired/replaced with my assistance.
            </p>
            <p>
              I've worked in or with C, C++, Java, XML, XSLT, Ant, CVS, Eclipse,
              Unix make files, JUnit, worked with translators for translation
              testing, worked with JAWS for accessibility testing, managed
              software development teams, project managed two Eclipse projects
              (both archived now). I've just completed a bootcamp
              that taught me Full Stack Web Development 
              (JavaScript, jQuery, Node, Express, React, MySQL, MongoDB, Mongoose).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
