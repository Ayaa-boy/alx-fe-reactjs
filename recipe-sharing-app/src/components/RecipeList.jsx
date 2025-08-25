// src/components/RecipeList.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes, searchTerm } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const listToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {listToDisplay.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
