const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const webpack = require("webpack");
const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

if (!isDevelopment && !isProduction) {
  throw new Error("You need to set the NODE_ENV environment variable");
}

module.exports = {
  mode: isProduction ? "production" : isDevelopment ? "development" : "none",
  entry: "./src/index.bs.js",
  output: {
    filename: "[name]_[fullhash].js",
    path: path.join(__dirname, "..", "dist"),
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, ".."),
      manifest: path.join(__dirname, "..", "dist", "vendor-manifest.json"),
    }),
    new HtmlWebpackPlugin(),
    new HtmlWebpackTagsPlugin({
      tags: [
        {
          path: "",
          glob: "vendor_*.js",
          globPath: path.join(__dirname, "..", "dist"),
          append: false,
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "..", "dist"),
  },
};
