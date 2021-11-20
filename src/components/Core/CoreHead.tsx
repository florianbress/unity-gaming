import Head from "next/head";
import React from "react";

interface CoreHeadProps {
  title: string;
}

const CoreHead = (props: CoreHeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
  );
};
export default CoreHead;
