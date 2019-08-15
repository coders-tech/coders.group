import React, { useState, useEffect} from "react";
import "../ourTeam.css";
import { useTransition, animated } from "react-spring";
const OurTeam = () => {
  const [toggle, set] = useState(true);
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  useEffect(() => setInterval(() => set(toggle => !toggle), 2000), [])
  return (
    <div id="section-3">
      <div className="container3">
        <div className="nameHolderNOT">Nikita</div>
        <div className="nameHolderDOT">Denis</div>
        <div className="imageHolderOT" />
        <div className="facesHolderOT">
          <div class="wrap">
            {transitions.map(({ item, key, props }) =>
              item ? (
                <animated.div class="example" style={props}>
                  <img src="https://i.imgur.com/NCXniU7.png" alt="Nikita" />
                  <img src="https://i.imgur.com/6JIHzkU.png" alt="Denis" />
                  <img src="https://i.imgur.com/Sy9RNIN.png" alt="Denis" />
                </animated.div>
              ) : (
                <animated.div class="example" style={props}>
                  <img src="https://i.imgur.com/WiGNMKf.png" alt="Denis" />
                  <img src="https://i.imgur.com/e5vFx44.png" alt="Nikita" />
                  <img src="https://i.imgur.com/PwPSgsP.png" alt="Nikita" />
                </animated.div>
              )
            )}
          </div>
        </div>
        <div className="descriptionHolderNOT">Lorem</div>
        <div className="descriptionHolderDOT">Lorem</div>
      </div>
    </div>
  );
};

export default OurTeam;
