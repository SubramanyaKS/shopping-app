import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from '../assets/men.png';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="starter-page p-3">
        <Container>
          <Row>
            <Col>
            <h1 className="fs-1 text-primary text-justify p-3">Discover, Shop, and Experience a World of Products at Your Fingertips </h1>
            <h6 className="lh-lg p-3 text-justify">Welcome to our e-commerce paradise, where you &apos; ll find a curated selection of the latest trends in fashion, electronics, home decor, and more. Our mission is to make online shopping a delightful experience, offering high-quality products, seamless transactions, and exceptional customer service. Join us on this shopping journey and elevate your lifestyle with every click</h6>
            <button onClick={()=>navigate("/product")} className="product-btn">Shop Now -&gt;</button>
            </Col>
            <Col>
              <Image src ={img} alt="model" style={{ maxWidth: '100%', height: 'auto' }}/>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Main