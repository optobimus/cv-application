import React, { Component } from "react";

class Multiple extends Component {



    render() {
        const { data } = this.props;
        let i = 1;
        const items = data.map((item) => (
          <button key={item.id} type="button" data-id={item.id}>{i}</button>
          
        ));
      return (
        <div className="page-navigation">
          {items}
        </div>
          
      );
    }
}
  
  
export default Multiple;
  