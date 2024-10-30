import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import './PostForm.css';

const PostForm = ({ postId, onPostSaved }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await api.get(`/posts/${postId}`);
          setTitle(response.data.title);
          setContent(response.data.content);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = { title, content };
      if (postId) {
        await api.put(`/posts/${postId}`, postData);
      } else {
        await api.post("/posts", postData);
      }
      onPostSaved();
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">{postId ? "Update" : "Create"} Post</button>
    </form>
  );
}

PostForm.propTypes = {
  postId: PropTypes.string,
  onPostSaved: PropTypes.func.isRequired,

};

export default PostForm;
