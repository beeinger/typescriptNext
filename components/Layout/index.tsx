import React, { PureComponent } from "react";
import { Provider, Subscribe } from "unstated";
import "bootstrap-css-only/css/bootstrap.min.css";
import sizeContainer from "../../containers/size";
import Head from "next/head";

type Props = {
  children: any;
};

export default class Layout extends PureComponent<Props> {

  componentDidMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    sizeContainer.changeSize(height, width);
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>Boilerplate of Next.js PWA with typescript</title>
        </Head>
        <Provider>
          <Subscribe to={[sizeContainer]}>{container => children}</Subscribe>
        </Provider>
        <style jsx global>{`
          body {
            background-color: rgb(73, 158, 249);
          }
          img {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .no-select {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}</style>
      </>
    );
  }
}
