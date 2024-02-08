import { useProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard"

const TopRated = () => {
    const { products } = useProductContext();
    // console.log(products);
    const selectTopRatedProducts = (products,minRating) => {
        return products.filter(product => product.rating.rate >= minRating).slice(0, 4);
    };    
      
    const featuredProducts = selectTopRatedProducts(products,4.5);

  return (
    <div>
        <h3 className="text-decoration-none text-center">Top Rated Products</h3>
        <div className="product-list mt-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default TopRated