export type Project = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
};

const projects: Project[] = [
    {
        name: "Personal Website",
        description: "Website that shows all my accomplishments, built with React/Node.js",
        image: "/images/resume_website.png", 
        imageAlt: "",
        link: "/",
    },
];

export default projects;