import React from "react";
import { useState, useEffect } from "react";
import "../menu.css";

const Menu = () => {
  const [visibility, setVisibility] = useState("hidden");
  const [style, setStyle] = useState(false);
  const handleClick = () => {
    visibility == "hidden" ? setVisibility("visible") : setVisibility("hidden");
    setStyle(style ? false : true);
  };
  return (
    <div className="menu">
      <div class="wrapper">
        <div class="navbar" onClick={handleClick} style={style ? {"border-radius":"50%", transition: "all 0.3s ease"} : {}} >
          <div
            class="first"
            style={
              style
                ? {
                    transform: "translateY(15px) rotate(45deg)",
                    transition: "all 0.5s ease"
                  }
                : {}
            }
          />
          <div
            class="second"
            style={style ? { opacity: 0, transition: "all 0.2s ease" } : {}}
          />
          <div class="third" style={style ? {transform: "translateY(-15px) rotate(-45deg)",transition: "all 0.5s ease"} : {}} />
        </div>
        <div className="menuContent" style={{ visibility: visibility }}>
          <div>
            <ul>
              <li>
                <a href="#section-1" onClick={handleClick}>
                  home
                </a>
              </li>
              <li>
                <a href="#section-2" onClick={handleClick}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#section-3" onClick={handleClick}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#section-4" onClick={handleClick}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
