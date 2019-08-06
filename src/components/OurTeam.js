import React from "react";
import "../ourTeam.css";
const OurTeam = () => {
  return (
    <div id="section-3">
      <div className="container3">
        <div className="ourteam">
           <div className="leftTeam">
             <h3 className='nameL'>Nikita</h3>
             <div className='photoL'></div>
             <div className='rotatedL'></div>
           </div>
           <div className="rightTeam">
             <h3 className='nameR'>Denis</h3>
             <div className='photoR'></div>
             <div className='rotatedR'></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
