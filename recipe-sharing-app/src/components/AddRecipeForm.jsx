import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Enter a recipe title");
    addRecipe({
      id: Date.now(),
      title,
      ingredients,
      time: parseInt(time) || 0,
    });
    setTitle("");
    setIngredients("");
    setTime("");
    alert("Recipe added ✅");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="number"
        placeholder="Time (mins)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
