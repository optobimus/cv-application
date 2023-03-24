import React, { Component } from "react";

class Multiple extends Component {

    constructor(props) {
      super(props);
      this.state = {
        activeID: null,
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      const activeID = e.target.dataset.id;
      this.setState({ activeID });
    }

    componentDidMount() {
      const activeButton = document.querySelector(".nav-button.active");
      const activeID = activeButton?.dataset.id;
      this.setState({ activeID });

    }


    render() {
      const { data } = this.props;
      const { activeID } = this.state;
      let i = 1;
     
      const items = data.map((item) => {
        const isActive = item.id === activeID;
        const buttonClass = `nav-button${isActive ? " active" : ""}`;
        const button = <button key={item.id} className={buttonClass} type="button" data-id={item.id} onClick={this.handleClick}>{i}</button>
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
  