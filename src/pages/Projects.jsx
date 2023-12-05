import { useContext } from "react";
import Project from "../components/Project";
import { ProjectContext } from "../contexts/ProjectProvider";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  // projects.forEach((project) => {
  //   console.log(project.title);
  // });

  return (
    <div id="projects-page">
      <div className="container">
        <h1 className="pixelify-sans">PROJECTS</h1>
        <div className="projects-content">
          {projects.map((project) => (
            <Project
              title={project.title}
              link={project.link}
              img={project.img}
              alt={project.alt}
              info={project.info}
            />
          ))}
          {/* <Project
            title={projects[0].title}
            link={projects[0].link}
            img={projects[0].img}
            alt={projects[0].alt}
            info={projects[0].info}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
