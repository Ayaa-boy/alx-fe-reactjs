import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // NEW: favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // NEW: recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock logic: recommend recipes from favorites randomly
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
