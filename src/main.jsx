<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
=======
>>>>>>> bfd70df2931e2e9cf19c65c072f97710e0d228a9
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RecipeDetails from './components/RecipeDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 98654fa (Enhancing Recipe Sharing App with detailed management)
=======
>>>>>>> 3bc07ab (Initialize Recipe Sharing App with Zustand)
=======
>>>>>>> bfd70df2931e2e9cf19c65c072f97710e0d228a9
