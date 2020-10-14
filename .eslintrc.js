module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", 콘솔안쓰면 에러뜨는메세지 지운거(원래는 지우면안된다고함)
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  overrides: [{
    files: [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)"
    ],
    env: {
      jest: true
    }
  }]
};