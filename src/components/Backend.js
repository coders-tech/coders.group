import React from 'react'

import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const Backend = (props) => {
  const [ref, inView, entry] = useInView({triggerOnce: true});
  const fadeLeft = 'animated fadeInLeft delay-0.5s'
  const fadeRight = 'animated fadeInRight delay-0.5s'
  return (
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
          <img src={props.img} ref={ref} alt="Backend" className={`skillimg rightimg ${inView && fadeRight}`} />
        </div>
  );
};
export default Backend