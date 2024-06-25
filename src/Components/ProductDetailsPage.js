import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../Style/Index.css'
const ProductDetailsPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const {addToCart} = useContext(CartContext);

  //Fetching detailed information about the selected product from the API
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  //showing description for the product based on the Id
  return (
    <div className="product-details-page">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
