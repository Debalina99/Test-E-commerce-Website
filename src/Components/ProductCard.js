import React from 'react';
import { Link } from 'react-router-dom';

//showing cards with the item image,title,price
const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <div className='product-link'>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={() => addToCart(product)}>🛒</button>
    </div>
  </div>
);

export default ProductCard;
