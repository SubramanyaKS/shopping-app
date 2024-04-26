/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard"

const TopRatedUI = ({featuredProducts}) => {
  return (
    <div>
    <h3 className="text-bluepurple text-center">Top Rated Products</h3>
    <div className="product-list mt-3">
    {featuredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
  )
}

export default TopRatedUI