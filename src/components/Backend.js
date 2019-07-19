import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Backend = props => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="backend">
      <motion.div ref={ref} className={`text skillleft`} style={{x: -100, opacity: 0}} animate={inView && {opacity: 1, x: 0}} transition={{duration: 1}}>
        <h2>Backend</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eius
          corporis laborum assumenda hic veritatis aut perferendis, consequatur
          minus delectus ab repudiandae nisi obcaecati odit optio ratione? Quas,
          dolorem libero!
        </p>
      </motion.div>
      <motion.img
        src={props.img}
        ref={ref}
        alt="Backend"
        className={`skillimg rightimg`}
        style={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};
export default Backend;
