import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function Home() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div style={{ padding: 16 }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList recipes={displayRecipes} />
      {displayRecipes.length === 0 && <p>No recipes found.</p>}
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
