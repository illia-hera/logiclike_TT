const path = require('path');

const outputConfig = {
    destPath: "./dist"
};

// Entry points
// https://webpack.js.org/concepts/entry-points/ 
const entryConfig = [
    "./src/index.ts",
    "./src/assets/stylesheets/app.scss",

];

// Dev server setup
// https://webpack.js.org/configuration/dev-server/
const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
};

module.exports.entryConfig = entryConfig;
module.exports.devServer = devServer;
module.exports.outputConfig = outputConfig;