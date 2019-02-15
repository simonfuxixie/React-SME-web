import React, { Component } from 'react';

import TextBrief from "../components/text_brief";
import ContactForm from "../components/section_contact_form";
// import data
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
