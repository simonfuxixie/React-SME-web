import React, { Component } from 'react';
import CareerHeaderImg from "../components/career_header_img";
import CareerContent from "../components/career_content";
import SectionDemo from "../components/section_demo";

export default class ViewAbout extends Component {
  render () {
    return (
      <div>
        <CareerHeaderImg />
        <CareerContent />
        <SectionDemo />
      </div>
    );
  }
}
