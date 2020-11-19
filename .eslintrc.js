const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'eslint:recommended',
    'react-app/jest',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ['prettier', 'json', 'react', 'jsx-a11y', 'flowtype', 'import'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',

    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',

    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/no-deprecated': 'warn',
    'react/require-default-props': 'warn',
    'react/sort-comp': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/default-props-match-prop-types': 'warn',

  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
