import tailwindConfig from "tailwind.config";

// Import the Expo superclass which has support for PostCSS.
const { FileStore } = require("@expo/metro-config/file-store");

tailwindConfig.cacheStores = [
  new FileStore({
    root: "/path/to/custom/cache",
  }),
];

module.exports = tailwindConfig;
