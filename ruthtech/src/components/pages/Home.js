import React from "react";
import "../assets/css/style.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row main border-bottom">
        <div className="col-12 col-sm-4">
          <div className="colour-box first">Write</div>
        </div>
        <div className="col-12 col-sm-4 p-0">
          <div className="colour-box second">Brief</div>
        </div>
        <div className="col-12 col-sm-4 p-0">
          <div className="colour-box third">Code</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
