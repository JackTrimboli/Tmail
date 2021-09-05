import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import("./Landing.css");
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="greeting-container">
        <span className="landing-logo">
          TMail
          <MailOutlineIcon
            className="landing-logo-icon"
            style={{ fontSize: 60 }}
          />
        </span>
        <h2 className="landing-header">Welcome to TMail</h2>

        <span className="landing-subheader">
          Sign in with google to get started
        </span>
        <a className="login-btn" href="http://localhost:5000/auth">
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default Landing;
