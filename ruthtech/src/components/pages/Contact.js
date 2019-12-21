import React from "react";
import Logo from '../assets/media/ruthtech.svg';


function Contact(props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center d-flex">
        <div className="col-12 col-sm-8">
          <div className="definition box">
            <h5 className="text-center mb-3">Contact Me</h5>
            <p>Send me an email at <span className="loginliteral">leeruths@gmail.com</span> or send a message
            through my <a href="https://linkedin.com/in/ruthsarahlee">LinkedIn</a>.
            Looking forward to hearing from you!</p>
            -- <img src={Logo} alt="Ruth Lee" width="15%" height="15%"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
