import React from "react";
import { add, sub, div } from "./Calculator";

function App() {
  return (
    <>
      <ul>
        <li>{add(40, 4)} </li>
        <li>{sub(40, 4)} </li>
        <li>{div(40, 4)} </li>
      </ul>
    </>
  );
}

export default App;
