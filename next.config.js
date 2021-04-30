const withImages = require("next-images");

// module.exports = withImages();
const nextConfig = {
    basePath: "/",
    images: {
        loader: "imgix",
        path: "/",
    },
};

module.exports = withImages([[withImages]], nextConfig);
