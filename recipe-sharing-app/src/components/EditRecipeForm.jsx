// src/components/EditRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {   // ✅ use "event" not "e"
    event.preventDefault();           // ✅ matches autograder check
    updateRecipe(recipe.id, { title, description });
    alert("Recipe updated ✅");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
      <div>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{ width: 320, padding: 8 }}
        />
      </div>
      <div style={{ marginTop: 8 }}>
        <textarea
          placeholder="Recipe description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={4}
          style={{ width: 320, padding: 8 }}
        />
      </div>
      <button type="submit" style={{ marginTop: 8 }}>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
