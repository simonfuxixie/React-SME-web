import React, { Component } from 'react';

import AboutHeaderImg from "../components/about_header_img";
import AboutContent from "../components/about_content";
import SectionTeam from "../components/section_team";
import SectionDemo from "../components/section_demo";


const ViewAbout = (props) => {
  return (
    <div>
      <AboutHeaderImg />
      <AboutContent />
      <SectionTeam />
      <SectionDemo />
    </div>
  );
}

export default ViewAbout;
