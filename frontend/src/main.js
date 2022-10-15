import React from "react";
import ReactDom from "react-dom";

import "./style.css";
import "./app.css";

import logo from "./assets/images/logo-universal.png";
import { Greet } from "../wailsjs/go/main/App";

class App extends React.Component {
  render() {
    return (
      <div>
        <img id="logo" className="block" src={logo}></img>
        <div className="result" id="result">
          Please enter your name below 👇
        </div>
        <div className="input-box bg-red-900" id="input">
          <input className="input" id="name" type="text" autoComplete="off" />
          <button className="btn" onClick={Greet}>
            Greet
          </button>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
