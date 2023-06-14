module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  // extends: ["next", "turbo", "prettier"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "turbo",
    "plugin:tailwindcss/recommended", "prettier"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
