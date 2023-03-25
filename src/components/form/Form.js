import React, { useState, useEffect } from "react";

import "../../styles/form.css"

import Personal from "./Personal";
import Practical from "./Practical";
import Educational from "./Educational";
import Formtitle from "./Formtitle";
import Multiple from "./Multiple";

const Form = ({ cv, onChangePersonal, onChangeExperience, onChangeEducation, onAddExperience, onAddEducation, onDeleteExperience, onDeleteEducation, onLoadExample, onReset, onPDF }) => {

  const [activeExp, setActiveExp] = useState(null);
  const [activeEdu, setActiveEdu] = useState(null);

  const handleActiveExperience = (e) => {
    const activeExp = e.dataset.id;
    setActiveExp(activeExp);
  }

  const handleActiveEducation = (e) => {
    const activeEdu = e.dataset.id;
    setActiveEdu(activeEdu);
  }

  const handleDeleteExperienceClass = (id) => {
    let position = 0;
    const experienceBtns = Array.from(document.querySelectorAll(".experience-header .nav-button"));
    experienceBtns.forEach((item) => {
      if (item.dataset.id === id) {
        position = experienceBtns.indexOf(item);
      }
    })
    if (position === 0) {
      setActiveExp(experienceBtns[1].dataset.id);
    } else {
      setActiveExp(experienceBtns[position - 1].dataset.id)
    }
    onDeleteExperience(id);
  }

  const handleDeleteEducationClass = (id) => {
    let position = 0;
    const educationBtns = Array.from(document.querySelectorAll(".education-header .nav-button"));
    educationBtns.forEach((item) => {
      if (item.dataset.id === id) {
        position = educationBtns.indexOf(item);
      }
    })
    if (position === 0) {
      setActiveEdu(educationBtns[1].dataset.id)
    } else {
      setActiveEdu(educationBtns[position - 1].dataset.id)
    }
    onDeleteEducation(id);
  }

  useEffect(() => {
    setActiveItems();
  }, []);

  useEffect(() => {
    setActiveItems();
  }, [activeEdu, activeExp]);

  const setActiveItems = () => {
    const experienceBtns = document.querySelectorAll(".experience-header .nav-button");
    const educationBtns = document.querySelectorAll(".education-header .nav-button");

    if (experienceBtns.length === 1) {
      setActiveExp(experienceBtns[0].dataset.id);
    }

    if (educationBtns.length === 1) {
      setActiveEdu(educationBtns[0].dataset.id);
    }
  }

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
        <Formtitle 
          title="Experience" 
          className="experience-header-left" 
          onClickAdd={onAddExperience} 
          onClickDelete={handleDeleteExperienceClass}
          id = {activeExp}
        />
        <Multiple data={cv.experience} onClick={handleActiveExperience} activeID={activeExp}/>
      </div>
      {experienceItems}
      <div className="education-header">
        <Formtitle 
          title="Education" 
          className="education-header-left" 
          onClickAdd={onAddEducation}
          onClickDelete={handleDeleteEducationClass}
          id = {activeEdu}
        />
        <Multiple data={cv.education} onClick={handleActiveEducation} activeID={activeEdu}/>
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

export default Form;


// 167