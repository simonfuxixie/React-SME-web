import React, { Component, } from 'react';

// import components
import HomeHeaderImg from "../components/home_header_img";
import HomeContent from "../components/home_content";
import SectionClients from "../components/section_clients";
import SectionDemo from "../components/section_demo";
// import SectionClients from "../components/section_clients";
import ContactForm from "../components/section_contact_form";

// create component
const ViewHome = (props) => {
  return (
    <div>
      <HomeHeaderImg />
      <HomeContent />
      <SectionClients />
      <SectionDemo />
      <ContactForm />
    </div>
  );
}

export default ViewHome;
