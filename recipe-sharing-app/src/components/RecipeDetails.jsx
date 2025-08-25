// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">⬅ Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <hr />
      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <h3>Delete Recipe</h3>
      <DeleteRecipeButton
        recipeId={recipe.id}
        onDeleted={() => navigate("/")}
      />

      <br />
      <Link to="/">⬅ Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
