import React from "react";

import "../skills.css";
import backend from "../img/backend2.png";
import frontend from "../img/frontend.png";
import uiux from "../img/uiux.png";
import mobdev from "../img/mobdev.png";

import Frontend from './Frontend'
import Backend from './Backend'
import Uiux from './Uiux'
import Mobdev from './Mobdev'

const Skills = () => {
  return (
    <div id="section-2">
      <div className="container1">
      
        <h1>Our Services</h1>
          <Frontend img={frontend}/>
          <Backend img={backend} />
          <Uiux img={uiux} />
          <Mobdev img={mobdev} />
      </div>
    </div>
  );
};

export default Skills;
