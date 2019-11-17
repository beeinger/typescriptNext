import React, { Component } from "react";
import Home from "./Home";

type Props = {
  children?: any;
};

class Segment extends Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          maxWidth: "100vw",
          maxHeight: "100vh"
        }}
      >
        {children}
      </div>
    );
  }
}

export { Home, Segment };
