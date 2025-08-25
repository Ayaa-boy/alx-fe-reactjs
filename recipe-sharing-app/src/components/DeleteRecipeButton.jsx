import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Delete this recipe?")) {
      deleteRecipe(recipeId);
      alert("Recipe deleted 🗑️");
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: "red", color: "white", padding: "6px 12px" }}
    >
      Delete Recipe
    </button>
  );
}
