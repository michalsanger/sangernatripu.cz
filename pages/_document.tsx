import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { SetupGoogleAnalytics } from "../lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <SetupGoogleAnalytics />
          <link rel="stylesheet" href="/foundation.min.css" />
          <style jsx global>{`
            a {
              text-decoration: underline;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
