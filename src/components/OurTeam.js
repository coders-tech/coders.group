import React from "react";

import "../ourTeam.css";

const OurTeam = () => {
  return (
    <div id="section-3">
      <div className="container3">
          <h1>Our Team</h1>
        <div className="ourteam">
          <div className="Nikita">
            <div className ="memberDescription">
                    <h1>Nikita</h1>
                    <p>senior web developer <br />
                    Co-Founder of Coders.Group</p>
            </div>
            <img src="http://pngimg.com/uploads/steve_jobs/steve_jobs_PNG2.png" className="profileImgN" alt="Nikita" />
          </div>
          <div className="Denis">
          <img src="http://pngimg.com/uploads/steve_jobs/steve_jobs_PNG2.png"  className="profileImgD" alt="Denis" />
          <div className ="memberDescription">
          
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
