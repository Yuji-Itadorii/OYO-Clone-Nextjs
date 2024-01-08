import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          OYO: India's Best Online Hotel Booking Site for Sanitized Stays
        </title>

        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
