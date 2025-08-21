<<<<<<< HEAD
import React from 'react';
import { useRecipeStore } from './recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>

      <h2>All Recipes</h2>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '5px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            )}
          </div>
        );
      })}

      <FavoritesList />
      <RecommendationsList />
=======
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
    </div>
  );
}

export default App;
