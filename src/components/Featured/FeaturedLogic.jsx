import { useProductContext } from "../../contexts/ProductContext";
import FeaturedUI from "./FeaturedUI";

const FeaturedLogic = () => {
    const { products, loading, error } = useProductContext();
  const selectRandomFeaturedProducts = (products, count) => {
    const shuffled = products.sort(() => 0.5 - Math.random()); // Shuffle the products
    return shuffled.slice(0, count); // Select the first `count` products
  };
  
  const featuredProducts = selectRandomFeaturedProducts(products, 4);

  return (
    <FeaturedUI featuredProducts={featuredProducts} error={error} loading={loading}/>
  )
}

export default FeaturedLogic