import React, { Component } from "react";

class Practical extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { id } = this.props;
    this.props.onChange(e, id);
  }

  
  render() {
    const { experienceInfo } = this.props;

    return (
      <div className="experience">
        <div className="experience-header">
          <h3>Experience</h3>
          <button>Add</button>
          <button>Delete</button>
        </div>
        <form>
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.handleChange}
            value={experienceInfo.position}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.handleChange}
            value={experienceInfo.company}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.handleChange}
            value={experienceInfo.city}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start date"
            onChange={this.handleChange}
            value={experienceInfo.startDate}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End date"
            onChange={this.handleChange}
            value={experienceInfo.endDate}
          />
        </form>
      </div>
    );
  }
}


export default Practical;
