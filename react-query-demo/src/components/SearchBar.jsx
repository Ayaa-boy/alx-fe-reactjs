import React from "react";
import { useRecipeStore } from "../recipeStore";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: "8px", margin: "10px 0", width: "100%" }}
    />
  );
};

export default SearchBar;
