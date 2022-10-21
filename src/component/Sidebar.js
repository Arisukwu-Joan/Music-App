import React from "react";
import logo from "../images/logo.png";
import Select from "./Select";
import Sidebarlist from "./Sidebarlist";
import { BiLogOut } from "react-icons/bi";
import artist from "../images/artist.jpg";

function Sidebar(props) {
  return (
    <aside className={props.darkMode ? "dark" : ""}>
      <div className="logodiv">
        <img src={logo} alt="" className="logo" />
      </div>
      <Select />
      <Sidebarlist />
      <div className="toggle">
        <p className="darkmodetext">Dark mode</p>
        <div className="toggle-slider" onClick={props.toggleDarkMode}>
          <div className="toggle-circle"></div>
        </div>
      </div>
      <div className="artist-info">
        <img src={artist} alt="" className="artist" />
        <main>
          <h4>Divine Samuel</h4>
          <div className="login">
            <BiLogOut />
            <p>Log out</p>
          </div>
        </main>
      </div>
    </aside>
  );
}

export default Sidebar;
