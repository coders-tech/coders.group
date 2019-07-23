import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const flexStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)'
}
const iconStyle = {
  fontSize: '2em',
  paddingLeft: '1em'
}

const Uiux = props => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="uiux">
      <motion.img
        src={props.img}
        alt="UI/UX"
        ref={ref}
        className={`skillimg leftimg`}
        style={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        style={{ x: -100, opacity: 0 }}
        animate={inView && { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`text skillright`}
      >
        <h2>UX/UI</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
          corporis laborum assumenda hic veritatis aut perferendis, consequatur
          minus delectus ab repudiandae nisi obcaecati odit optio ratione? Quas,
          dolorem libero!
        </p>
        <div className={`icons`} style={flexStyle}>
          <i className={`fab fa-adobe`} style={iconStyle}></i>
          <i className={`fas fa-pencil-ruler`} style={iconStyle}></i>
          <i className={`fab fa-behance`} style={iconStyle}></i>
          <i className={`fas fa-drafting-compass`} style={iconStyle}></i>
        </div>
      </motion.div>
    </div>
  );
};
export default Uiux;
