import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header className="Header">
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
