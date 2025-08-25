// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Recipe List</Link>
        <Link to="/add-recipe" style={{ marginRight: "10px" }}>Add Recipe</Link>
        <Link to="/register" style={{ marginRight: "10px" }}>Registration</Link>
        <Link to="/formik">Formik Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/formik" element={<FormikForm />} />
      </Routes>
    </Router>
  );
}

export default App;
