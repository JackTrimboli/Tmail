import { React, useState, useContext, useEffect } from "react";
import "./Keywords.css";
import Keyworddisplay from "./Keyworddisplay";
import { myContext } from "../../Context";
import axios from "axios";

const Keywords = () => {
  const userObj = useContext(myContext);
  const [text, setText] = useState("");

  const getDisplay = () => {
    if (userObj) {
      let arr = [];
      for (let i = 0; i < userObj.keywords.length; i++) {
        arr.push(<Keyworddisplay label={userObj.keywords[i]} />);
      }
      return arr;
    } else {
      return "No Keywords Found";
    }
  };

  const handleAdd = (e) => {
    console.log(
      "Attemping to post keyword with: \nPhrase: " +
        text +
        "\nID: " +
        userObj._id
    );
    e.preventDefault();
    axios
      .post("http://localhost:5000/keywords", {
        phrase: text,
        userid: userObj._id,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setText("");
    window.location.reload();
  };

  return (
    <div className="keywords-container">
      <h2 className="keywords-header">Keywords</h2>
      <form onSubmit={handleAdd}>
        <input
          className="keywords-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="keywords-button-container">
          <button
            className="keywords-clear-btn"
            type="reset"
            onClick={() => setText("")}
          >
            {" "}
            Clear{" "}
          </button>
          <button
            className="keywords-add-btn"
            type="submit"
            onClick={(e) => handleAdd(e)}
          >
            {" "}
            Add{" "}
          </button>
        </div>
      </form>
      <div className="keywords-display">
        <h3 className="keywords-subheader">Current Keywords:</h3>
        {getDisplay()}
      </div>
    </div>
  );
};

export default Keywords;
