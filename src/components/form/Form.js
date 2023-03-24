import React, { Component } from "react";

import "../../styles/form.css"

import Personal from "./Personal";
import Practical from "./Practical";
import Educational from "./Educational";
import Formtitle from "./Formtitle";
import Multiple from "./Multiple";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const activeID = e.target.dataset.id;
    this.setState({ activeID });
  }

  render() {
    const { cv, onChangePersonal, onChangeExperience, onChangeEducation, onAddExperience, onLoadExample, onReset, onPDF } = this.props;
    const { activeID } = this.state;

    const experienceItems = cv.experience.map((experienceItem) => {
        if (activeID === experienceItem.id) {
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
          <Multiple data={cv.experience} onClick={this.handleClick} activeID={activeID}/>
        </div>
        {experienceItems}
        <div className="education-header">
          <Formtitle title="Education" className="education-header-left"/>
          <Multiple data={cv.education} onClick={this.handleClick} activeID={activeID}/>
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
