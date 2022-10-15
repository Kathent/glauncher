const htmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    name: "app",
    mode: "development",
    entry: "./src/main.js",
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          exclude: /node_modules/,
          use: [{ loader: "file-loader" }],
        },
      ],
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
    },
    plugins: [
      new htmlPlugin({
        template: "index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
  },
];
