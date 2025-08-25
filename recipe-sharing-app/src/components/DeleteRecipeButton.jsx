import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "./recipeStore";

function DeleteRecipeButton({ recipeId }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}

export default DeleteRecipeButton;
