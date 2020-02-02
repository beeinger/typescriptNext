import "bootstrap-css-only/css/bootstrap.min.css";
import "../css";
import Size from "../containers/size";

export default function MyApp({ Component, pageProps }) {
  return (
    <Size.Provider>
      <Component {...pageProps} />
    </Size.Provider>
  );
}
