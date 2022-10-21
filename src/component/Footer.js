import React from "react";
import artist from "../images/artist.jpg";
import { CiPause1, CiVolumeHigh } from "react-icons/ci";
import { IoIosShuffle } from "react-icons/io";
import { IoIosRepeat } from "react-icons/io";
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";

function Footer(props) {
  return (
    <div className={props.darkMode ? "dark" : ""}>
      <div className="artist-info">
        <img src={artist} alt="" className="artist" />
        <main>
          <h4>Divine</h4>
          <div className="login">
            <p>Rema</p>
          </div>
        </main>
      </div>
      <div className="selected-music">
        <div className="select-icon">
          <IoIosShuffle />
          <TbPlayerSkipBack />
          <CiPause1 className="down-iconplay" />
          <TbPlayerSkipForward />
          <IoIosRepeat />
        </div>
        <span>
          0:00
          <audio />
          0:00
        </span>
      </div>
      <div>
        <CiVolumeHigh />
      </div>
    </div>
  );
}

export default Footer;
