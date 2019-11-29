import { Container } from "unstated";

type State = {
  size: boolean | "large" | "medium" | "small";
};

export class SizeContainer extends Container<State> {
  constructor() {
    super();
    this.state = { size: false };
  }

  changeSize(height: number, width: number) {
    var size: "large" | "medium" | "small"
    if (height - width < 0) {
      size = "large";
    } else if (height - width > 100 && height < 820) {
      size = "small";
    } else {
      size = "medium";
    }
    this.setState({ size: size });
    return size;
  }
}

const sizeContainer = new SizeContainer();
export default sizeContainer;
