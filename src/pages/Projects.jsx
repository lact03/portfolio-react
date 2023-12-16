import { useContext } from "react";
import Project from "../components/Project";
import { ProjectContext } from "../contexts/ProjectProvider";
import ScrollToTop from "../components/ScrollToTop";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  // projects.forEach((project) => {
  //   console.log(project.title);
  // });

  return (
    <div id="projects-page">
      <ScrollToTop />
      <div className="container">
        <h1 className="pixelify-sans">PROJECTS</h1>
        <div className="projects-content">
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              link={project.link}
              img={project.img}
              alt={project.alt}
              info={project.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
