import { Container } from "unstated";

type State = {
  size: boolean | "large" | "medium" | "small";
};

export class SizeContainer extends Container<State> {
  constructor() {
    super();
    this.state = { size: false };
  }

  changeSize(size: "large" | "medium" | "small") {
    this.setState({ size });
    return true;
  }
}

const sizeContainer = new SizeContainer();
export default sizeContainer;
