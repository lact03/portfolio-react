import { Link } from "react-router-dom";
import AboutMeInfo from "./AboutMeInfo";
import LinkButton from "./LinkButton";

const AboutMeSection = ({ inHome }) => {
  return (
    <div id="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <AboutMeInfo />
        {inHome && <LinkButton buttonName="More about me" href="/about" />}
      </div>
    </div>
  );
};

export default AboutMeSection;
