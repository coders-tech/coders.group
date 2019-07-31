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
           <div className="leftTeam">
             asfdasdfasdfasdfasdfsadf
             asdfasdfasdfasdfasdfasdf
             asdfasfasdfasdfasfdasdfasfd
             asdfasdfasdfasdfasdfasdfasdf
             asdfasdfasdfasdfasdfasdfasdf
             asdfasdfasdfasdfasdfasdf
           </div>
           <div className="rightTeam">
           asfdasdfasdfasdfasdfsadf
             asdfasdfasdfasdfasdfasdf
             asdfasfasdfasdfasfdasdfasfd
             asdfasdfasdfasdfasdfasdfasdf
             asdfasdfasdfasdfasdfasdfasdf
             asdfasdfasdfasdfasdfasdf
           </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
