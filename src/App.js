import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import favicon from "./static/favicon.png";

import "./styles/app.css"


class App extends Component {
  componentDidMount() {
    document.title = "CV Application";
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = favicon;
    head.appendChild(link);
  }
  render() {
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
