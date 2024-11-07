var blogList = [
    {
        title: "Using typescript for the first time",
        date: "10/20/2024",
        description: "Just learning typescript rn!",
        image: "../images/ts-logo.png",
        imageAlt: "typescript_logo",
        slug: "understanding-typescript",
    },
    {
        title: "Finished Milestone 1!",
        date: "10/20/2024",
        description: "Im done with milestone 1",
        image: "../images/pic-htmltree.gif",
        imageAlt: "theDOM",
        slug: "finished-milestone-1",
    },
];
function addToBlog() {
    var blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        blogContainer.innerHTML = "";
        blogList.forEach(function (post) {
            var createEl = document.createElement("div");
            createEl.className = 'blog-post';
            createEl.innerHTML = "\n                <h2> <a href=\"blogs/".concat(post.slug, ".html\">").concat(post.title, "</h2>\n                <img src=\"").concat(post.image, "\" alt=\"").concat(post.imageAlt, "\"/>\n                <p>").concat(post.description, "</p>\n            ");
            blogContainer.appendChild(createEl);
        });
    }
}
addToBlog();
