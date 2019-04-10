import React, { Component } from 'react';
import SectionCountersMedia from "../components/section_counters_media";
// import data
import {ARServicesData} from "../data/json_data.js";

export default class ViewARServices extends Component {

  render () {
    return (
      <div>
        <SectionCountersMedia data={ARServicesData}/>
      </div>
      );
   }
}
