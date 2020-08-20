import Link from "next/link";
import Card from "react-bootstrap/Card";

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <Link href="/book/[id]" as={`/book/${book.id}`}>
      <Card className="my-2 mx-auto book-card">
        <Card.Img className="card-img mt-1" variant="top" src={book.cover} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            by {book.author}
          </Card.Subtitle>
          <Card.Text className="text-info">${book.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BookItem;
