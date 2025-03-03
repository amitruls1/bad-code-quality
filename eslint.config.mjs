// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules", ".next", "dist", "coverage", "*.test.ts"],
  },
  ...compat.extends(
    // "next/core-web-vitals", // You can comment out to speed up and later uncomment and test for individual rules.
    "next/typescript",
    "plugin:prettier/recommended"
  ),
];

export default eslintConfig;
