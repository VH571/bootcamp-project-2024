import styles from './portfolio.module.css';
import ProjectPreview from '@/components/ProjectPreview';
import projects from '@/app/projectData';

export default function Portfolio() {
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>
      <div className="project">
        {projects.map(project => 
        <ProjectPreview key={project.name} {...project} />
        )}
      </div>
    </main>
  );
}