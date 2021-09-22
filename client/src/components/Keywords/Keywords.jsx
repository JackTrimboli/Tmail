import React from "react";
import "./Keywords.css";
import "./Keyworddisplay";
import Keyworddisplay from "./Keyworddisplay";
const Keywords = () => {
  return (
    <div className="keywords-container">
      <h2 className="keywords-header">Keywords</h2>
      <form>
        <input className="keywords-input" TextMode="multiline" />
        <div className="keywords-button-container">
          <button className="keywords-clear-btn"> Clear </button>
          <button className="keywords-add-btn"> Add </button>
        </div>
      </form>
      <div className="keywords-display">
        <h3 className="keywords-subheader">Current Keywords:</h3>
        <Keyworddisplay />
      </div>
    </div>
  );
};

export default Keywords;
