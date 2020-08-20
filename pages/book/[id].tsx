import { GetStaticProps, GetStaticPaths } from "next";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";

import { getAllBookIds, getBookInfo } from "../../contexts/bookData";
import { CartContext } from "../../contexts/CartContext";

type Props = {
  bookInfo: Book;
};

export default function Book({ bookInfo }: Props) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBookIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookInfo: Book = getBookInfo(params.id as string);
  return {
    props: {
      bookInfo,
    },
  };
};
