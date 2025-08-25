import React from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipeById } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = getRecipeById(id);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}

export default RecipeDetail;
