import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById, updateRecipe } from "./recipeStore";

function EditRecipeForm() {
  const { id } = useParams();
  const recipe = getRecipeById(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(recipe);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, formData);
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditRecipeForm;
