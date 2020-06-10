const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const absolutePaths = [path.join(__dirname, "../micro-app"), path.join(__dirname, "../sentry")];
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePaths];
      }
      return webpackConfig;
    }
  }
};
