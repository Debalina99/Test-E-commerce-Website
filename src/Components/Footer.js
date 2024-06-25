import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
            <h3>Quick Links</h3>
            <p>Bestsellers</p>
            <p>New Arrivals</p>
            <p>Gifting</p>
            <p>Clearance</p>
            <p>Blog</p>
        </div>
        <div className="footer-section contact">
          <h3>Company</h3>
          <p>About us</p>
          <p>Who are we</p>
          <p>Our Technology</p>
          <p>Our Catalogue</p>
          <p>Careers</p>
        </div>
        <div className="footer-section contact">
          <h3>Help & Support</h3>
          <p>Track Orders</p>
          <p>Who are we</p>
          <p>Terms and Conditions</p>
          <p>Privacy policy</p>
          <p>FAQs</p>
        </div>
        <div className="footer-section contact">
          <h3>Connect with us</h3>
          
          <p>
            Email: support@ecommerce.com
          </p>
          <p>
            Phone: +91 123 456 7890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 E-Commerce Site
      </div>
    </footer>
  );
};

export default Footer;
