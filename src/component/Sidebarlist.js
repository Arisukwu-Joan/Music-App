import React from "react";
import { BiDevices } from "react-icons/bi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { MdOutlineQueueMusic, MdOutlineOnlinePrediction } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

function Sidebarlist() {
  return (
    <>
      <div className="list">
        <FaRegFolder className="icon" />
        <p className="paragraph">Local Library</p>
      </div>
      <div className="list">
        <MdOutlineQueueMusic className="icon" />
        <p className="paragraph">Playlist</p>
      </div>
      <div className="list">
        <MdOutlineOnlinePrediction className="icon" />
        <p className="paragraph">Online Services</p>
      </div>
      <div className="list">
        <BiDevices className="icon" />
        <p className="paragraph">Devices</p>
      </div>
      <div className="list">
        <TiMicrophoneOutline className="icon" />
        <p className="paragraph">Prodcast Directory</p>
      </div>
      <div className="list-dvd">
        <p className="paragraph"> DVD Drive</p>
        <CiPlay1 className="play1" />
      </div>
    </>
  );
}

export default Sidebarlist;
