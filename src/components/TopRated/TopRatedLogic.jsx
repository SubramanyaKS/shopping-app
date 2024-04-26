import { useProductContext } from "../../contexts/ProductContext";
import TopRatedUI from "./TopRatedUI";


const TopRatedLogic = () => {
    const { products } = useProductContext();
    // console.log(products);
    const selectTopRatedProducts = (products,minRating) => {
        return products.filter(product => product.rating.rate >= minRating).slice(0, 4);
    };    
      
    const featuredProducts = selectTopRatedProducts(products,4.5);

  return (
    <TopRatedUI featuredProducts={featuredProducts}/>
  )
}

export default TopRatedLogic