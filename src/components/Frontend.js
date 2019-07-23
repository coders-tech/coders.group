import React from 'react'
import reactIcon from "../img/react.png";
import angularIcon from "../img/angular.png";
import gatsbyIcon from "../img/gatsby.png";
import {makeStyles, createStyles} from '@material-ui/styles'

import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const useStyles = makeStyles((theme: Theme) => createStyles({
  icons: {
    width: "auto",
    height: "50px",
    paddingRight: "1em"
  },
  flex: {
    display: 'flex',
  }
}))


const Frontend = (props) => {
  const classes = useStyles()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="frontend">
      <motion.img
        style={{opacity: 0}}
        animate={inView && {opacity: 1}}
        transition={{duration: 2}}
        src={props.img}
        alt="Frontend"
        ref={ref}
        className={`skillimg leftimg`}
      />
      <motion.div
        style={{ x: -100, opacity: 0}}
        animate={inView && {opacity: 1, x: 0}}
        transition={{ duration: 1 }}
        className={`text skillright`}
      >
        <h2>Frontend</h2>
        <p>
        Your website is ofthen the first experience someone will have with your organization. At coders.group we make sure to make the best
        first impression, with engaging, dynamic website design using the latest technologies 
        </p>
        <div className={`icons ${classes.flex}`}>
          <img src={reactIcon} alt="ReactJS" className={classes.icons}/>
          <img src={angularIcon} alt="Angular" className={classes.icons}/>
          <img src={gatsbyIcon} alt="Gatsby" className={classes.icons}/>
        </div>
      </motion.div>
    </div>
  );
};
export default Frontend