// src/components/SearchBar.jsx
import React, { useEffect } from "react";
import { useRecipeStore } from "../recipeStore";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Update filteredRecipes whenever searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: "6px 10px", width: "300px", marginBottom: "16px" }}
    />
  );
}
