/* eslint-disable react/prop-types */

import { CartFill } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <CartFill className='mt-2'/>
      <Badge pill bg=""   className="cart-badge">
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartIcon;
