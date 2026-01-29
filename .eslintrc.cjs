module.exports = {
  // extends the configuration
  extends: [
    'eslint:recommended', // preset set of rules created by ESLint to catch common coding mistakes and help write cleaner, error-free JavaScript code
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/eslint-recommended', // disable those rules that conflict with typescript
    'plugin:@typescript-eslint/recommended', // preset set of rules for typescript code
    'prettier', // turns off rules that might conflict with Prettier, allowing ESLint and Prettier to work together seamlessly
  ],
  // indicates that this is the root configuration file
  root: true,
  // eslint by default doesn't understand typescript sintax
  // so we need to set a typescript parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 'es2020',
    lib: ['es2020'],
  },
  // eslint by default lint all files with extension js, cjs and mjs
  // with this property we are going to exclude those directories that don't need linting
  ignorePatterns: ['dist/**/*', 'node_modules/**/*', '.yarn/**/*'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  rules: {
    // curly brackets are required for blocks like if, else, for, while and do
    curly: 'error',
  },
  // these are configurations available to each plugin
  settings: {
    // we are telling to detect the version of react
    react: {
      version: 'detect',
    },
  },
};

/*


rules: {
    'no-case-declarations': 'off', // default
    'no-inner-declarations': 'off', // default
    'prefer-const': 'error', // default
    curly: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
        },
      },
    ],
    radix: 'error',
    'one-var': ['error', 'never'],
    'object-shorthand': 'error',
    'no-var': 'error',
    'no-param-reassign': 'error',
    'no-underscore-dangle': 'error',
    'no-undef-init': 'error',
    'no-throw-literal': 'error',
    'no-new-wrappers': 'error',
    'no-eval': 'error',
    'no-console': 0,
    // TODO ['error', { 'allow': ['error', 'warn'] }],
    'no-caller': 'error',
    'no-bitwise': 'error',
    eqeqeq: ['error', 'smart'],
    'max-classes-per-file': ['error', 1],
    'guard-for-in': 'error',
    complexity: 'error',
    'arrow-body-style': 'error',
    'import/order': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    // Enable if we want to enforce the return type for all the functions
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    // TODO: added for compatibility. Removing this line we have to remove all the any usage in the code
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/unified-signatures': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**\/*.test.*'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],


*/
