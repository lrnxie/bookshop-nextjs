import Head from "next/head";

import Navbar from "react-bootstrap/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookshop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar variant="light" bg="light">
        <Navbar.Brand>Bookshop</Navbar.Brand>
      </Navbar>
    </div>
  );
}
