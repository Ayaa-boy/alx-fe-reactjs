import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Classic West African dish." },
    { id: 2, title: "Fufu & Light Soup", description: "Traditional Ghanaian meal." },
  ],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now() }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
