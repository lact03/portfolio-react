import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  return (
    <div id="home-page">
      <HeroSection />
      <AboutMeSection inHome={true} />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
