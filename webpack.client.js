const path = require("path");

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
};
