import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../public/main.css";
import type { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
