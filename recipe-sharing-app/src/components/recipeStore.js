import { v4 as uuidv4 } from "uuid";

let recipes = [
  {
    id: uuidv4(),
    title: "Jollof Rice",
    description: "Delicious West African rice dish",
    ingredients: ["Rice", "Tomatoes", "Onions", "Spices"],
    instructions: "Cook rice with tomato stew and spices."
  }
];

// Get all recipes
export const getRecipes = () => recipes;

// Get a single recipe by id
export const getRecipeById = (id) => recipes.find(r => r.id === id);

// Add a recipe
export const addRecipe = (recipe) => {
  const newRecipe = { ...recipe, id: uuidv4() };
  recipes.push(newRecipe);
  return newRecipe;
};

// Update a recipe
export const updateRecipe = (id, updatedRecipe) => {
  recipes = recipes.map(recipe =>
    recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
  );
  return getRecipeById(id);
};

// Delete a recipe
export const deleteRecipe = (id) => {
  recipes = recipes.filter(recipe => recipe.id !== id);
  return recipes;
};
