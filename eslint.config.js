import eslintPluginAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import pluginTailwindcss from "eslint-plugin-tailwindcss";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: parserTs,
        extraFileExtensions: [".astro"],
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      astro: eslintPluginAstro,
      tailwindcss: pluginTailwindcss,
      prettier: prettierPlugin
    },
    rules: {
      ...eslintPluginAstro.configs.recommended.rules,
      ...pluginTailwindcss.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error"
    }
  },

  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      tailwindcss: pluginTailwindcss,
      prettier: prettierPlugin
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      ...pluginTailwindcss.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error"
    }
  }
];
