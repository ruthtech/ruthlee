import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/images/ruthtech.svg";
import "./assets/css/style.css";

function NavTabs() {
  return (
    <div>
      <ul className="nav nav-bar">
        <li className="col-12 col-sm-2 nav-item logo-block">
          <div>
            <a href="/"><img src={Logo} alt="Ruth Lee Logo" className="logo"/></a>
          </div>
	  		  <div className="logo-text">
		  		  Get things done.
			    </div>
        </li>
        <li className="nav-item nav-tab">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }>
            Home
          </Link>
        </li>
        <li className="nav-item nav-tab">
          <Link
            to="/about"
            className={
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }>
            About
          </Link>
        </li>
        <li className="nav-item nav-tab">
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
