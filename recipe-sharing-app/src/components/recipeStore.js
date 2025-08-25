// src/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // Seed data so you can click through immediately
  recipes: [
    { id: 1, title: "Jollof Rice", description: "A popular West African dish made with rice, tomatoes, and spices." },
    { id: 2, title: "Fufu & Light Soup", description: "Traditional Ghanaian staple served with spicy light soup." },
  ],

  // REQUIRED by the assignment
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  updateRecipe: (id, updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updated } : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
