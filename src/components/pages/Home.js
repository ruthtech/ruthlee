import React from "react";
import "../assets/css/style.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row home-row">
        <div className="col-12">
          <prompt>ruth@lee</prompt><prompt className="white">:</prompt><prompt className="blue">~</prompt><prompt className="white">$</prompt> man ruthlee

          <div className="man">
            <mantitle>RUTHLEE(1)</mantitle>

            <mantitle>NAME</mantitle>
              <p>ruthlee - write scalable, reliable, clean headless applications</p>

            <mantitle>SYNOPSIS</mantitle>
              <p>
                ruthlee SKILLS<br/>
                ruthlee PORTFOLIO<br/>
                ruthlee CONTACT<br/>
              </p>

            <mantitle>DESCRIPTION</mantitle>
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

            <mantitle>AUTHOR</mantitle>
              <p>Written by Ruth Lee</p>

            <mantitle>REPORTING BUGS</mantitle>
              <p>See CONTACT</p>

            <mantitle>SEE ALSO</mantitle>
              <ul className="no-bullets">
                <li>Full source code at: <a href="https://github.com/ruthtech">https://github.com/ruthtech</a></li>
                <li><man>ruthlee</man>(2), <man>ruthlee</man>(3), <man>ruthlee</man>(4)</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
