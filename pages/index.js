import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BookItem from "../components/BookItem";
import { bookData } from "../contexts/bookData";

export default function Home({ books }) {
  return (
    <Container fluid>
      <Row>
        {books.map((book) => (
          <Col sm={6} md={4} lg={3} key={book.id}>
            <BookItem book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export async function getStaticProps() {
  const books = bookData;
  return {
    props: { books },
  };
}
