// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";

function Home() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: 16 }}>
      <h1>Recipe Sharing App</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
