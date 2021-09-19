// import the react and reactdom libraries

import React from "react";
import ReactDOM from "react-dom";

// create a react component

function getButtonText() {
  return "click on me ";
}

const App = () => {
  const buttonText = "click me !";

  const btnText = { text: "click react" };

  const style = { backgroundColor: "yellow" };

  return (
    <div>
      <label className="lable" htmlFor="name">
        Enter name :{" "}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "red" }}>
        {" "}
        {buttonText}{" "}
      </button>
      <button style={{ backgroundColor: "green", marginLeft: "10px " }}>
        {getButtonText()}{" "}
      </button>

      <button style={style}> {btnText.text} </button>
    </div>
  );
};

// take the react component and show it on screen

ReactDOM.render(<App />, document.querySelector("#root"));
