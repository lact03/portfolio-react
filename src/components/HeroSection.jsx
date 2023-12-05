import { Link } from "react-router-dom";
import profile from "../assets/portfolio_profile.jpg";

const HeroSection = () => {
  return (
    <div id="hero-section">
      <div className="hero-content container">
        <div className="profile-container">
          <img src={profile} alt="profile" />
        </div>
        <h2>Hello, I'm Luis</h2>
        <h1 className="pixelify-sans">
          FULL-STACK <br /> WEB DEVELOPER
        </h1>
        <h4>
          With a passion for innovation and problem solving, <br />
          I'm able to find solutions to intricate problems.
        </h4>
        <Link>Contact me!</Link>
      </div>
    </div>
  );
};

export default HeroSection;
