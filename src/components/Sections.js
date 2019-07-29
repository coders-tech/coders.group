import React from "react";
import Header from './Header'
import Skills from './Skills'
import OurTeam from './OurTeam'
import Footer from './Footer'

const Sections = () => {
  return (
    <div className="sections">
      <Header />
      <Skills />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Sections;
