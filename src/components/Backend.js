import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";



const Backend = props => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="grid">
      <motion.div
        ref={ref}
        className={`textleft`}
        style={{ x: -100, opacity: 0 }}
        animate={inView && { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Backend</h2>
        <p>
          To ensure that your audience gets the best out of your organization,
          you need to think beyond design. At coders.group we develop scalable
          backend architectures to deliver productive user experience.
        </p>
        <div className={`icons gridStyle`} >
          <i className={`fab fa-node iconStyle`} />
          <i className={`fab fa-python iconStyle `} />
          <i className={`fab fa-aws iconStyle`} />
          <i className={`fab fa-digital-ocean iconStyle`} />
        </div>
      </motion.div>
      <motion.div
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
