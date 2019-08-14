import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Frontend = props => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div>
    <div className="grid">
      <motion.div
        style={{ opacity: 0, y: -200}}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        alt="Frontend"
        ref={ref}
        className={`imgleft`}
      />
      <h2 className='titleRight'>Frontend</h2>
      <motion.div
        style={{ x: -100, opacity: 0 }}
        animate={inView && { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`text`}
      >
        <p>
          Your website is often the first experience someone will have with
          your organization. At coders.group we make sure to make the best first
          impression, with engaging website design.
        </p>
        <div className={`icons gridStyle `} >
          <i className={`fab fa-react iconStyle`} />
          <i className={`fab fa-angular iconStyle`} />
          <i className={`fab fa-vuejs iconStyle`}  />
          <i className={`fab fa-js iconStyle`}  />
        </div>
      </motion.div>
    </div>
    </div>
  );
};
export default Frontend;
