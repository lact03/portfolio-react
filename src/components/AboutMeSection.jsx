import { Link } from "react-router-dom";
import AboutMeInfo from "./AboutMeInfo";

const AboutMeSection = ({ inHome }) => {
  return (
    <div id="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <AboutMeInfo />
        {inHome && (
          <div>
            <Link to="/about">More about me</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMeSection;
