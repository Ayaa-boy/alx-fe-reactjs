// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: "10px", color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
