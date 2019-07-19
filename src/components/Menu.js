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
            <div>
                <ul>
                    <li><a href="#section-1" onClick={handleClick}>home</a></li>
                    <li><a href="#section-2" onClick={handleClick}>Our Services</a></li>
                    <li><a href="#section-3" onClick={handleClick}>Our Team</a></li>
                    <li><a href="#section-4" onClick={handleClick}>Contact us</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
