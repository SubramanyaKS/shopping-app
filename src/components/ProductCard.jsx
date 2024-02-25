/* eslint-disable react/prop-types */
// import { CartContext, useCart } from '../context/CartContext';
// import { useContext } from 'react';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Cart2, Eye } from 'react-bootstrap-icons';
import { showCustomToast } from '../utils/toast';

const ProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const navigate = useNavigate();
  const addToCart =(product)=>{
    console.log("product",product.id);
    
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    showCustomToast(`${product.title} is added to cart`,'success-toast');
  }
  return (
    <div className="product-card">
      <img className='product-image' src={product.image} height={100} width={100} alt={product.title} />
      <h3 className='text-cursive'>{product.title}</h3>
      <h4 className='text-success'>${product.price}</h4>
      <StarRating rating={product.rating.rate} numReview={product.rating.count}/>  
      <button className='rounded m-1 gradient-button' onClick={()=>navigate(`/single/${product.id}`)}><Eye/> View Details</button>
      <button className='rounded product-btn' onClick={()=>addToCart(product)}><Cart2/> Add to Cart</button>
    </div>
  );
};

export default ProductCard;
