import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import "./Keyworddisplay.css";
import { myContext } from "../../Context";

const Keyworddisplay = (props) => {
  const userObj = useContext(myContext);
  const handleDelete = (e) => {
    console.log("Handler function fired");
    e.preventDefault();
    axios
      .delete("http://localhost:5000/keywords", {
        data: { phrase: props.label, userid: userObj._id },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <div className="display-container">
      <span className="display-label"> {props.label} </span>
      <button className="display-delete" onClick={(e) => handleDelete(e)}>
        <DeleteIcon className="delete-icon" />
      </button>
    </div>
  );
};

export default Keyworddisplay;
