import React from "react";
import "./Navbar.css";
//change
const Sidenav = () => {
  return (
    <nav className="Nav-Container">
      <a className="Nav-Link" href="#">
        Inbox
      </a>
      <a className="Nav-Link" href="#">
        Keywords
      </a>
      <a className="Nav-Link" href="#">
        Settings
      </a>
    </nav>
  );
};

export default Sidenav;
