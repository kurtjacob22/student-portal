import React, { useState } from "react";
import * as Ai from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#7A6EAA" }}>
        <div className="container-fluid custom-container">
          <div>
            <Link to="#" className="navbar-menu-button">
              <Ai.AiOutlineMenu onClick={showSidebar} />
            </Link>
            <span className="fw-bolder">PLM </span>
            <span className="fw-lighter">Student Portal</span>
          </div>
          <div className="space"></div>
        </div>

        <nav className={sidebar ? "side-nav active" : "side-nav"}>
          <ul className="side-nav-items container-fluid" onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
