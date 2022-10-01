import React from "react";

function Skills() {
  return (
      <div className="container-fluid">
        <div className="row home-row">
          <div className="col-12">
            <prompt>ruth@lee</prompt><prompt className="white">:</prompt><prompt className="blue">~</prompt><prompt className="white">$</prompt> man 2 ruthlee

            <div className="man">
              <mantitle>RUTHLEE(2)</mantitle>

              <mantitle>NAME</mantitle>
              <p>ruthlee - write scalable, reliable, clean headless applications</p>

              <mantitle>SKILLS</mantitle>
              <ul>
                <li><man>Languages/tools/frameworks</man>: Java, Spring Boot, JavaScript, Node.js, Express, Unix Bash scripting, Windows Batch scripting</li>
                <li><man>Testing</man>: JUnit, Mockito, JEST</li>
                <li><man>Database</man>: MongoDb, MySQL, NoSQL, SQL</li>
                <li><man>Streaming, Scaling</man>: Apache Kafka, IBM MQ, Autosys, Microsoft Azure</li>
                <li><man>Operating Systems</man>: Windows, Linux</li>
                <li><man>Tracking</man>: JIRA, Bugzilla, Trello</li>
                <li><man>Version control</man>: Git, BitBucket, CVS, proprietary</li>
                <li>CI/CD via proprietary software</li>
                <li><man>Code quality</man>: Veracode, Sonatype, clean code, automated tests</li>
                <li><man>Other</man>: Spring Cloud Configuration, REST, Agile (Scrum), SDLC (waterfall)</li>
              </ul>

              <mantitle>SEE ALSO</mantitle>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
                <li><man>ruthlee</man>(3), <man>ruthlee</man>(4)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
