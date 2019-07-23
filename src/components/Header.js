import React from "react";
import Menu from './Menu'

const Header = () => {
  return (
    <div id="section-1">
      
      <div className="left">

          <h1 className='animated zoomIn delay-0.9s'>CODERS/<span id="logo">GROUP</span></h1>


        <p className="animated fadeIn delay-2s coders">
        At coders.group we combine technology, creativity and strategy to transform your ideas into products.
        </p>
      </div>
      <div className="right" />
      <Menu />
    </div>
  );
};

export default Header;
