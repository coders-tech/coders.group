import React from 'react'

import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const Uiux = (props) => {
  const [ref, inView, entry] = useInView({triggerOnce: true});
  const fadeLeft = 'animated fadeInLeft delay-0.5s'
  const fadeRight = 'animated fadeInRight delay-0.5s'
  return (
    <div className="uiux">
          <img src={props.img} alt="UI/UX"  ref={ref} className={`skillimg leftimg ${inView && fadeLeft}`} />
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
  );
};
export default Uiux