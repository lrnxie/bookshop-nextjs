import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { CartContext } from "../contexts/CartContext";

const Book = ({ book }) => {
  const { cart, addCart } = useContext(CartContext);
  const [isAdded, setAdded] = useState(
    cart.some((item) => item.id === book.id)
  );

  const handleClick = () => {
    setAdded(true);
    addCart(book);
  };

  return (
    <Card className="my-2 mx-auto">
      <Card.Img className="card-img mt-1" variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          by {book.author}
        </Card.Subtitle>
        <Card.Text>${book.price}</Card.Text>
        <Button variant="primary" disabled={isAdded} onClick={handleClick}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
