import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
