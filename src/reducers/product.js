// import axios from "axios";

// Define reducer actions
export const productReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
          searchTerm:'',
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          products: [],
          loading: false,
          error: action.payload,
          searchTerm:'',
        };
      //   case 'UPDATE_SEARCH':
      // return { ...state, searchTerm: action.payload };
    // case 'SEARCH':
    //   // eslint-disable-next-line no-case-declarations
    //   const result = axios.get(`https://fakestoreapi.com/products?title=${action.payload}`);
    //   // Make an API request here to fetch products using action.payload (search term)
    //   // Update the state with the search results from the API response.
    //   // Return a new state object with the results.
    //   result=result.json();
    //   return { ...state, searchResults: result.data, searchTerm: '' };
      default:
        return state;
    }
  };