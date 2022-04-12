// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/card-app" : "",
  assetPrefix: isProd ? "/card-app/" : "",
};
