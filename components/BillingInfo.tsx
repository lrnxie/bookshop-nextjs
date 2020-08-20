import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BillingInfo: React.FC = () => {
  return (
    <>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control required name="customer" placeholder="John Doe" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="john@example.com"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Address
        </Form.Label>
        <Col sm={10}>
          <Form.Control required name="address" placeholder="1 Yonge St." />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          City
        </Form.Label>
        <Col sm={10}>
          <Form.Control required name="city" placeholder="Toronto" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Province
        </Form.Label>
        <Col sm={10}>
          <Form.Control required name="province" placeholder="Ontario" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Postal Code
        </Form.Label>
        <Col sm={10}>
          <Form.Control required name="postal" placeholder="A1A 1A1" />
        </Col>
      </Form.Group>
    </>
  );
};

export default BillingInfo;
