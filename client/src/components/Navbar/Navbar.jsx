import React from "react";
import "./Navbar.css";
//change
const Sidenav = () => {
  return (
    <nav className="navContainer">
      <a className="navLink" href="#">
        Inbox
      </a>
      <a className="navLink" href="#">
        Keywords
      </a>
      <a className="navLink" href="#">
        Settings
      </a>
    </nav>
  );
};

export default Sidenav;
