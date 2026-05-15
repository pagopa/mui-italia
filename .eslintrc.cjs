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
    // space after comments are required
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
        },
      },
    ],
    // when using parseInt the second parameter (radix) is required
    radix: 'error',
    // we are forced to define one variable per line, avoinding code like const a = 1, b = 2
    'one-var': ['error', 'never'],
    // we are forced to use shortened syntax when defining objects where a property
    // and the var that we are assigning to it has the same name
    'object-shorthand': 'error',
    // prohibits the use of var
    'no-var': 'error',
    // prohibits the modification of the parameters of a function
    'no-param-reassign': 'error',
    // prohibits the usage of _ at the start of the name of a variable, property or private method
    'no-underscore-dangle': 'error',
    // shows an error if a let or a var variable is decleared making explicit the valorization to undefined
    // (i.e let test = undefined; instead of let test;)
    // const variables are not affected by this rule
    'no-undef-init': 'error',
    // prohibits the throwing of literals (i.e. throw "this is an error")
    // and prefers the throwing an Error (i.e throw new Error("this is an error"))
    'no-throw-literal': 'error',
    // prohibits the usage of new before String, Number and Boolean
    'no-new-wrappers': 'error',
    // prohibits the usage of eval function
    'no-eval': 'error',
    // prohibits the usage of console function at every level (logs, warn, info and error)
    'no-console': ['error', { allow: ['error'] }],
    // prohibits the usage of caller or callee
    'no-caller': 'error',
    // prohibits the usage of the bit operators (&, |, ^, ~, <<, >> and >>>)
    'no-bitwise': 'error',
    // enforce the using of === over == except for checks like a == null that is equal to (a === null || a === undefined)
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // allow max one class per file
    'max-classes-per-file': ['error', 1],
    // when using the for...in cycle, we must add an if that check that the object owns the property (using the method Object.hasOwn)
    // this is needed to avoid to cycle on inherited properties (i.e. those defined in prototype)
    'guard-for-in': 'error',
    // set to 18 the max allowed complexity
    complexity: ['error', 18],
    // prohibits the usage of curly brackets and return in the arraow functions that have only one expression
    // i.e. () => 'hello'
    'arrow-body-style': 'error',
    // force to write imports in a specific order
    'import/order': 'error',
    // force using the const declaration, if a variable is never reassigned
    'prefer-const': [
      'error',
      {
        destructuring: 'any', // if any variables in destructuring should be const, this rule warns for those variable
      },
    ],
    // we use the typescript version
    // semi: 'off',
    // 'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    // ------------------------------------------------------------ TypeScript rules ------------------------------------------------------------
    '@typescript-eslint/no-unused-vars': 'error',
    // enable if we want to enforce the return type for all the functions
    // requires defining the return of exported functions (here is disabled)
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // force to use generics for the array definition (i.e. Array<string> instead of string[])
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    // prohibits the usage of await if function or variable isn't a promise
    '@typescript-eslint/await-thenable': 'error',
    // force the usage of "value as Type" instead of "<Type>value"
    '@typescript-eslint/consistent-type-assertions': 'error',
    // force to use object.property insteaad of object[property]
    '@typescript-eslint/dot-notation': 'error',
    // force the usage of semicolon in the interface and types definition
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
    // requires using await or catch with promises
    '@typescript-eslint/no-floating-promises': 'error',
    // prohibits the usage of expressions that do nothing
    // let i = 0;
    // function increment() { i += 1; }
    // increment(); -> return value is unused, but i changed as a side effect
    '@typescript-eslint/no-unused-expressions': ['error'],
    // prefer the usage of function type over object type with signature
    // interface Example { (): string; } -> wrong
    // type Example = () => string; -> correct
    '@typescript-eslint/prefer-function-type': 'error',
    // the plus operator can be used only if both member are numbers or strings
    '@typescript-eslint/restrict-plus-operands': 'error',
    // force the use of semicolon at the and of a statement
    '@typescript-eslint/semi': ['error'],
    // show an error if there are overloaded method definitions that can be merged into one definition with optional parameters
    '@typescript-eslint/unified-signatures': 'error',
    // show an error if a condition (like if or an operator) is useless
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // ------------------------------------------------------------ React rules ------------------------------------------------------------
    // the check on the types of the properties is demanded to Typescript
    'react/prop-types': 'off',
    // force to name components
    'react/display-name': 'error',
    // shows error if we missed to set property key when using .map()
    'react/jsx-key': 'error',
    // prohibits to create functions directly in the tsx (i.e. onClick={this.ttestFunction.bind(this)})
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    // prohibits to use hooks inside if, for or functions
    'react-hooks/rules-of-hooks': 'error',
    // both rules make not required the import of React at the start of each tsx file
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // show a warning when a variable or a property is used inside hooks and it is not declared in the dependencies array
    'react-hooks/exhaustive-deps': 'warn',
    // requires self-closing tag, if a component doesn't have children
    'react/self-closing-comp': 'error',
  },
  // these are configurations available to each plugin
  settings: {
    // we are telling to detect the version of react
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.stories.tsx', 'build.mjs'],
      rules: {
        'no-console': 'off',
      },
    },
    { files: ['./src/types/images.d.ts'], rules: { '@typescript-eslint/no-explicit-any': 'off' } },
  ],
};
