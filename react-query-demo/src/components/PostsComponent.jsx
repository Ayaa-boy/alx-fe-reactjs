// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const PostsComponent = () => {
  // useQuery hook for fetching posts
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 30000,           // caching for 30 seconds
    cacheTime: 60000,           // cache lasts 1 minute
    refetchOnWindowFocus: true, // automatically refetch when tab/window refocused
    keepPreviousData: true,     // keeps old data visible while refetching
  });

  if (isLoading) return <p className="text-center mt-4">Loading posts...</p>;
  if (isError) return <p className="text-center mt-4">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      {/* Button to manually refetch posts */}
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} className="border-b py-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
