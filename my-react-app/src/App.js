// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from './apiService';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.attributes.title}</h2>
              <div className="content">
                {post.attributes.content.map((content, index) => (
                  <p key={index}>{content.children[0].text}</p>
                ))}
              </div>
              <p><strong>Created At:</strong> {new Date(post.attributes.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(post.attributes.updatedAt).toLocaleString()}</p>
              <p><strong>Published At:</strong> {new Date(post.attributes.publishedAt).toLocaleString()}</p>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
}

export default App;

