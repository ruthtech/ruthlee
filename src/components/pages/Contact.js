import React from "react";

function Contact() {
  return (
      <div className="container-fluid">
        <div className="row home-row">
          <div className="col-12">
            <prompt>ruth@lee</prompt><prompt className="white">:</prompt><prompt className="blue">~</prompt><prompt className="white">$</prompt> man 4 ruthlee

            <div className="man">
              <mantitle>RUTHLEE(4)</mantitle>

              <mantitle>NAME</mantitle>
              <p>ruthlee - write scalable, reliable, clean headless applications</p>

              <mantitle>DESCRIPTION</mantitle>
              <p>Contact Ruth Lee:</p>
              <ul>
                <li>Email: leeruths@gmail.com</li>
                <li>GitHub: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
              </ul>

              <mantitle>SEE ALSO</mantitle>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
                <li><man>ruthlee</man>(2), <man>ruthlee</man>(3)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
