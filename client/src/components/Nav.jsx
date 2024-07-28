import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import React from "react";

function Nav() {
  <style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100..400&family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap');
</style>

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
    flexDirection: "column",
    textDecoration: "none",
  };

  const navItemStyle = {
    margin: "0 5px",
  };

  const linkStyle = {
    fontFamily: "Wittgenstein",
    color: "orange",
    fontSize: "20px",
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
  padding: "0 10px",
  backgroundColor: "black",
};

export default Nav;

