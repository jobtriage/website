module.exports = {
  presets: [
    [
      'next/babel',
    ],
    ['@emotion/babel-preset-css-prop'],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-transform-dynamic-import',
  ],
};
