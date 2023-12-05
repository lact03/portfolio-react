import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav id="navbar" className={isNavOpen ? "open" : "close"}>
      <div className="navbar-content container ">
        <Link to="/" className="logo-container">
          <img src="" alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACTS</NavLink>
          </li>
        </ul>
        <button className="burger" onClick={handleClick}>
          <i
            className={isNavOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>
      </div>
      <div className="menu-background" onClick={handleClick}></div>
      <div className="menu" onClick={handleClick}>
        <ul>
          <li onClick={handleClick}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/contact">CONTACTS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
