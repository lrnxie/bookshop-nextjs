import "../style/index.css";

import { CartContextProvider } from "../contexts/CartContext";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
