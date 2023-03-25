import React, { Component } from "react";

class Formtitle extends Component {
    constructor(props) {
        super(props);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }
    
    handleAddButton(e) {
      this.props.onClickAdd();
    }

    handleDeleteButton(e) {
      const { id } = this.props;
      this.props.onClickDelete(id);
    }

    render() {
        const { className, title } = this.props;
      return (
        <div className={className}>
          <h3>{title}</h3>
          <button onClick={this.handleAddButton}>Add</button>
          <button onClick={this.handleDeleteButton}>Delete</button>
        </div>
      );
    }
}
  
  
export default Formtitle;
  