import React, { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [params.postId]);

  if (data === null) return <p>Loading....</p>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
