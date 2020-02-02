import React from "react";
import Home from "./Home";

type Props = {
  children?: any;
};

export default function Segment(props: Props) {
  const { children } = props;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh"
      }}
    >
      {children && children}
    </div>
  );
}

export { Home };
