import React from "react";
import "../ourTeam.css";
import Ticker from 'react-ticker'
const OurTeam = () => {
  return (
    <div id="section-3">
      <div className="container3">
        <Ticker offset="2" speed={15} direction="toRight">
          {() => <p className="frontendHeading">Our Team.&nbsp;&nbsp;</p>}
        </Ticker>
        <div className="ourteam">
          <div className="Nikita">
            <div className="memberDescription">
              <h1>Nikita</h1>
              <p>senior web developer <br />
                Co-Founder of Coders.Group</p>
            </div>
            <img src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG22.png" className="profileImgN" alt="Nikita" />
          </div>
          <div className="Denis">
            <img src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG22.png" className="profileImgD" alt="Denis" />
            <div className="memberDescription">

              <h1>Denis</h1>
              <p>senior web developer <br />
                Co-Founder of Coders.Group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
