import { Link } from "react-router-dom";

const LinkButton = ({ buttonName, href, inContact }) => {
  return (
    <span className="button-container">
      <Link to={href} className="button">
        <svg height="40" width="200">
          <rect height="40" width="100%" x="0" y="0" fill="none" />
        </svg>
        {buttonName}
      </Link>
    </span>
  );
};

export default LinkButton;
