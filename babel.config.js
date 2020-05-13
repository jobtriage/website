module.exports = {
  presets: [
    [
      'next/babel',
    ],
    ['@emotion/babel-preset-css-prop'],
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        'babel-plugin-transform-dynamic-import',
      ],
    },
    e2e:{
      plugins: ['istanbul']
    }
  },
};
