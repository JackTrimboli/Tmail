import { React, useState, useEffect } from "react";
import "./Topnav.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Topnav = () => {
  const [username, setUsername] = useState("username");
  useEffect(() => {
    fetchUsername();
  }, []);
  const fetchUsername = async () => {
    const res = await fetch("http://localhost:5000/user#");
    const data = await res.text();
    setUsername(data);
    console.log(data);
  };
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
