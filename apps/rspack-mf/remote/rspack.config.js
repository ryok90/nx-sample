const { composePlugins, withNx, withReact } = require('@nx/rspack');
const path = require('path');
const { ModuleFederationPlugin } = require('@rspack/core').container;
// const {
//   ModuleFederationPlugin,
// } = require('@module-federation/enhanced/rspack');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.output.publicPath = 'auto';
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './NxWelcome': path.resolve(__dirname) + '/src/app/nx-welcome.tsx',
      },
    })
  );
  return config;
});
