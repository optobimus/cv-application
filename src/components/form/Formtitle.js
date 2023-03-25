import React from "react";

function Formtitle({ id, className, title, onClickAdd, onClickDelete })  {

  const handleAddButton = (e) => {
    onClickAdd();
  }

  const handleDeleteButton = (e) => {
    onClickDelete(id);
  }

  return (
    <div className={className}>
      <h3>{title}</h3>
      <button onClick={handleAddButton}>Add</button>
      <button onClick={handleDeleteButton}>Delete</button>
    </div>
  );
}
  
  
export default Formtitle;
  