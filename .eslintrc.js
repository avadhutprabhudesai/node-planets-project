module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@babel", "unicorn"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "@babel/new-cap": "error",
    "@babel/no-invalid-this": "error",
    "@babel/no-unused-expressions": "error",
    "@babel/semi": "error",
  },
};
