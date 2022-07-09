import "./app.css";

import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Control Pico y Placa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
