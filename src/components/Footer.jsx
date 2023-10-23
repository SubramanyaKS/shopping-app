// import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import './Footer.css'; // Import your CSS file
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4>About Us</h4>
            <p>
              Welcome to NamKart, your one-stop shop for all your shopping
              needs. We are dedicated to providing the best shopping experience
              with a wide range of high-quality products and exceptional
              customer service.
            </p>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +123456789</p>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
            </div>
          </Col>
        </Row>
        <p className="text-center"> &copy;2023 Copyright Ecommerce</p>
      </Container>
    </footer>
  );
};

export default Footer;
