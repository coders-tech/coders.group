import React from "react";
import {animated, useSpring} from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const ParallaxParagraph = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <animated.div className="parallaxParagraph" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.p style={{ transform: props.xy.interpolate(trans) }}>
        At <span>coders/group</span> we combine <span className="underline">technology</span>, <span className="underline">creativity</span> and <span className="underline">strategy</span> to
        transform your ideas into products.
      </animated.p>
    </animated.div>
  );
};

export default ParallaxParagraph