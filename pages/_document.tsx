import { createGetInitialProps } from "@mantine/next";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

class MyDocument extends NextDocument {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
