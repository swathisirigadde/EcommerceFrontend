import React, { useEffect } from 'react';
import './ProductList.css';

function ProductList({ onSelect, filter, products, fetchProducts, role, onDelete }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filtered.map(product => (
        <div key={product.id} className="product-card" onClick={() => onSelect(product.id)}>
          <h3>{product.name}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          {role === 'admin' && (
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(product.id);
              }}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;