import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import './HomePage.css';

const HomePage = () => (
  <div>
    <h1>Blogger</h1>
    <Link to="/new" className="create-new-blog-link">Create New Blog</Link>
    <PostList />
  </div>
);

export default HomePage;
