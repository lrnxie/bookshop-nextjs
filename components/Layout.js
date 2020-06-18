import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { CartContext } from "../contexts/CartContext";

export default function Layout({ children }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Bookshop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar variant="light" bg="light">
        <Link href="/">
          <Navbar.Brand style={{ cursor: "pointer" }}>Bookshop</Navbar.Brand>
        </Link>
        <Link href="/cart">
          <Button className="ml-auto" variant="outline-primary">
            Cart{" "}
            <Badge variant="secondary">{cart.length > 0 && cart.length}</Badge>
          </Button>
        </Link>
      </Navbar>

      {children}
    </>
  );
}
