/* eslint-disable react/prop-types */
import { productReducer } from "../reducers/product";
import { createContext, useReducer, useContext, useEffect} from "react";
import axios from "axios";

// Initial state for products
const initialState = {
  products: [],
  loading: true,
  error: null,
  // searchTerm: '',
  // searchResults: [],
};

// Create the ProductContext
const ProductContext = createContext();

// Create the ProductProvider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  
  
  
  // Fetch product data from the FakeStore API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
      });
  }, []);

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

// Create a custom hook for using the ProductContext
// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => {
  return useContext(ProductContext);
};
