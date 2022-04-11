// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: "/card-ap/",
  assetPrefix: isProd ? "/card-ap/" : "",
};
