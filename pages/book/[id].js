import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";

import { getAllBookIds, getBookInfo } from "../../contexts/bookData";
import { CartContext } from "../../contexts/CartContext";

export default function Book({ bookInfo }) {
  const { cart, addCart } = useContext(CartContext);
  const [isAdded, setAdded] = useState(
    cart.some((item) => item.id === bookInfo.id)
  );

  const handleClick = () => {
    setAdded(true);
    addCart(bookInfo);
  };

  return (
    <div className="m-2 d-flex flex-column flex-sm-row">
      <img className="info-img" src={bookInfo.cover} alt="book cover" />
      <div className="m-2">
        <h3>{bookInfo.title}</h3>
        <h6 className="text-muted">by {bookInfo.author}</h6>
        <h5 className="text-info">$ {bookInfo.price}</h5>
        <p>{bookInfo.summary}</p>
        <Button variant="info" disabled={isAdded} onClick={handleClick}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllBookIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bookInfo = getBookInfo(params.id);
  return {
    props: {
      bookInfo,
    },
  };
}
