import { createContext } from "react";
import inklessImg from "../assets/Inkless_Reads_Preview.jpg";
import easeSofaImg from "../assets/Simply_Ease_Sofa_Preview_2.jpg";
import musicPlayer from "../assets/Music_Player_Preview.jpg";
import ticTacToe from "../assets/Tic_Tac_Toe_Preview.jpg";
import quoteGenerator from "../assets/Quote_Generator_Preview.jpg";
import portfolioTailwind from "../assets/Portfolio_Tailwind_Preview.jpg";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "Inkless Reads",
      link: "https://inkless-reads.vercel.app/",
      img: inklessImg,
      alt: "Inkless Reads",
      info: `Work with a team to build an online book store. Implemented features like dynamic catalogs, search and filter, user accounts and etc.`,
    },
    {
      id: 2,
      title: "Mini Project: Simply Ease Sofa",
      link: "https://lact03.github.io/bootcamp-mp1/",
      img: easeSofaImg,
      alt: "Simply Ease Sofa",
      info: `An E-Commerce Website, my first project. Implemented features like Navigation Bar and Responsive Design using Bootstrap.`,
    },
    {
      id: 3,
      title: "Music Player",
      link: "https://lact03.github.io/music_player/",
      img: musicPlayer,
      alt: "Music Player",
      info: `Music Harmony Player is a dynamic music player designed to elevate your listening experience. This project seamlessly integrates with the RapidAPI platform, pulling in real-time data such as lyrics, artist information, albums, and related artists.`,
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      link: "https://tic-tac-toe-react-tawny.vercel.app/",
      img: ticTacToe,
      alt: "Tic Tac Toe",
      info: `React Tac Toe is a modern take on the classic game, bringing the timeless joy of Tic Tac Toe to life through the power of React. This project combines the simplicity of the game with the interactive and dynamic nature of React, resulting in a fun and engaging experience for players of all ages.`,
    },
    {
      id: 5,
      title: "Quote Generator",
      link: "https://quote-generator-two-nu.vercel.app/",
      img: quoteGenerator,
      alt: "Quote Generator",
      info: "React-based quote generator, a dynamic web application that seamlessly integrates the power of fetching data from APIs to provide users with a constant stream of inspiring and thought-provoking quotes.",
    },
    {
      id: 6,
      title: "Portfolio (Tailwind)",
      link: "https://lact03.github.io/luisdev/",
      img: portfolioTailwind,
      alt: "Portfolio (Tailwind)",
      info: "Presenting my inaugural portfolio, a showcase of my skills and creativity built with a dynamic combination of Tailwind CSS and Vanilla JavaScript. This minimalist and visually appealing portfolio is a testament to the power of simplicity and efficiency. ",
    },
  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
