import React from "react";
import { useState, useEffect } from "react";
import "../menu.css";
import useScrollPosition from 'use-scroll-position'
import {motion} from 'framer-motion'

const Menu = () => {
  const [visibility, setVisibility] = useState("hidden");
  const [style, setStyle] = useState(false);
  const handleClick = () => {
    visibility == "hidden" ? setVisibility("visible") : setVisibility("hidden");
    setStyle(style ? false : true);
  };
  const scrollPosition = useScrollPosition()

  return (
    <div className="menu">
      {scrollPosition >= window.innerHeight && <motion.div style={{opacity: 0}} animate={{opacity: 1, duration: 1}}className="logo"><a href="#section-1">C/G</a></motion.div>}
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
        <div className='menuContent' style={style ? {visibility: 'visible', opacity: 1, transition: "all 1s ease"} : {visibility: 'hidden', opacity: 0}}>
            <div className="menuContentlist">
                <ul>
                    <a href="#section-1" onClick={handleClick}><li data-content="Home">Home</li></a>
                    <a href="#section-2" onClick={handleClick}><li data-content="Our Services">Our Services</li></a>
                    <a href="#section-3" onClick={handleClick}><li data-content="Our Team">Our Team</li></a>
                    <a href="#section-4" onClick={handleClick}><li data-content="Contact Us">Contact us</li></a>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
