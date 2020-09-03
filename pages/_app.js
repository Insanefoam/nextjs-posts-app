import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../public/main.css";

const CustomApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
