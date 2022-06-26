module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    jsx: true, // Enable JSX since we're using React
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'eslint-plugin-react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'no-console': 2,
    'no-unused-vars': 'off',
    'no-var': 2,
    'prefer-template': 2,
    eqeqeq: 2,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'simple-import-sort/imports': [
      2,
      {
        groups: [['^react', '^@?\\w'], ['^@?\\w'], ['^\\.'], ['^.+\\.css$']],
      },
    ],
    'simple-import-sort/exports': 2,
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: false }],
  },
};
