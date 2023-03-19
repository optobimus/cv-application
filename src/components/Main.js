import React, { Component } from "react";

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
    this.handleLoadExample = this.handleLoadExample.bind(this);
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


  handleLoadExample = () => {
    // this.setState({
    //   cv: exampleCV
    // })
    console.log(exampleCV);
  }

  render() {
    const { cv } = this.state;
    return (
      <div className="main">
        <Form 
          cv={cv}
          onChangePersonal={this.handleChangePersonal}
          onChangeExperience={this.handleChangeExperience}
          onLoadExample={this.handleLoadExample}
        
        />
        <CVPreview cv={cv}/>
      </div>  
    );
  }
}
  
  
export default Main;
  