// src/github-user-search/App.jsx
import { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { searchUsers } from "./githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (criteria) => {
    setQuery(criteria);
    setPage(1);
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers({ ...criteria, page: 1 });
      setUsers(data.items || []);
      // GitHub API gives total_count
      setHasMore(data.items && data.items.length > 0 && data.total_count > data.items.length);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers({ ...query, page: nextPage });
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
      setHasMore(data.items && data.items.length > 0);
    } catch (err) {
      setError("Failed to load more results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>

      <Search onSearch={handleSearch} loading={loading} />

      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}

      <SearchResults
        users={users}
        onLoadMore={hasMore ? handleLoadMore : null}
        loading={loading}
      />

      {!loading && !hasMore && users.length > 0 && (
        <p className="text-center text-gray-500 mt-4">
          No more results.
        </p>
      )}
    </div>
  );
}

export default App;
