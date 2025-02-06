import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";

// eslint.config.js
export default [
  {
    files: ["controllers/", "middleware/", "routes/", "services/"], // Specify the files to lint
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Use ECMAScript modules
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
      "no-debugger": "error",
    },
    ignorePatterns: ["node_modules", "dist", "build"],
  },
];