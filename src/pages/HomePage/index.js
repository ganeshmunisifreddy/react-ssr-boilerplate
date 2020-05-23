import React from "react";
import image from "../../images/react-ssr.jpg";
import { Helmet } from "react-helmet";

const metaTagsRenderer = () => {
  return (
    <Helmet>
      <title>Webpack Tuts</title>
    </Helmet>
  );
};

const HomePage = () => {
  return (
    <div>
      {metaTagsRenderer()}
      <h1>React App</h1>
      <img src={image} alt="react-ssr" />
    </div>
  );
};

export default HomePage;
