import React from "react";
import '../skills.css';
import backend from  '../img/backend2.png';
import frontend from  '../img/frontend.png';
import uiux from  '../img/uiux.png';
import mobdev from  '../img/mobdev.png';

const Skills = () => {
  return (
    <div id="section-2">
      <div className="container1">
      <h1>Skills</h1>
        <div className="frontend">
          <img src={frontend} alt="Frontend" className="skillimg leftimg" />
          <div className="text skillright">
            <h2>Frontend</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
        </div>
        <div className="backend">
          <div className="text skillleft">
            <h2>Backend</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
          <img src={backend} alt="Backend" className="skillimg rightimg" />
        </div>
        <div className="uiux">
        <img src={uiux} alt="UI/UX" className="skillimg leftimg" />
          <div className="text skillright">
            <h2>UX/UI</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
        </div>
        <div className="mobapp">
          <div className="text skillleft">
            <h2>Mobile Development</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
          <img src={mobdev} alt="Mobile Development" className="rightimg skillimg" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
