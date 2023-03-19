import React, { Component } from "react";

import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

class Content extends Component {
    render() {
        const { personal, experience, education } = this.props;

        const experienceItems = experience.map((experienceItem) => (
          <ExperienceItem experienceItem={experienceItem} key={experienceItem.id}/>
        ));

        const educationItems = education.map((educationItem) => (
          <EducationItem educationItem={educationItem} key={educationItem.id}/>
        ));


      return (
        <div className="content">
            <h3>Description</h3>
            <p>{personal.description}</p>
            <h3>Experience</h3>
            {experienceItems}
            <h3>Education</h3>
            {educationItems}
        </div>  
      );
    }
}
  
  
export default Content;
  