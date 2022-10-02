import React from "react";

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
              <div className="typing-effect">man 2 ruthlee</div>
            </div>

            <div className="man">
              <div className="mantitle">RUTHLEE(2)</div>

              <div className="mantitle">NAME</div>
              <p>ruthlee - write scalable, reliable, clean headless applications</p>

              <div className="mantitle">SKILLS</div>
              <ul>
                <li><b>Languages/tools/frameworks</b>: Java, Spring Boot, JavaScript, Node.js, Express, Unix Bash scripting, Windows Batch scripting</li>
                <li><b>Testing</b>: JUnit, Mockito, JEST</li>
                <li><b>Database</b>: MongoDb, MySQL, NoSQL, SQL</li>
                <li><b>Streaming, Scaling</b>: Apache Kafka, IBM MQ, Autosys, Microsoft Azure</li>
                <li><b>Operating Systems</b>: Windows, Linux</li>
                <li><b>Tracking</b>: JIRA, Bugzilla, Trello</li>
                <li><b>Version control</b>: Git, BitBucket, CVS, proprietary</li>
                <li>CI/CD via proprietary software</li>
                <li><b>Code quality</b>: Veracode, Sonatype, clean code, automated tests</li>
                <li><b>Other</b>: Spring Cloud Configuration, REST, Agile (Scrum), SDLC (waterfall)</li>
              </ul>

              <div className="mantitle">SEE ALSO</div>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
                <li><b>ruthlee</b>(3), <b>ruthlee</b>(4)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
