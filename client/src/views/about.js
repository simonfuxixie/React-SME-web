import React, { Component } from 'react';
import TextBrief from "../components/text_brief";

// import data
// import { NavbarItems } from "../data/json_data.js";
import {AboutData} from "../data/json_data.js";

export default class ViewAbout extends Component {

  render () {
    return (
      <TextBrief text={AboutData}/>
    );
  }
}
