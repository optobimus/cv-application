import React, { Component } from "react";
import uniqid from "uniqid"

import "../styles/main.css"

import CVPreview from "./cvPreview/CVPreview";
import exampleCV from "./utils/exampleCV";
import emptyCV from "./utils/emptyCV";
import Form from "./form/Form";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
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

  handleDeleteExperience(id) {
    this.setState((prevState) => {
      const newExperience = prevState.cv.experience.filter((experienceItem) => {
        return experienceItem.id !== id;
      });
      return { cv: { ...prevState.cv, experience: newExperience } };
    });
  }

  handleDeleteEducation(id) {
    this.setState((prevState) => {
      const newEducation = prevState.cv.education.filter((educationItem) => {
        return educationItem.id !== id;
      });
      return { cv: { ...prevState.cv, education: newEducation } };
    });
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
    const cvPreview = document.querySelector('.cv-preview');
    if (!cvPreview) return;
  
    const options = {
      scale: 3, // increase the scale to increase the resolution
      useCORS: true, // use cross-origin resource sharing to load images
      allowTaint: true, // allow images to be loaded from other domains
      backgroundColor: null, // remove the background color
      windowWidth: cvPreview.offsetWidth, // set the canvas width to match the element width
      windowHeight: cvPreview.offsetHeight, // set the canvas height to match the element height
      logging: true, // enable logging for debugging
      removeContainer: true, // remove the canvas element after rendering
      onclone: (doc) => { // remove the rounded corners in the cloned element
        const element = doc.querySelector('.cv-preview');
        element.style.borderRadius = '0';
      },
    };
  
    // Use html2canvas to convert the .cv-preview div to a canvas
    html2canvas(cvPreview, options).then(canvas => {
      // Use jsPDF to generate a PDF from the canvas
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('cv.pdf');
    });
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
          onDeleteExperience={this.handleDeleteExperience}
          onDeleteEducation={this.handleDeleteEducation}
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
  