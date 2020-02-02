import React from "react";
import Segment from "..";
import Large from "./Large";
import Small from "./Small";
import Medium from "./Medium";

type Props = {
  size: "large" | "medium" | "small" | boolean;
};

export default function Home(props: Props) {
  const { size } = props;
  return (
    <Segment>
      <>
        {size == "large" ? (
          <Large />
        ) : size == "medium" ? (
          <Medium />
        ) : (
          <Small />
        )}
      </>
    </Segment>
  );
}
