import React, { Component } from "react";

import "../../styles/form.css"

import Personal from "./Personal";
import Practical from "./Practical";
import Educational from "./Educational";
import Formtitle from "./Formtitle";
import Multiple from "./Multiple";

class Form extends Component {
  constructor() {
    super();
    this.handleChangeActiveExperience = this.handleChangeActiveExperience.bind(this);
  }

  handleChangeActiveExperience(e) {
    const buttons = document.querySelectorAll(".experience-header button");
    buttons.forEach(button => {
      button.classList.remove("active");
    })
    console.log(e.target);
    e.target.classList.add("active");
  }

  handleChangeActiveEducation() {

}

  render() {
    const { cv, onChangePersonal, onChangeExperience, onChangeEducation, onAddExperience, onLoadExample, onReset, onPDF } = this.props;

    const experienceItems = cv.experience.map((experienceItem) => {
      const activeItem = document.querySelector(".experience-header .active");
      console.log(activeItem);
        if (activeItem?.dataset.id === experienceItem.id) {

          console.log(activeItem.dataset.id);
            return <Practical 
              key={experienceItem.id}
              experienceInfo={experienceItem}
              onChange={onChangeExperience}
              id={experienceItem.id}
            />
          }
      
      return null;
    });

    const educationItems = cv.education.map((educationItem) => {
      const activeItem = document.querySelector(".active");
      if (activeItem !== null && activeItem.dataset.id === educationItem.id) {
        return <Educational 
          key={educationItem.id}
          educationalInfo={educationItem}
          onChange={onChangeEducation}
          id={educationItem.id}
        />
      }
      return null;

    });


    return (
      <div className="inputForm">
        <Personal personalInfo={cv.personal} onChange={onChangePersonal}/>
        <div className="experience-header">
          <Formtitle title="Experience" className="experience-header-left" onAddExperience={onAddExperience}/>
          <Multiple data={cv.experience} onClick={this.handleChangeActiveExperience}/>
        </div>
        {experienceItems}
        <div className="education-header">
          <Formtitle title="Education" className="education-header-left"/>
          <Multiple data={cv.education} onClick={this.handleChangeActiveEducation}/>
        </div>
        {educationItems}
        <div className="buttons-container">
          <button type="button" className="pdf-button" onClick={onPDF}>Generate PDF</button>
          <button type="button" className="example-button" onClick={onLoadExample}>Load Example</button>
          <button type="button" className="reset-button" onClick={onReset}>Reset</button>
        </div>
        </div>  
    );
  }
}


export default Form;
