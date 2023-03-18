import React, { Component } from "react";

class Educational extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const { educationalInfo } = this.props;

    return (
      <div className="education">
        <h3>Education</h3>
        <form>
          <input
            type="text"
            name="university"
            placeholder="University"
            value={educationalInfo.university}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={educationalInfo.city}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={educationalInfo.degree}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={educationalInfo.subject}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start date"
            value={educationalInfo.startDate}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End date"
            value={educationalInfo.endDate}
          />
        </form>
        
      </div>  
    );
  }
}


export default Educational;
