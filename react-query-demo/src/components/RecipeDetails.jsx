<<<<<<< HEAD
import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
=======
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

<<<<<<< HEAD
  if (!recipe) return <p>Recipe not found.</p>;
=======
  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
<<<<<<< HEAD
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
=======

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />

      <br />
      <Link to="/">⬅ Back to Recipes</Link>
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
    </div>
  );
};

export default RecipeDetails;
