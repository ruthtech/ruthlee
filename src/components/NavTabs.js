import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/media/ruthtech.svg";
import "./assets/css/style.css";

function NavTabs() {
  return (
    <div>
      <ul className="nav nav-bar">
        <li className="col-12 col-sm-2 nav-item logo-block">
          <div>
            <a href="/ruthtech"><img src={Logo} alt="Ruth Lee Logo" className="logo"/></a>
          </div>
	  		  <div className="logo-text">
		  		  Get things done.
			    </div>
        </li>
        <li className="nav-item nav-tab">
          <Link
            to="/ruthtech"
            className={
              window.location.pathname === "/ruthtech" ? "nav-link active" : "nav-link"
            }>
            Home
          </Link>
        </li>
        <li className="nav-item nav-tab">
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }>
            Portfolio
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
