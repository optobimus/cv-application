import React, { Component } from "react";


class Educational extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { id } = this.props;
    this.props.onChange(e, id);
  }
  
  render() {
    const { educationalInfo, id } = this.props;

    return (
      <div className="education">
        <form>
          <input
            type="text"
            name="university"
            placeholder="University"
            onChange={this.handleChange}
            value={educationalInfo.university}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.handleChange}
            value={educationalInfo.city}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={this.handleChange}
            value={educationalInfo.degree}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={this.handleChange}
            value={educationalInfo.subject}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start date"
            onChange={this.handleChange}
            value={educationalInfo.startDate}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End date"
            onChange={this.handleChange}
            value={educationalInfo.endDate}
          />
        </form>
        
      </div>  
    );
  }
}


export default Educational;
