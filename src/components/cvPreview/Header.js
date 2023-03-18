import React, { Component } from "react";

class Header extends Component {
    render() {
      const { firstName, lastName, title } = this.props;
      return (
        <div className="preview-header">
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{title}</p>
        </div>  
      );
    }
}
  
  
export default Header;
  