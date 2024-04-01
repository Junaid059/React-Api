import "./index.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <NavLink style={{display: 'block'}} to={`/post/${post.id}`}>{post.title}</NavLink>
      ))}
    </div>
  );
}
