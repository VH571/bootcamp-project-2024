type Blog = {
    title : string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;

};

const blogList: Blog[] =[
    {
        title : "Using typescript for the first time",
        date : "10/20/2024",
        description : "Just learning typescript rn!",
        image : "../images/ts-logo.png",
        imageAlt : "typescript_logo",
        slug : "understanding-typescript",
    },
    {
        title : "Finished Milestone 1!",
        date : "10/20/2024",
        description : "Im done with milestone 1",
        image : "../images/pic-htmltree.gif",
        imageAlt : "theDOM",
        slug : "finished-milestone-1",
    },
];

function addToBlog(){
    const blogContainer = document.getElementById('blog-container');
    if (blogContainer){
        blogContainer.innerHTML = "";
        blogList.forEach((post) => {
            const createEl = document.createElement("div")
            createEl.className = 'blog-post'
            createEl.innerHTML = `
                <h2> <a href="blogs/${post.slug}.html">${post.title}</h2>
                <img src="${post.image}" alt="${post.imageAlt}"/>
                <p>${post.description}</p>
            `;
            blogContainer.appendChild(createEl);
        })
    }

}
addToBlog();