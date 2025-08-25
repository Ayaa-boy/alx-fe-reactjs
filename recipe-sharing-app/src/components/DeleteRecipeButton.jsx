// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    const ok = confirm("Delete this recipe?");
    if (!ok) return;
    deleteRecipe(recipeId);
    alert("Recipe deleted 🗑️");
    onDeleted?.();
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: "red", color: "white", padding: "6px 12px" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
