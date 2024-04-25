import ProductCard from "../ProductCard";
import './featured.css';

/* eslint-disable react/prop-types */
const FeaturedUI = ({featuredProducts, error, loading}) => {
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    return (
        <div>
        <h3 className="text-bluepurple text-center">Featured Products</h3>
        <div className="product-list mt-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  )
}

export default FeaturedUI