import { Link } from "react-router-dom";

const Project = ({ img, logo, alt, title, info, link }) => {
  return (
    <div className="project">
      <Link to={link} target="_blank" className="image-container">
        <img className="project-logo" src={logo} alt="logo" />
        <img className="project-preview" src={img} alt={alt} />
      </Link>
      <div className="project-info">
        <Link to={link} target="_blank">
          {title}
        </Link>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Project;
