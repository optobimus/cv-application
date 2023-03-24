import React, { Component } from "react";
import uniqid from "uniqid"

import "../styles/main.css"

import CVPreview from "./cvPreview/CVPreview";
import exampleCV from "./utils/exampleCV";
import emptyCV from "./utils/emptyCV";
import Form from "./form/Form";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      cv: emptyCV
    }

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleLoadExample = this.handleLoadExample.bind(this);
    this.handlePDF = this.handlePDF.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChangePersonal(e) {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      this.handleChangeFile(e);
      return;
    }

    this.setState((prevState) => ({
      cv: {
        ...prevState.cv,
        personal: {
          ...prevState.cv.personal,
          [name]: value,
        },
      },
    }));
  }

  handleChangeFile(e) {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.setState((prevState) => ({
        cv: {
          ...prevState.cv,
          personal: {
            ...prevState.cv.personal,
            [name]: reader.result,
          },
        },
      }));
    };
    reader.readAsDataURL(file);
  }

  handleChangeExperience(e, id) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const newExperience = prevState.cv.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { cv: { ...prevState.cv, experience: [...newExperience] } };
    });
  }

  handleChangeEducation(e, id) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const newEducation = prevState.cv.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { cv: { ...prevState.cv, education: [...newEducation] } };
    });
  }

  handleAddExperience() {
    if (this.state.cv.experience.length < 5) {
      this.setState((prevState) => ({
        cv: {
          ...prevState.cv,
          experience: [
            ...prevState.cv.experience,
            {
              id: uniqid(),
              position: '',
              company: '',
              city: '',
              startDate: '',
              endDate: '',
            },
          ],
        },
      }));
    }
  }

  handleAddEducation() {
    console.log(this.state.cv);
    if (this.state.cv.education.length < 5) {
      this.setState((prevState) => ({
        cv: {
          ...prevState.cv,
          education: [
            ...prevState.cv.education,
            {
              id: uniqid(),
              university: '',
              city: '',
              degree: '',
              subject: '',
              startDate: '',
              endDate: '',
            },
          ],
        },
      }));
    }
  }

  handleLoadExample() {
    this.setState(() => ({
      cv: exampleCV
    }));
  }

  handleReset() {
    this.setState(() => ({
      cv: emptyCV,
    }));
  }

  handlePDF() {

  }

  render() {
    const { cv } = this.state;
    return (
      <div className="main">
        <Form 
          cv={cv}
          onChangePersonal={this.handleChangePersonal}
          onChangeExperience={this.handleChangeExperience}
          onChangeEducation={this.handleChangeEducation}
          onAddExperience={this.handleAddExperience}
          onAddEducation={this.handleAddEducation}
          onLoadExample={this.handleLoadExample}
          onPDF={this.handlePDF}
          onReset={this.handleReset}
        
        />
        <CVPreview cv={cv}/>
      </div>  
    );
  }
}
  
  
export default Main;
  