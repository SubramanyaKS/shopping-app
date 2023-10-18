import { Navbar, Nav, Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import {Link} from "react-router-dom";
import CartIcon from './CartIcon';
import { useCart } from '../contexts/CartContext';
import { HouseFill,Bag,Person } from 'react-bootstrap-icons';

const NavigationBar = () => {
   const {cartState} = useCart();
    // const cartCount=5;
  return (
    <Navbar
    className="shadow-lg p-3"
    style={{ color: "blue" }}
    collapseOnSelect
    expand="lg"
    bg="white"
    variant="light"
  >
    <Container>
      <Navbar.Brand
        style={{
          fontFamily: "Comic Sans MS, Comic Sans, cursive",
          color: "#00f",

        }}
      >
        Ecommerce
      </Navbar.Brand>
        <SearchBar />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Link className="navlink" to="/">
          <HouseFill/> Home
          </Link>
          <Link className="navlink" to="/product">
           <Bag/> Products
          </Link>
          <Link className="navlink" to="/login">
          <Person/> Login
          </Link>
          <Link className="navlink" to="/cart">
          <CartIcon itemCount={cartState.cartItems.length}/>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar