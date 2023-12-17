import { Link } from "react-router-dom";
import inkless from "../assets/Inkless_Reads_Preview.jpg";
import easeSofa from "../assets/Simply_Ease_Sofa_Preview_2.jpg";
import Project from "./Project";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectProvider";
import LinkButton from "./LinkButton";

const ProjectsSection = () => {
  const { projects } = useContext(ProjectContext);
  // console.log(projects[1]);

  return (
    <div id="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-content ">
          <Project
            title={projects[0].title}
            img={projects[0].img}
            logo={projects[0].logo}
            alt={projects[0].alt}
            info={projects[0].info}
          />
          <Project
            title={projects[1].title}
            img={projects[1].img}
            logo={projects[1].logo}
            alt={projects[1].alt}
            info={projects[1].info}
          />
        </div>
        <LinkButton buttonName="More Projects" href="/projects" />
      </div>
    </div>
  );
};

export default ProjectsSection;
