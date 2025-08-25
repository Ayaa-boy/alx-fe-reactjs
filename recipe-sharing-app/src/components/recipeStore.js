import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti Bolognese", ingredients: "pasta, meat, tomato", time: 30 },
    { id: 2, title: "Chocolate Cake", ingredients: "chocolate, flour, sugar", time: 60 },
    { id: 3, title: "Pancakes", ingredients: "flour, milk, egg", time: 15 },
  ],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}));
