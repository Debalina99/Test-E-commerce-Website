import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';
import Shimmer from './Shimmer';
import '../Style/Index.css'
import Carousel from './CarouselImage';
import Footer from './Footer';
import Header from './Header';
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  //Fetching data from the FakeStoreAPI
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  //Displaying product cards in the home page
  return products.length === 0? (<Shimmer />):(
    <div>
      <Header></Header>
      <Carousel />
      <div className="d-flex mt-5">
        <div className="m-auto">
          <div className="myBox">
            <h2>Featured Selections</h2>
          </div>
        </div>
      </div>
      <div className="home-page">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
