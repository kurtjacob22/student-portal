import React, { useState } from "react";
import * as Ai from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import axios from "axios";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const showSidebar = () => setSidebar(!sidebar);
  const PLMsearch = (e) => {
    e.preventDefault();
    const postData = {
      search,
    };
    axios.post("http://localhost:4000/postreq", postData).then((response) => {
      console.log(response);
    });
  };
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
          <form onSubmit={PLMsearch}>
            <div className="input-group search-bar">
              <input
                type="text"
                value={search}
                className="form-control"
                placeholder="Search"
                onInput={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={PLMsearch}
              >
                Search
              </button>
            </div>
          </form>
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
