// import logo from './logo.svg';
// news app API: Your API key is: e5dda8be0d3443e9ad8f940eda102843

import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} />
      </div>
    );
  }
}
