import React, { Component } from "react";
import { Segment } from "..";
import Large from "./Large";
import Small from "./Small";
import Medium from "./Medium";

type Props = {
  size: "large" | "medium" | "small" | boolean;
};

export default class Home extends Component<Props, {}> {
  render() {
    const { size } = this.props;
    return (
      <Segment>
        <>
          {size == "large" ? (
            <Large />
          ) : (
              <Small />
            )}
          <style jsx>
            {`
              #home {
                font-size: 5vh;
                text-align: center;
                background-color: rgb(112, 182, 241);
              }
            `}
          </style>
        </>
      </Segment>
    );
  }
}
