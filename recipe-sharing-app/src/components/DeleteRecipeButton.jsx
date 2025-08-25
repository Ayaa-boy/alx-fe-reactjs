// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";  // ✅ required

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();  // ✅ useNavigate hook

  const handleDelete = () => {
    const ok = confirm("Delete this recipe?");
    if (!ok) return;
    deleteRecipe(recipeId);
    alert("Recipe deleted 🗑️");
    navigate("/");   // ✅ redirect back home
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
