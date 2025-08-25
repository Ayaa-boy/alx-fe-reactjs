import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
