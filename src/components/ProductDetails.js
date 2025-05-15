// components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetails.css';

function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:9090/products/${id}`)
        .then(res => setProduct(res.data));
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductDetails;