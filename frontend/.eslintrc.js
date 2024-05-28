module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'testing-library/no-debug': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'functional/no-conditional-statement': 0,
    'functional/no-expression-statement': 0,
    'functional/immutable-data': 0,
    'functional/functional-parameters': 0,
    'functional/no-try-statement': 0,
    'functional/no-throw-statement': 0,
    'arrow-body-style': ['error', 'as-needed'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

// module.exports = {
//   'env': {
//     'node': true,
//     'browser': true,
//     'es2021': true,
//   },
//   'extends': [
//     'eslint:recommended',
//     'plugin:react/recommended'
//     ],
//   'overrides': [
//   ],
//   'parserOptions': {
//     'ecmaVersion': 'latest',
//     'sourceType': 'module',
//   },
//   'plugins': [
//     'react',
//   ],
//   'rules': {
//     'react/prop-types': 0,
//     'import/extensions': 0,
//     'import/no-unresolved': 0,
//     'no-console': 0,
//     'react/react-in-jsx-scope': 0,
//     'no-underscore-dangle': [2, { "allow": ["__filename", "__dirname"] }],
//     'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
//     'testing-library/no-debug': 0,
//     'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
//     'functional/no-conditional-statement': 0,
//     'functional/no-expression-statement': 0,
//     'functional/immutable-data': 0,
//     'functional/functional-parameters': 0,
//     'functional/no-try-statement': 0,
//     'functional/no-throw-statement': 0,
//     'arrow-body-style': ["error", "as-needed"],

//   },
//   'settings': {
//     'react': {
//       'version': 'detect',
//     },
//   },
// };
