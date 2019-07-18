import React from "react";
import { useInView } from "react-intersection-observer";

import "../skills.css";
import backend from "../img/backend2.png";
import frontend from "../img/frontend.png";
import uiux from "../img/uiux.png";
import mobdev from "../img/mobdev.png";

const Skills = () => {
  const [ref, inView, entry] = useInView({triggerOnce: true});
  const fadeLeft = 'animated fadeInLeft delay-0.5s'
  const fadeRight = 'animated fadeInRight delay-0.5s'
  return (
    <div id="section-2">
      <div className="container1">
        <h1>Skills</h1>
          <div className="frontend">
            <img
              src={frontend}
              alt="Frontend"
              ref={ref}
              className={`skillimg leftimg ${inView && fadeLeft}`}
            />
            <div ref={ref} className={`text skillright ${inView && fadeRight}`}>
              <h2>Frontend</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                eius corporis laborum assumenda hic veritatis aut perferendis,
                consequatur minus delectus ab repudiandae nisi obcaecati odit
                optio ratione? Quas, dolorem libero!
              </p>
            </div>
          </div>
        <div className="backend">
          <div ref={ref} className={`text skillleft ${inView && fadeLeft}`}>
            <h2>Backend</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
          <img src={backend} ref={ref} alt="Backend" className={`skillimg rightimg ${inView && fadeRight}`} />
        </div>
        <div className="uiux">
          <img src={uiux} alt="UI/UX"  ref={ref} className={`skillimg leftimg ${inView && fadeLeft}`} />
          <div  ref={ref} className={`text skillright ${inView && fadeRight}`}>
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
          <div ref={ref} className={`text skillleft ${inView && fadeLeft}`}>
            <h2>Mobile Development</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
              corporis laborum assumenda hic veritatis aut perferendis,
              consequatur minus delectus ab repudiandae nisi obcaecati odit
              optio ratione? Quas, dolorem libero!
            </p>
          </div>
          <img
            src={mobdev}
            alt="Mobile Development"
            className={`skillimg rightimg ${inView && fadeRight}`}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
