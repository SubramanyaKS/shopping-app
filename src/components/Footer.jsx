// import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import './Footer.css'; // Import your CSS file
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4 className="text-gold">Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4 className="text-gold">Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +123456789</p>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h4 className="text-gold">Follow Us</h4>
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
