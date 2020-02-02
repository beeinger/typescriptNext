import React, { useEffect } from "react";
import Head from "next/head";
import Size from "../../containers/size";

type Props = {
  children: any;
};

export default function Layout(props: Props) {
  const { children } = props;
  let size = Size.useContainer();

  useEffect(() => {
    const [height, width] = [window.innerHeight, window.innerWidth];
    size.changeSize(height, width);
  }, []);

  return (
    <>
      <Head>
        <title>Boilerplate of Next.js PWA with typescript</title>
      </Head>
      {children}
    </>
  );
}
