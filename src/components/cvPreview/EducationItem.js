import React, { Component } from "react";

class EducationItem extends Component {
    render() {
        const { educationItem } = this.props;

      return (
        <div>
            <div className="educationDate">
                <h3>{educationItem.startDate} - {educationItem.endDate}</h3>
            </div>
            <div className="experienceDesc">
                <h3>{educationItem.position}, {educationItem.city}</h3>
                <p>{educationItem.degree}</p>
                <p>{educationItem.subject}</p>
            </div>
        </div>  
      );
    }
}
  
  
export default EducationItem;
  