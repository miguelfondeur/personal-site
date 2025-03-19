const fs = require("fs");
const path = require("path");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const esbuild = require("esbuild");

// CSS bundling function
async function bundleCss() {
    const result = await esbuild.build({
        entryPoints: ["src/css/main.css"],
        bundle: true,
        minify: true,
        outfile: "public/css/main.min.css",
        loader: {
            ".css": "css"
        }
    });
    return result;
}

module.exports = function(eleventyConfig) {
    //Syntax Highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // Work
    eleventyConfig.addCollection("work", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_content/work/*.md");
    });

    // Copy Manifest File
    eleventyConfig.addPassthroughCopy({ "src/netlify": "netlify" });

    // Copy Manifest File
    eleventyConfig.addPassthroughCopy({ "src/manifest.json": "" });

    // Copy all images from 'src/assets/img' to 'public/img'
    eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" });

    // Copy all pdfs from 'src/assets/img' to 'public/img'
    eleventyConfig.addPassthroughCopy({ "src/assets/pdfs": "pdfs" });

    // Copy JS
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });

    // CSS
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("src/css");

    // Apps assets
    eleventyConfig.addPassthroughCopy({
        "src/_content/apps/web-fonts/_assets": "apps/web-fonts/_assets"
    });
    eleventyConfig.addWatchTarget("src/_content/apps/**/_assets");

    // CSS Processing
    eleventyConfig.on("eleventy.before", async () => {
        await bundleCss();
    });

    // Read file filter
    eleventyConfig.addFilter("readFile", function (filepath) {
        return fs.readFileSync(filepath, "utf8");
    });

    return {
        dir: {
            input: "src",
            data: "_data",
            output: "public",
            includes: "_includes",
            layouts: "_includes"
        }
    };
};
