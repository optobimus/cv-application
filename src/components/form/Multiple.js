import React, { Component } from "react";

class Multiple extends Component {

    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      this.props.onClick(e);
    }


    render() {
        const { data } = this.props;
        let i = 1;
        const items = data.map((item) => {
          const button = <button key={item.id} className="nav-button" type="button" data-id={item.id} onClick={this.handleClick}>{i}</button>
          i=i+1;
          return button;
        });
      return (
        <div className="page-navigation">
          {items}
        </div>
          
      );
    }
}
  
  
export default Multiple;
  