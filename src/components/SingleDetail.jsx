/* eslint-disable react/prop-types */
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import { Cart3 } from "react-bootstrap-icons";
import { showCustomToast } from "../utils/toast";

const SingleDetail = ({ article }) => {
  const {cartDispatch} = useCart();
  const addToCart = (product)=>{
    showCustomToast(`${product.title} is added to cart`,'success-toast');
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  }
  return (
    <Container>
      <Row className="p-3">
        <Col>
          <Image src={article.image} width={200} height={200} />
        </Col>
        <Col>
          <div>
            <h2 className="text-primary">{article.title}</h2>

            <h6><span className="badge bg-success">{article.rating.rate} &#9733;</span> {article.rating.count} reviews</h6>
            <h4 className="mt-4">$ {article.price}</h4>
            <p className="lh-lg">{article.description}</p>
            <p><b>Category: </b>{article.category}</p>
            <p><b>Avalable Stock: </b>4</p>
            <Button onClick={()=>addToCart(article)} variant="outline-primary"><Cart3/> Add to Cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleDetail;
