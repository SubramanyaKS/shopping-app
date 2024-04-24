import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from '../assets/men.png';
import { ChevronRight } from "react-bootstrap-icons";
import { mainpagedata } from "../utils/data";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="starter-page p-3">
        <Container>
          <Row>
            <Col>
            <h1 className="fs-1 text-bluepurple text-cursive text-justify p-3">{mainpagedata.heading}</h1>
            <h6 className="lh-lg p-3 text-justify details">{mainpagedata.details}</h6>
            <button onClick={()=>navigate("/product")} className="product-btn p-3 w-25">Shop Now <ChevronRight /></button>
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