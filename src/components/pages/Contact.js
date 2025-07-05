import React from "react";
import {Link} from "react-router-dom";

function Contact() {
  return (
      <div className="container-fluid">
        <div className="row home-row">
          <div className="col-12">
            <div className="typing">
              <div className="aquamarine">ruth@lee</div>
              <div className="white">:</div>
              <div className="blue">~</div>
              <div className="white">$</div>
              <div className="typing-effect">man 8 ruthlee</div>
            </div>

            <div className="man">
              <div className="mantitle">RUTHLEE(8)</div>

              <div className="mantitle">NAME</div>
              <p>ruthlee - write scalable, reliable, clean applications</p>

              <div className="mantitle">DESCRIPTION</div>
              <p>Contact Ruth Lee:</p>
              <ul>
                <li>Email: ruthlee@distantland.ca</li>
                <li>GitHub: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
              </ul>

              <div className="mantitle">SEE ALSO</div>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech/ruthlee">https://github.com/ruthtech/ruthlee</a></li>
                <li>
                    <Link
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
                    to="/aboutMe"
                    className={
                      window.location.pathname === "/aboutMe"
                          ? "nav-link active"
                          : "nav-link"
                    }><b>ruthlee</b> (7)</Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;