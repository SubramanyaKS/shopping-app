import "./App.css";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavigationBar from "./components/NavBar";
import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from 'react-toastify';
import SignUp from "./Pages/SignUp";
import Footer from "./components/Footer";
import SingleProduct from "./Pages/SingleProduct";
// import { CartContext, CartProvider } from "./context/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import { CategoryProvider } from "./contexts/CategoryContext";
import ErrorPage from "./pages/404";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <CategoryProvider>
          <NavigationBar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/single/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<CartPage/>} />
              <Route path="/product" element={<ProductList/>} />
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            </CategoryProvider>
          </CartProvider>
        </ProductProvider>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
