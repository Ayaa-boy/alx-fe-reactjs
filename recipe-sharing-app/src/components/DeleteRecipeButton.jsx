import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

export const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // go back to home
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};
