// src/github-user-search/Search.jsx
import { useState } from "react";

export default function Search({ onSearch, loading }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow-md rounded-2xl"
    >
      <input
        type="text"
        placeholder="Search by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded-md flex-1"
      />

      <input
        type="text"
        placeholder="Filter by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded-md flex-1"
      />

      <input
        type="number"
        placeholder="Min repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="p-2 border rounded-md w-40"
      />

      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 rounded-lg text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
