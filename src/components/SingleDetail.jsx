/* eslint-disable react/prop-types */
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import { ChevronLeft, Cart3 } from "react-bootstrap-icons";
import { showCustomToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";
// import CustomToast from "./CustomPopup";
// import { useState } from "react";

const SingleDetail = ({ article }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openPopup = () => {
  //   setIsOpen(true);
  // };

  // const closePopup = () => {
  //   setIsOpen(false);
  // };
  const {cartDispatch} = useCart();
  const navigate = useNavigate();
  const addToCart = (product)=>{
    showCustomToast(`${product.title} is added to cart`,'success-toast');
    // openPopup();
    setTimeout(() => {
      cartDispatch({ type: "ADD_TO_CART", payload: product });
    }, 3000);
    
  }
  return (
    <Container>
      {/* <CustomToast isOpen={isOpen} onClose={closePopup}>
        <h4>{article.title} is added to cart</h4>
      </CustomToast> */}
      <Row className="p-3">
        <Col>
          <Image src={article.image} width={200} height={200} />
        </Col>
        <Col>
          <div>
            <h2 className="text-bluepurple">{article.title}</h2>

            <h6><span className="badge bg-success text-yellow">{article.rating.rate} &#9733;</span> {article.rating.count} reviews</h6>
            <h4 className="mt-4 text-magenta"><span className="text-gold">$</span> {article.price}</h4>
            <p className="lh-lg">{article.description}</p>
            <p><b className="text-magenta">Category: </b>{article.category}</p>
            <p><b className="text-magenta">Avalable Stock: </b>4</p>
            <Button onClick={()=>addToCart(article)} variant="outline-primary buttond"><Cart3/> Add to Cart</Button>
            <Button onClick={() => navigate(-1)} variant="outline-primary buttond"><ChevronLeft/> Back</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleDetail;
