import { useLocation } from "react-router-dom";
import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div id="home-page">
      <ScrollToTop />
      <HeroSection />
      <AboutMeSection inHome={true} />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
