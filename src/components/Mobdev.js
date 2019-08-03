import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Mobdev = props => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="grid">
      <motion.div
        ref={ref}
        className={`textleft`}
        style={{ x: -100 }}
        animate={inView && { x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Mobile Development</h2>
        <p>
          At coders.group we focus on providing quality products. We create
          cross-platform applications, accessible on any device.
        </p>
        <div className={`icons gridStyle`}>
          <i className={`fas fa-mobile iconStyle`} />
          <i className={`fab fa-apple iconStyle`} />
          <i className={`fab fa-android iconStyle`} />
          <i className={`fab fa-react iconStyle`} />
        </div>
      </motion.div>
      <motion.div
        alt="Mobile Development"
        className={`rightimg`}
        ref={ref}
        style={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};
export default Mobdev;
