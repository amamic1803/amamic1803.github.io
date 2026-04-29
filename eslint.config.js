import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";

export default defineConfig([
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        extends: [js.configs.recommended, eslintReact.configs.recommended],
    },
    eslintConfigPrettierFlat,
]);
