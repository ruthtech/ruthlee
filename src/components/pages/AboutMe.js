import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function AboutMe() {
  return (
    <div className="container-fluid">
      <div className="row home-row">
        <div className="col-12">
          <div className="typing">
            <div className="aquamarine">ruth@lee</div>
            <div className="white">:</div>
            <div className="blue">~</div>
            <div className="white">$</div>
            <div className="typing-effect">man 7 ruthlee</div>
          </div>

          <div className="man">
            <div className="mantitle">RUTHLEE(7)</div>

            <div className="mantitle">NAME</div>
              <p>ruthlee - write scalable, reliable, clean applications</p>

            <div className="mantitle">SYNOPSIS</div>
              <p>
                ruthlee <Link
                      to="/"
                      className={
                        window.location.pathname === "/"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>SKILLS</b></Link><br/>
                ruthlee <Link
                      to="/portfolio"
                      className={
                        window.location.pathname === "/portfolio"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>PORTFOLIO</b></Link><br/>
                ruthlee <Link
                      to="/contact"
                      className={
                        window.location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>CONTACT</b></Link><br/>
              </p>

            <div className="mantitle">DESCRIPTION</div>
              <p>ruthlee is a senior developer.</p>

              <p>
                Applications need to be able to handle the load, stand up to network glitches,
                and fail gracefully. If an application runs long enough then the edge cases happen.
              </p>

              <p>
                Clean code, thorough testing, technical documentation, mentoring and system design round out the package.
                Coffee is appreciated.
              </p>

            <div className="mantitle">AUTHOR</div>
              <p>Written by Ruth Lee</p>

            <div className="mantitle">REPORTING BUGS</div>
              <p>See CONTACT</p>

            <div className="mantitle">SEE ALSO</div>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech/ruthlee">https://github.com/ruthtech/ruthlee</a></li>
                <li><Link
                    to="/"
                    className={
                      window.location.pathname === "/"
                          ? "nav-link active"
                          : "nav-link"
                    }><b>ruthlee</b> (1)</Link>,
                  <Link
                    to="/portfolio"
                    className={
                      window.location.pathname === "/portfolio"
                          ? "nav-link active"
                          : "nav-link"
                    }><b>ruthlee</b> (4)</Link>,
                  <Link
                      to="/contact"
                      className={
                        window.location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                      }><b>ruthlee</b> (8)</Link></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;