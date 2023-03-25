import React from "react";

function Header(props) {
      const { firstName, lastName, title } = props;
      return (
        <div className="preview-header">
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{title}</p>
        </div>  
      );
}
  
  
export default Header;
  