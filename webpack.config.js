const path = require("path");

const TS_BASE = "./src/client/ts/";

module.exports = {
  entry: TS_BASE + "main.ts",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      //   {
      //     test: /\.(sa|sc|c)ss$/,
      //     use: [
      //       'style-loader',
      //       'css-loader',
      //       'sass-loader',
      //     ],
      //   },
    ],
  },
};
