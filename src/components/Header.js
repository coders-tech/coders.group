import React from "react";
import {slide as Menu} from 'react-burger-menu'


const Header = () => {
  return (
    <div id="section-1">
      <Menu pageWrapId={ "page-wrap" } right width={'100%'}>
      <main id="page-wrap">
    .
    .
    .
        </main>
      </Menu>
      <div className="left">

          <h1 className='animated zoomIn delay-0.9s'>CODERS/<span id="logo">GROUP</span></h1>


        <p className="animated fadeIn delay-2s">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam rem
          perferendis quo, voluptatum placeat laborum asperiores deserunt,
          excepturi delectus officiis adipisci ducimus, atque harum soluta
          exercitationem ullam recusandae at eos!
        </p>
      </div>
      <div className="right" />
    </div>
  );
};

export default Header;
