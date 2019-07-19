import React from "react";
import { useState, useEffect } from "react";
import '../menu.css'


const Menu = () => {
    const [visibility, setVisibility] = useState("hidden")
    const [style, setStyle] = useState({})
    const handleClick = () => {
        visibility == 'hidden' ? setVisibility('visible') : setVisibility('hidden')
        setStyle({
            
        })
    }
  return (
    <div className="menu">
      <div class="wrapper">
        <div class="navbar" onClick={handleClick}>
          <div class="first" />
          <div class="second" />
          <div class="third" />
        </div>
        <div className='menuContent' style={{visibility: visibility}}>
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
