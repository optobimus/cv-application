import React, { Component } from "react";

class Header extends Component {
    render() {
      const { firstName, lastName, title } = this.props;
      return (
        <div>
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{title}</p>
        </div>  
      );
    }
}
  
  
export default Header;
  