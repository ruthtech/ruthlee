import React from "react";
import '../assets/css/animate.css';

function Contact(props) {
  return (
    <div className="container d-flex align-items-center h-100">
      <div className="row home-row">
        <div className="col-12 col-sm-8">
          <div className="contact">
            <h5>Contact Me</h5>
            <p>Send me an email at <span className="login-literal">leeruths@gmail.com</span> or message
            through my <a href="https://linkedin.com/in/ruthsarahlee">LinkedIn</a>.
            Looking forward to hearing from you!</p>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0, 150, 400, 400" preserveAspectRatio="xMaxYMax meet">
              <g id="Layer_1">
                <path className="vertical" d="M120.5,247.5 C91.805,287.648 63.458,330.584 41.5,374.5" />
                <path className="R" d="M10.5,237.5 C48.142,242.586 188.017,177.517 213,202.5 C260.436,249.936 92.581,294.5 66,294.5 C55.206,294.5 93.248,292.079 97.5,302 C107.129,324.468 94.693,362.341 125,371" />
                <path className="long" d="M174,301 C170.691,307.735 148.556,346.802 161.5,350.5 C184.682,357.123 207.114,308.386 204.5,311 C176.261,339.239 206.31,360.69 235,332 C260.369,306.631 279.617,278.01 301,249.5 C301.717,248.544 306.134,238.5 306.5,238.5 C307.281,238.5 294.588,256.707 284.5,274 C274.275,291.529 259.368,312.344 255,332 C247.45,365.973 286.753,267.126 268.5,258 C251.794,249.647 245.618,296.697 251.5,306.5 C267.006,332.343 323.815,262.64 330.5,255 C337.795,246.663 361.833,223.667 354,231.5 C331.113,254.387 319.003,280.163 300,305.5 C292.161,315.952 286.343,351.186 280.5,339.5 C278.577,335.654 308.518,296.513 316.5,302.5 C326.633,310.1 316.614,369.568 356.5,335"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
