import { NavLink } from "react-router-dom";
import path from "assets/icons/path.svg";
import { useState } from "react";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuToggle = () => setIsOpen(!isOpen);

  return (
    <header className={isOpen ? "show-nav" : "hide-nav"}>
      <div className="header-extra">
        <img src={path} alt="rhombus icon" className="path-icon" />
        <hr />
        <button className={isOpen ? "menu cross" : "menu bars"} onClick={menuToggle}>
          <div className="bar"></div>
        </button>
      </div>
      <nav >
        <ul className="navbar">
          <li className="nav-text">
            <NavLink exact="true" to="/" activeclassname="active">
              <span className="bold-text">00</span>HOME
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/destination" activeclassname="active">
              <span className="bold-text">01</span>DESTINATION
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/" activeclassname="active">
              <span className="bold-text">02</span>CREW
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/" activeclassname="active">
              <span className="bold-text">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>


    </header>
  )
}

