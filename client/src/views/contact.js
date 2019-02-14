import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import TextBrief from "../components/text_brief";
import ContactForm from "../components/section_contact_form";
// import data
//import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {ContactData} from "../data/json_data.js";


export default class ViewAbout extends Component {

  render () {
    return (
      <div style={{position: 'relative',top: '10px',}}>
        <TextBrief text={ContactData}/>
        <ContactForm />
      </div>
      );
   }
}
