import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import useScrollPosition from 'use-scroll-position'
import Ticker from 'react-ticker'



const Frontend = props => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  // const scrollPosition = useScrollPosition()

  return (
    <div>
    <Ticker offset="2" speed={15}>
      {() => <p className="frontendHeading">Our Services.&nbsp;&nbsp;</p>}
    </Ticker>
    <div className="frontend">
      <motion.img
        style={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 2 }}
        src={props.img}
        alt="Frontend"
        ref={ref}
        className={`skillimg leftimg`}
      />
      <motion.div
        style={{ x: -100, opacity: 0 }}
        animate={inView && { opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`text skillright`}
      >
        <h2>Frontend</h2>
        <p>
          Your website is ofthen the first experience someone will have with
          your organization. At coders.group we make sure to make the best first
          impression, with engaging, dynamic website design using the latest
          technologies
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
