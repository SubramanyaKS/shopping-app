/* eslint-disable react/prop-types */
// CategoryContext.js
import { createContext, useState, useEffect } from 'react';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the category data from the API here
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories: ', error));
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };