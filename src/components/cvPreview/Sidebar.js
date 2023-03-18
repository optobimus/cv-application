import React, { Component } from "react";

class Sidebar extends Component {
    render() {
      const { photo, address, phoneNumber, email } = this.props;
      return (
        <div className="sidebar">
          <img className="avatar" src={photo} alt="avatar"/>
          <h3>Personal Details</h3>
          <h4>Address</h4>
          <p>{address}</p>
          <h4>Phone Number</h4>
          <p>{phoneNumber}</p>
          <h4>Email</h4>
          <p>{email}</p>
        </div>  
      );
    }
}
  
  
export default Sidebar;
  