import { AppProps } from "next/app";

import { CartContextProvider } from "../contexts/CartContext";
import Layout from "../components/Layout";
import "../style/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
