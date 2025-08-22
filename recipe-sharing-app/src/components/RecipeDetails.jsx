import { useRecipeStore } from "./recipeStore";

import { EditRecipeForm } from "./EditRecipeForm";
import { DeleteRecipeButton } from "./DeleteRecipeButton";

export const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};
