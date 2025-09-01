import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{recipe.title}</h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6"
      />

      {/* Summary */}
      <p className="text-lg text-gray-700 mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients?.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
