import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function Home() {
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
              <p>ruthlee - write scalable, reliable, clean headless applications</p>

            <div className="mantitle">SYNOPSIS</div>
              <p>
                ruthlee SKILLS<br/>
                ruthlee PORTFOLIO<br/>
                ruthlee CONTACT<br/>
              </p>

            <div className="mantitle">DESCRIPTION</div>
              <p>ruthlee is a backend developer.</p>

              <p>
                Applications need to be able to handle the load, stand up to crazy network glitches,
                and fail gracefully. Instead of thinking that applications don't fail, understand that no one
                can predict everything, and that if an application runs long enough then the edge cases happen.
              </p>

              <p>
                Combine that with clean code and thorough testing to round out the package.
                Code isn't just written; it's maintained.
              </p>

            <div className="mantitle">AUTHOR</div>
              <p>Written by Ruth Lee</p>

            <div className="mantitle">REPORTING BUGS</div>
              <p>See CONTACT</p>

            <div className="mantitle">SEE ALSO</div>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech/ruthlee">https://github.com/ruthtech/ruthlee</a></li>
                <li><Link
                    to="/skills"
                    className={
                      window.location.pathname === "/skills"
                          ? "nav-link active"
                          : "nav-link"
                    }><b>ruthlee</b> (2)</Link>,
                  <Link
                    to="/portfolio"
                    className={
                      window.location.pathname === "/portfolio"
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

export default Home;
