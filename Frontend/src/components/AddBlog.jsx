
import React, { useState } from 'react';
import axios from 'axios';

function AddBlog() {
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', form);
      alert('Blog added successfully!');
      setForm({ title: '', content: '', author: '' });
    } catch (err) {
      alert('Failed to add blog');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={form.title}
        style={{ marginBottom: '10px', padding: '8px' }}
        required
      />
      <input
        name="author"
        placeholder="Author"
        onChange={handleChange}
        value={form.author}
        style={{ marginBottom: '10px', padding: '8px' }}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        onChange={handleChange}
        value={form.content}
        style={{ marginBottom: '10px', padding: '8px' }}
        required
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
        Submit
      </button>
    </form>
  );
}

export default AddBlog;