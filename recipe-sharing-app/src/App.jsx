import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { RecipeDetails } from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />

        <Routes>
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

const RecipePage = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
