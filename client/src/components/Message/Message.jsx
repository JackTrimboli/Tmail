import React from "react";
import "./Message.css";
const message = () => {
  return (
    <a className="message-container">
      <span className="message title">Title</span>
      <span className="message subject">This is a subject.</span>
    </a>
  );
};

export default message;
