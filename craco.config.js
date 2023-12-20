const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@contexts": resolvePath("./src/contexts"),
      "@components": resolvePath("./src/components"),
      "@hooks": resolvePath("./src/hooks"),
      "@assets": resolvePath("./src/assets"),
      "@globalStyle": resolvePath("./src/globalStyle.js"),
    },
  },
};
