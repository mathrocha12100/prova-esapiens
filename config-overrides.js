const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: 'src',
          rootPathPrefix: '~/',
        },
        {
          rootPathSuffix: 'src/services',
          rootPathPrefix: '@services/',
        },
        {
          rootPathSuffix: 'src/utils',
          rootPathPrefix: '@utils/',
        },
        {
          rootPathSuffix: 'src/interfaces',
          rootPathPrefix: '@interfaces/',
        },
        {
          rootPathSuffix: 'src/hooks',
          rootPathPrefix: '@hooks/',
        },
        {
          rootPathSuffix: 'src/functions',
          rootPathPrefix: '@functions/',
        },
        {
          rootPathSuffix: 'src/components',
          rootPathPrefix: '@components/',
        },
        {
          rootPathSuffix: 'src/styles',
          rootPathPrefix: '@styles/',
        },
        {
          rootPathSuffix: 'src/layouts',
          rootPathPrefix: '@layouts/',
        },
      ],
    },
  ])
);
