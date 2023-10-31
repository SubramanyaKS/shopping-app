// import axios from "axios";
import ProductCard from "../components/ProductCard";
// import { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
const Featured = () => {
  // const [products, setProducts] = useState([]);
  const { products, loading, error } = useProductContext();
  const selectRandomFeaturedProducts = (products, count) => {
    const shuffled = products.sort(() => 0.5 - Math.random()); // Shuffle the products
    return shuffled.slice(0, count); // Select the first `count` products
  };
  
  const featuredProducts = selectRandomFeaturedProducts(products, 4);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h3 className="text-decoration-underline text-center">Featured Products</h3>
      <div className="product-list mt-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
