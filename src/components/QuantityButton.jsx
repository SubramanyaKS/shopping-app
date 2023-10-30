/* eslint-disable react/prop-types */
import { useCart } from '../contexts/CartContext';

const QuantityButton =({productid,quantity}) =>{
  const {cartDispatch} = useCart();
  // console.log(cartState.cartItems);
  // Function to handle increasing the quantity
  const increaseQuantity = () => {
    // console.log('Increasing quantity for product:', productid);
    // setQuantity(quantity + 1);
    cartDispatch({ type: 'INCREASE_QUANTITY', payload: productid });

  };

  // Function to handle decreasing the quantity
  const decreaseQuantity = () => {
    // console.log('Decreasing quantity for product:', productid);
    // Ensure the quantity doesn't go below 1
    cartDispatch({ type: 'DECREASE_QUANTITY', payload: productid });
  };

  return (
    <div>
      <button className="quantity-button" onClick={()=>decreaseQuantity()}> - </button>
      <span>{quantity}</span>
      <button className="quantity-button" onClick={()=>increaseQuantity()}>+</button>
    </div>
  );
}

export default QuantityButton;
