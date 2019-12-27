module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-proposal-function-bind"],
  env: {
    cjs: {
      plugins: ["transform-es2015-modules-commonjs"]
    },
    test: {
      plugins: ["transform-es2015-modules-commonjs"]
    }
  }
};
