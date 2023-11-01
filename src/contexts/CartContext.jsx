/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
import { useReducer, createContext, useContext } from "react";
import { cartReducer } from "../reducers/cart";

// Define the initial state for the cart
const initialState = {
  cartItems: [],
  // quantity: 1,
};

// Create a CartContext
const CartContext = createContext();

// CartProvider component to provide cart state and dispatch function
export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart state and dispatch
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};