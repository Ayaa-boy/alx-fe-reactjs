// src/components/RecipeList.jsx
import { Link } from "react-router-dom";

export default function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((r) => (
        <li key={r.id}>
          <Link to={`/recipe/${r.id}`}>{r.title}</Link>
        </li>
      ))}
    </ul>
  );
}
