import { useContext } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const getOrderItems = () => {
    return cart.map((item) => item.amount).reduce((prev, next) => prev + next);
  };

  const getOrderTotal = () => {
    return cart
      .map((item) => item.price * item.amount)
      .reduce((prev, next) => prev + next)
      .toFixed(2);
  };

  return (
    <Container fluid className="mt-2 mb-4">
      <Row className="ml-1">
        <h4>Shopping Cart</h4>
      </Row>

      {cart.length > 0 ? (
        <Row className="my-2">
          <Col md={8}>
            <div>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          </Col>

          <Col md={4}>
            <Card className="px-2 py-3">
              <div className="inline">
                <Card.Title>Order Summary</Card.Title>
                <Card.Title>{getOrderItems()} Items</Card.Title>
              </div>
              <div className="inline">
                <Card.Title>Order Total</Card.Title>
                <Card.Title>${getOrderTotal()}</Card.Title>
              </div>
              <Link href="/checkout">
                <Button variant="info" className="mt-3">
                  Checkout
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      ) : (
        <h5 className="text-center mt-4">No items yet</h5>
      )}
    </Container>
  );
}
