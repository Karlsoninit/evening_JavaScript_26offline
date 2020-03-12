const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugins = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugins({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(ttf|woff)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" }
    ]
  }
};
