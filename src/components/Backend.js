import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import {makeStyles, createStyles} from '@material-ui/styles'

const flexStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)'
}
const iconStyle = {
  fontSize: '2em',
  paddingLeft: '1em'
}

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
        <div className={`icons`} style={flexStyle}>
          <i className={`fab fa-node`} style={iconStyle}></i>
          <i className={`fab fa-python `} style={iconStyle}></i>
          <i className={`fab fa-aws`} style={iconStyle}></i>
          <i className={`fab fa-digital-ocean`} style={iconStyle}></i>
        </div>
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
