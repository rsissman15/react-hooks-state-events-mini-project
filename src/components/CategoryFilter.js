import React from "react";

function CategoryFilter({categories, handleCategorySelect,selectedCategory}) {
  const renderCategoryButtons=categories.map(category=>{
    return <button 
    className={category===selectedCategory ? "selected" : ''}
    key={category} 
    onClick={()=>handleCategorySelect(category)}>
    {category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {renderCategoryButtons}
    </div>
  );
}

export default CategoryFilter;
