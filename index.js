module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'globals': {
    '__DEV__': true,
  },
  'rules': {
    'react/no-multi-comp': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-closing-bracket-location': [
      'error', {
        'selfClosing': 'line-aligned',
        'nonEmpty': 'after-props'
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'global-require': 'off',
    'indent': ['error', 2],
    'no-await-in-loop': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
  },
  'plugins': [
    'react',
  ],
}
