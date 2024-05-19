module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['alloy', 'alloy/typescript'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-void': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-useless-constructor': 'off',
    'no-param-reassign': 'off',
    'default-case-last': 'off',
    'no-useless-backreference': 'off',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-invalid-this': 'off'
  }
};
