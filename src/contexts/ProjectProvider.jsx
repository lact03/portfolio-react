import { createContext } from "react";
import inklessImg from "../assets/Inkless_Reads_Preview.jpg";
import easeSofaImg from "../assets/Simply_Ease_Sofa_Preview_2.jpg";
import musicPlayer from "../assets/Music_Player_Preview.jpg";
import ticTacToe from "../assets/Tic_Tac_Toe_Preview.jpg";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const projects = [
    {
      title: "Inkless Reads",
      link: "",
      img: inklessImg,
      alt: "Inkless Reads",
      info: `Work with a team to build an online book store. Implemented features like dynamic catalogs, search and filter, user accounts and etc.`,
    },
    {
      title: "Mini Project: Simply Ease Sofa",
      link: "",
      img: easeSofaImg,
      alt: "Simply Ease Sofa",
      info: `An E-Commerce Website, my first project. Implemented features like Navigation Bar and Responsive Design using Bootstrap.`,
    },
    {
      title: "Music Player",
      link: "",
      img: musicPlayer,
      alt: "Music Player",
      info: `Music Harmony Player is a dynamic music player designed to elevate your listening experience. This project seamlessly integrates with the RapidAPI platform, pulling in real-time data such as lyrics, artist information, albums, and related artists.`,
    },
    {
      title: "Tic Tac Toe",
      link: "https://tic-tac-toe-react-tawny.vercel.app/",
      img: ticTacToe,
      alt: "Tic Tac Toe",
      info: `React Tac Toe is a modern take on the classic game, bringing the timeless joy of Tic Tac Toe to life through the power of React. This project combines the simplicity of the game with the interactive and dynamic nature of React, resulting in a fun and engaging experience for players of all ages.`,
    },
  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
