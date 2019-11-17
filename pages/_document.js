import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Boilerplate of Next.js PWA with typescript"
          />
          <meta name="keywords" content="example, example" />
          <meta
            property="og:title"
            content="Boilerplate of Next.js PWA with typescript"
          />
          <meta
            property="og:description"
            content="Boilerplate of Next.js PWA with typescript"
          ></meta>
          <meta property="og:url" content="https://example.com/" />
          <meta property="og:image" content="/example.jpg"></meta>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="language" content="en" />
          <meta name="author" content="Maciej Sułecki" />
          <meta name="theme-color" content="#70b6f1" />
          <meta name="msapplication-TileColor" content="#70b6f1" />
          <meta name="msapplication-TileImage" content="/favicon-144.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Abel&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
