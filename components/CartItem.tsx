import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { CartContext } from "../contexts/CartContext";

interface CartItemProps {
  item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeCart, updateAmount } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(item.price * item.amount);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAmount = +e.target.value;
    setSubtotal(item.price * newAmount);
    updateAmount(item.id, newAmount);
  };

  const deleteItem = (id: string) => {
    removeCart(id);
  };

  return (
    <Card className="mt-2 border-0">
      <Row noGutters className="align-items-center">
        <Col md={4}>
          <Card.Img className="card-img" variant="top" src={item.cover} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>
              {item.title}
              <Button
                variant="outline-danger"
                onClick={() => deleteItem(item.id)}
                style={{ position: "absolute", right: 0 }}
              >
                x
              </Button>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              by {item.author}
            </Card.Subtitle>
            <Card.Text>${item.price}</Card.Text>

            <div className="inline">
              <Form.Group>
                <Form.Control
                  as="select"
                  value={item.amount}
                  onChange={handleChangeAmount}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Form.Control>
              </Form.Group>

              <Card.Subtitle>Subtotal: ${subtotal}</Card.Subtitle>
            </div>
          </Card.Body>
        </Col>
      </Row>
      <hr />
    </Card>
  );
};

export default CartItem;
