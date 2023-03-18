import React, { Component } from "react";

class ExperienceItem extends Component {
    render() {
        const { experienceItem } = this.props;

      return (
        <div>
            <div className="experienceDate">
                <h3>{experienceItem.startDate} - {experienceItem.endDate}</h3>
            </div>
            <div className="experienceDesc">
                <h3>{experienceItem.position}</h3>
                <p>{experienceItem.company}, {experienceItem.city}</p>
            </div>
        </div>  
      );
    }
}
  
  
export default ExperienceItem;
  