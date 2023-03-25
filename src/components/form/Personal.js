import React from "react";

import "../../styles/personal.css"

const Personal = ({ personalInfo, onChange }) => {

  const handleChange = (e) => {
    onChange(e);
  }

  return (
    <div className="personal">
        <h3>Personal Information</h3>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={personalInfo.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={personalInfo.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={personalInfo.title}
            onChange={handleChange}
          />
          <label className="custom-file-upload">
            <input
              type="file"
              name="photo"
              placeholder="Personal Photo"
              onChange={handleChange}
            />
          </label>
            
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={personalInfo.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={personalInfo.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={personalInfo.description}
            onChange={handleChange}
          />
        </form>
    </div>  
  );
}


export default Personal;
