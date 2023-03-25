import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import favicon from "./static/favicon.png";

import "./styles/app.css"


function App () {
  useEffect(() => {
    document.title = "CV Application";
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = favicon;
    head.appendChild(link);
  }, []);
  
  return (
    <div className="container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
