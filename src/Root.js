import React from "react";
import Routes from "./Routes";
import { renderRoutes } from "react-router-config";

const Root = () => {
  return <div>{renderRoutes(Routes)}</div>;
};

export default Root;
