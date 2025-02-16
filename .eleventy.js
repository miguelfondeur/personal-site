module.exports = function(eleventyConfig) {

    // Work
    eleventyConfig.addCollection("work", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_content/work/*.md");
    });

    // Copy all images from 'src/images' to 'public/images'
    eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" });

    // Copy all images from 'src/images' to 'public/images'
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });

    //CSS
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("src/css");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}