import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactDom from "eslint-plugin-react-dom";
import reactX from "eslint-plugin-react-x";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
  [
    globalIgnores(["dist"]),
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        js.configs.recommended,
        ...tseslint.configs.strictTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
        reactDom.configs.recommended,
        reactX.configs["recommended-typescript"],
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
  ],
  storybook.configs["flat/recommended"],
);
