import React from "react";
import search from "../images/search.png";

function select() {
  return (
    <div className="search-bar">
      <img src={search} alt="" className="search-img" />
      <input type="text" placeholder="Search" className="search-holder" />
    </div>
  );
}

export default select;
