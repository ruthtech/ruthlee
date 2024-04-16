import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";

function NavTabs() {
  return (
    <div>
      <ul className="nav nav-bar">
        <li className="nav-item">
          <Link
              to="/ruthlee"
              className={
                window.location.pathname === "/ruthlee"
                    ? "nav-link active"
                    : "nav-link"
              }>
            Skills
          </Link>
        </li>
        <li className="nav-item">
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
        <li className="nav-item">
          <Link
            to="/aboutMe"
            className={
              window.location.pathname === "/aboutMe"
               ? "nav-link active" 
               : "nav-link"
            }>
            AboutMe
          </Link>
        </li>
        <li className="nav-item">
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
