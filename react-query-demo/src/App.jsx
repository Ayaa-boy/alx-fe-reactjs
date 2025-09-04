<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
=======
import { useEffect, useState } from "react";
import Hello from "./components/Hello";
import api from "./services/api";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Change "octocat" to your GitHub username if you want
    api.get("/users/octocat")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub user:", error);
      });
  }, []);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Hello />
      {user ? (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>Profile: <a href={user.html_url} target="_blank" rel="noreferrer">{user.html_url}</a></p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
>>>>>>> bfd70df2931e2e9cf19c65c072f97710e0d228a9
    </div>
=======
// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-2xl font-bold text-center mt-6">
          React Query Demo
        </h1>
        {/* Mount the PostsComponent */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
>>>>>>> af2afcf (Implement React Query demo: fetch, cache, refetch, keepPreviousData, refetchOnWindowFocus)
  );
}

export default App;
