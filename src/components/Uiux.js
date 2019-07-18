import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Uiux = props => {
  const [ref, inView, entry] = useInView({ triggerOnce: true });

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
        style={{ x: 1000 }}
        animate={inView && { x: 0 }}
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
      </motion.div>
    </div>
  );
};
export default Uiux;
