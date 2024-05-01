// import React from 'react'
import { useProductSearch } from '../contexts/ProductSearchContext'
import ProductCard from './ProductCard';
// import { useNavigate} from "react-router-dom";

const SearchProducts = () => {
  const {searchState} = useProductSearch();
  return (
    <div>
    <h3  className="text-decoration-underline text-center">Search</h3>
    <div className="product-list mt-3">
    {searchState.products.map((product) => (
      <ProductCard key={product.id} product={product}/>
    ))}
    </div>
  </div>
  )
}

export default SearchProducts