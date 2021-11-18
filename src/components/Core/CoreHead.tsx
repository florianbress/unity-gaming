import Head from "next/head";
import React from "react";

interface CoreHeadProps {}

const CoreHead = (props: CoreHeadProps) => {
  return (
    <Head>
      <title>Unity Gaming</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default CoreHead;
