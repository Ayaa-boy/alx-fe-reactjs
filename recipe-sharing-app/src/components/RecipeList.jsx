// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function RecipeList() {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <ul>
      {displayRecipes.map((r) => (
        <li key={r.id}>
          <Link to={`/recipe/${r.id}`}>{r.title}</Link>
        </li>
      ))}
      {displayRecipes.length === 0 && <p>No recipes found.</p>}
    </ul>
  );
}
