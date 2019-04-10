import React, { Component } from 'react';

import AppHeaderImg from "../components/app_header_img";
import AppContent from "../components/app_content";
import SectionDemo from "../components/section_demo";

const ViewWebsiteApp = (props) => {
  return (
    <div>
      <AppHeaderImg />
      <AppContent />
      <SectionDemo />
    </div>
    );
}

export default ViewWebsiteApp;
