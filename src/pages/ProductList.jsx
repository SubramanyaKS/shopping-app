import axios from "axios";
import { useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";
import { CategoryContext } from "../contexts/CategoryContext";
import { useProductContext } from "../contexts/ProductContext";

const ProductList = () => {
    const [data,setData] = useState([]);
    const categories = useContext(CategoryContext);
    const {products,loading} = useProductContext();

    useEffect(() => {
     setData(products);
    }, [products])
    
    const fetchFull=()=>{
        setData(products);
    }
    if (loading) {
        return <div>Loading...</div>;
      }

    const fetchData = (category)=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {setData(response.data)})
        .catch((error) => {console.log(error.message)})
    }

  return (
    <div>
        <div className="category-button">
            <button onClick={()=>fetchFull()}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={()=>fetchData(category)}>{category}</button>
        ))}
        </div>
        <div className="product-list">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}   
        </div>
    </div>
  )
}

export default ProductList