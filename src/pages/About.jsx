import AboutMeInfo from "../components/AboutMeInfo";
import profile from "../assets/portfolio_profile.jpg";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  return (
    <div id="about-page">
      <ScrollToTop />
      <div className="container">
        <h1 className="name pixelify-sans">Luis Tabug</h1>
        <h2 className="role pixelify-sans">Full-Stack Web Developer</h2>
        <div className="profile-container">
          <img src={profile} alt="profile" />
        </div>
        <div className="container">
          <AboutMeInfo />
        </div>
        <h4 className="skills-title pixelify-sans">SKILLS</h4>
        <div className="tech-stacks">
          <div className="frontend">
            <h4>FRONTEND</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="backend">
            <h4>BACKEND</h4>
            <ul>
              <li>PHP</li>
              <li>Laravel</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="others">
            <h4>TOOLS</h4>
            <ul>
              <li>Git</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>Visual Studio Code</li>
              <li>IntelliJ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
