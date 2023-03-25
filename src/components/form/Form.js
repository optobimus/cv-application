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
      activeExp: null,
      activeEdu: null,
    }
    this.handleActiveExperience = this.handleActiveExperience.bind(this);
    this.handleActiveEducation = this.handleActiveEducation.bind(this);
  }

  handleActiveExperience(e) {
    const activeExp = e.dataset.id;
    this.setState({ activeExp });
  }

  handleActiveEducation(e) {
    const activeEdu = e.dataset.id;
    this.setState({ activeEdu });
  }

  componentDidMount() {
    const experienceBtns = document.querySelectorAll(".experience-header .nav-button");
    if (experienceBtns.length === 1) {
      this.setState({ activeExp: experienceBtns[0].dataset.id })
    }
    const educationBtns = document.querySelectorAll(".education-header .nav-button");
    if (educationBtns.length === 1) {
      this.setState({ activeEdu: educationBtns[0].dataset.id})
    }

  }

  

  render() {
    const { cv, onChangePersonal, onChangeExperience, onChangeEducation, onAddExperience, onAddEducation, onLoadExample, onReset, onPDF } = this.props;
    const { activeExp, activeEdu } = this.state;








    const experienceItems = cv.experience.map((experienceItem) => {
        if (activeExp === experienceItem.id) {
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
      if (activeEdu === educationItem.id) {
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
          <Formtitle title="Experience" className="experience-header-left" onClick={onAddExperience}/>
          <Multiple data={cv.experience} onClick={this.handleActiveExperience} activeID={activeExp}/>
        </div>
        {experienceItems}
        <div className="education-header">
          <Formtitle title="Education" className="education-header-left" onClick={onAddEducation}/>
          <Multiple data={cv.education} onClick={this.handleActiveEducation} activeID={activeEdu}/>
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
