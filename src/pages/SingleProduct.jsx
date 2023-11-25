// import React from 'react'
// import { useCart } from '../context/CartContext'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import SingleDetail from '../components/SingleDetail';

const SingleProduct = () => {
  // const {cartState} = useCart();
  const {products} = useProductContext();
  const {id}= useParams();
  // console.log("State",cartState);
  return (
    <div>
        {products.map((article)=>(
            <div className="mb-3" key={article.id}>
          {String(article.id)===id?
          <SingleDetail article={article} /> 
          :null}
          </div>))}
          
    </div>
  )
}

export default SingleProduct