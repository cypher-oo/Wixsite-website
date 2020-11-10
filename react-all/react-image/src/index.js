import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "priti";
const img1 = "https://picsum.photos/200/300?grayscale";
const img2 = "https://picsum.photos/250/300?grayscale";
const img3 = "https://picsum.photos/300/300?grayscale";
const links = "https://www.apple.com/in/";

//.heading{
//color: #fa9191;
//text-align:center;
//text-transform: capitalize;
//font-weight: bold;
//text-shadow: 0px 2px 4px #ffe9c5;
//margin: 70px 0;
//font-family: 'Josefin Sans', sans-serif;
//}
const heading = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "70px 0",
  fontFamily: '"Josefin Sans", sans-serif'
};

ReactDOM.render(
  <>
    <h1 style={heading}> My name Is {name} </h1>,
    <div className="img_div">
      <img src={img1} alt="randomImages" />
      <img src={img2} alt="randomImages" />
      <a href={links} target="_apple">
        <img src={img3} alt="randomImages" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
