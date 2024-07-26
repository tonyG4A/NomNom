import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import React from "react";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" style={linkStyle} onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/signup" style={linkStyle}>
              Signup
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  const navListStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const navItemStyle = {
    margin: "0 5px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <header style={headerStyle}>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  padding: "0 10px",
};

export default Nav;

