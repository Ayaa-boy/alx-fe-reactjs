<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const { recipes, searchTerm } = useRecipeStore();

  const filtered = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar />
      <ul>
        {filtered.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
=======
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
=======
import { useRecipeStore } from '../recipeStore';
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
<<<<<<< HEAD
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
=======
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
    </div>
  );
};

export default RecipeList;
