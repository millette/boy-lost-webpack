module.exports = {
  entry: [
    './entry.js',
    'file?name=index.html!jade-html!./index.jade'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 1234
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: [
    require('postcss-responsive-type')(),
    require('lost'),
    require('autoprefixer')
  ]
}
