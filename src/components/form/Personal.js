import React, { Component } from "react";

import "../../styles/personal.css"

class Personal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div className="personal">
          <h3>Personal Information</h3>
          <form>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={personalInfo.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={personalInfo.lastName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={personalInfo.title}
              onChange={this.handleChange}
            />
            <label className="custom-file-upload">
              <input
                type="file"
                name="photo"
                placeholder="Personal Photo"
                onChange={this.handleChange}
              />
            </label>
              
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={personalInfo.address}
              onChange={this.handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={personalInfo.phoneNumber}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={personalInfo.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={personalInfo.description}
              onChange={this.handleChange}
            />
          </form>
      </div>  
    );
  }
}


export default Personal;
