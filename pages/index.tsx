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
    size = sizeContainer.changeSize(height, width)
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
