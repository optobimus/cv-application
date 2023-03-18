import React, { Component } from "react";

class Practical extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const { experienceInfo } = this.props;

    return (
      <div className="experience">
        <h3>Experience</h3>
        <form>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={experienceInfo.position}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experienceInfo.company}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={experienceInfo.city}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start date"
            value={experienceInfo.startDate}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End date"
            value={experienceInfo.endDate}
          />
        </form>
      </div>
    );
  }
}


export default Practical;
