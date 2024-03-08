module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react/jsx-runtime",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "testing-library",
    "jest-dom",
    "html"
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error"
  },
};
