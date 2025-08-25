// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit form */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete button */}
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
