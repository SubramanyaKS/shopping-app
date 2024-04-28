/* eslint-disable react/prop-types */
// CategoryContext.js
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the category data from the API here
    axios
        .get('https://fakestoreapi.com/products/categories')
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error.message);
        });
  }, []);

  return (
    <CategoryContext.Provider value={{categories}}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };