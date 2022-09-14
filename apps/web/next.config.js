const withTM = require("next-transpile-modules")(["geniesmart-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
