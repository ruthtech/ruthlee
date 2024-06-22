import React from "react";
import {Link} from "react-router-dom";

function Skills() {
  return (
      <div className="container-fluid">
        <div className="row home-row">
          <div className="col-12">
            <div className="typing">
              <div className="aquamarine">ruth@lee</div>
              <div className="white">:</div>
              <div className="blue">~</div>
              <div className="white">$</div>
              <div className="typing-effect">man ruthlee</div>
            </div>

            <div className="man">
              <div className="mantitle">RUTHLEE(1)</div>

              <div className="mantitle">NAME</div>
              <p>ruthlee - write scalable, reliable, clean applications</p>

              <div className="mantitle">SKILLS</div>
              <ul>
                <li><b>System Design</b>: microservices, distributed computing</li>
                <li><b>Monitoring</b>: Dynatrace, Sensu, OpenTelemetry</li>
                <li><b>Streaming, Scaling</b>: Apache Kafka, IBM MQ, F5, Autosys</li>
                <li><b>Languages/tools/frameworks</b>: Java, Spring Boot, JavaScript, Node.js, Express, Unix Bash scripting, Windows Batch scripting</li>
                <li><b>Testing</b>: JUnit, Mockito, JEST</li>
                <li><b>Database</b>: MongoDb, MySQL, SQL</li>
                <li><b>Cloud</b>: Microsoft Azure</li>
                <li><b>Containers</b>: Docker</li>
                <li><b>Operating Systems</b>: Windows, Linux</li>
                <li><b>Tracking</b>: JIRA, Bugzilla, Trello</li>
                <li><b>Version control</b>: Git, BitBucket, CVS, proprietary</li>
                <li>CI/CD via proprietary software</li>
                <li><b>Code quality</b>: Veracode, Sonatype, clean code, automated tests</li>
                <li><b>Other</b>: Spring Cloud Configuration, REST, Agile (Scrum), SDLC (waterfall), excellent written communication skills</li>
                <li><b>Bonus</b>: sense of humour</li>
              </ul>

              <div className="mantitle">SEE ALSO</div>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech/ruthlee">https://github.com/ruthtech/ruthlee</a></li>
                <li>
                <Link
                      to="/portfolio"
                      className={
                        window.location.pathname === "/portfolio"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>ruthlee</b> (2)</Link>,
                  <Link
                      to="/aboutMe"
                      className={
                        window.location.pathname === "/aboutMe"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>ruthlee</b> (3)</Link>,
                  <Link
                      to="/contact"
                      className={
                        window.location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>ruthlee</b> (4)</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
