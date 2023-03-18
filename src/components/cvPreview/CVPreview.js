import React, { Component } from "react";
import "../../styles/preview.css"

import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

class CVPreview extends Component {
    render() {
      const { cv } = this.props;
      return (
        <div className="cv-preview">
          <Header firstName={cv.personal.firstName} lastName={cv.personal.lastName} title={cv.personal.title}/>
          <div className="main-preview">
            <Content personal={cv.personal} experience={cv.experience} education={cv.education}/>
            <Sidebar photo={cv.personal.photo} address={cv.personal.address} phoneNumber={cv.personal.phoneNumber} email={cv.personal.email}/>
          </div>
          </div>  
      );
    }
}
  
  
export default CVPreview;
  