import { Link } from "react-router-dom";

const Project = ({ img, alt, title, info, link }) => {
  return (
    <div className="project">
      <Link to={link} target="_blank" className="img-container">
        <img src={img} alt={alt} />
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
