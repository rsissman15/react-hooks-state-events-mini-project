import React, { useState } from "react";

function NewTaskForm({categories,handleTaskAdd}) {

  const [text,setText]=useState('')
  const [category,setCategory]=useState(categories[0])


  function handleText(event){
    setText(event.target.value);
  }

  function handleCategory(event){
    setCategory(event.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    const newTask={
      text:text,
      category:category
    }

    handleTaskAdd(newTask);
  }


  const optionElements=categories.map(category=>{
    return <option key={category}>{category}</option>
  })


  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={category}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
