import React, { Component } from 'react';

import ContactHeaderImg from "../components/contact_header_img";
import ContactContent from "../components/contact_content";
import SectionDemo from "../components/section_demo";


export default class ViewAbout extends Component {
  render () {
    return (
      <div>
        <ContactHeaderImg />
        <ContactContent />
        <SectionDemo />
      </div>
      );
   }
}
