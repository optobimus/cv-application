import React, { Component } from "react";

import "../../styles/form.css"

import Personal from "./Personal";
import Practical from "./Practical";
import Educational from "./Educational";

class Form extends Component {
  render() {
    const { cv, onChangePersonal, onChangeExperience, onChangeEducation, onLoadExample, onReset } = this.props;

    const experienceItems = cv.experience.map((experienceItem) => (
      <Practical 
        key={experienceItem.id}
        experienceInfo={experienceItem}
        onChange={onChangeExperience}
        id={experienceItem.id}
      />
    ));

    const educationItems = cv.education.map((educationItem) => (
      <Educational 
        key={educationItem.id}
        educationalInfo={educationItem}
        onChange={onChangeEducation}
        id={educationItem.id}
      />
    ));

    return (
      <div className="inputForm">
        <Personal personalInfo={cv.personal} onChange={onChangePersonal}/>
        {experienceItems}
        {educationItems}
        <button type="button" className="exampleBtn" onClick={onLoadExample}>Load Example</button>
        <button type="button" className="resetBtn" onClick={onReset}>Reset</button>
      </div>  
    );
  }
}


export default Form;
