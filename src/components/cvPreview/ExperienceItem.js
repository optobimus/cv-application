import React from "react";

function ExperienceItem(props) {
    const { experienceItem } = props;

      return (
        <div className="experience-preview">
            <div className="experienceDate">
                <h4>{experienceItem.startDate} - {experienceItem.endDate}</h4>
            </div>
            <div className="experienceDesc">
                <h4>{experienceItem.position}</h4>
                <p>{experienceItem.company}, {experienceItem.city}</p>
            </div>
        </div>  
      );
}
  
  
export default ExperienceItem;
  