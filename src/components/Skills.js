import React from "react";
import '../skills.css'

const Skills = () => {
  return (
    <div id="section-2">
      <div className="container1">
        <div className="frontend">
          <img src="frontend.png" className="skillimg leftimg" />
          <div className="text skillright">
            <h1>Frontend</h1>
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
            <h1>Backend</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
          <img src="backend2.png" className="skillimg rightimg" />
        </div>
        <div className="uiux">
          <img src="uiux.png" className="skillimg leftimg" />
          <div className="text skillright">
            <h1>UX/UI</h1>
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
            <h1>Mobile Development</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
          <img src="mobdev.png" className="rightimg skillimg" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
