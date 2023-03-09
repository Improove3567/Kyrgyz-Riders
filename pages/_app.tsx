import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../src/firebase/firebase-config";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
