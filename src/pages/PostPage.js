import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePostSaved = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Post' : 'New Post'}</h1>
      <PostForm postId={id} onPostSaved={handlePostSaved} />
    </div>
  );
};

export default PostPage;
