import { Link } from "react-router-dom";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import emailIcon from "../assets/email-svgrepo-com.svg";
import githubIcon from "../assets/github-142-svgrepo-com.svg";
import facebookIcon from "../assets/facebook-svgrepo-com.svg";

const Footer = () => {
  return (
    <div className="footer-content container">
      <div>
        <Link to="mailto:luistabug03@gmail.com">
          <img className="email-svg " src={emailIcon} alt="email" />
        </Link>
        <Link to="" target="_blank">
          <img className="linkedin-svg " src={linkedinIcon} alt="linkedin" />
        </Link>
        <Link to="" target="_blank">
          <img className="github-svg " src={githubIcon} alt="" />
        </Link>
        <Link>
          <img className="facebook-svg " src={facebookIcon} alt="" />
        </Link>
      </div>
      <h4>Luis Tabug ⓒ 2023</h4>
    </div>
  );
};

export default Footer;
