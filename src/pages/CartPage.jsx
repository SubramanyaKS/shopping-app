import { useCart } from "../contexts/CartContext";
import QuantityButton from "../components/QuantityButton";
import RemoveButton from "../components/RemoveButton";
import { showCustomToast } from "../utils/toast";
import 'react-toastify/dist/ReactToastify.css';
import NoCart from "../components/NoCart";


const CartPage = () => {
  const { cartState, cartDispatch } = useCart();
  // Now you can access cartItems from cartState
  const { cartItems } = cartState;

  if(cartItems.length<=0){
    return <NoCart/>
  }
  
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const buyProduct =()=>{
    if(cartItems.length>0){
      cartDispatch({ type: 'CLEAR_CART' });
    showCustomToast("Thank You for buying, have a good day",'success-toast');
    }  
    
  }
  
  const handleClick = (product) =>{
    showCustomToast(`${product.title} is removed cart`,'failed-toast');
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  }
//   console.log(cartState);
  return (
    <div className="cart">
      <h4 className="text-center p-2">My Cart</h4>
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
      <div className="card w-25 total border border-primary m-2">
        <h4>Order Summary</h4>
        <h6>Items: {cartItems.length}</h6>
        <h6>Total Cost :${totalAmount}</h6>
        <button onClick={()=>buyProduct()} className="btn btn-primary">Place Order</button>
      </div>
    </div>
  );
};

export default CartPage;
