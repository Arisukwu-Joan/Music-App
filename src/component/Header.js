import React from "react";
import music from "../images/music.png";
import Youtube from "../images/Youtube.webp";

function header(props) {
  return (
    <header className={props.darkMode ? "dark" : ""}>
      <div className="header">
        <main className="title">
          <h4>New Album</h4>
          <h2>Palmwine Music 3</h2>
          <p className="show1">Show Dem Camp</p>
          <div>
            <p className="show">
              Show Dem Camp ring out their performance with a focus on love and
              romance.
            </p>
          </div>
        </main>
        <div className="parent">
          <img src={music} alt="" className="music-img" />
          <img src={Youtube} alt="" className="youtube" />
        </div>
      </div>
    </header>
  );
}

export default header;
