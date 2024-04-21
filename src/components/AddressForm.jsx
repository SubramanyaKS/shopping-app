/* eslint-disable react/prop-types */
import { Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddressForm = ({OnClick}) => {
  return (
    <Container className='d-flex justify-content-center align-items-center shadow-lg p-2'>
        <Form className='m-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Row>
            <Form.Group as={Col} className="mb-3 mr-3" controlId="exampleForm.ControlInput2">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="firstname" />
            </Form.Group>
            <Form.Group as={Col} className="mb-3 mr-3 ml-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="lastname" />
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Country</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Container className='d-flex justify-content-center align-items-center '>
      <button onClick={()=>OnClick()} className="buttond p-2 w-25">Submit</button>
      </Container>

        </Form>


    </Container>
  )
}

export default AddressForm