import { Container } from "unstated";

type State = {
  size: string;
};

export class SizeContainer extends Container<State> {
  state = { size: "false" };

  changeSize(size: "large" | "medium" | "small") {
    this.setState({ size });
    return true;
  }
}

const sizeContainer = new SizeContainer();
export default sizeContainer;
