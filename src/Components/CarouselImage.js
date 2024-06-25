import '../Style/CarouselImage.css';
import React, { useState , useEffect} from 'react';

import image1 from '../Assets/5594188.jpg';
import image2 from '../Assets/8177385.jpg';
import image3 from '../Assets/8852817.jpg';
const images = [image1, image2, image3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
