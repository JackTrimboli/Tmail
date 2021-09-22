import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Keyworddisplay.css";

const Keyworddisplay = () => {
  return (
    <div className="display-container">
      <span className="display-label"> Test keyword display </span>
      <button className="display-delete">
        <DeleteIcon className="delete-icon" />
      </button>
    </div>
  );
};

export default Keyworddisplay;
