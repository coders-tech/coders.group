import React from "react";
import Header from './Header'
import Skills from './Skills'
import Contact from './Contact'
import OurTeam from './OurTeam'

const Sections = () => {
  return (
    <div className="sections">
      <Header />
      <Skills />
      <OurTeam />
      <Contact />
    </div>
  );
};

export default Sections;
