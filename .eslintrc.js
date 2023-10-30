export default {
    env: {
      browser: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "stylelint",
    ],
    overrides: [
      {
        // 这个特定的覆盖配置仅适用于 node.js 环境
        env: {
          node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
          sourceType: "script", // 使用 CommonJS 模块
        },
      },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // 使用 ES 模块
    },
    plugins: ["@typescript-eslint"],
    rules: {
      indent: ["error", "tab"],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  };
  