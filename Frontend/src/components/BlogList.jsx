import React, { useEffect, useState } from "react";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        setBlogs(res.data); // ✅ Set data to state
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{blog.title}</h3>
            <p><strong>Author:</strong> {blog.author}</p>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList;
