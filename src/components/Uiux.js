import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Uiux = props => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="grid">
      <motion.div
        alt="UI/UX"
        ref={ref}
        className={`imgleft`}
        style={{ opacity: 0, y: -200}}
        animate={inView && { opacity: 1, y: 0}}
        transition={{ duration: 1 }}
      />
      <h2 className='titleRight'>UI / UX</h2>
      <motion.div
        style={{ x: -100, opacity: 0}}
        animate={inView && { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`text`}
      >
          <p>
          We create UI/UX design for digital products with one goal in mind:
          valuable, memorable, seamless user experience, exceeding customers
          expectations
        </p>
        <div className={`icons gridStyle`}>
          <i className={`fab fa-adobe iconStyle`} />
          <i className={`fas fa-pencil-ruler iconStyle`} />
          <i className={`fab fa-behance iconStyle`} />
          <i className={`fas fa-drafting-compass iconStyle`}/>
        </div>
      </motion.div>
    </div>
  );
};
export default Uiux;
