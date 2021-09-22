import { React, useState, useEffect } from "react";
import Message from "../Message/Message";
import "./Inbox.css";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div className="inbox-container">
      <Message title="test" subject={messages} />
    </div>
  );
};

export default Inbox;
