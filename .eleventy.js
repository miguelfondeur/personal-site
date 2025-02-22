const fs = require("fs");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

    // Work
    eleventyConfig.addCollection("work", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_content/work/*.md");
    });

    // Copy Manifest File
    eleventyConfig.addPassthroughCopy({ "src/manifest.json": "" });

    // Copy all images from 'src/assets/img' to 'public/img'
    eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" });

    // Copy JS
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });

    // CSS
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("src/css");

    // CSS Minification Filter
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // Read file filter
    eleventyConfig.addFilter("readFile", function (filepath) {
        return fs.readFileSync(filepath, "utf8");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
