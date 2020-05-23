import "@babel/polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import App from "./App";

const app = express();
const port = process.env.port || 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
