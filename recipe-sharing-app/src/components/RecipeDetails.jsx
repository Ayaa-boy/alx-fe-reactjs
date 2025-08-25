import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>{recipe.title}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Preparation Time: {recipe.time} mins</p>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}
