import React from "react";

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
              <div className="typing-effect">man 4 ruthlee</div>
            </div>

            <div className="man">
              <div className="mantitle">RUTHLEE(4)</div>

              <div className="mantitle">NAME</div>
              <p>ruthlee - write scalable, reliable, clean headless applications</p>

              <div className="mantitle">DESCRIPTION</div>
              <p>Contact Ruth Lee:</p>
              <ul>
                <li>Email: leeruths@gmail.com</li>
                <li>GitHub: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
              </ul>

              <div className="mantitle">SEE ALSO</div>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
                <li><b>ruthlee</b>(2), <b>ruthlee</b>(3)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
