import React, { useState, useEffect } from "react";

const Multiple = ({ data, activeID, onClick }) => {

  function handleClick(e) {
    onClick(e.target);
  }

  const [activeButtonID, setActiveButtonID] = useState("");

  useEffect(() => {
    const activeButton = document.querySelector(".nav-button.active");
    const activeID = activeButton?.dataset.id;
    setActiveButtonID(activeID);
  }, []);

  let i = 1;
  
  const items = data.map((item) => {
    const isActive = item.id === activeButtonID;
    const buttonClass = `nav-button${isActive ? " active" : ""}`;
    const button = (
      <button 
        key={item.id} 
        className={buttonClass} 
        type="button" 
        data-id={item.id} 
        onClick={handleClick}
      >
        {i}
      </button>
    );
    i=i+1;
    return button;
  });

  return (
    <div className="page-navigation">
      {items}
    </div>
  );
}
  
  
export default Multiple;
  