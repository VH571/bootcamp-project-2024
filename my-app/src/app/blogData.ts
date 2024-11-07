export type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    content?: string;
};

const blogs: Blog[] = [
    {
        title: "Using typescript for the first time",
        date: "10/20/2024",
        description: "Just learning typescript rn!",
        image: "/images/ts-logo.png",
        imageAlt: "typescript_logo",
        slug: "understanding-typescript",
        content: "TypeScript is JavaScript but more awesome! Here's a detailed explanation of my experience...",
    },
    {
        title: "Finished Milestone 1!",
        date: "10/20/2024",
        description: "Im done with milestone 1",
        image: "/images/pic-htmltree.gif", 
        imageAlt: "theDOM",
        slug: "finished-milestone-1",
                content: "TypeScript is JavaScript but more awesome! Here's a detailed explanation of my experience...",
    },
];

export default blogs;