import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import './App.css';
import axios from 'axios';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('role');
    setRole('');
  };

  const fetchProducts = () => {
    axios.get("http://localhost:9090/products")
      .then(res => setProducts(res.data));
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:9090/products/${id}`, {
        headers: { role: 'admin' }
      }).then(() => fetchProducts());
    }
  };

  return (
    <div className="container">
      <h1 className="title">🛍️ E-Commerce Product Catalog</h1>
      {!role ? (
        <Login setRole={setRole} />
      ) : (
        <>
          <div className="top-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search by name or category..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
          <ProductList
            onSelect={setSelectedId}
            filter={filter}
            products={products}
            fetchProducts={fetchProducts}
            role={role}
            onDelete={deleteProduct}
          />
          <ProductDetails id={selectedId} />
          {role === 'admin' && <AdminPanel fetchProducts={fetchProducts} />}
        </>
      )}
    </div>
  );
}

export default App;