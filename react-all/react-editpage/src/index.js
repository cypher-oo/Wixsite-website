import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "priti";

ReactDOM.render(
  <h1 contentEditable="true"> My name is {name} </h1>,
  document.getElementById("root")
);
