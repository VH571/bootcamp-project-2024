import ProjectPreview from '@/components/ProjectPreview';
import connectDB from "@/database/db";
import ProjectObject from "@/database/projectSchema"

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await ProjectObject.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return []
	}
}
export default async function Portfolio() {
  const projectList : ProjectObject[] = await getProjects();
  
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>
      <div className="project">
        {projectList.map((project, idx) => 
        <ProjectPreview
        key={idx} 
        name={project.name}
        description={project.description}
        image={project.image}
        imageAlt={project.imageAlt}
        link={project.link}
        />
        )}
      </div>
    </main>
  );
}