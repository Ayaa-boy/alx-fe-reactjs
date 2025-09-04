// src/App.jsx
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Recipe Sharing Platform</h1>
        <AddRecipeForm />
      </div>
    </div>
  );
}

export default App;
