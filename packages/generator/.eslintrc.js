const path = require("path");

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-bridge-tools`
  extends: ["bridge-tools"],

  ignorePatterns: [".eslintrc.js", "babel.config.js"],

  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],

  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
};
