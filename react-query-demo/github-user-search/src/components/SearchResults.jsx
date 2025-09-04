// src/github-user-search/SearchResults.jsx
export default function SearchResults({ users, onLoadMore, loading }) {
  return (
    <div className="mt-6">
      {users.length === 0 && <p className="text-gray-500">No results found.</p>}

      <ul className="grid md:grid-cols-2 gap-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p className="text-sm text-gray-500">
                  📍 {user.location || "Location not available"}
                </p>
                <p className="text-sm text-gray-500">
                  📦 Public Repos: {user.public_repos ?? "N/A"}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {onLoadMore && (
        <div className="mt-4 text-center">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className={`px-4 py-2 rounded-md ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
