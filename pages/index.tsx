import { StickyContainer } from "react-sticky";
import Size from "../containers/size";
import Layout from "../components/Layout";
import { Home } from "../components/Segments";
import Header from "../components/Header";

export default function Main() {
  let size = Size.useContainer();

  return (
    <Layout>
      <Home size={size.size} />
      <StickyContainer>
        <Header />
      </StickyContainer>
    </Layout>
  );
}
