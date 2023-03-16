import React, { Component } from "react";

import Personal from "./form/personal";

class Form extends Component {
  render() {
    const { cv } = this.props;

    return (
      <div>
        <Personal personalInfo={cv.personalInfo}/>
      </div>  
    );
  }
}


export default Form;
