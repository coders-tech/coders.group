import React from "react";
import "../ourTeam.css";
const OurTeam = () => {
  return (
    <div id="section-3">
      <div className="container3">
          <div className="nameHolderNOT">Nikita</div>
          <div className="nameHolderDOT">Denis</div>
          <div className="imageHolderOT" />
          <div className="facesHolderOT">
            <div class="wrap">
              <div class="example">
                <img
                  src="https://i.imgur.com/NCXniU7.png"
                  alt="Nikita"
                />
                <img
                  src="https://i.imgur.com/6JIHzkU.png"
                   alt="Denis"
                />
                <img
                  src="https://i.imgur.com/Sy9RNIN.png"
                 alt="Denis"
                />
              </div>

              <div class="example hide" id="hide">
                <img
                  src="https://i.imgur.com/WiGNMKf.png"
                  alt="Denis"
                />
                <img
                  src="https://i.imgur.com/e5vFx44.png"
                  alt="Nikita"
                />
                <img
                  src="https://i.imgur.com/PwPSgsP.png"
                 alt="Nikita"
                />
              </div>
            </div>
          </div>
          <div className="descriptionHolderNOT">Lorem</div>
          <div className="descriptionHolderDOT">Lorem</div>
        </div>

    </div>
  );
};

export default OurTeam;
