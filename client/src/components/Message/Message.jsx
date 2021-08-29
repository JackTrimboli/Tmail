import React from "react";
import "./Message.css";
const message = (props) => {
  return (
    <a className="message-container">
      <span className="message title">{props.title}</span>
      <span className="message subject">{props.subject}</span>
    </a>
  );
};

export default message;
