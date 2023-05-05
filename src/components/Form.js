import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Form(prop) {
  const [text, setText] = useState("");
  // const [fWord, findWord] = useState("");
  // const [rWord, replaceWord] = useState("");

  // const handleFchange = (event) => {
  //   findWord(event.target.value);
  //   // console.log(fWord);
  // };
  // const handleRchange = (event) => {
  //   replaceWord(event.target.value);
  //   // console.log(rWord);
  // };

  // const handleRechange = () => {
  //   let newText = text.replaceAll(fWord, rWord);
  //   setText(newText);
  // };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Changed to UpperCase", "success");
  };
  const handleLclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Change to LowerCase", "success");
  };
  const handleCclick = () => {
    setText("");
    prop.showAlert("Cleared", "success");
  };
  // const handleSclick = () => {
  //   let newText = text.trim();
  //   setText(newText);
  // };
  return (
    <div>
      <h3 style={{ color: prop.mode === "light" ? "#042743" : "white" }}>
        {prop.heading}
      </h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor: prop.mode === "dark" ? "grey" : "white",
            color: prop.mode === "light" ? "#042743" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUclick}>
        Change to toUpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLclick}>
        Change to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCclick}>
        Clear
      </button>
      {/* <button className="btn btn-primary mx-2" onClick={handleSclick}>
        Remove Spaces
      </button> */}
      <div className="container my-3">
        <h2 style={{ color: prop.mode === "light" ? "#042743" : "white" }}>
          Your Text Summary
        </h2>
        <p style={{ color: prop.mode === "light" ? "#042743" : "white" }}>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
      {/* <div className="container">
        <h4> Find</h4>
        <input type="text" value={fWord} onChange={handleFchange} />
        <h4>Replace</h4>
        <input type="text" value={rWord} onChange={handleRchange} />
        <div>
          <button className="btn btn-success my-2" onClick={handleRechange}>
            Replace
          </button>
        </div> */}
    </div>
  );
}
Form.propTypes = {
  heading: PropTypes.string.isRequired,
};
Form.defaultProps = { heading: "exampleTextArea" };
