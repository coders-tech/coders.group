import React from 'react'

import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const Frontend = (props) => {
  const [ref, inView, entry] = useInView({triggerOnce: true});
  const fadeLeft = 'animated fadeInLeft delay-0.5s'
  const fadeRight = 'animated fadeInRight delay-0.5s'
  return (
    <div className="frontend">
      <img
        src={props.img}
        alt="Frontend"
        ref={ref}
        className={`skillimg leftimg ${inView && fadeLeft}`}
      />
      <motion.div
        style={{ x: 1000 }}
        animate={inView && { x: 0 }}
        transition={{ duration: 1 }}
        className={`text skillright`}
      >
        <h2>Frontend</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
          corporis laborum assumenda hic veritatis aut perferendis, consequatur
          minus delectus ab repudiandae nisi obcaecati odit optio ratione? Quas,
          dolorem libero!
        </p>
      </motion.div>
    </div>
  );
};
export default Frontend