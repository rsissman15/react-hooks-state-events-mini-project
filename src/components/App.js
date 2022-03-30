import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {CATEGORIES, TASKS} from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {

  const [tasksStateArray, setTasksStateArray]= useState(TASKS)

  const [selectedCategory, setSelectedCategory]=useState('All')

  

  

  function handleTaskDelete(text){
    const newTaskArray=tasksStateArray.filter(
      (task)=> task.text !== text)
    setTasksStateArray(newTaskArray)
  }


  function handleTaskAdd(newTask){
    const newTaskArray={...tasksStateArray,newTask}
    setTasksStateArray(newTaskArray)
  }

  const filteredTaskCategory=tasksStateArray.filter((task)=>{
    if(selectedCategory==="All"){
      return true;
    }
    else{
      return task.category === selectedCategory
    }
  })


  function handleCategorySelect(newSelectedCategory){
    
    setSelectedCategory(newSelectedCategory)
   }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      handleCategorySelect={handleCategorySelect}
      selectedCategory={selectedCategory}/>
      <NewTaskForm
      categories={CATEGORIES.filter(category=>category !== "All")} 
      handleTaskAdd={handleTaskAdd}
        />
      <TaskList tasks={filteredTaskCategory} onDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
