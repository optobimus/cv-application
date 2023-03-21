import React, { Component } from "react";

class Formtitle extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
    console.log("YA");
    const { id } = this.props;
    this.props.onAddExperience(e, id);
    }
    render() {
        const { className, title } = this.props;
      return (
        <div className={className}>
          <h3>{title}</h3>
          <button onClick={this.handleClick}>Add</button>
          <button>Delete</button>
        </div>
      );
    }
}
  
  
export default Formtitle;
  