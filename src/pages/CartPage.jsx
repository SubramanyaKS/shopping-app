import { useCart } from "../contexts/CartContext";
import QuantityButton from "../components/QuantityButton";
import RemoveButton from "../components/RemoveButton";
import { showCustomToast } from "../utils/toast";
import NoCart from "../components/NoCart";
import AddressForm from "../components/AddressForm";
import { useState } from "react";


const CartPage = () => {
  const { cartState, cartDispatch } = useCart();
  const [next,setNext] = useState(false)
  // Now you can access cartItems from cartState
  const { cartItems } = cartState;



  if(cartItems.length<=0){
    return <NoCart/>
  }
  

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const nextStatus = ()=>{
    setNext(!next);
  }

  const buyProduct =()=>{
    if(cartItems.length>0){
      cartDispatch({ type: 'CLEAR_CART' });
    showCustomToast("Thank You for buying, have a good day",'success-toast');
    }  
    
  }
  
  const handleClick = (product) =>{
    showCustomToast(`${product.title} is removed cart`,'failed-toast');
   setTimeout(() => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product.id });
   }, 3000);
    
  }
//   console.log(cartState);
  return (
    <div className="cart">
      <h4 className="text-center p-2 text-cursive">My Cart</h4>
      <div>
        <table className="cart-table">
          <tbody>
          <tr className="cart-header">
            <th>Product Image</th>
            <th>Product title</th>
            <th>Product price</th>
            <th>Product quantity</th>
            <th>Total Price</th>
            <th>Cancel</th>
          </tr>
          {cartItems.length>0?
          cartItems.map((product)=>(
            <tr key={product.id}>
                <td><img src={product.image} height={100} width={100} alt="produt image" /></td>
                <td>{product.title}</td>
            <td>$ {product.price}</td>
            <td><QuantityButton  productid={product.id} quantity={product.quantity}/></td>
            <td>$ {product.quantity*product.price}</td>
            {/* <td>$ {product.price* cartState.quantity}</td> */}
            <td><RemoveButton onClick={()=>handleClick(product)}/></td>
            </tr>
          )):null}
          </tbody>
        </table>
      </div>
     {!next? <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="pb-4 pt-2">
      <div className="card w-25 total shadow-lg m-2">
        <h4 className="text-cursive text-bluepurple">Order Summary</h4>
        <h6>Items: <span className="text-violet">{cartItems.length}</span></h6>
        <h6>Total Cost :<span className="text-magenta">${totalAmount}</span></h6>
        <button onClick={nextStatus} className="buttond">Proceed</button>
      </div>
      </div>
     :<AddressForm OnClick={buyProduct}/>}
    </div>
  );
};

export default CartPage;
