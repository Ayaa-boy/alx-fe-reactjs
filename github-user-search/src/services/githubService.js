// src/github-user-search/githubService.js
const BASE_URL = "https://api.github.com";

export async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`
  );

  if (!response.ok) throw new Error("Failed to fetch users");

  const data = await response.json();

  // Now fetch details for each user
  const detailedUsers = await Promise.all(
    data.items.map(async (user) => {
      const detailsRes = await fetch(`${BASE_URL}/users/${user.login}`);
      if (!detailsRes.ok) return user; // fallback
      const details = await detailsRes.json();
      return {
        ...user,
        location: details.location,
        public_repos: details.public_repos,
      };
    })
  );

  return { ...data, items: detailedUsers };
}
