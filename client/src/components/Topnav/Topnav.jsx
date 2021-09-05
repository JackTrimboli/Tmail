import { React, useState, useEffect } from "react";
import "./Topnav.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Topnav = () => {
  const [username, setUsername] = useState("username");
  const loadUsername = async () => {
    try {
      const res = await fetch("http://localhost:5000/inbox/user");
      const data = await res.text();
      console.log(data);
      // setUsername(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadUsername();
  }, []);

  return (
    <div>
      <nav className="Top-nav-container">
        <h1 className="logo">
          Tmail
          <MailOutlineIcon className="logo-icon" style={{ fontSize: 60 }} />
        </h1>
        <p className="welcome">Welcome, {username}</p>
      </nav>
      <hr className="line" />
    </div>
  );
};

export default Topnav;
