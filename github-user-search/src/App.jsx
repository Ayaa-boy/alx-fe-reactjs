import { useState } from "react";
import Search from "./components/Search";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (params) => {
    try {
      const data = await searchUsers(params);
      setUsers(data.items || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow hover:shadow-lg">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h2 className="text-xl text-center mt-2">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline block text-center mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
