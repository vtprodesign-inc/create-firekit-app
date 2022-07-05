module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "max-len": ["error", {"code": 80, "comments": 120}],
  },
};
