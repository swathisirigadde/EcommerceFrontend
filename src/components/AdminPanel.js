// components/AdminPanel.js
import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

function AdminPanel() {
  const [form, setForm] = useState({
    name: '', description: '', price: '', category: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:9090/products", form, {
      headers: { role: 'admin' }
    }).then(() => alert("Product Added!"));
  };

  return (
    <div className="admin">
      <h3>Add Product (Admin)</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Product Name" required />
        <textarea name="description" onChange={handleChange} placeholder="Description" required />
        <input name="price" onChange={handleChange} placeholder="Price" type="number" required />
        <input name="category" onChange={handleChange} placeholder="Category" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminPanel;