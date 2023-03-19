import React, { Component } from "react";

import "../../styles/form.css"

import Personal from "./Personal";
import Practical from "./Practical";
import Educational from "./Educational";

class Form extends Component {
  render() {
    const { cv, onChangePersonal, onChangeExperience, onChangeEducation, onLoadExample, onReset } = this.props;

    return (
      <div className="inputForm">
        <Personal personalInfo={cv.personal} onChange={onChangePersonal}/>
        <Practical experienceInfo={cv.experience}/>
        <Educational educationalInfo={cv.education}/>
        <button type="button" className="exampleBtn" onClick={onLoadExample}>Load Example</button>
        <button type="button" className="resetBtn" onClick={onReset}>Reset</button>
      </div>  
    );
  }
}


export default Form;
