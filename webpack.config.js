// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
let path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
let HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
let CopyPlugin = require('copy-webpack-plugin')

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    preferRelative: true,
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    // new CopyPlugin({
    //   patterns: [
    //       { from: 'public', to: '' }
    //   ]
    // })
  ]
}
