import React from "react";

function Task({text,category,deleteButton}) {

  function handleDelete(){
    deleteButton(text)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
