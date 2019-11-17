import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Component } from "react";
import { Home } from "../components/Segments";
import { StickyContainer } from "react-sticky";
import Header from "../components/Header";

type State = {
  size: boolean | "large" | "medium" | "small";
};

export default class Main extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { size: false };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    const height = window.innerHeight;
    const width = window.innerWidth;
    if (height - width < 0) {
      size = "large";
    } else if (height - width > 100 && height < 820) {
      size = "small";
    } else {
      size = "medium";
    }
    sizeContainer.changeSize(size);
    this.setState({ size: size });
  }
  render() {
    return (
      <Layout>
        <Home size={this.state.size} />
        <StickyContainer>
          <Header />
        </StickyContainer>
      </Layout>
    );
  }
}
