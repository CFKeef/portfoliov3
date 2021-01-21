const withPlugins = require("next-compose-plugins");
const sass = require("sass");
const images = require("next-images");

module.exports = withPlugins([sass, images]);
