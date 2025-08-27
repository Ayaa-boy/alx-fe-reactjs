import { useEffect, useState } from "react";
import Hello from "./components/Hello";
import api from "./services/api";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Change "octocat" to your GitHub username if you want
    api.get("/users/octocat")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub user:", error);
      });
  }, []);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Hello />
      {user ? (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>Profile: <a href={user.html_url} target="_blank" rel="noreferrer">{user.html_url}</a></p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default App;
