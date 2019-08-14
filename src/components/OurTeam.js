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
                  src="https://img.pngio.com/-face-png-400_400.png"
                  class="grayscale" alt="Nikita"
                />
                <img
                  src="https://peoplepng.com/wp-content/uploads/2019/02/face-png-4.png"
                  class="invert" alt="Denis"
                />
                <img
                  src="https://peoplepng.com/wp-content/uploads/2019/02/face-png-4.png"
                  class="blur" alt="Denis"
                />
              </div>

              <div class="example hide" id="hide">
                <img
                  src="https://peoplepng.com/wp-content/uploads/2019/02/face-png-4.png"
                  class="grayscale" alt="Denis"
                />
                <img
                  src="https://img.pngio.com/-face-png-400_400.png"
                  class="invert" alt="Nikita"
                />
                <img
                  src="https://img.pngio.com/-face-png-400_400.png"
                  class="blur"alt="Nikita"
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
