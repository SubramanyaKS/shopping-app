/* eslint-disable react/prop-types */
// import { useProductContext } from '../contexts/ProductContext';
// import { useEffect } from 'react';
// import useProductSearch from '../hooks/useProductSearch';
import ProductCard from './ProductCard';

const SearchResults = ({results}) => {
  // const { searchState } = useProductSearch();

  // console.log("State",searchState.products);
  return (
    <div>
      <h3  className="text-decoration-underline text-center">Search</h3>
      <div className="product-list mt-3">
      {results.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
      </div>
    </div>
  );
};

export default SearchResults;
