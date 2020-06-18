import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout";
import { bookData } from "../contexts/bookData";

export default function Home({ books }) {
  return (
    <Layout>
      <Container fluid>
        <Row>
          {books.map((book) => (
            <Col sm={6} md={4} lg={3} key={book.id}>
              <Card className="my-2 mx-auto">
                <Card.Img
                  className="card-img mt-1"
                  variant="top"
                  src={book.cover}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    by {book.author}
                  </Card.Subtitle>
                  <Card.Text>${book.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const books = bookData;
  return {
    props: { books },
  };
}
