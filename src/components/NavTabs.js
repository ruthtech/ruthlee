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
              window.location.pathname === "/ruthlee" ? "nav-link active" : "nav-link"
            }>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
              to="/skills"
              className={
                window.location.pathname === "/skills"
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
