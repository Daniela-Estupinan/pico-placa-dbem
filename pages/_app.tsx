import "./app.css";

import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Revisar Pico y Placa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
