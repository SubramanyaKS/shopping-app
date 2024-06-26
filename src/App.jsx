import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavigationBar from "./components/NavBar";
import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from 'react-toastify';
import SignUp from "./Pages/SignUp";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
// import { CartContext, CartProvider } from "./context/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import { CategoryProvider } from "./contexts/CategoryContext";
import ErrorPage from "./pages/404";
import { ProductSearchProvider } from "./contexts/ProductSearchContext";
import SearchProducts from "./components/SearchProducts";
import About from "./pages/About";
import './assets/custom.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <ProductSearchProvider>
            <CategoryProvider>
          <NavigationBar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/single/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<CartPage/>} />
              <Route path="/product" element={<ProductList/>} />
              <Route path="/search" element={<SearchProducts/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            </CategoryProvider>
            </ProductSearchProvider>
          </CartProvider>
        </ProductProvider>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
