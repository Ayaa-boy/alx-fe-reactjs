// src/components/AddRecipeForm.jsx
import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("⚠️ All fields are required.");
      setSuccess("");
      return;
    }

    // Clear error and set success message
    setError("");
    setSuccess("✅ Recipe added successfully!");

    console.log({ title, ingredients, steps });

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add New Recipe
      </h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-24"
      />

      <textarea
        placeholder="Preparation Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition w-full"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
