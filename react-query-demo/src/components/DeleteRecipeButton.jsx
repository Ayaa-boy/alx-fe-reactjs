<<<<<<< HEAD
import React from "react";
import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
=======
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
<<<<<<< HEAD
    deleteRecipe(id);
    alert("Recipe deleted!");
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
=======
    deleteRecipe(recipeId);
    navigate('/');
  };

  return <button onClick={handleDelete}>🗑 Delete Recipe</button>;
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
};

export default DeleteRecipeButton;
