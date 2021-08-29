import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import InboxIcon from "@material-ui/icons/Inbox";
import "./Navbar.css";

//change
const Sidenav = () => {
  return (
    <nav className="nav-Container">
      <a className="nav-Link" href="#">
        <p className="nav-text">Inbox</p>
        <InboxIcon className="nav-icon" style={{ fontSize: 50 }} />
      </a>
      <a className="nav-Link" href="#">
        <p className="nav-text">Keywords</p>
        <ErrorOutlineIcon className="nav-icon" style={{ fontSize: 50 }} />
      </a>
      <a className="nav-Link" href="#">
        <p className="nav-text">Settings</p>
        <SettingsIcon className="nav-icon" style={{ fontSize: 50 }} />
      </a>
    </nav>
  );
};

export default Sidenav;
