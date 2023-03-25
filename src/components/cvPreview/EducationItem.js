import React from "react";

function EducationItem(props) {
    const { educationItem } = props;

      return (
        <div className="education-preview">
            <div className="educationDate">
                <h4>{educationItem.startDate} - {educationItem.endDate}</h4>
            </div>
            <div className="experienceDesc">
                <h4>{educationItem.university}, {educationItem.city}</h4>
                <p>Degree: {educationItem.degree}</p>
                <p>Subject: {educationItem.subject}</p>
            </div>
        </div>  
      );
}
  
  
export default EducationItem;
  