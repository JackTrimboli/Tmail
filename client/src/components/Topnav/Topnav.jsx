import { React, useContext } from "react";
import "./Topnav.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { myContext } from "../../Context";

const Topnav = () => {
  const userObj = useContext(myContext);
  console.log("In top nav: ", userObj);

  const getUser = () => {
    if (userObj) {
      return userObj.username;
    } else return "no user";
  };

  return (
    <div>
      <nav className="Top-nav-container">
        <h1 className="logo">
          Tmail
          <MailOutlineIcon className="logo-icon" style={{ fontSize: 60 }} />
        </h1>
        <p className="welcome">Welcome, {getUser()}</p>
      </nav>
      <hr className="line" />
    </div>
  );
};

export default Topnav;
