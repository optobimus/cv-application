import React, { Component } from "react";

import Personal from "./Personal";
import Practical from "./Practical";
import Educational from "./Educational";

class Form extends Component {
  render() {
    const { cv } = this.props;

    return (
      <div>
        <Personal personalInfo={cv.personal}/>
        <Practical experienceInfo={cv.experience}/>
        <Educational educationalInfo={cv.education}/>
      </div>  
    );
  }
}


export default Form;
