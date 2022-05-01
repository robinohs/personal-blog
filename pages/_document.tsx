import { createGetInitialProps } from "@mantine/next";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

class MyDocument extends NextDocument {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css"></link>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
