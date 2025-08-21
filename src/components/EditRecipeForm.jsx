<<<<<<< HEAD
import React, { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
=======
import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
<<<<<<< HEAD
    alert("Recipe updated!");
=======
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
=======
      <h3>Edit Recipe</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
