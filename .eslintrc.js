module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-filename-extension': 0,
        'arrow-parens': 0,
        'arrow-body-style': 0,
        'react/jsx-props-no-spreading': 0,
        'no-restricted-syntax': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/react-in-jsx-scope': 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "react/forbid-prop-types": 0
    },
};