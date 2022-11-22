const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlWebpackConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/src/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = ({ mode } = { mode: "production" }) => {
  return {
    mode: "development",
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '../Utilities/Platform': 'react-native-web/dist/exports/Platform'
      }
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 600000
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist")
      },
      compress: true,
      port: 9000
    }
  }
};