import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function Home() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div style={{ padding: 16 }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <ul>
        {displayRecipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </li>
        ))}
        {displayRecipes.length === 0 && <p>No recipes found.</p>}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
