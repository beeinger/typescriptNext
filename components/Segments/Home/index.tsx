import React, { Component } from "react";
import navbarContainer from "../../../containers/size";
import { Segment } from "..";
import Large from "./Large";
import Small from "./Small";
import Medium from "./Medium";

type Props = {
  size: "large" | "medium" | "small" | "false";
};

export default class Home extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { size } = this.props;
    return (
      <Segment>
        <div>
          {size == "large" ? (
            <Large />
          ) : size == "medium" ? (
            <Medium />
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
        </div>
      </Segment>
    );
  }
}
