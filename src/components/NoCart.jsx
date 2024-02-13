import { Cart4 } from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";

const NoCart = () => {
    const navigate = useNavigate();
  return (
    <div className='no-cart'>
        <Cart4  style={{
          width: '50%', 
          height: '100px',
          margin:'1%',
        }}/>
        <h4 className='text-violet text-cursive'>There is no items in your cart.</h4>
        <h6>Please add the products which you like.</h6>
        <button className="p-2 m-2 buttond text-light border-0 rounded-pill " onClick={()=>navigate('/product')}>Add the Product</button>
    </div>
  )
}

export default NoCart