import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>All Blogs</Link>
          <Link to="/add">Add Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;