import React from "react";

function SearchBar({search, filterPlaneteers}) {
  return (
    <div className="search">
      <input 
      type="text" 
      className="searchTerm" 
      value={search}
      onChange={(e) => filterPlaneteers(e.target.value)}      
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
