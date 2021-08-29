import { React, useState, useEffect } from "react";
import Message from "../Message/Message";
import "./Inbox.css";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch("http://localhost:5000/apitest");
    const data = await res.text();
    setMessages(data);
    console.log(messages);
  };
  return (
    <div className="inbox-container">
      <Message title="test" subject={messages} />
    </div>
  );
};

export default Inbox;
