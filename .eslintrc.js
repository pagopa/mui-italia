module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "ignorePatterns": [
        "node_modules",
        "generated",
        "**/__tests__/*",
        "**/__mocks__/*",
        "**/typings-checker/*",
        "Dangerfile.*",
        "*.d.ts"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module",
        "warnOnUnsupportedTypeScriptVersion": false
    },
    "extends": [
        "@pagopa/eslint-config/strong",
    ],
    "rules":  {
        "@typescript-eslint/ban-types": [
          "error",
          {
            "extendDefaults": true,
            "types": {
              "{}": false
            }
          }
        ]
      }
}
