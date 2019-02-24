const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withTypescript(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      modules: true,
      cssModules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
    },
    target: 'serverless',
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    webpack: (config) => {
      config.resolve.modules = ['node_modules', '.']
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
      }

      config.module.rules.push(
        {
          test: /\.(woff2|woff?|otf|ttf|eot)$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
          use: ['dsv-loader'] // or dsv-loader?delimiter=,
        }
      );

      return config;
    }
  })
)
