import React from "react";
import Head from "next/head";
import { NextComponentType } from "next";

type Props = {
  Component: NextComponentType;
  pageProps: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <>
      <Head>
        <title>Sänger na tripu</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
