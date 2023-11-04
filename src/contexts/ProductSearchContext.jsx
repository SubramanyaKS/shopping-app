/* eslint-disable react/prop-types */
// ProductSearchContext.js
import { createContext, useContext, useEffect, useReducer } from 'react';
import { productSearchReducer } from '../reducers/search';

const ProductSearchContext = createContext();

const initialState = {
  products: [],
  searchTerm: '',
};

export const ProductSearchProvider = ({ children }) => {
  const [searchState, searchDispatch] = useReducer(productSearchReducer, initialState);

  return (
    <ProductSearchContext.Provider value={{ searchState, searchDispatch }}>
      {children}
    </ProductSearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductSearch = () => {
    const { searchState, searchDispatch } = useContext(ProductSearchContext);
  
    const searchProducts = async () => {
      if (searchState.searchTerm) {
        // Make an API request to fetch products based on the searchTerm.
        // Replace this with your actual API endpoint.
        const response = await fetch(`https://fakestoreapi.com/products?title=${searchState.searchTerm}`);
        const data = await response.json();
        const filteredData = data.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchState.searchTerm.toLowerCase());
        });
  
        // Update the state with the search results.
        searchDispatch({ type: 'SET_SEARCH_RESULTS', payload: filteredData });
      }
    };
  
    useEffect(() => {
      if (searchState.searchTerm) {
        searchProducts();
      }
    }, [searchState.searchTerm]);
  
    return { searchState, searchDispatch, searchProducts };
  };

  