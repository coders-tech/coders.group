import React from "react";

import "../skills.css";
import backend from "../img/B.png";
import frontend from "../img/fr.jpeg";
import uiux from "../img/uxui.png";
import mobdev from "../img/mobiledev.png";

import Frontend from './Frontend'
import Backend from './Backend'
import Uiux from './Uiux'
import Mobdev from './Mobdev'

const Skills = () => {
  return (
    <div id="section-2">
      <div className="container1">
          <Frontend img={frontend}/>
          <Backend img={backend} />
          <Uiux img={uiux} />
          <Mobdev img={mobdev} />
      </div>
    </div>
  );
};

export default Skills;
