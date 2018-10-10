
const { compose, injectBabelPlugin } = require('react-app-rewired');
const rewireESLint = require('react-app-rewire-eslint');
const rewireLess = require('react-app-rewire-less');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

const antdThemeOverrides = require('./antd.theme.overrides');


module.exports = compose(
  rewireESLint,
  config => injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config),
  rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: antdThemeOverrides,
  }),
  rewireReactHotLoader
);