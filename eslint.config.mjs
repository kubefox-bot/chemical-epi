import vue from "eslint-plugin-vue"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import vueParser from "vue-eslint-parser"

export default [
  {
    ignores: ["**/.nuxt/**", "**/node_modules/**", "**/dist/**", "**/.output/**"],
  },
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]
