import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/images/ruthtech.svg";
import "./assets/css/style.css";

function NavTabs() {
  return (
    <div>
      <ul className="nav justify-content-end border-top border-bottom border-white">
        <li className="nav-item mr-auto ml-3">
          <div className="logo">
            <a href="/"><img src={Logo} alt="Ruth Lee Logo" width="25%" height="25%"/></a>
          </div>
	  		  <div className="logo-text">
		  		  Organized. Reliable. Gets things done.
			    </div>
        </li>
        <li className="nav-item border-left border-white">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item border-left  border-white">
          <Link
            to="/about"
            className={
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item border-left border-white">
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item border-left border-white">
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
