import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-root">
      <label htmlFor="logo" className="logo">
        js-Task
      </label>
      <nav className="nav-items">
        <ul>
          <li>
            <Link className="nav-link" to="">Features</Link>
          </li>
          <li>
            <Link className="nav-link" to="">Enterprise</Link>
          </li>
          <li>
            <Link className="nav-link" to="">Pricing</Link>
          </li>
          <li><Link className="nav-link btn" to='login'>Sign up</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
