<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title,
      description
    });

=======
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
    setTitle('');
    setDescription('');
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
=======
    <form onSubmit={handleSubmit}>
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
<<<<<<< HEAD
        placeholder="Recipe Title"
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
      />
      <br />
=======
import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
=======
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
