import React, { Component } from 'react';
import TextBrief from "../components/text_brief";

import {CareerData} from "../data/json_data.js";


export default class ViewAbout extends Component {

  render () {
    return (
      <TextBrief text={CareerData}/>
    );
  }
}
