import React from "react";
import ReactDOM from "react-dom";
//import Root from "./Root";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Main = () => {
  return (
    <BrowserRouter>
      {/* <Root /> */}
      <App />
    </BrowserRouter>
  );
};

ReactDOM.hydrate(<Main />, document.getElementById("root"));
