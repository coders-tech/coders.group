import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div id="section-1">
      <div className="left">
        <motion.h1
          style={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          CODERS/<span id="logo">GROUP</span>
        </motion.h1>
      </div>
      <div className="right"> 
      <div className="TextOnTablets">
         <motion.h1
          style={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          CODERS/<span id="logo">GROUP</span>
        </motion.h1>

      </div>
      <div class='mouse-wrapper'>
<div class="mouse-icon"></div>
<div class="mouse-arrow"></div>
</div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
