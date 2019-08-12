import React from "react";
import "../ourTeam.css";
const OurTeam = () => {
  return (
    <div id="section-3">
      <div className="container3">
        <div className="ourteam">
          <div className="gridContainerTeam">
            <div className="headerTeam">
              <h1>Our Team</h1>
            </div>
            <div className="imageTeam" />
            <div className="leftTeamImg" />
            <div className="leftTeam">
              <h2>I'm left</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias ullam ducimus dolorem qui ut provident mollitia
                asperiores. Harum dolores animi quo esse perferendis minus
                consequuntur dolorum temporibus officiis quam!
              </p>
            </div>
            <div className="rightTeamImg" />
            <div className="rightTeam">
              <h2>I'm right</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias ullam ducimus dolorem qui ut provident mollitia
                asperiores. Harum dolores animi quo esse perferendis minus
                consequuntur dolorum temporibus officiis quam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
