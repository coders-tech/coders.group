import React from "react";
import Menu from './Menu'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div id="section-1">
      
      <div className="left">

          <motion.h1
            style={{scale: 0}}
            animate={{scale:1}}
            transition={{duration: 0.5}}
          >CODERS/<span id="logo">GROUP</span></motion.h1>


        <p className="animated fadeIn delay-1s coders">
        At coders.group we combine technology, creativity and strategy to transform your ideas into products.
        </p>
      </div>
      <div className="right" />
      <Menu />
    </div>
  );
};

export default Header;
