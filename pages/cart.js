import { useContext } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cart, removeCart } = useContext(CartContext);
  const subtotal =
    cart.length > 0 &&
    cart
      .map((item) => item.price)
      .reduce((prev, next) => prev + next)
      .toFixed(2);

  const deleteItem = (id) => {
    removeCart(id);
  };

  return (
    <div className="my-2">
      <h5 className="ml-3">Shopping Cart</h5>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <Card
              key={item.id}
              className="p-2 border-top-0 border-left-0 border-right-0"
            >
              <Row noGutters className="align-items-center">
                <Col xs={1} md={2} className="d-none d-sm-block">
                  <Card.Img
                    className="card-img-cart"
                    variant="top"
                    src={item.cover}
                  />
                </Col>
                <Col xs={5} md={4}>
                  <Card.Body>
                    <Card.Text className="mb-1">{item.title}</Card.Text>
                    <Card.Text className="text-muted">
                      by {item.author}
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col xs={3} md={2}>
                  <Card.Body>
                    <Card.Text>${item.price}</Card.Text>
                  </Card.Body>
                </Col>
                <Col xs={2}>
                  <Card.Body>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      X
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}

          <Card className="p-2 border-0">
            <Row noGutters className="align-items-baseline">
              <Col xs={4} md={6}>
                <Card.Body>
                  <Card.Title className="text-center">Subtotal</Card.Title>
                </Card.Body>
              </Col>
              <Col xs={4} md={2}>
                <Card.Body>
                  <Card.Title>${subtotal}</Card.Title>
                </Card.Body>
              </Col>
              <Col xs={2}>
                <Card.Body>
                  <Link href="/checkout">
                    <Button variant="info">Checkout</Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </>
      ) : (
        <h5 className="text-center mt-4">No items yet</h5>
      )}
    </div>
  );
}
